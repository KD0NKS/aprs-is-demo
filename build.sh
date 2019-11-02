#!/bin/sh
npm install;
cd ../js-aprs-fap;
npm install;
npm run build;
cd ../js-aprs-is;
npm run install;
npm run build;