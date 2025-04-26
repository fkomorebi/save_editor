export interface Codec {
    get_codec_path(): string;
    encode(savePath: string): unknown;
    decode(savePath: File): unknown;
}
