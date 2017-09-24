//-----------点击Input里面的箭头出现里面的内容------------------
var point = document.getElementById("point");
var ift = document.getElementById("iftom1");
var count = "";
point.onclick = function(){
	if(count==""){
		ift.style.display="block"
		count++;
	}else{
		ift.style.display = "none"
		 count = "";
	}
	
}
//-----------点击头像出现里面的内容------------------
var respon = document.getElementById("respon");
var menun = document.getElementById("menun");
count="";
respon.onclick = function(){
	if(count==""){
		menun.style.display = "block"
		count++;
	}else{
		menun.style.display = "none"
		count = "";
	}
	
}
//----------点击菜单出现里面的内容-----------------
var link = document.getElementById("link");
var shadow = document.getElementById("all-sha");
var content = document.getElementById("content");
var ret = document.getElementById("ret");
link.onclick = function(){
	shadow.style.display = "block";
	content.style = "right:0;";
}
ret.onclick = function(){
	shadow.style.display ="none";
	content.style = "right:-362px";
}

//--
window.onscroll = function(){
	var cir = document.getElementById("cir");
	//----------整个body的高度或者要获取当前页面的滚动条纵坐标位置---------------
  	if (document.documentElement.scrollTop || document.body.scrollTop > 600) {
        document.getElementById("cir").style.display = "block";
        cir.style = "right:0;";
    }
    else {
        document.getElementById("cir").style.display = "none";
        cir.style = "right:-50px;";
    }
}
