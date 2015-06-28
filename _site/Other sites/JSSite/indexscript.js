function submitClicked(){
	var inputText = document.getElementById("input").value, outputText;
	
	if(inputText == "date"){
		outputText = getStringTime();
	}
	else{
		outputText = "apparently not";
	}
	
	alert("test"); 
	
	document.getElementById("output").innerHTML = outputText;
}

function getStringTime(){
	var stringTime;
	var date = new Date(), h = (d.getHours()<10?'0':'') + d.getHours(), m = (d.getMinutes()<10?'0':'') + d.getMinutes();
	stringTime = h + ':' + m;
	
	return stringTime;
}