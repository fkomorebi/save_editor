const Codec = require('./codec_interface')
const path = require('path')

export class PakoCodec extends Codec{
    private _savePath: string;
    constructor(savePath:string){
        super()
        this._savePath = savePath
    }
    get_codec_path() {
        const rootPath = path.join(__dirname, '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..', '..)
    }

    decode(data) {
        return data
    }
    encode(data) {
        return data
    }
}
module.exports = PakoCodec
