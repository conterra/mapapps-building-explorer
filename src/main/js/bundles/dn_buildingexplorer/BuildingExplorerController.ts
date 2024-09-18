///
/// Copyright (C) 2023 con terra GmbH (info@conterra.de)
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///         http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import BuildingExplorer from "esri/widgets/BuildingExplorer";
import EsriDijit from "esri-widgets/EsriDijit";
import ct_util from "ct/ui/desktop/util";
import async from "apprt-core/async";

import type { InjectedReference } from "apprt-core/InjectedReference";
import type { MapWidgetModel } from "map-widget/api";
import type { BundleContext, ComponentContext, ServiceRegistration } from "apprt/api";

export class BuildingExplorerController {
    private buildingExplorerWidget: any;
    private tool: InjectedReference<any>;
    private bundleContext!: BundleContext;
    private serviceRegistration?: ServiceRegistration | null;
    private _mapWidgetModel?: InjectedReference<MapWidgetModel>;

    public activate(componentContext: ComponentContext): void {
        this.bundleContext = componentContext.getBundleContext();
    }

    public deactivate(): void {
        this.destroyWidget();
    }

    public onToolActivated(evt: any): void {
        this.tool = evt.tool;
        this.getView().then((view) => {
            const widget = this.getWidget(view);
            widget.own({
                remove() {
                    widget.destroy();
                }
            });
            this.showWindow(widget);
        });
    }

    public onToolDeactivated(): void {
        this.hideWindow();
    }

    private showWindow(widget: any): void {
        const serviceProperties = {
            "widgetRole": "buildingExplorerWidget"
        };
        const interfaces = ["dijit.Widget"];
        const content = new EsriDijit(widget);
        this.serviceRegistration = this.bundleContext.registerService(interfaces, content, serviceProperties);

        async(() => {
            const window = ct_util.findEnclosingWindow(content);
            window.on("Hide", () => {
                this.hideWindow();
            });
        }, 1000);
    }

    private hideWindow(): void {
        this.buildingExplorerWidget?.destroy();
        this.buildingExplorerWidget = null;

        const registration = this.serviceRegistration;
        this.serviceRegistration = null;

        if (registration) {
            registration.unregister();
        }
        if (this.tool) {
            this.tool.set("active", false);
        }
    }

    private getWidget(view: __esri.SceneView): any {
        const props = this._properties;
        const layerIds = props.buildingLayerIds;

        if (!layerIds) return;

        const buildingLayers = this.getBuildingLayers(view, layerIds);
        return this.buildingExplorerWidget = new BuildingExplorer({
            view: view,
            layers: buildingLayers,
            ...props
        });
    }

    private getBuildingLayers(view: __esri.SceneView): __esri.BuildingSceneLayer[] {
        const mapLayers = view.map.layers;
        return mapLayers.items.filter(layer => layer.type === "building-scene");
    }

    private destroyWidget(): void {
        this.buildingExplorerWidget.destroy();
        this.buildingExplorerWidget = undefined;
    }

    private getView(): Promise<__esri.View> {
        const mapWidgetModel = this._mapWidgetModel;

        if (mapWidgetModel) {
            return new Promise((resolve, reject) => {
                if (mapWidgetModel.view) {
                    resolve(mapWidgetModel.view);
                } else {
                    const watcher = mapWidgetModel.watch("view", ({ value: view }) => {
                        watcher.remove();
                        resolve(view);
                    });
                }
            });
        }
    }
}
