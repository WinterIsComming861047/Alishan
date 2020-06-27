$(document).ready(function(){
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	var c=Shape.Circle(200,200,80);
	c.fillColor='black';
	var text =new PointText(200,200);
	text.justification='center';
	text.fillColor='white';
	text.fontSize=20;
	text.content='hello world';
	var tool=new Tool();
	tool.onMouseDown = function(event){
		var c =Shape.Circle(event.point, 20);
		c.fillColor='green';
	};
	
	document.getelementbyid("alishan").src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29274.854355138854!2d120.73087692609172!3d23.483654828257198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x346ee85152a0144b%3A0x71ebb16fc6fc5068!2z5ZiJ576p57ij6Zi_6YeM5bGx6YSJ5qiC6YeO5p2RIOW4g-mtr-ajruawkeWuvw!3m2!1d23.4668437!2d120.7024714!4m5!1s0x346ede9df963230d%3A0xcd6815b91d454686!2z5ZiJ576p57ij6Zi_6YeM5bGx6YSJ6Zi_6YeM5bGx54Gr6LuK56uZ!3m2!1d23.510071!2d120.80425799999999!5e0!3m2!1szh-TW!2stw!4v1593186322733!5m2!1szh-TW!2stw"
	paper.view.draw();
	console.log('main.js loaded');
});