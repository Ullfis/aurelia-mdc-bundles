System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "ignore": [
      "github:*",
      "npm:*"
    ],
    "stage": 0,
    "optional": []
  },
  paths: {
    "github:*": "https://cdn.rawgit.com/ullfis/aurelia-mdc-bundles/0.14.3/jspm_packages/github/*",
    "npm:*": "https://cdn.rawgit.com/ullfis/aurelia-mdc-bundles/0.14.3/jspm_packages/npm/*",
    "bundles/bundle.js": "https://cdn.rawgit.com/ullfis/aurelia-mdc-bundles/0.14.3/bundles/bundle.js"
  },
  meta: {
    "npm:aurelia-mdc-bridge/*": {
      "format": "amd"
    }
  },
  map: {
    "@material/animation": "npm:@material/animation@0.25.0",
    "@material/base": "npm:@material/base@0.24.0",
    "@material/checkbox": "npm:@material/checkbox@0.27.0",
    "@material/dialog": "npm:@material/dialog@0.27.0",
    "@material/drawer": "npm:@material/drawer@0.27.0",
    "@material/form-field": "npm:@material/form-field@0.27.0",
    "@material/grid-list": "npm:@material/grid-list@0.27.0",
    "@material/icon-toggle": "npm:@material/icon-toggle@0.27.0",
    "@material/linear-progress": "npm:@material/linear-progress@0.27.0",
    "@material/menu": "npm:@material/menu@0.27.0",
    "@material/radio": "npm:@material/radio@0.27.0",
    "@material/ripple": "npm:@material/ripple@0.27.0",
    "@material/select": "npm:@material/select@0.27.0",
    "@material/selection-control": "npm:@material/selection-control@0.27.0",
    "@material/slider": "npm:@material/slider@0.27.0",
    "@material/snackbar": "npm:@material/snackbar@0.27.0",
    "@material/tabs": "npm:@material/tabs@0.27.0",
    "@material/textfield": "npm:@material/textfield@0.27.0",
    "@material/toolbar": "npm:@material/toolbar@0.27.0",
    "aurelia-binding": "npm:aurelia-binding@1.6.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.1.5",
    "aurelia-history": "npm:aurelia-history@1.1.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.1.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.3",
    "aurelia-logging": "npm:aurelia-logging@1.3.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-mdc-bridge": "npm:aurelia-mdc-bridge@0.14.3",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
    "aurelia-pal": "npm:aurelia-pal@1.4.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.3.0",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.2.2",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.4.0",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
    "aurelia-templating": "npm:aurelia-templating@1.6.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.4.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.5.4",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.2.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "clean-css": "npm:clean-css@3.4.28",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.36",
    "material-components-web": "npm:material-components-web@0.27.0",
    "text": "github:systemjs/plugin-text@0.0.7",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.8"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@material/button@0.27.0": {
      "@material/elevation": "npm:@material/elevation@0.25.0",
      "@material/ripple": "npm:@material/ripple@0.27.0",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0"
    },
    "npm:@material/card@0.27.0": {
      "@material/elevation": "npm:@material/elevation@0.25.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0"
    },
    "npm:@material/checkbox@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.27.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/selection-control": "npm:@material/selection-control@0.27.0",
      "@material/theme": "npm:@material/theme@0.27.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/dialog@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.25.0",
      "@material/ripple": "npm:@material/ripple@0.27.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.1.1",
      "focus-trap": "npm:focus-trap@2.4.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/drawer@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.25.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0"
    },
    "npm:@material/elevation@0.25.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/theme": "npm:@material/theme@0.4.0"
    },
    "npm:@material/fab@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/elevation": "npm:@material/elevation@0.25.0",
      "@material/ripple": "npm:@material/ripple@0.27.0",
      "@material/theme": "npm:@material/theme@0.27.0"
    },
    "npm:@material/form-field@0.27.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/selection-control": "npm:@material/selection-control@0.27.0",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/grid-list@0.27.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0"
    },
    "npm:@material/icon-toggle@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.27.0",
      "@material/theme": "npm:@material/theme@0.27.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/linear-progress@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/theme": "npm:@material/theme@0.27.0"
    },
    "npm:@material/list@0.27.0": {
      "@material/ripple": "npm:@material/ripple@0.27.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0"
    },
    "npm:@material/menu@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.25.0",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0"
    },
    "npm:@material/radio@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.27.0",
      "@material/selection-control": "npm:@material/selection-control@0.27.0",
      "@material/theme": "npm:@material/theme@0.27.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/ripple@0.27.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/theme": "npm:@material/theme@0.27.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/select@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/list": "npm:@material/list@0.27.0",
      "@material/menu": "npm:@material/menu@0.27.0",
      "@material/ripple": "npm:@material/ripple@0.27.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/selection-control@0.27.0": {
      "@material/ripple": "npm:@material/ripple@0.27.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/slider@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.27.0"
    },
    "npm:@material/snackbar@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0"
    },
    "npm:@material/switch@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/elevation": "npm:@material/elevation@0.25.0",
      "@material/theme": "npm:@material/theme@0.27.0"
    },
    "npm:@material/tabs@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.27.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/textfield@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/ripple": "npm:@material/ripple@0.27.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@material/toolbar@0.27.0": {
      "@material/base": "npm:@material/base@0.24.0",
      "@material/elevation": "npm:@material/elevation@0.25.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.6.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:aurelia-bootstrapper@1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.1.5",
      "aurelia-history": "npm:aurelia-history@1.1.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.1.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.3",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.3.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.2.2",
      "aurelia-router": "npm:aurelia-router@1.4.0",
      "aurelia-templating": "npm:aurelia-templating@1.6.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.4.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.5.4",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.2.0"
    },
    "npm:aurelia-dependency-injection@1.3.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-framework@1.1.5": {
      "aurelia-binding": "npm:aurelia-binding@1.6.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.6.0"
    },
    "npm:aurelia-history-browser@1.1.0": {
      "aurelia-history": "npm:aurelia-history@1.1.0",
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-loader-default@1.0.3": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-mdc-bridge@0.14.3": {
      "material-components-web": "npm:material-components-web@0.27.0"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-pal-browser@1.3.0": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-polyfills@1.2.2": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-route-recognizer@1.1.1": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.4.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.1.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.1"
    },
    "npm:aurelia-task-queue@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-templating-binding@1.4.0": {
      "aurelia-binding": "npm:aurelia-binding@1.6.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.6.0"
    },
    "npm:aurelia-templating-resources@1.5.4": {
      "aurelia-binding": "npm:aurelia-binding@1.6.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.6.0"
    },
    "npm:aurelia-templating-router@1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.6.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.4.0",
      "aurelia-templating": "npm:aurelia-templating@1.6.0"
    },
    "npm:aurelia-templating@1.6.0": {
      "aurelia-binding": "npm:aurelia-binding@1.6.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.1"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.8": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:clean-css@3.4.28": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:focus-trap@2.4.2": {
      "tabbable": "npm:tabbable@1.1.1"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:material-components-web@0.27.0": {
      "@material/animation": "npm:@material/animation@0.25.0",
      "@material/auto-init": "npm:@material/auto-init@0.25.0",
      "@material/base": "npm:@material/base@0.24.0",
      "@material/button": "npm:@material/button@0.27.0",
      "@material/card": "npm:@material/card@0.27.0",
      "@material/checkbox": "npm:@material/checkbox@0.27.0",
      "@material/dialog": "npm:@material/dialog@0.27.0",
      "@material/drawer": "npm:@material/drawer@0.27.0",
      "@material/elevation": "npm:@material/elevation@0.25.0",
      "@material/fab": "npm:@material/fab@0.27.0",
      "@material/form-field": "npm:@material/form-field@0.27.0",
      "@material/grid-list": "npm:@material/grid-list@0.27.0",
      "@material/icon-toggle": "npm:@material/icon-toggle@0.27.0",
      "@material/layout-grid": "npm:@material/layout-grid@0.24.0",
      "@material/linear-progress": "npm:@material/linear-progress@0.27.0",
      "@material/list": "npm:@material/list@0.27.0",
      "@material/menu": "npm:@material/menu@0.27.0",
      "@material/radio": "npm:@material/radio@0.27.0",
      "@material/ripple": "npm:@material/ripple@0.27.0",
      "@material/rtl": "npm:@material/rtl@0.1.8",
      "@material/select": "npm:@material/select@0.27.0",
      "@material/selection-control": "npm:@material/selection-control@0.27.0",
      "@material/slider": "npm:@material/slider@0.27.0",
      "@material/snackbar": "npm:@material/snackbar@0.27.0",
      "@material/switch": "npm:@material/switch@0.27.0",
      "@material/tabs": "npm:@material/tabs@0.27.0",
      "@material/textfield": "npm:@material/textfield@0.27.0",
      "@material/theme": "npm:@material/theme@0.27.0",
      "@material/toolbar": "npm:@material/toolbar@0.27.0",
      "@material/typography": "npm:@material/typography@0.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "bundles/bundle.js": [
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:systemjs/plugin-css@0.1.36.js",
      "github:systemjs/plugin-css@0.1.36/css.js",
      "github:systemjs/plugin-text@0.0.7.js",
      "github:systemjs/plugin-text@0.0.7/text.js",
      "npm:@material/animation@0.25.0.js",
      "npm:@material/animation@0.25.0/dist/mdc.animation.js",
      "npm:@material/checkbox@0.27.0.js",
      "npm:@material/checkbox@0.27.0/dist/mdc.checkbox.js",
      "npm:@material/dialog@0.27.0.js",
      "npm:@material/dialog@0.27.0/dist/mdc.dialog.js",
      "npm:@material/drawer@0.27.0.js",
      "npm:@material/drawer@0.27.0/dist/mdc.drawer.js",
      "npm:@material/form-field@0.27.0.js",
      "npm:@material/form-field@0.27.0/dist/mdc.formField.js",
      "npm:@material/grid-list@0.27.0.js",
      "npm:@material/grid-list@0.27.0/dist/mdc.gridList.js",
      "npm:@material/icon-toggle@0.27.0.js",
      "npm:@material/icon-toggle@0.27.0/dist/mdc.iconToggle.js",
      "npm:@material/linear-progress@0.27.0.js",
      "npm:@material/linear-progress@0.27.0/dist/mdc.linearProgress.js",
      "npm:@material/menu@0.27.0.js",
      "npm:@material/menu@0.27.0/dist/mdc.menu.js",
      "npm:@material/radio@0.27.0.js",
      "npm:@material/radio@0.27.0/dist/mdc.radio.js",
      "npm:@material/ripple@0.27.0.js",
      "npm:@material/ripple@0.27.0/dist/mdc.ripple.js",
      "npm:@material/select@0.27.0.js",
      "npm:@material/select@0.27.0/dist/mdc.select.js",
      "npm:@material/selection-control@0.27.0.js",
      "npm:@material/selection-control@0.27.0/dist/mdc.selectionControl.js",
      "npm:@material/slider@0.27.0.js",
      "npm:@material/slider@0.27.0/dist/mdc.slider.js",
      "npm:@material/snackbar@0.27.0.js",
      "npm:@material/snackbar@0.27.0/dist/mdc.snackbar.js",
      "npm:@material/tabs@0.27.0.js",
      "npm:@material/tabs@0.27.0/dist/mdc.tabs.js",
      "npm:@material/textfield@0.27.0.js",
      "npm:@material/textfield@0.27.0/dist/mdc.textfield.js",
      "npm:@material/toolbar@0.27.0.js",
      "npm:@material/toolbar@0.27.0/dist/mdc.toolbar.js",
      "npm:aurelia-binding@1.6.0.js",
      "npm:aurelia-binding@1.6.0/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.1.js",
      "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.2.js",
      "npm:aurelia-dependency-injection@1.3.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.1.5.js",
      "npm:aurelia-framework@1.1.5/aurelia-framework.js",
      "npm:aurelia-history-browser@1.1.0.js",
      "npm:aurelia-history-browser@1.1.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.1.0.js",
      "npm:aurelia-history@1.1.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.3.js",
      "npm:aurelia-loader-default@1.0.3/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.3.1.js",
      "npm:aurelia-logging@1.3.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.3.0.js",
      "npm:aurelia-pal-browser@1.3.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.4.0.js",
      "npm:aurelia-pal@1.4.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.2.2.js",
      "npm:aurelia-polyfills@1.2.2/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.1.js",
      "npm:aurelia-route-recognizer@1.1.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.4.0.js",
      "npm:aurelia-router@1.4.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.2.1.js",
      "npm:aurelia-task-queue@1.2.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.4.0.js",
      "npm:aurelia-templating-binding@1.4.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.5.4.js",
      "npm:aurelia-templating-resources@1.5.4/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.5.4/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.5.4/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.4/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.4/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.5.4/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.5.4/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.5.4/binding-signaler.js",
      "npm:aurelia-templating-resources@1.5.4/compose.js",
      "npm:aurelia-templating-resources@1.5.4/css-resource.js",
      "npm:aurelia-templating-resources@1.5.4/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.4/dynamic-element.js",
      "npm:aurelia-templating-resources@1.5.4/else.js",
      "npm:aurelia-templating-resources@1.5.4/focus.js",
      "npm:aurelia-templating-resources@1.5.4/hide.js",
      "npm:aurelia-templating-resources@1.5.4/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.5.4/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.5.4/if-core.js",
      "npm:aurelia-templating-resources@1.5.4/if.js",
      "npm:aurelia-templating-resources@1.5.4/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.4/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.4/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.4/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.5.4/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.5.4/repeat.js",
      "npm:aurelia-templating-resources@1.5.4/replaceable.js",
      "npm:aurelia-templating-resources@1.5.4/sanitize-html.js",
      "npm:aurelia-templating-resources@1.5.4/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.4/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.5.4/show.js",
      "npm:aurelia-templating-resources@1.5.4/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.4/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.4/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.5.4/with.js",
      "npm:aurelia-templating-router@1.2.0.js",
      "npm:aurelia-templating-router@1.2.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.2.0/route-href.js",
      "npm:aurelia-templating-router@1.2.0/route-loader.js",
      "npm:aurelia-templating-router@1.2.0/router-view.js",
      "npm:aurelia-templating@1.6.0.js",
      "npm:aurelia-templating@1.6.0/aurelia-templating.js",
      "npm:material-components-web@0.27.0/dist/material-components-web.css!github:systemjs/plugin-text@0.0.7.js",
      "npm:process@0.11.10.js",
      "npm:process@0.11.10/browser.js"
    ]
  }
});