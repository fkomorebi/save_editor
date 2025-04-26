import {LzCodec} from "./lz_codec";
import {PakoCodec} from "./pako_codec";
import {Codec} from "./codec_interface";
import path = require('path');

class CodecName {
    static LZ = 'lz';
    static PAKO = 'pako';

    static getNameByPath(codecPath: string): string {
        const codecName = path.basename(codecPath);
        if (codecName.startsWith(CodecName.LZ)) {
            return CodecName.LZ;
        } else if (codecName.startsWith(CodecName.PAKO)) {
            return CodecName.PAKO;
        }
        throw new Error(`Unknown codec name: ${codecName}`);
    }
}

export class CodecFactory {
    static getCodec(codecPath: string): Codec {
        const jsFileName = codecPath.split('/').pop() || '';
        const codecName = CodecName.getNameByPath(jsFileName);
        console.log('codecMap', codecMap)
        const codecConstructor = codecMap.get(codecName);
        if (!codecConstructor) {
            throw new Error(`Unknown codec: ${codecName}`);
        }
        return new codecConstructor(codecPath);
    }
}

const codecMap: Map<string, new (codecPath: string) => Codec> = new Map()

codecMap.set(CodecName.LZ, LzCodec);
codecMap.set(CodecName.PAKO, PakoCodec);