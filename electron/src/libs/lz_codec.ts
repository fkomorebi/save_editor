const path = require('path')

const Codec = require('./codec_interface')
export class LzCodec extends Codec{
    constructor() {
        super();
    }

    get_codec_path() {
        return path.join(__dirname)
    }

    decode(saveFilePath: string): unknown {
        return ''
    }
    encode(saveFilePath:string):unknown {
        return ""
    }
}
module.exports = LzCodec
