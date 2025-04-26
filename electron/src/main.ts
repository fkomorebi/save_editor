import {app, BrowserWindow, ipcMain} from 'electron'

const main = async ()=>{
    const path = await import('path')
    path.join(__dirname, 'libs', '/preload.js')
    const createWindow = () => {
        const win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                preload: path.join(__dirname, 'libs', '/preload.js'),
                nodeIntegration: true,
                contextIsolation: true
            }
        })

        if (process.defaultApp) {
            win.loadURL('http://localhost:5173')
        } else {
            win.loadFile(path.join('..', '..', 'view', 'dist', 'index.html'))
        }
        win.webContents.openDevTools()
    }

    app.whenReady().then(() => {
        import('./libs/ipc_main.js')
        createWindow()
    })

}
main()