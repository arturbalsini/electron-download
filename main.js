const electron = require("electron");
const { app, BrowserWindow, ipcMain, Menu, Tray } = electron;

let tray
const DownloadManager = require("electron-download-manager");

DownloadManager.register({
    downloadFolder: app.getAppPath() + "/public"
});

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    //mainWindow.webContents.openDevTools();

    //Single file download
/*    DownloadManager.download({
        url: "http://download.l2e-global.com/gracia_final_x7_zip/E-Global_Gracia_Final_x7.zip",
        onProgress: function (percentage){
            console.log(percentage);
        }
    });*/

});

ipcMain.on('messageFromRenderer', (event) => {
    console.log('Hello from Renderer')
    event.sender.send('messageFromMain', 456)
})