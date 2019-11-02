# Instructions

[![Greenkeeper badge](https://badges.greenkeeper.io/KD0NKS/aprs-is-demo.svg)](https://greenkeeper.io/)

## Configure
Edit app.ts and set:
* CALLSIGN
* PASSCODE
* FILTER
* APRSSERVER (OPTIONAL) - The default may cause issues
* PORTNUMBER (OPTIONAL)

For more info see: http://www.aprs-is.net/aprsservers.aspx

## Build & Run
Tested in Windows PowerShell (Windows 10)

Install dependencies.
```
npm install
```

Build dependencies
```
cd .\node_modules\js-aprs-is;
npm install;
npm run build;
```
```
cd ..\js-aprs-fap;
npm install;
npm run build;
```
```
cd ..\..\
```

Run the test.
```
npm start
```