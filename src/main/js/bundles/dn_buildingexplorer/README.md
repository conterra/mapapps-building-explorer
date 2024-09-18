# dn_buildingexplorer

The BuildingExplorer widget is used to filter and explore the various components of BuildingSceneLayer

## Usage

Simply add the bundle "dn_buildingexplorer" to your app.

To make the functions of this bundle available to the user, the following tool can be added to a toolset:

| Tool ID                    | Component                  | Description              |
|----------------------------|----------------------------|--------------------------|
| buildingExplorerToggleTool | BuildingExplorerToggleTool | Show or hide the widget. |

## Configuration Reference

```json
"dn_buildingexplorer": {
    "Config": {
        "headingLevel": 3,
        "visibleElements": {
            "levels": true,
            "phases": true,
            "disciplines": true
        }
    }
}
```

For more information concerning the properties refer to the documentation of the esri widget: https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BuildingExplorer.html#properties-summary

| Property        | Type   | Default         | Description                                                                                  |
|-----------------|--------|-----------------|----------------------------------------------------------------------------------------------|
| headingLevel    | Number | ```3```         | Indicates the heading level to use for the headings in the widget.                           |
| visibleElements | Object | ```see above``` | This property provides the ability to display or hide the individual elements of the widget. |
