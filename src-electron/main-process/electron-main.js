import { app, BrowserWindow, nativeTheme, ipcMain } from 'electron'
const fs = require('fs')
const path = require('path')

let configPath = path.resolve(app.getAppPath(), '../../saves/appConfig.json').replace(/\/,\\\\/g, '\\')
fs.mkdir(path.resolve(app.getAppPath(), '../../saves').replace(/\/,\\\\/g, '\\'), { recursive: true }, (a_error) => {})

try {
    if (process.platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
        require('fs').unlinkSync(require('path').join(app.getPath('userData'), 'DevTools Extensions'))
    }
} catch (_) {}

/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
    global.__statics = require('path').join(__dirname, 'statics').replace(/\\/g, '\\\\')
}

let mainWindow

function createWindow() {
    /**
   * Initial window options
   */
    mainWindow = new BrowserWindow({
        width: 400,
        height: 550,
        useContentSize: true,
        backgroundColor: '#ffffff',
        frame: process.env.PROD ? false : true,
        show: false,
        webPreferences: {
            // keep in sync with /quasar.conf.js > electron > nodeIntegration
            // (where its default value is "true")
            // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
            nodeIntegration: true
        }
    })

    if (process.env.PROD) {
        mainWindow.setMenu(null)
    }

    mainWindow.loadURL(process.env.APP_URL)

    // Window events
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    mainWindow.on('maximize', () => {
        mainWindow.webContents.send('maximized')
    })
    mainWindow.on('unmaximize', () => {
        mainWindow.webContents.send('unMaximized')
    })

    // IPC events
    ipcMain.on('getConfig', (a_event, a_data) => {
        fs.readFile(configPath, 'utf8', (a_error, a_data) => {
            if (!a_error) {
                a_event.reply('setConfig', JSON.parse(a_data))
            }
        })
    })
    ipcMain.on('setConfig', (a_event, a_data) => {
        fs.writeFile(configPath, JSON.stringify(a_data), (a_error) => {})
    })
    ipcMain.on('minimize', (a_event, a_data) => {
        if (mainWindow.minimizable) {
            mainWindow.minimize()
        }
    })
    ipcMain.on('maximize', (a_event, a_data) => {
        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize()
        } else {
            if (mainWindow.maximizable) {
                mainWindow.maximize()
            }
        }
    })
    ipcMain.on('quit', (a_event, a_data) => {
        mainWindow.close()
    })
    ipcMain.on('openDevTools', (a_event, a_data) => {
        mainWindow.webContents.openDevTools()
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})
