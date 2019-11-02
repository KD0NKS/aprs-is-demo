#!/bin/sh
cd node_modules;
cd js-aprs-fap;
npm run setup;
npm run build;
cd ../js-aprs-is;
npm run setup;
npm run build;