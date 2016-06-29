const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
    maxWidth: 1280,
    maxHeight: 720,
    minWidth: 640,
    minHeight: 480,
		titleBarStyle: 'hidden',
    fullscreen: false,
    fullscreenable: false
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
