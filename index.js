function subjects() 
{ 
	let n = document.getElementById('inputbox').value;

	document.getElementById('main').innerHTML = "";
	document.getElementById('outputbox').innerHTML = "";
	for (i = 0; i < n; i++) {
		document.getElementById('main').innerHTML += "Enter marks: <input type=\"text\" id=\"marks" + (i) + "\" size=10><br>";
	}
	document.getElementById('main').innerHTML += "<br><input type=\"submit\" id=\"btn2\" value=\"Calculate\" onClick=\'cgpa()\'><br>";
} 

function cgpa() 
{
	let total = 0;
	let n = document.getElementById('inputbox').value;
	
	document.getElementById('outputbox').innerHTML = "";
	for (i = 0; i < n; i++) {
		total += parseInt(document.getElementById('marks' + (i)).value);
	}
	document.getElementById('outputbox').innerHTML += "<h3>Your CGPA is " + (total/n) + "</h3>";
}