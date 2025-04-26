
interface Window {
  ipcBridge: {
    loadSaveFile: (filePath: string) => Promise<string>
    loadCodecFile: (filePath: string) => Promise<string>
    exportSaveFile: (saveData: string) => void
  }
  webUtils: {
    getPathForFile(file: File): string;
  }
}

type SaveData = {
  actors: {
    _data: Record<string, string>[],
  }
}
