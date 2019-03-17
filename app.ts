import ISSocket from 'js-aprs-is';
import { aprsParser } from 'js-aprs-fap';

const CALLSIGN = 'NOCALL';
const PASSCODE = -1;
const APRSSERVER = 'central.aprs2.net';
const PORTNUMBER = 14580;
const FILTER = 'r/39.00/-91.00/1000';

let connection = new ISSocket(APRSSERVER, PORTNUMBER, CALLSIGN, PASSCODE, FILTER);
connection.connect();

connection.on('packet', (data: string) => {
    let parser = new aprsParser();
    
    if(data.charAt(0) == '#') {
        connection.sendLine(connection.userLogin)
    } else {
        let msg = parser.parseaprs(data);

        console.log(data);
        console.log(msg);
    }
});

connection.on('error', (err: Error) => {
    console.log('Error: ' + err);
});