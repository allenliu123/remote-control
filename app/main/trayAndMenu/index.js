if (process.platform === 'drawin') {
  require('./drawin.js')
} else if (process.platform === 'win32') {
  require('./win32.js')
} else {
  // linux
}