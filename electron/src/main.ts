import {app, BrowserWindow, ipcMain} from 'electron'
console.log(__dirname + '\\preload.ts')
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + '\\libs\\preload.js',
            nodeIntegration: true,
            contextIsolation: true
        }
    })

    if (process.defaultApp) {
        win.loadURL('http://localhost:5173')
    } else {
        win.loadFile('../../view/dist/index.html')
    }
    win.webContents.openDevTools()
}

app.whenReady().then(() => {
    ipcMain.handle('loadSaveFile', (event, arg) => {
        console.log('loadSaveFile', arg)
    })
    ipcMain.handle('loadCodecFile', (event, arg) => {
        console.log('loadCodecFile', arg)
    })
    createWindow()
})
