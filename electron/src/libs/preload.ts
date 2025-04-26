const {ipcRenderer, contextBridge, webUtils} = require('electron');


contextBridge.exposeInMainWorld('ipcBridge', {
    'loadSaveFile': (absolutePath: string) => {
        return ipcRenderer.invoke('loadSaveFile', absolutePath);
    },
    'loadCodecFile': (absolutePath: string) => {
        return ipcRenderer.invoke('loadCodecFile', absolutePath);
    },
    'exportSaveFile': (saveData: string) => {
        return ipcRenderer.invoke('exportSaveFile', saveData);
    }
})
contextBridge.exposeInMainWorld('webUtils', webUtils)
console.log('preload.js loaded')
