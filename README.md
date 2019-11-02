# aprs-is-demo [![Build Status](https://travis-ci.org/KD0NKS/aprs-is-demo.svg?branch=master)](https://travis-ci.org/KD0NKS/aprs-is-demo) [![Greenkeeper badge](https://badges.greenkeeper.io/KD0NKS/aprs-is-demo.svg)](https://greenkeeper.io/)
APRS is a registered trademark Bob Bruninga, WB4APR.

This is a demo of using the js-aprs-is and js-aprs-fap libraries for a simple APRS client.

# Instructions

## Configure
Edit app.ts and set:
* CALLSIGN
* PASSCODE
* FILTER
* APRSSERVER (OPTIONAL) - The default may cause issues
* PORTNUMBER (OPTIONAL)

For more info see: http://www.aprs-is.net/aprsservers.aspx

## Build & Run
### Tested in Windows PowerShell (Windows 10)

Install dependencies.
```
npm run setup
```

Run the test.
```
npm start
```

### Linux
Install dependencies.
```
npm run setup
```

Run the test.
```
npm start
```