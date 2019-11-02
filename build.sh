#!/bin/sh
ls;
cd js-aprs-is/node_modules/js-aprs-is;
npm install;
npm run build;
cd ../js-aprs-fap;
npm install;
npm run build;
cd ../js-aprs-is;
npm run install;
npm run build;