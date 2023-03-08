
const { app, BrowserWindow, screen } = require('electron');
const { registryShortcut } = require('./sysShortcut.js');
let mainWindow= null;
class createWin {
  constructor() {
    const displayWorkAreaSize = screen.getAllDisplays()[0].workArea;
    mainWindow = new BrowserWindow({
      width: parseInt(`${displayWorkAreaSize.width * 0.85}`, 10),
      height: parseInt(`${displayWorkAreaSize.height * 0.85}`, 10),
      center: true,
      resizable: true,
    });
    const url = require('url').format({
      protocol: 'file',
      slashes: true,
      pathname: require('path').join(__dirname, '../index.html')
    })
    mainWindow.loadURL(url);
    mainWindow.on('ready-to-show', () => {
      mainWindow.show();
      registryShortcut();
    });
  }
}
app.whenReady().then(() => new createWin());
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});