# ngPrime QuickerStart using Angular 2 QuickStart
Follow these steps to create your app with the rich features of ngPrime and Angular2

## Clone Angular 2 Quick Start 
```bash
git clone  https://github.com/angular/quickstart  my-proj
cd my-proj
rm -rf .git
```
create your own repo

## Edit/Add code for ngPrime dependencies
 edit files to add ngPrime based on [Setup](http://www.primefaces.org/primeng/#/setup)

### Add the following depencies to package.json
 ```json
     "es6-shim": "^0.35.0",
     "primeng": "1.0.0-beta.5",
     "primeui": "4.1.10"
```
 
#### package.json
```json
{
  "name": "angular2-quickstart_with_primeng-quickstart",
  "version": "1.0.0",
  "description": "QuickStart package.json from the documentation, supplemented with testing support",
  "scripts": {
    "start": "tsc && concurrently \"tsc -w\" \"lite-server\" ",
    "docker-build": "docker build -t ng2-quickstart .",
    "docker": "npm run docker-build && docker run -it --rm -p 3000:3000 -p 3001:3001 ng2-quickstart",
    "e2e": "tsc && concurrently \"http-server\" \"protractor protractor.config.js\"",
    "lint": "tslint ./app/**/*.ts -t verbose",
    "lite": "lite-server",
    "postinstall": "typings install",
    "test": "tsc && concurrently \"tsc -w\" \"karma start karma.conf.js\"",
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "typings": "typings",
    "webdriver:update": "webdriver-manager update"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@angular/common":  "2.0.0-rc.1",
    "@angular/compiler":  "2.0.0-rc.1",
    "@angular/core":  "2.0.0-rc.1",
    "@angular/http":  "2.0.0-rc.1",
    "@angular/platform-browser":  "2.0.0-rc.1",
    "@angular/platform-browser-dynamic":  "2.0.0-rc.1",
    "@angular/router":  "2.0.0-rc.1",
    "@angular/router-deprecated":  "2.0.0-rc.1",
    "@angular/upgrade":  "2.0.0-rc.1",

    "systemjs": "0.19.27",
    "core-js": "^2.4.0",
    "reflect-metadata": "^0.1.3",
    "rxjs": "5.0.0-beta.6",
    "zone.js": "^0.6.12",

    "angular2-in-memory-web-api": "0.0.9",
    "bootstrap": "^3.3.6",
    
    "es6-shim": "^0.35.0",
    "primeng": "1.0.0-beta.5",
    "primeui": "4.1.10"
  },
  "devDependencies": {
    "concurrently": "^2.0.0",
    "lite-server": "^2.2.0",
    "typescript": "^1.8.10",
    "typings": "^0.8.1",

    "canonical-path": "0.0.2",
    "http-server": "^0.9.0",
    "tslint": "^3.7.4",
    "lodash": "^4.11.1",
    "jasmine-core": "~2.4.1",
    "karma": "^0.13.22",
    "karma-chrome-launcher": "^0.2.3",
    "karma-cli": "^0.1.2",
    "karma-htmlfile-reporter": "^0.2.2",
    "karma-jasmine": "^0.3.8",
    "protractor": "^3.3.0",
    "rimraf": "^2.5.2"
  },
  "repository": {}
}
```
### Add the following code to systemjs.config.js for map and packages:
```javascript
 'primeng':                    'node_modules/primeng'
 'primeng':                    { defaultExtension: 'js' }
```

#### systemjs.config.js
```javascript
/**
 * System configuration for Angular 2 apps
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',

    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'primeng':                    'node_modules/primeng'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'primeng':                    { defaultExtension: 'js' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {

    // Bundled (~40 requests):
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };

    // Individual files (~300 requests):
    //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }
  
  // "if" stmt used in the ngPrime quickStart, but not in Angular 2 Quick Start
  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
```

### Add the following scripts and stylesheets to index.html
```html
   <script>document.write('<base href="' + document.location + '" />');</script>
   <link rel="stylesheet" type="text/css" href="node_modules/primeui/themes/omega/theme.css" />
   <link rel="stylesheet" type="text/css" href="app/resources/icons/css/font-awesome.min.css" />
   <link rel="stylesheet" type="text/css" href="node_modules/primeui/primeui-ng-all.min.css" />
   <link rel="stylesheet" type="text/css" href="app/resources/css/site.css"/>
   <script src="node_modules/es6-shim/es6-shim.min.js"></script>
   <script src="node_modules/primeui/primeui-ng-all.min.js"></script> 
```

#### index.html
 ```html
<html>
  <head>
    <script>document.write('<base href="' + document.location + '" />');</script>
    <title>PrimeNG QuickStart with SystemJS using Angular 2 QuickStart </title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css">
    
    <!--stylesheets from ngPrime-->
    <link rel="stylesheet" type="text/css" href="node_modules/primeui/themes/omega/theme.css" />
    <link rel="stylesheet" type="text/css" href="app/resources/icons/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="node_modules/primeui/primeui-ng-all.min.css" />
    <link rel="stylesheet" type="text/css" href="app/resources/css/site.css"/>

    <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/core-js/client/shim.min.js"></script>

    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    
    <!--Additional polyfill for es6, recommended by ngPrime-->
    <script src="node_modules/es6-shim/es6-shim.min.js"></script>
    
    <!--script for ngPrime UI-->
    <script src="node_modules/primeui/primeui-ng-all.min.js"></script>

    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
  </head>

  <body>
    <my-app>Loading...</my-app>
  </body>
</html>
```

### Import desired ngPrime directives to app/app.component.ts
(example: InputText) 
```typescript
    import {InputText} from 'primeng/primeng';
    <h1>My First App using PrimeNG QuickStart and Angular 2 QuickStart</h1>
    <input type="text" pInputText/>
    `,
    directives: [InputText]
 ```
 
#### app/app.component.ts
 ```typescript
import {Component} from '@angular/core';
import {InputText} from 'primeng/primeng';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First App using PrimeNG QuickStart and Angular 2 QuickStart</h1>
    <input type="text" pInputText/>
    `,
    directives: [InputText]
})
export class AppComponent { }
```

### Add the resources folder with needed-fonts and css to the app folder 
- site.css
- font-awesome
 
## Install npm packages described in the `package.json`
```bash
npm install
```
**Attention Windows Developers:  You must run all of these commands in administrator mode**

## Run compiler and server at same time, in "watch mode"
```bash
npm start
```

## Begin your creation!
