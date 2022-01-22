const { BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let win
let willQuitApp = false
function create() {
  win = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win.on('close', (e) => {
    if (willQuitApp) {
      win.close()
    } else {
      e.preventDefault()
      win.hide()
    }
  })
  // win.webContents.openDevTools({ mode: 'detach' })
  if (isDev) {
    win.loadURL('http://localhost:3000')
  } else {
    win.loadFile(path.resolve(__dirname, '../renderer/pages/main/index.html'))
  }
}

function send(channel, ...args) {
  win.webContents.send(channel, ...args)
}

function show() {
  win.show()
}

function close() {
  willQuitApp = true
  window.close()
}

module.exports = {
  create,
  send,
  show,
  close
}