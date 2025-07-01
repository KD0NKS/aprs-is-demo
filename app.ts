import { ISSocket } from 'js-aprs-is';
import { aprsParser, PacketTypeEnum } from 'js-aprs-fap';

const APPID = 'aprs-is-demo v2'
const CALLSIGN = 'N0CALL';
const PASSCODE = -1;
const APRSSERVER = 'rotate.aprs2.net';
const PORTNUMBER = 14580;
const FILTER = 'r/39.00/-91.00/1000';

let parser = new aprsParser();
let connection = new ISSocket(
    APPID
    , APRSSERVER
    , PORTNUMBER
    , CALLSIGN
    , PASSCODE
    , false
    , "TestConnection"
    , FILTER
    );

connection.connect();

connection.on('connect', () => {
    connection.sendLogin();
});

connection.on('packet', (data: string) => {
    if(data.charAt(0) != '#' && !data.startsWith('user')) {
        const packet = parser.parseaprs(data);

        // Any filtering/processing/formatting logic here.

        console.log(packet);
    } else {
        console.log(data);
    }
});

connection.on('error', (err: Error) => {
    console.log('Error: ' + err);
});
