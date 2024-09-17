# dn_buildingexplorer

This bundle enables the user to display the effect of light of certain time of day. Additionally, the shadow of 3D-Objects can be simulated.

## Usage

Simply add the bundle "dn_daylight" to your app.

To make the functions of this bundle available to the user, the following tool can be added to a toolset:

| Tool ID            | Component          | Description              |
|--------------------|--------------------|--------------------------|
| daylightToggleTool | DaylightToggleTool | Show or hide the widget. |

## Configuration Reference

```json
"dn_daylight": {
    "Config": {
        "dateOrSeason": "date",
        "enableAmbientOcclusion": false,
        "enableAtmosphere": true,
        "enableCameraTracking": true,
        "enableShadows": true,
        "enableStars": true,
        "enableWaterReflection": false,
        "weather": {
            "type": "sunny",
            "cloudCover": 0.5
        },
        "timeSliderSteps": 5,
        "playSpeedMultiplier": 1,
        "visibleElements": {
            "header": true,
            "playButtons": true,
            "datePicker": true,
            "timezone": false,
            "sunLightingToggle ": false,
            "shadowsToggle": false
        }
    }
}
```

For more information concerning the properties refer to the documentation of the esri widget: https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Daylight.html

| Property               | Type               | Possible Values                | Default     | Description                                                                                                                                                                                                             |
|------------------------|--------------------|--------------------------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dateOrSeason           | String             | ```date``` &#124; ```season``` | ```date```  | Controls whether the widget displays a date or a season picker.                                                                                                                                                         |
| enableAmbientOcclusion | Boolean            | ```true``` &#124; ```false```  | ```false``` | Indicates whether to show ambient occlusion shading.                                                                                                                                                                    |
| enableAtmosphere       | Boolean            | ```true``` &#124; ```false```  | ```true```  | Indicates whether atmosphere visualization is enabled.                                                                                                                                                                  |
| enableCameraTracking   | Boolean            | ```true``` &#124; ```false```  | ```true```  | Indicates whether the date and time of the simulated sun is automatically updated to maintain the current time of day while the camera changes.                                                                         |
| enableShadows          | Boolean            | ```true``` &#124; ```false```  | ```true```  | Indicates whether to show shadows cast by the sun. Shadows are only displayed for real world 3D objects.                                                                                                                |
| enableStars            | Boolean            | ```true``` &#124; ```false```  | ```true```  | Indicates whether stars visualization is enabled.                                                                                                                                                                       |
| enableWaterReflection  | Boolean            | ```true``` &#124; ```false```  | ```false``` | Indicates whether WaterSymbol3DLayer display reflections of surrounding terrain, buildings and other 3D objects.                                                                                                        |
| weather                | Object             |                                |             | Indicates the type of weather visualization in the scene. More information: https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html#environment                                         |
| timeSliderSteps        | Number or Number[] |                                |             | Sets steps, or intervals, on the time slider to restrict the times of the day that can be selected when dragging the thumb.                                                                                             |
| playSpeedMultiplier    | Number             |                                |             | Controls the speed of the daytime and date animation.                                                                                                                                                                   |
| visibleElements        | Object             |                                |             | This property provides the ability to display or hide the individual elements of the widget. More information: https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Daylight.html#visibleElements |
