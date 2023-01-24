var age=parseInt(prompt("Enter your age"));
var eaducation=parseInt(prompt("Enter school eaducation"));

if(age>18 && eaducation>10){
	var test=confirm("you passed in test?");
	if(test==true){
		console.log("elgible for license")
	}
	else{
		console.log("eligible for license failed in test")
	}
}
else{
	console.log("not eligible for license")
}