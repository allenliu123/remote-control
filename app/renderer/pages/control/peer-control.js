const EventEmitter = require('events')
const peer = new EventEmitter()
const { ipcRenderer } = require('electron')

const pc = new window.RTCPeerConnection({})

pc.onicecandidate = function(e) {
  console.log('candidate', JSON.stringify(e.candidate))
  if (e.candidate) {
    console.log('send', e.candidate)
    ipcRenderer.send('forward', 'control-candidate', JSON.stringify(e.candidate))
  }
}
ipcRenderer.on('candidate', (e, candidate) => {
  console.log('on candidate', candidate)
  addIceCandidate(JSON.parse(candidate))
})

window.addIceCandidate = addIceCandidate

let candidates = []
async function addIceCandidate(candidate) {
  pc.addIceCandidate(new RTCIceCandidate(candidate))
  return
  if (candidate) {
    candidates.push(candidate)
  }
  
  if (pc.remoteDescription && pc.remoteDescription.type) {
    for(let i = 0; i < candidates.length; i++) {
      await pc.addIceCandidate(new RTCIceCandidate(candidate))
    }
    candidates = []
  }
}

async function creatOffer() {
  const offer = await pc.createOffer({
    offerToReceiveAudio: false,
    offerToReceiveVideo: true
  })
  await pc.setLocalDescription(offer)
  console.log('pc offer', JSON.stringify(offer))
  return pc.localDescription
}
creatOffer().then((offer) => {
  ipcRenderer.send('forward', 'offer', { type: offer.type, sdp: offer.sdp })
})
async function setRemote(answer) {
  await pc.setRemoteDescription(answer)
}
ipcRenderer.on('answer', (e, answer) => {
  setRemote(answer)
})

pc.onaddstream = function(e) {
  console.log('add stream', e)
  peer.emit('add-stream', e.stream)
}

module.exports = peer