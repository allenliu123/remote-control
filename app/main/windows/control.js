const { BrowserWindow } = require('electron')
const path = require('path')

let win
function create() {
  win = new BrowserWindow({
    width: 1280,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  // win.webContents.openDevTools({ mode: 'detach' })
  win.loadFile(path.resolve(__dirname, '../../renderer/pages/control/index.html'))
}

function send(channel, ...args) {
  win.webContents.send(channel, ...args)
}

module.exports = {
  create,
  send
}