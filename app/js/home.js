$(document).ready(function(){

	if(!window.ipcRenderer){
		 const {ipcRenderer} = require('electron');
		 window.ipcRenderer = ipcRenderer;
	}
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
	}*/
		
	
	
 
	$("#tab-alarm").bootstrapTable({
		cache : false,
		striped : true,//条纹
		showColumns : true,//列选择
		showToggle : true,//开始数据竖排显示卡
		cardView: false, //默认竖排显示卡
		detailView : false ,//显示明细
		clickToSelect : true,
		checkboxHeader : true,
		toolbar         : "#control-panel",
		singleSelect    : true,
		columns : [
			{
			checkbox:true,
			title:"选择"
			},
			{
			field:"client_id",
			title:"用户ID"
			},
			{
			field: "client_name",
			title : "用户名称"
			},
			{
			field:"client_address",
			title:"用户地址"
			},
			{
			field:"type",
			title:"报警类型"
			},{
			field : "time",
			title : "报警时间"
			},
			{
			field : "duty_name",
			title : "负责人"
			},
			{
			field : "tel",
			title : "联系电话"
			}
		]
    });
	
	var testData = [];
	for(var i=0;i<10;i++){
		testData.push({client_id:"dddddddd",
					client_name:"aa",
					client_address : "dcccccccc",
					type :11,
					time : 12,
					duty_name :"sdfsdf",					
					tel :"1362163116"});
	}
	$("#tab-alarm").bootstrapTable("load", testData);
	
	$("#btn-set").click(function(){
		ipcRenderer.send("open-settings");
	});
	
});