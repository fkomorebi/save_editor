
interface Window {
  ipcBridge: {
    loadSaveFile: (filePath: string) => void
    loadCodecFile: (filePath: string) => void
  }
  webUtils: {
    getPathForFile(file: File): string;
  }
}
