const Codec = require('./codec_interface')
export class LzCodec extends Codec{
    constructor() {
        super();
    }
    encode(data) {
        return data;
    }
    decode(data) {
        return data;
    }
}
module.exports = LzCodec
