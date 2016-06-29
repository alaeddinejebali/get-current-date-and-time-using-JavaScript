function getCurrentDateAndTime(){
	var today = new Date();
	var dd = today.getDate();
	if(dd<10) {
	    dd = '0' + dd;
	} 
	var mm = today.getMonth() + 1;
	if(mm<10) {
		mm = '0' + mm;
	}
	var yyyy = today.getFullYear();
	var hh = today.getHours();
	if(hh<10) {
		hh = '0' + hh;
	}
	var mn = today.getMinutes();
	if(mn<10) {
		mn = '0' + mn;
	}
	var ss = today.getSeconds();
	if(ss<10) {
		ss = '0' + ss;
	}
	return yyyy + "-" + mm + "-" + dd + " " + hh + ":" + mn + ":" + ss;
}

console.log(getCurrentDateAndTime());
