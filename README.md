Minimal repro for sass importing / resolving bug

```
$ yarn install
$ yarn build
....
Version: webpack 4.5.0
Built at: 13/04/2018 15:55:25
  Asset      Size  Chunks             Chunk Names
main.js  19.3 KiB    main  [emitted]  main
Entrypoint main = main.js
[./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/style.scss 322 bytes {main} [built] [failed] [1 error]
[./src/index.js] 47 bytes {main} [built]
[./src/style.scss] 1.17 KiB {main} [built]
    + 2 hidden modules

ERROR in ./src/style.scss (./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/style.scss)
Module build failed: 
// Copyright Joyent, Inc. and other Node contributors.
^
      Invalid CSS after "...N THE SOFTWARE.": expected 1 selector or at-rule, was "var formatRegExp = "
      in ###/webpack-sass-broken-imports/node_modules/util/util.js (line 1, column 1)
 @ ./src/style.scss 2:14-117
 @ ./src/index.js
error An unexpected error occurred: "Command failed.
Exit code: 2

```
