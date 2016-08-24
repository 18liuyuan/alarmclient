

var winManager = require("./main/windowsManager.js");
const electron = require('electron');
// ����Ӧ���������ڵ�ģ��
const {app} = electron;
// ����������������ڵ�ģ��
const {BrowserWindow} = electron;

const {ipcMain} = electron;

// ָ�򴰿ڶ����һ��ȫ�����ã����û��������ã���ô����javascript�����������յ�
// ʱ��ô��ڽ����Զ��ر�
let win;

/*
function createWindow() {
  // ����һ���µ����������
  win = new BrowserWindow({
	  width: 600, 
	  height: 500,
	 center  : true,
	  fullscreen : false,
	  frame : true,
	  resizeable : true
	  
	  });

  // ����װ��Ӧ�õ�index.htmlҳ��
  win.loadURL(`file://${__dirname}/app/login.html`);

  // �򿪿�������ҳ��
  win.webContents.openDevTools();

  // �����ڹر�ʱ���õķ���
  win.on('closed', () => {
    // ������ڶ�������ã�ͨ���������Ӧ��֧�ֶ�����ڵĻ��������һ��������
    // ��Ŵ��ڶ����ڴ��ڹرյ�ʱ��Ӧ��ɾ����Ӧ��Ԫ�ء�
    win = null;
  });
}*/

// ��Electron��ɳ�ʼ�������Ѿ���������������ڣ���÷������ᱻ���á�
// ��ЩAPIֻ���ڸ��¼���������ܱ�ʹ�á�
app.on('ready', function(){
	winManager.showWindow("login")
});

// �����еĴ��ڱ��رպ��˳�Ӧ��
app.on('window-all-closed', () => {
  // ����OS Xϵͳ��Ӧ�ú���Ӧ�Ĳ˵�����һֱ����ֱ���û�ͨ��Cmd + Q��ʽ�˳�
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // ����OS Xϵͳ����dockͼ�걻���������´���һ��app���ڣ����Ҳ���������
  // ���ڴ�
  if (win === null) {
    winManager.showWindow("login");
  }
});

ipcMain.on("net-status-change", function(event, status){
	console.log(status);
});

ipcMain.on("login", function(event, username, password){
	console.log(username + ";" + password);
	setTimeout(function(){
		var result;
		if(username === "test" && password === "1234"){
			
			winManager.showWindow("home");
			//win.loadURL(`file://${__dirname}/app/home.html`);
			//win.setSize(800, 600);
			//win.setFullScreen(true);
			//win.maximize();
			//win.center();
			
			result = true;
		} else {
			result = false;		
		}
		event.sender.send("on-login", result);
	},1000);;
	
});

ipcMain.on("open-settings", function(event){
	
});

// ������ļ����������ֱ�Ӱ�����Ӧ���ض��������������еĴ��롣
// Ҳ���԰���Щ���������һ���ļ���Ȼ�������ﵼ�롣