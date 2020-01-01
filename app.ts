import { ISSocket } from 'js-aprs-is';
import { aprsParser } from 'js-aprs-fap';

const CALLSIGN = 'NOCALL';
const PASSCODE = -1;
const APRSSERVER = 'rotate.aprs2.net';
const PORTNUMBER = 14580;
const FILTER = 'r/39.00/-91.00/1000';

let connection = new ISSocket(APRSSERVER, PORTNUMBER, CALLSIGN, PASSCODE, FILTER);
let parser = new aprsParser();

connection.connect();

connection.on('connect', () => {
    connection.sendLine(connection.userLogin);
});

connection.on('packet', (data: string) => {
    if(data.charAt(0) != '#' && !data.startsWith('user')) {
        console.log(parser.parseaprs(data));
    } else {
        console.log(data);
    }
});

connection.on('error', (err: Error) => {
    console.log('Error: ' + err);
});
