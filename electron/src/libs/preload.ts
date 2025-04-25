const {ipcRenderer, contextBridge, webUtils} = require('electron');


contextBridge.exposeInMainWorld('ipcBridge', {
    'loadSaveFile': (absolutePath: string) => {
        ipcRenderer.invoke('loadSaveFile', absolutePath);
    },
    'loadCodecFile': (absolutePath: string) => {
        ipcRenderer.invoke('loadCodecFile', absolutePath);
    }
})
contextBridge.exposeInMainWorld('webUtils', webUtils)
console.log('preload.js loaded')
