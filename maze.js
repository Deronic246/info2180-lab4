window.onload=function(){
	var status= document.getElementById("status");
	var b1=document.querySelectorAll("#maze .boundary");
	var end=document.getElementById("end"); 
	var start=document.getElementById("start");
	var b=document.getElementById("boundary1");
	var maze=document.getElementById("maze");

	b.onmouseover=function(){
		this.classList.add("youlose");
	};

	
};