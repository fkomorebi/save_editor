export interface Codec {
    get_codec_path(): string;
    encode(savePath: string): Promise<string>;
    decode(savePath: File): Promise<string>;
}
