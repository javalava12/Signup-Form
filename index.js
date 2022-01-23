
var selectedRow = null
const form = document.getElementById('form');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function onFormSubmit() {
  
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null){
          insertNewRecord(formData);
        }
            
        else{
            updateRecord(formData);
        }
        resetForm();
    }else{
      checkInputs();
    }
    
    
}



//Validation
function checkInputs(){
  const fullNameValue= document.getElementById("fullName").value.trim;
  const emailValue= document.getElementById("email").value.trim;
  const mobileValue= document.getElementById("mobile").value.trim;
  const passwordValue= document.getElementById("password").value.trim;
  const password2Value= document.getElementById("password2").value.trim;

  if(fullNameValue===''){
    setErrorFor(fullName, "Enter a valid name")
  }else if(fullNameValue.length<=2){
    setErrorFor(fullName, "First Name min 3 characters")
  }else{
    setSuccessFor(fullName);
  }

  if(emailValue === '') {
		setErrorFor(email, "Enter a valid email");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

  if(mobileValue===''){
    setErrorFor(mobile, "Enter a valid mobile number")
  }else if(mobileValue.length!=10){
    setErrorFor(mobile, "Mobile Number should be of 10 digits")
  }else{
    setSuccessFor(mobile)
  }
	
	if(passwordValue === '') {
		setErrorFor(password, "Password can't be blank");
	}else if(passwordValue.length<8){
    setErrorFor(password, "Minimum password length should be 8 characters")
  }
  else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, "Password can't be blank");
	}
  else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Password does not match');
	} else{
		setSuccessFor(password2);
	}

}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["email"] = document.getElementById("email").value;
  formData["mobile"] = document.getElementById("mobile").value;
  
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("signup").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.mobile;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                     <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
  selectedRow = null;
}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("mobile").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.mobile;
}

function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
      row = td.parentElement.parentElement;
      document.getElementById("signup").deleteRow(row.rowIndex);
      resetForm();
  }
}

function validate() {
  isValid = true;
  if (document.getElementById("fullName").value == "") {
      isValid = false;
      document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
      isValid = true;
      if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
          document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}
