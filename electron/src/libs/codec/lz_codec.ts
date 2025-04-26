import path = require('path');

import {Codec} from './codec_interface';
export class LzCodec implements Codec{
    private readonly _codecPath: string;
    constructor(codecPath: string) {
        this._codecPath = codecPath
    }

    get_codec_path() {
        return this._codecPath
    }

    decode(saveFile: File): unknown {
        return ''
    }
    encode(saveFilePath:string):unknown {
        return ""
    }
}
