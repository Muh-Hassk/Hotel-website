function hasOnlyAlphabets(input) {
	// Regular expression to match only alphabets with no spaces
	return /^[a-zA-Z]+$/.test(input);
  }

  // 
  function logout() {
	sessionStorage.clear();
	window.location.href = "login.html";
  }

  

  // To send the Feed Back
function FedBack() {
	if(
		 checkname()&
		 checkEmailF()& 
		 CheckFeedBack()
		 ) 
		 {
		return true;
	}
	else {
		return false;
	}

	
};
function checkname() {
	let nameF = document.getElementById("name").value;
	// If he didn't Entered a Name 
	if(nameF.length == 0) {
		errFedname.style.color = "red";
		errFedname.innerHTML = "Please enter your name";
		errFedname.style.marginLeft = "290px";
		errFedname.style.fontSize = '12px';
		return false;
	}
	// If name contains anything but alphabet
	else if (!hasOnlyAlphabets(nameF)) {
		errFedname.style.color = "red";
		errFedname.innerHTML = "Name must be Only Alphabet";
		errFedname.style.marginLeft = "260px";
		errFedname.style.fontSize = '12px';
		return false;
	}
	// Correct Name
	else {
		errFedname.innerHTML = "";
		return true;
	}
}
function checkEmailF() {
	let mailF = document.getElementById("email").value;
	// Email Regex
	var emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	// if the right format entered 
	if (mailF.match(emailformat)) { 
		errFedMail.innerHTML = "";
		return  true;
}
// If he didn't Entered an Email
else if (mailF.length == 0) {
	errFedMail.style.color = "red";
	errFedMail.innerHTML = "Please Enter your E-mail";
	errFedMail.style.marginLeft = "285px";		
	errFedMail.style.fontSize = '12px';
	return false;
}

// if he didn't Enter the Right Format
else {
	errFedMail.style.color = "red";
	errFedMail.innerHTML = "Please Enter The Right Email Format";
	errFedMail.style.marginLeft = "220px";	
	errFedMail.style.fontSize = '12px';
		return false;
}
};

function CheckFeedBack() {
	let feedBackMs = document.getElementById("feedback").value;

	// if feed back Message is empty
	if(feedBackMs.length == 0){
		errFedMs.innerHTML = "Please Enter Your Feed Back"
		errFedMs.style.marginLeft = "241px";
		errFedMs.style.fontSize = '12px';
		errFedMs.style.color = "red";
		return false;

	}
	else{
		errFedMs.innerHTML = "";
		return true;
	}
}

function signup() {
	event.preventDefault();
	//registering inputs by the user to a variable
	console.log("love u")
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var username = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	var repass = document.getElementById("confirm-password").value;
	var phonenumber = document.getElementById("Phonenumber").value;
	
	// creating the object to be inserted in localStorage
	var user = {
	  firstname: firstname,
	  lastname: lastname,
	  email: email,
	  username: username,
	  password: pass,
	  repass:confirm-password,
	  phonenumber: phonenumber
	};
	if (!checkRegister()) {

	  } else {
		//storing values in the localstorage
		var json = JSON.stringify(user);
		localStorage.setItem(username, json);
		console.log("User Added")

		//after 2 secs redirec the user to the login
		setTimeout(function () {
		  window.location.href = "/Users/muhammedhassan/Desktop/Hotel-System/Login.html";
		}, 500);
	  }
	}
	function checkLname() {
		var lname = document.getElementById("lastname").value;
		errLname.style.marginLeft = "0px";
		// if he didn't Enters a Last Name
		if (lname.length == 0) {
			errLname.style.color = "red";
			errLname.innerHTML = "Please enter a Last name";
			errLname.style.marginLeft = "255px";
			errLname.style.fontSize = '12px';
			return false;
		}
		// if name is not within the Req length
		else if (lname.length <= 2 || lname.length > 15) {
			errLname.style.color = "red";
			errLname.innerHTML = "Last name Must be between 2 and 15";
			errLname.style.marginLeft = "190px";
			errLname.style.fontSize = '12px';
			return false;
		}
		// if name contains anything but alphabet
		else if (!hasOnlyAlphabets(lname)) {
			errLname.style.color = "red";
			errLname.innerHTML = "Last name can contain only alphabet characters";
			errLname.style.marginLeft = "135px";
			errLname.style.fontSize = '12px';
			return false;
		  }
		
		else {
			errLname.innerHTML = "";
			return true;
		}
	}
	function checkFname() {
		var fname = document.getElementById("firstname").value;
				// if he didn't Enters a Last Name
		if (fname.length == 0) {
			errFname.style.color = "red";
			errFname.innerHTML = "Please enter a first name";
			errFname.style.marginLeft = "255px";
			errFname.style.fontSize = '12px';
			return false;
		}
				// if name is not within the Req length
		else if (fname.length <= 2 || fname.length >= 15) {
			errFname.style.color = "red";
			errFname.innerHTML = "First name Must be between 2 and 15";
			errFname.style.marginLeft = "190px";
			errFname.style.fontSize = '12px';
			return false;
		}
				// if name contains anything but alphabet
		else if (!hasOnlyAlphabets(fname)) {
			errFname.style.color = "red";
			errFname.innerHTML = "First name can contain only alphabet characters";
			errFname.style.marginLeft = "135px";
			errFname.style.fontSize = '12px';
			return false;
		  }
		else {
			errFname.innerHTML = "";
			return true;
		}
	}
	function checkEmail() {
		var usrMail = document.getElementById("email").value;
		// Regex for Email Format
		var emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		// If he entered The Right Format
		if (usrMail.match(emailformat)) { 
			errEmail.innerHTML = "";
			return  true;
	}
	// If he didn't Entered an Email
	else if (usrMail.length == 0) {
		errEmail.style.color = "red";
		errEmail.innerHTML = "Please Enter your E-mail";
		errEmail.style.marginLeft = "283px";		
		errEmail.style.fontSize = '12px';
		return false;
	}
	// He didn't Entered The Right Format
	else {
		errEmail.style.color = "red";
			errEmail.innerHTML = "Please Enter The Right Email Format";
			errEmail.style.marginLeft = "220px";	
			errEmail.style.fontSize = '12px';
			return false;
	}
}
function checkUsername() {
	let user = localStorage.getItem(username.value);
	var usrname = document.getElementById("username").value;
	// If he Didn't Enter Username
	if (usrname.length == 0) {
	  errUname.style.color = "red";
	  errUname.innerHTML = "Please Enter your User name";
	  errUname.style.marginLeft = "233px";
	  errUname.style.fontSize = '12px';

	  return false;

	}
	// If username starts with a Number 
	else if (!isNaN(usrname.charAt(0))) {
	  errUname.innerHTML = "User name can't Start with a number";
	  errUname.style.color = "red";
	  errUname.style.marginLeft = "193px";
	  errUname.style.fontSize = '12px';

	  return false;

	} // if he enteres user name that belong to other user
	else if (user != null) {
	  errUname.style.color = "red";
	  errUname.innerHTML = "This Username Already Exists";
	  errUname.style.marginLeft = "230px";
	  errUname.style.fontSize = '12px';
	  return false
	}
	// Correct UserName Format
	else {
	  errUname.innerHTML = "";
	  return true;
	}
  }

function phoneNum (){
	var phn = document.getElementById("Phonenumber").value;
	var mNumRegex = /^[966]\d{11}$/ // A regex that only Accepts Numbers Starts With 966 And repeated 11 Time After He found The First Who Matches The Pattren
	let str = String(phn); 
	var res = str.search(mNumRegex);
	// Correct Format for PhoneNumber
	if (res >= 0 && phn.charAt(3) == "5" && phn.length == 12 )  { 
		PhoneError.innerHTML = " ";
		return true;
	}
	// if he didn't Entered a PhoneNumber
	else if(phn.length == 0 ) {
		PhoneError.style.color = "red";
		PhoneError.innerHTML = "Please Enter Your Phone Number";
		PhoneError.style.marginLeft = "178px";
		PhoneError.style.fontSize = '12px';
		return false;
	}
	// He enterd a false format for PhoneNumber
	else if (res < 0){
		PhoneError.style.color = "red";
		PhoneError.innerHTML = "Please Enter Your Phone Number Correctely";
		PhoneError.style.fontSize = '12px';
		PhoneError.style.marginLeft = "120px";
		return false;
	}
}
function checkRepass() {
	var pass = document.getElementById("password").value;
	var repass = document.getElementById("confirm-password").value;
	// To make sure that password values matches
	var ressss = repass.localeCompare(pass);
	
	// no password enterd
	if (repass.length == 0) {
		errSPass.style.color = "red";
		errSPass.innerHTML = "Please enter a Re-password";
		errSPass.style.marginLeft = "190px";
		errSPass.style.fontSize = "12px";

		return false;
	  } 
	  // if the password don't match
	  else if (pass.length >=6 && ressss !== 0) {
		errSPass.style.color = "red";
		errSPass.style.fontSize = "12px";
		errSPass.innerHTML = "Password and Re-Password Dosen't Match";
		errSPass.style.marginLeft = "105px";
	  }
	  else {
		errSPass.innerHTML = "";
		return true;
	  }
	
}

function checkPass() {
	var pass = document.getElementById("password").value;
	// no password enterd
	if (pass.length == 0) {
		errfPass.style.color = "red";
		errfPass.innerHTML = "Please enter a password";
		errfPass.style.marginLeft = "265px";
		errfPass.style.fontSize = "12px";
		return false;
	  } 
	  // password less than 6
	  else if (pass.length < 6) {
		errfPass.style.color = "red";
		errfPass.innerHTML = "Password at least of length 6";
		errfPass.style.marginLeft = "242px";
		errfPass.style.fontSize = "12px";
		return false;
	  }

	  // Valid password
		else if (pass.length >=6 ) {
			errfPass.innerHTML = "";
			
		return true
	}
}
	function checkRegister() {
	if (checkLname() &checkFname() &checkEmail() &checkPass() &phoneNum() &checkRepass()&checkUsername()) {	
		
		return true;
	  } else {
		
		return false;
	  }
	}

	function login() {
		event.preventDefault();
		console.log("Working")
		var username = document.getElementById("username").value;
		var pass = document.getElementById("password").value;
		var user = localStorage.getItem(username);
        data = JSON.parse(user);
		console.log(data)
		// if he didn't Enter a username
		if (username.length == 0) 
		{
			console.log("Null")
			errUnameL.style.color = "red";
			errUnameL.innerHTML = "Please enter username";
			errUnameL.style.fontSize = "12px";
			errUnameL.style.marginLeft = "265px";
			return false
		}
		  // if he entered invalid user name
		  else if(user == null) 
		{
			errUnameL.style.color = "red";
			errUnameL.innerHTML = "Please enter a correct username";
			errUnameL.style.fontSize = "12px";
			errUnameL.style.marginLeft = "220px";
			return false
		}

		    // if user enterd a Correct user name but no password
			else if (username == data.username && pass.length == 0) {
				errUnameL.innerHTML = "";
				errPassL.style.color = "red";
			errPassL.style.fontSize = "12px";
			errPassL.style.marginLeft = "265px";
			errPassL.innerHTML = "Please enter a password";
				return false

		 // if he entered the correct user an passwords
	    }else if (username == data.username && pass == data.password) {
			sessionStorage.setItem("logged", user);
			console.log("added")
			//after 2 secs redirec the user to the homepage
			setTimeout(function () {
			  window.location.href = "Home.html";
			}, 2000);
		  } else {
			// if password is incorrect then show this msg
			errPassL.style.color = "red";
			errPassL.style.fontSize = "12px";
			errPassL.style.marginLeft = "225px";
			errPassL.innerHTML = "Please enter a correct password";
			console.log("False Pass")
			return false
		  }		  
		}

		function numOfGuests() { 
			let numbersG = [1, 2, 3, 4, 5];
			let textGs = document.getElementById("guestsNum"); 
			let index = 0; 
			textGs.innerHTML = numbersG[index];
			
			function nextNum() { 
				 // To change index and if it became last index it loops back to first index in array
			  index = (index + 1) % numbersG.length; 
			  textGs.innerHTML = numbersG[index];
			} 
			
			function prevNum() { 
				 // To change index and if it became Zero it loops back to last index in array
			  index = (index - 1 + numbersG.length) % numbersG.length; 
			  textGs.innerHTML = numbersG[index];
			} 
			
			document.querySelector(".ne").addEventListener("click", nextNum); 
			document.querySelector(".pre").addEventListener("click", prevNum); 
		  }
		  function RoomTypes() { 
			// so user can click next and prev then the innerHtml changes rather than creating a new Element
			let Suites1 = ["Junior Suite", "Premium Suite", "Penthouse Suite"];

			let TextRm = document.getElementById("RoomTy");
			TextRm.innerHTML = Suites1[0];
			let index = 0;  	
			function nextRoom() {   
			  TextRm.style.display = "none"; 
			  // To change index and if it became last index it loops back to first index in array
			  index = (index + 1) % Suites1.length;
			  console.log(index);
			  TextRm.innerHTML = Suites1[index];
			  TextRm.style.display = "initial"; 
			  console.log("Booking information:");
			} 	
			function prevRoom() { 
			  // To change index and if it became zero it loops back to last index in array
			  TextRm.style.display = "none"; 
			  index = (index - 1 + Suites1.length) % Suites1.length; 
			  console.log(index);
			  TextRm.innerHTML = Suites1[index];
			  TextRm.style.display = "initial";  
			}
			// only event Listeners if user clicks on next or prev so the Text Changes
			document.querySelector(".neRoom").addEventListener("click", nextRoom); 
			document.querySelector(".preRoom").addEventListener("click", prevRoom);
		  }
		  function Book() {
			// Generate a unique booking ID
			const bookingId = Math.floor(Math.random() * 1000000) + 1;
			
			// Get the booking information from the form
			const checkInDate = document.getElementById("check-in-date").value;
			const checkOutDate = document.getElementById("check-out-date").value;
			const numGuests = document.getElementById("guestsNum").textContent;
			const roomType = document.getElementById("RoomTy").textContent;
			const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').textContent;
			const usernameLogged = logged.username;
			// Create a booking object
			const booking = {
			  usernameLogged,
			  bookingId,
			  checkInDate,
			  checkOutDate,
			  numGuests,
			  roomType,
			  paymentMethod
			};
			// Store the booking information in local storage with a unique booking ID
			localStorage.setItem("booking_" + bookingId, JSON.stringify(booking));
			// Display a success message to the user
			alert("Booking successful!");
			// Optionally, return the booking ID so it can be used for further processing
			return bookingId;
		  }
		  if (sessionStorage.getItem("logged") != null) {
			document.getElementById("loginNav").style.display = "none";
			document.getElementById("registerNav").style.display = "none";
			document.getElementById("logoutNav").style.display = "block";
			var logged = JSON.parse(sessionStorage.getItem("logged"));
			document.getElementById("Booking").innerHTML = "Book Room";
			document.getElementById("ShowBok").innerHTML = "Show Booking";
			ShowBok
			document.getElementById("logoutNav").innerHTML =
			  "Welcome " + logged.username + ",\n<a href='Home.html' onclick='logout()'>Logout</a>";
			  
		  }
		  if (document.URL.includes("showBookings.html")) {
			console.log("hello");
			var browseApartment = document.getElementById("browseApartment");
		  
			// Print the header row
			browseApartment.innerHTML +=
  "" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "Check in Date" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" +
  "Check Out Date" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "Number of Guests" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "Room Type" +
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
  "Booking ID" +
  "<br>";
browseApartment.innerHTML +=
  "_____________________________________________________________________________________________________________________<br>";

			// Loop through all the keys in the local storage
			for (let i = 0; i < localStorage.length; i++) {
			  const key = localStorage.key(i);
		  
			  // Check if the key starts with "booking_"
			  if (key.startsWith("booking_")) {
				 
				// Get the booking information from the key
				const bookingInfoJson = localStorage.getItem(key);
				const bookingInfo = JSON.parse(bookingInfoJson);
			
				// Check if the username in the booking information matches the username of the logged user
				// So only Bookings user made appears
				if (bookingInfo.usernameLogged === logged.username) {
					document.getElementById("noApartment").style.display = "none";     
				  // Display the booking information on the page
				  browseApartment.innerHTML +=
					" " +
					"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					bookingInfo.checkInDate +
					"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +					"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +

					bookingInfo.checkOutDate +
					"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +

					bookingInfo.numGuests +
					"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					bookingInfo.roomType +
					"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
					bookingInfo.bookingId +
					"<br> <br>";
				}
			}
		}
	}
						  
		  
		  //if its not logged in
		 else {
		}
		document.getElementById("logoutNav").onclick = function () {
		  sessionStorage.removeItem("logged");
		  window.location.href = "Home.html";
		}
	

	
	
		// These lines of codes to load images in Room types and to make it responsive and change when client presses on next and pre
		var slider_img = document.querySelector('.slider-img');
		var images = ['k1zru1-living-room.jpg.avif', 'rrdrp-guest-room-3.jpg.avif', 'bb00566630b770d2cfe20ef46f5604f7.jpg','chichhh-suites-specialty-daley-2313-living-room.jpg.avif'];
		var i = 0;
		function prev(){
			if(i <= 0) i = images.length;   
			i--;
			return setImg();             
		}
		function next(){
			if(i >= images.length-1) i = -1;
			i++;
			return setImg();             
		}
		function setImg(){
			return slider_img.setAttribute('src', "images/"+images[i]);
		}
		setImg();
		