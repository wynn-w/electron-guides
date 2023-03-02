const { globalShortcut }= require('electron');
module.exports = {
  registryShortcut: () => {
    globalShortcut.register('CommandOrControl+I', () => {
      // GET CURRENT WINDOW
      BrowserWindow.getFocusedWindow().webContents.openDevTools({ mode: 'right' });
    });
  }
}