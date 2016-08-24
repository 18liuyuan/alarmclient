$(document).ready(function(){

	 const {ipcRenderer} = require('electron');

	ipcRenderer.on("on-login", function(event, result){
		if(result){
			
		} else {
			alert("登录失败");
		}
	})
	
	window.ipcRenderer = ipcRenderer;
/*
	var soundButtons = document.querySelectorAll('.button-sound');

	for (var i = 0; i < soundButtons.length; i++) {
		var soundButton = soundButtons[i];
		var soundName = soundButton.attributes['data-sound'].value;

		prepareButton(soundButton, soundName);
	}

	function prepareButton(buttonEl, soundName) {
		//buttonEl.querySelector('span').style.backgroundImage = 'url("img/icons/' + soundName + '.png")';

		var audio = new Audio(__dirname + '/wav/' + soundName + '.wav');
		buttonEl.addEventListener('click', function () {
			audio.currentTime = 0;
			audio.play();
		});
	}
		
	
	$("#btn-login").click(function(){
		var audio = new Audio(__dirname + '/wav/3.wav');
		audio.currentTime = 0;
		audio.play();
		//alert("click");
	});*/
	
	var updateNetStatus = function(){
		var status = "online";
		if(this.navigator.onLine){
			status = "online";
		} else {
			status = "offline";
		}
		ipcRenderer.send("net-status-change",this.navigator.onLine?"online":"offline");
		
	}
	
	$("#btn-login").click(function(){
		var username = $("#ipt-username").val();
		var password = $("#ipt-password").val();
		
		ipcRenderer.send('login', username, password);
	});
	
	window.addEventListener("online", updateNetStatus);
	window.addEventListener("offline", updateNetStatus);
	updateNetStatus();
});