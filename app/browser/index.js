import path from 'path'
import { app, BrowserWindow } from 'electron'

let mainWindow = null

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-line global-require
  require('electron-debug')({
    showDevTools: 'bottom'
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate-with-no-open-windows', function () {
  if (mainWindow) {
    mainWindow.show();
  }
  return false;
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    'width': 1000,
    'height': 600,
    'min-width': 1000,
    'min-height': 600,
    'resizable': false,
    'fullscreen': false,
    'frame': false,
    'show': false
  })

  mainWindow.loadURL(`file://${path.resolve(__dirname, '../renderer/index.html')}`)

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show()
    mainWindow.focus()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
