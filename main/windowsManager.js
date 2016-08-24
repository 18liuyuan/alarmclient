const electron = require('electron');
// 控制应用生命周期的模块

const {BrowserWindow} = electron;

var winManager = {
		login : null,
		home  : null,
		set   : null
};


function createtWindow( filename){
	console.log("create window :" + filename);
	let win = new BrowserWindow({
        frame   : true,
		center  : true
       
    });
	
	win.webContents.openDevTools();
    win.loadURL('file://' + __dirname + '/app/' + filename + ".html");

    win.on('closed', function () {
        win = null;
    });
	
	
	
	return win;
}

module.exports.showWindow = function(winName){
	if(winManager[winName] == null){
		winManager[winName] = createtWindow(winName)
	}
}
