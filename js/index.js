// JavaScript Document

window.onload=function(){
    var oUl=document.querySelector('.pic-list'),
        aLi=oUl.getElementsByTagName('li'),
        imgLen=aLi.length,
        curIndex = 0;
		
    var prev=document.getElementById('prev');
    prev.onclick = function(){ 
        curIndex--;
        if (curIndex < 0) {
            oUl.style.left='10px';
        }
        oUl.style.left= 226*curIndex+"px";
    };
    
    var next=document.getElementById('next');
    next.onclick = function(){ 
        curIndex++;
        if (curIndex > imgLen-4) {
            curIndex = imgLen-4;
        }
        oUl.style.left= 226*curIndex+"px";
  };
}