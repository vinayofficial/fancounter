// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCqpghJ7A0X5s3H8BT-keT7bdihr3d7XY0",
    authDomain: "classroom-fanc.firebaseapp.com",
    databaseURL: "https://classroom-fanc.firebaseio.com",
    projectId: "classroom-fanc",
    storageBucket: "classroom-fanc.appspot.com",
    messagingSenderId: "1008455363889"
  }  
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
