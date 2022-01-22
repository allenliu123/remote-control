const { ipcMain } = require('electron')
const { send: sendMainWindow } = require('./windows/main')
const { create: createControlWindow, send: sendControlWindow } = require('./windows/control')
const signal = require('./signal')

module.exports = function() {
  ipcMain.handle('login', async () => {
    // mock
    // let code = Math.floor(Math.random() * (999999 - 100000)) + 100000
    let { code } = await signal.invoke('login', null, 'logined')
    return code
  })
  ipcMain.on('control', (e, remote) => {
    signal.send('control', { remote })
  })

  signal.on('controlled', (data) => {
    createControlWindow()
    sendMainWindow('control-state-change', data.remote, 1)
  })
  signal.on('be-controlled', (data) => {
    sendMainWindow('control-state-change', data.remote, 2)
  })

  ipcMain.on('forward', (e, event, data ) => {
    console.log('111', event, 'offer')
    signal.send('forward', { event, data })
  })
  signal.on('offer', (data) => {
    sendMainWindow('offer', data)
  })
  signal.on('answer', (data) => {
    sendControlWindow('answer', data)
  })
  signal.on('puppet-candidate', (data) => {
    console.log('puppet-candidate', data)
    sendControlWindow('candidate', data)
  })
  signal.on('control-candidate', (data) => {
    console.log('control-candidate', data)
    sendMainWindow('candidate', data)
  })
}