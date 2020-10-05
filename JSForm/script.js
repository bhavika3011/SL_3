function checknumbers(variable){
	var number = /[0-9]/;
	return number.test(variable);
}
function checkspecialchars(variable){
	var special = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
	return special.test(variable);
}
function checkchars(variable){
	var char = /[a-zA-Z]/;
	return char.test(variable);
}
function checkname(variable){
	if(checkspecialchars(variable)){
		alert("Special characters are not allowed.");
		return false;
	}
	if(checknumbers(variable)){
		alert("Numeric input is not allowed.");
		return false;
    }
    if(variable === "" || variable === null){
        alert("Please enter all the fields.");
        return false;
    }
	return true;
}
function checkpassword(variable){
	if(variable.length < 8){
		alert("Password must have atleast 8 characters.");
		return false;
	}
	if(!checkchars(variable)){
		alert("Password must have atleast one alphabet.");
		return false;
	}
	if(!checknumbers(variable)){
		alert("Password must atleast have one digit");
		return false;
	}
	if(!checkspecialchars(variable)){
		alert("Password must have atleast one special character.");
		return false;
    }
    if(variable === "" || variable === null){
        alert("Please enter all the fields.");
        return false;
    }
	return true;
}
function checkage(variable){
    if(variable < 18){
        alert("You must be above 18 years of age to register.");
        return false;
    }
    if(variable > 150){
        alert("Please enter appropriate age.");
        return false;
    }
    if(variable === "" || variable === null){
        alert("Please enter all the fields.");
        return false;
    }
    return true;
}
function checkemail(variable){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(variable))
  {
      return true;
  }
    alert("You have entered an invalid email address.")
    return false;
}
function checkphone(variable){
    if(variable.length != 10){
        alert("Phone number can only have 10 digits.");
        return false;
    }
    if(variable === "" || variable === null){
        alert("Please enter all the fields.");
        return false;
    }
    return true;
}
function validateForm(){
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
    var age = document.getElementById("age");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var city = document.getElementById("city");
    var password = document.getElementById("password");

	if(!checkname(fname.value)){
		return false;
    }
    if(!checkname(lname.value)){
		return false;
    }
    if(!checkage(age.value)){
		return false;
    }
    if(!document.getElementById("male").checked || !document.getElementById("female") || !document.getElementById("others")){
		alert("Please select your gender.")
		return false;
	}
    if(!checkemail(email.value)){
		return false;
    }
    if(!checkphone(phone.value)){
        return false;
    }
    if(!checkname(city.value)){
		return false;
    }
    if(!checkpassword(password.value)){
        return false;
    }
	return true;
}





