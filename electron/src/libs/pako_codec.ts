const Codec = require('./codec_interface')
const path = require('path')

export class PakoCodec extends Codec{
    private _savePath: string;
    constructor(savePath:string){
        super()
        this._savePath = savePath
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
module.exports = PakoCodec
