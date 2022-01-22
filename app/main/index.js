const { app } = require('electron')
const handleIPC = require('./ipc')
const { create: createMainWindow, show: showMainWindow, close: closeMainWindow } = require('./windows/main')
// const { create: createControlWindow } = require('./windows/control')
const gotTheLock = app.requestSingleInstanceLock()
if(!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    showMainWindow()
  })
  app.on('ready', () => {
    createMainWindow()
    handleIPC()
    require('./trayAndMenu')
  })
  app.on('before-quit', () => {
    closeMainWindow()
  })
  app.on('activate', () => {
    showMainWindow()
  })
}