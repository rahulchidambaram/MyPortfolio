function validateform()
{
 var name = document.myform.name;
 var email = document.myform.email;
// var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// var checkbox = document.myform.inp;

	if (name.value =="")
	{
		alert("Name can't be blank");
		return false;
		
	}

	else if (email.value == "")
	{
		alert("Email can't be blank");
		return false;
	}
	else if (name.value.length>1 && email.value.length>1)
	{
		alert("Successfully Registered");

	
	}
	
	
}

	


