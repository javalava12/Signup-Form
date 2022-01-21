var selectedRow= null;
let btnClear= document.querySelector('button');
let inputs= document.querySelectorAll('input');

const form = document.getElementById('form');
const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// let formData= JSON.parse(localStorage.getItem('formData')) || [];

const fsubmit = e => {
  let fname = document.getElementById('fname').value,
      lname = document.getElementById('lname').value,
      email = document.getElementById('email').value,
      mobile = document.getElementById('mobile').value;

  let formData = JSON.parse(localStorage.getItem('formData')) || [];

  let exist = formData.length && 
      JSON.parse(localStorage.getItem('formData')).some(data => 
          data.fname.toLowerCase() == fname.toLowerCase() && 
          data.lname.toLowerCase() == lname.toLowerCase()
      );

  if(!exist){
      formData.push({ fname, lname, email, pwd });
      localStorage.setItem('formData', JSON.stringify(formData));
      document.querySelector('form').reset();
      document.getElementById('fname').focus();
      alert("Account Created.\n\nPlease Sign In using the link below.");
  }
  else{
      alert("Ooopppssss... Duplicate found!!!\nYou have already submitted");
  }
  e.preventDefault();
}


form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});



function checkInputs() {
	
	const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const mobileValue = mobile.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

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
	
	if(firstnameValue === '') {
    setErrorFor(firstname, "Enter a valid name")
  } else if(firstnameValue.length<=2){
    setErrorFor(firstname, "First Name min 3 characters")
  }
  else {
		setSuccessFor(firstname);
	}

  if(lastnameValue === '') {
		setErrorFor(lastname, "Enter a valid name");
	} else if(lastnameValue.length<=2){
    setErrorFor(lastname, "Last Name min 3 characters")
  }
  else {
		setSuccessFor(lastname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, "Enter a valid email");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

  function isEmail(email) {
    
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
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
	}else if(password2Value<8){
    setErrorFor(password2,"Password should be of minimum 8 characters")
  }
  else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Password does not match');
	} else{
		setSuccessFor(password2);
	}

}
    var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];

		var n = 1;
		var x = 0;

  function AddRow(){

  var AddRown = document.getElementById('show');
  var NewRow = AddRown.insertRow(n);

  list1[x] = document.getElementById("fname").value;
  list2[x] = document.getElementById("lname").value;
  list3[x] = document.getElementById("email").value;
  list4[x] = document.getElementById("mobile").value;

  var cell1 = NewRow.insertCell(0);
  var cell2 = NewRow.insertCell(1);
  var cell3 = NewRow.insertCell(2);
  var cell4 = NewRow.insertCell(3);
  var cell5= NewRow.insertCell(4);
  cell5.innerHTML=`<button onClick='onEdit(this)'> Edit </button> 
                    <button onClick= 'onDelete(this)'> Delete </button>`

  cell1.innerHTML = list1[x];
  cell2.innerHTML = list2[x];
  cell3.innerHTML = list3[x];
  cell4.innerHTML = list4[x];

  n++;
  x++;

  btnClear.addEventListener('click', ()=>{
    inputs.forEach(input=> input.value='');
  })
}


  // function onDelete(){
  //   document.getElementById('fname').value='';
  //   document.getElementById('lname').value='';
  //   document.getElementById('email').value='';
  //   document.getElementById('mobile').value='';
    
  // }
    
  
  // function onEdit(){
  //   selectedRow=td.parentElement.parentElement;
  //   document.getElementById('fname').value = selectedRow.cells[0].innerHTML;
  //   document.getElementById('lname').value = selectedRow.cells[0].innerHTML;
  //   document.getElementById('email').value = selectedRow.cells[0].innerHTML;
  //   document.getElementById('mobile').value = selectedRow.cells[0].innerHTML;
  // }  


  
  
