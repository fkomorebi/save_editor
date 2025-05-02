type Pako = {
    inflate: (data: File, options: { to: string }) => string;
    deflate: (data: string, options: { to: string, level: number }) => string;
}
type Lz = {
    decompressFromBase64: (file: File)=>string;
    compressToBase64: (data: string)=>string;
}