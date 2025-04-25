export interface Codec {
    get_codec_path();
    encode(savePath: string);
    decode(savePath: string);
}
