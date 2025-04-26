import {Codec} from './codec_interface';


type Pako = {
    inflate: (data: File, options: { to: string }) => string;
    deflate: (data: string, options: { to: string, level: number }) => unknown;
}

export class PakoCodec implements Codec{
    private readonly _codecPath: string;
    private readonly _pako: Promise<Pako> = null;
    constructor(codecPath: string) {
        this._codecPath = codecPath
        this._pako = import(codecPath)
    }
    get_codec_path() {
        return this._codecPath
    }

    async decode(saveFile: File): Promise<unknown> {
        const pako = await this._pako
        return pako.inflate(saveFile, {
            to: "string"
        });
    }
    async encode(saveDataStr:string):Promise<unknown> {
        const pako = await this._pako
        return pako.deflate(saveDataStr, {
            to: "string",
            level: 1
        });
    }
}
