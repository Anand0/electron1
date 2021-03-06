const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
var ipc = require('electron').ipcMain;
var ipc2 = require('electron').ipcMain;
const path = require('path')
const url = require('url')
// var math = require('./math')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.

// Hello Dummy

  mainWindow = new BrowserWindow({width: 1920, height: 1080})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    // pathname: path.join(__dirname, 'index.html'),
      // pathname: path.join(__dirname, 'main.html'),
        pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  //  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {

    console.log("iam closed");
    // math.UnInitializeEmailFinder();
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// ipc.on('will-navigate', function (e, url) {
//   console.log("arg==>",url);  // prints "ping"
//     //  mainWindow.loadURL(url);
//     // mainWindow.loadURL(arg);
//     mainWindow.loadURL('file://' + __dirname + '/index.html');
//
//     });
//
//     ipc.on('back-to-browser', function (e, url) {
//       console.log("arg==>",url);  // prints "ping"
//         //  mainWindow.loadURL(url);
//         // mainWindow.loadURL(arg);
//         mainWindow.loadURL('file://' + __dirname + '/browser.html');
//
//         });

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
