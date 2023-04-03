// https://ekursy.put.poznan.pl/pluginfile.php/1951150/mod_resource/content/6/Zadanie3.pdf

function isEmpty(str)  				{ return str.length === 0; }
function isWhiteSpaceOrEmpty(str)  	{ return /^[\s\t\r\n]*$/.test(str); }
function isEmail(str) 				{ return /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/.test(str); }

function checkString(str) 
{
	if (isEmpty(str) || isWhiteSpaceOrEmpty(str))
	{
		// alert(alertInfo);
		return false;
	}
	return true;
}

function isEmailValid(str) 
{
	let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
	if (email.test(str))
		return true;
	else 
	{
		return false;
	}
}

function checkStringAndFocus(obj, msg, fun) 
{
	let str = obj.value;
	let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
	console.log(errorFieldName, msg, fun)
	if (fun(str)) 
	{
		document.getElementById(errorFieldName).innerHTML = "";
		return true;
	}
	else 
	{
		document.getElementById(errorFieldName).innerHTML = msg;
		obj.focus();
		return false;
	}
}

function validate(form)
{
	return ( checkStringAndFocus(form.elements["f_imie"], 	"Podaj imię!",		checkString) 	 &&
			checkStringAndFocus(form.elements["f_nazwisko"],"Podaj nazwisko!",	checkString)  &&
			checkStringAndFocus(form.elements["f_email"], 	"Podaj właściwy e-mail!", isEmailValid) &&
			checkStringAndFocus(form.elements["f_kod"], 	"Podaj kod!",		checkString) &&
			checkStringAndFocus(form.elements["f_ulica"], 	"Podaj ulicę!",		checkString) &&
			checkStringAndFocus(form.elements["f_miasto"], 	"Podaj miasto!",	checkString) 
		);
}

// ---------------------------------------------------------------------------------------------
// zad 22-26
function showElement(id) 
{
	document.getElementById(id + "Nazwa").style.display = 'inline';	// style.visibility = 'visible';
	document.getElementById(id).style.display = 'inline';
	return true;
}

function hideElement(id) 
{
	document.getElementById(id + "Nazwa").style.display = 'none';	// style.visibility = 'hidden';
	document.getElementById(id).style.display = 'none';
	return true;
}

// ---------------------------------------------------------------------------------------------
// zad 29
function alterRows(i, e) 
{
	if(e) 
	{
		if (i % 2 == 1) 
		{
			e.setAttribute("style", "background-color: Aqua;");
		}
		e = e.nextSibling;
		while (e && e.nodeType != 1) 
		{
			e = e.nextSibling;
		}
		alterRows(++i, e);
	}
}


// ---------------------------------------------------------------------------------------------

function nextNode(e) 
{
	while (e && e.nodeType != 1) 
	{
		e = e.nextSibling;
	}
	return e;
}

function prevNode(e) 
{
	while (e && e.nodeType != 1) 
	{
		e = e.previousSibling;
	}
	return e;

}

function swapRows(b) 
{
	let tab = prevNode(b.previousSibling);
	let tBody = nextNode(tab.firstChild);
	let lastNode = prevNode(tBody.lastChild);
	tBody.removeChild(lastNode);
	let firstNode = nextNode(tBody.firstChild);
	tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) 
{
	if (form.value.length > maxSize)
		form.value = form.value.substring(0, maxSize);
	else
		msg.innerHTML = maxSize - form.value.length;
}

/*function validate(form)
{
	if ( 	checkStringAndFocus(form, 	"Podaj imieee!") 	== false ||
			checkString(form, "f_imie", 	"Podaj imię!") 		== false || 
			checkString(form, "f_nazwisko", "Podaj nazwisko!") 	== false ||
			checkString(form, "f_kod", 		"Podaj kod!") 		== false ||
			checkString(form, "f_ulica", 	"Podaj ulicę!") 	== false ||
			checkString(form, "f_miasto", 	"Podaj miasto!") 	== false ||
			
			checkEmail(form.f_email.value) == false
		)
	{
		return false;
	}
	return true;
	
}*/