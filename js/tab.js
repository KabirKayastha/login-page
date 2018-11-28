var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel");


function showPanel(panelIndex,opacityAmount) {
	tabButtons.forEach(function(node){
		node.style.opacity="";
		node.style.color="";
	});
	tabButtons[panelIndex].style.opacity=opacityAmount;
	tabButtons[panelIndex].style.color="white";
	tabPanels.forEach(function(node){
		node.style.display="NONE"; 
	});
	tabPanels[panelIndex].style.display="block";
	//tabPanels[panelIndex].style.backgroundColor=colorCode;
}

function showPassword() {
	var x=document.getElementById("password");
	if (x.type === "password") {
		x.type = "text";
	}

	else{
		x.type = "password";
	}
}

showPanel(0,1);

