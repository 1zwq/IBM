//----------点击iframe里面的横条让里面的内容显示出来否则消失-----------------
var line = document.getElementById("line");
var active = document.getElementById("active");
var activeone = document.getElementById("active1");
var activetwo = document.getElementById("active2");
var lineone = document.getElementById("line1");
var linetwo = document.getElementById("line2");
var pro= document.getElementById("pro");
var proone= document.getElementById("proone");
var protwo= document.getElementById("protwo");
var count = "";

pro.onclick = function(){
	if(count==""){
		active.style.display = "none";
		line.innerHTML ="&#xe620;";
		count++;
	}else{
		active.style.display = "block";
		line.innerHTML ="&#xe69f;";
		count="";
	}
	
}
proone.onclick = function(){
	if(count==""){
		activeone.style.display = "none";
		lineone.innerHTML ="&#xe620;";
		count++;
	}else{
		activeone.style.display = "block";
		lineone.innerHTML ="&#xe69f;";
		count="";
	}
	
}
protwo.onclick = function(){
	if(count==""){
		activetwo.style.display = "none";
		linetwo.innerHTML ="&#xe620;";
		count++;
	}else{
		activetwo.style.display = "block";
		linetwo.innerHTML ="&#xe69f;";
		count="";
	}
	
}
