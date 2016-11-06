# SeedProject

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.


## Using this as a template
This app is meant to be pulled down and used as a starter app for any angular 2 project. To do so:
* clone the repo down (or download the source, whichever)
* rename the `seed-project` folder to whatever you want to name your project
* delete the `.git` folder
* change the `name` in `angular-cli.json` and `package.json` files
* `git init .` (Optional: add any remotes you may have, other git stuff, etc...)
* npm install

Note: This app makes use of the environments feature that the angular-cli comes with. 
In `src/environments/environments.ts`, you'll find an `apiUrl` property. This should point to 
your development server. As a default it points to a dev server that is built to work
with the user service login / logout methods, but you should switch it to point to your
server and alter the user service methods to fit your needs as soon as possible.

That's pretty much it. 

## Third Parties 
The seed project adds a few third parties to make development go quicker:
* [Angular 2 Material](https://github.com/angular/material2)
* [Angular 2 Toastr](https://github.com/PointInside/ng2-toastrangular)
* [Angular 2 Cookie](https://github.com/salemdar/angular2-cookie)


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
