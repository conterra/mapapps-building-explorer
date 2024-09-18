[![devnet-bundle-snapshot](https://github.com/conterra/mapapps-building-explorer/actions/workflows/devnet-bundle-snapshot.yml/badge.svg)](https://github.com/conterra/mapapps-building-explorer/actions/workflows/devnet-bundle-snapshot.yml)
![Static Badge](https://img.shields.io/badge/tested_for_map.apps-4.18.0-%20?labelColor=%233E464F&color=%232FC050)
# Building Explorer

The Building Explorer Bundle offers insights into building structures based on Building Scene Layer data.

![Screenshot App](https://github.com/conterra/mapapps-building-explorer/blob/main/screenshot.JPG)

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_building-explorer/index.html

## Installation Guide
Simply add the bundle "dn_buildingexplorer" to your app.

[dn_buildingexplorer Documentation](https://github.com/conterra/mapapps-building-explorer/tree/main/src/main/js/bundles/dn_buildingexplorer)

## Quick start

Clone this project and ensure that you have all required dependencies installed correctly (see [Documentation](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/set-up-development-environment.html)).

Then run the following commands from the project root directory to start a local development server:

```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```
