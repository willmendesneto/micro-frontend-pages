# Angular Universal - Second Page

## Installation

* `npm install` or `yarn`

---

## Development (Client-side only rendering)
* run `npm run start` which will start `ng serve` (project served at the standard: localhost:4200)

---

## Production 

Depending on whether you're publishing dynamic or static prerendering, run the build command, and then serve up your dist folder assets.

> **NOTE**: To deploy your **Static** site to a static hosting platform you will have to deploy the *`dist/browser`* folder, rather than the usual *`dist`*

ie: `npm run build:dynamic`. All of the files that need to be served will be found within the `/dist` folder.