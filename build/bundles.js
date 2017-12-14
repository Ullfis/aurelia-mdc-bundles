var bundle = [
  "text",
  "css",
  "material-components-web/dist/material-components-web.css!text",
  "@material/animation",
  "@material/checkbox",
  "@material/dialog",
  "@material/drawer",
  "@material/form-field",
  "@material/grid-list",
  "@material/icon-toggle",
  "@material/linear-progress",
  "@material/menu",
  "@material/radio",
  "@material/ripple",
  "@material/select",
  "@material/selection-control",
  "@material/slider",  
  "@material/snackbar",  
  "@material/tabs",  
  "@material/textfield",  
  "@material/toolbar",
  "process",
  "aurelia-binding",
  "aurelia-bootstrapper",
  "aurelia-dependency-injection",
  "aurelia-event-aggregator",
  "aurelia-framework",
  "aurelia-history",
  "aurelia-history-browser",
  "aurelia-loader",
  "aurelia-loader-default",
  "aurelia-logging",
  "aurelia-logging-console",
  "aurelia-metadata",
  "aurelia-pal",
  "aurelia-pal-browser",
  "aurelia-path",
  "aurelia-route-recognizer",
  "aurelia-router",
  "aurelia-task-queue",
  "aurelia-templating",
  "aurelia-templating-binding",
  "aurelia-templating-resources",
  "aurelia-templating-router",
  "[aurelia-mdc-bridge/**/*.js]",
  "aurelia-mdc-bridge/**/*.css!text",
  "aurelia-mdc-bridge/**/*.html!text",
  "[aurelia-mdc-bridge]"
];


module.exports = {
  "bundles": {
    "bundles/bundle": {
      "includes": bundle,
      "options": {
        "inject": true,
        "minify": true
      }
    }
  }
}