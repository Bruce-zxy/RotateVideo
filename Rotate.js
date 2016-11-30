window.onload = function () {
	StartAction();
}

function StartAction() {
	//找到所有的video
	var video = document.querySelectorAll("video");

	//给每个video添加鼠标事件
	for (var i = 0; i < video.length; i++) {
		video[i].addEventListener("mouseover", stopIt);
		video[i].addEventListener("mouseout", startIt);
	}
}

function stopIt() {
	//找到Id为photo的Div
	document.querySelector("#photo").style.webkitAnimationPlayState = "paused";
	this.play();
}

function startIt() {
	// 
	document.querySelector("#photo").style.webkitAnimationPlayState = "running";
	this.pause()
}