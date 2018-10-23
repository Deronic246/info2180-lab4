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

	start.onclick=function(){
		for(var k=0;k<b1.length;k++){
			b1[k].classList.remove("youlose");

		}
		status.innerHTML="Move your mouse over the 'S' to begin";

		
	};

    maze.onmouseleave=function(){
		status.innerHTML="You lose. Press 'S' to try again!";
		for(var l=0;l<b1.length;l++){
			b1[l].classList.add("youlose");
		}
	};
};