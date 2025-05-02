import {Codec} from './codec_interface';

export class PakoCodec implements Codec{
    private readonly _codecPath: string;
    private _pako: Promise<Pako> | Pako = null;
    constructor(codecPath: string) {
        this._codecPath = codecPath
        this._pako = import(codecPath)
    }

    private async getPako(): Promise<Pako> {
        if (this._pako instanceof Promise) {
            this._pako = await this._pako
        }
        return this._pako

    }
    get_codec_path() {
        return this._codecPath
    }

    async decode(saveFile: File): Promise<string> {
        const pako = await this.getPako()
        return pako.inflate(saveFile, {
            to: "string"
        });
    }
    async encode(saveDataStr:string):Promise<string> {
        const pako = await this.getPako();
        return pako.deflate(saveDataStr, {
            to: "string",
            level: 1
        });
    }
}
