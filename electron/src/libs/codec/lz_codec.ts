import {Codec} from './codec_interface';

export class LzCodec implements Codec{
    private readonly _codecPath: string;
    private readonly _lz: Promise<Lz> = null;
    constructor(codecPath: string) {
        this._codecPath = codecPath
        this._lz = import(codecPath)
    }

    get_codec_path() {
        return this._codecPath
    }

    async decode(saveFile: File): Promise<string> {
        const lz = await this._lz
        return lz.decompressFromBase64(saveFile);
    }
    async encode(saveDataStr:string): Promise<string> {
        const lz = await this._lz
        return lz.compressToBase64(saveDataStr);
    }
}
