

import * as fs from 'fs';
import * as CJSON from 'comment-json';
import * as argv from 'argv';


// TODO: implement the reading of cli options, and use path instead or if not supplied, current path
let configRaw = fs.readFileSync('spfx-project/config/config.json');

// TODO: create an entity with the config schema (only needed properties);
let config: any;

try {
    config = CJSON.parse(configRaw.toString('utf8'));
    console.log(Object.keys(config.bundles));
} catch(ex) {
    console.error(ex);
}


