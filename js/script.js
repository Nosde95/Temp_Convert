function convertTemp(direction) {
	var fObj = document.convert.ftemp, 
	cObj = document.convert.ctemp, 
	kObj = document.convert.ktemp, 
	rObj = document.convert.rtemp;

	if (direction == "ftoc") {
		cObj.value = Math.round((parseInt(fObj.value) - 32) * (5/9));
		kObj.value = Math.round((parseInt(fObj.value) + 459.67) * (5/9));
		rObj.value = Math.round(parseInt(fObj.value) + 459, 67);
	}
	else if (direction == "ktof") {
		fObj.value = Math.round(parseInt(kObj.value) - 273, 15) * 9/5 + 32;
		cObj.value = Math.round(parseInt(kObj.value) - 273, 15);
		rObj.value = Math.round(parseInt(kObj.value) * 1.8);
	}
	else if (direction == "ctof") {
		fObj.value = Math.round((parseInt(cObj.value) * (9/5)) + 32);
		kObj.value = Math.round((parseInt(cObj.value) + 273));
		rObj.value = Math.round(parseInt(cObj.value) * 1.8 + 491, 67);
	}
	else if (direction == "rtof") {
		fObj.value = Math.round(parseInt(rObj.value) - 459, 67);
		kObj.value = Math.round(parseInt(rObj.value) * 5/9);
		cObj.value = Math.round(parseInt(rObj.value) - 491, 67) * 5/9;
	}
}

function clearAll() {
	document.convert.ftemp.value = "";
	document.convert.ctemp.value = "";
	document.convert.ktemp.value = "";
	document.convert.rtemp.value = "";
}