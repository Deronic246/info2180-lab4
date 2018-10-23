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

	for (var i=0; i<b1.length;i++){
		b1[i].onmouseover=function(){
			for(var j=0;j<b1.length;j++){
				b1[j].classList.add("youlose");
				status.innerHTML ="You lose. Press 'S' to try again!";
			}
		};
	}
	end.onmouseover=function(){
		status.innerHTML="You Win! Press 'S' to Start Over!";
	};

	
};