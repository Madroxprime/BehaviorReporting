const app = require("electron").app;
const BrowserWindow = require("electron").BrowserWindow;
const path = require('path');

var mainWindow;
let plugin = 'pepflashplayer.dll';
app.commandLine.appendSwitch('ppapi-flash-path',path.join(__dirname,plugin));
app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width:1024,
        height:768,
        webPreferences:{
            plugins:true
        }
    });

        mainWindow.loadURL('http://scholastic.fargo.k12.nd.us:55880/r180ng/loader/?cb=1506977746587;0.23138750974487876');
});