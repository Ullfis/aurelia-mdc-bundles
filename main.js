/*******************************************************************************
 * The following two lines enable async/await without using babel's
 * "runtime" transformer. Uncomment the lines if you intend to use async/await.
 * 
 * More info here:  https://github.com/jdanyow/aurelia-plunker/issues/2
 */
//import regeneratorRuntime from 'babel-runtime/regenerator';
//window.regeneratorRuntime = regeneratorRuntime;
/******************************************************************************/

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-mdc-bridge');

  aurelia.start().then(a => a.setRoot());
}