const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8010 })

const code2ws = new Map()

wss.on('connection', function connection(ws, request) {
  // ws => 端
  let code = Math.floor(Math.random() * (999999 - 100000)) + 100000
  console.log('set code', code)
  code2ws.set(code, ws)
  ws.sendData = (event, data) => {
    ws.send(JSON.stringify({event, data}))
  }
  ws.on('message', function incomging(message) {
    // { event, data }
    let parseMessage = {}
    try {
      parseMessage = JSON.parse(message)
      console.log('incoming', 'parseMessage')
    } catch(e) {
      ws.sendError('message valid')
      console.log('parse message error', e)
      return
    }
    let { event, data } = parseMessage
    if (event === 'login') {
      console.log(parseMessage)
      ws.sendData('logined', { code })
    } else if (event === 'control') {
      let remote = +data.remote
      console.log('has code', code)
      if (code2ws.has(remote)) {
        console.log('controlled', { remote })
        ws.sendData('controlled', {remote})
        let remoteWS = code2ws.get(remote)
        ws.sendRemote = remoteWS.sendData
        remoteWS.sendRemote = ws.sendData
        ws.sendRemote('be-controlled', {remote: code})
      }
    } else if (event === 'forward') {
      // data: { event, data }
      console.log('forward', data.event, data.data)
      ws.sendRemote(data.event, data.data)
    }
  })
  ws.on('close', () => {
    code2ws.delete(code)
    clearTimeout(ws._closeTimeout)
  })
  ws._closeTimeout = setTimeout(() => {
    ws.terminate()
  }, 10 * 60 * 1000)
})