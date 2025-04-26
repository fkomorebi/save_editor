import fs = require('fs');
import IpcMainInvokeEvent = Electron.IpcMainInvokeEvent;
import {ipcMain} from "electron";
import {CodecFactory} from './codec';

let codec = null
let saveFile = null

const startLoadData = async () => {
    if (!codec) {
        console.log('codec not load')
        return
    }
    if (!saveFile) {
        console.log('saveFile not load')
        return
    }
    try {
        const data = await codec.decode(saveFile)
        // TODO: send data to renderer process
    } catch (e) {
        console.error('decode error', e)
    }
}

ipcMain.handle('loadSaveFile', async (event, arg) => {
    console.log('loadSaveFile', arg)
    if (!fs.existsSync(arg)) {
        console.log('saveSaveFile', arg)
        return
    }

    saveFile = fs.readFileSync(arg, 'utf-8')
    if (!codec) {
        console.log('codec not load')
        return
    }
    startLoadData()
})
ipcMain.handle('loadCodecFile', async (event: IpcMainInvokeEvent, arg:string) => {
    console.log('loadCodecFile', arg)
    if (!fs.existsSync(arg)) {
        console.error('loadCodecFile', arg)
    }
    try {
        codec = CodecFactory.getCodec(arg)
    } catch (e) {
        console.error('loadCodecFile error', arg, e)
    }
    if (!saveFile) {
        console.log('saveFile not load')
        return
    }
    startLoadData()
})