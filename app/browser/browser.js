import path from 'path'
import { app, BrowserWindow } from 'electron'

let mainWindow;
let isQuitting = false;

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-line global-require
  require('electron-debug')({
    showDevTools: 'bottom'
  })
}

const isAlreadyRunning = app.makeSingleInstance(() => {
	if (mainWindow) {
		if (mainWindow.isMinimized()) {
			mainWindow.restore()
		}

		mainWindow.show()
	}
})

if (isAlreadyRunning) {
	app.quit()
}

function createMainWindow() {
  const win = new BrowserWindow({
    title: app.getName(),
    width: 1000,
    height: 600,
    minwidth: 1000,
    minheight: 600,
    resizable: false,
    fullscreen: false,
    titleBarStyle: 'hidden-inset',
    autoHideMenuBar: true,
    frame: false,
    show: false
  })

  if (process.platform === 'darwin') {
    win.setSheetOffset(40)
  }

  win.loadURL(`file://${path.resolve(__dirname, '../renderer/index.html')}`)

  win.on('close', e => {
    if (!isQuitting) {
      e.preventDefault()

      if (process.platform === 'darwin') {
        app.hide()
      } else {
        win.hide()
      }
    }
  })

  win.on('page-title-updated', e => {
    e.preventDefault()
  });

  return win;
}

app.on('ready', function() {
  mainWindow = createMainWindow();
  const page = mainWindow.webContents
	page.on('dom-ready', () => {
		mainWindow.show()
    mainWindow.focus()
	})

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

app.on('activate', () => {
	mainWindow.show()
})

app.on('before-quit', () => {
	isQuitting = true
})
