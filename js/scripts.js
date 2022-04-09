var textOverImages = document.getElementsByClassName("onClickTextOverImage");
var previousTextOverImage;

 $('.testimonials').slick({
       autoplay: true,
  autoplaySpeed: 10000,

 });

jQuery(document).ready(function ($) {
  $(".fa-bars").click(function () {
    $("nav").addClass("show");
  });

  $(".fa-xmark").click(function () {
    $("nav").removeClass("show");
  });

  $("a").click(function () {
    $("nav").removeClass("show");
  });

});

for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function () {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove("show");
      previousTextOverImage = this;
      classes.add("show");
    }
  };
}

function stopPropagation(event) {
  event.stopPropagation();
}

function donate() {
  let name = prompt("What is your name?");
  let phone = prompt("What is your phone number?");
  let age = prompt("How old are you?");
  if (
    name !== null &&
    name !== "" &&
    name !== undefined &&
    phone !== null &&
    phone !== "" &&
    phone !== undefined &&
    age !== null &&
    age !== "" &&
    age !== undefined
  ) {
    if (age >= 18) {
      alert(
        "Thank you, " +
          name +
          " 🌺 We'll call you shortly at " +
          phone +
          " to discuss your donation!"
      );
    } else {
      alert("Sorry, " + name + " you cannot donate. Minimum age is 18.");
    }
  } else {
    alert("Please, try to type some text. ");
  }
}

let donateButton = document.querySelector(".donate-button");
donateButton.addEventListener("click", donate);

function help() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let difference = prompt("Are you ready to make a difference 🐾 ?");
  difference = difference.toLocaleLowerCase().trim();
  if (
    name !== null &&
    name !== "" &&
    name !== undefined &&
    email !== null &&
    email !== "" &&
    email !== undefined &&
    difference !== null &&
    difference !== "" &&
    difference !== undefined
  )
    if (difference === "yes") {
      alert(
        "Great, " +
          name +
          "! You will receive an email shortly to " +
          email +
          ". Your help is extremely valuable 🌺"
      );
    } else {
      alert(
        "That's okay, " + name + ". Contact us in case you change your mind."
      );
    }
  else {
    alert("Please, try to type some text.");
  }
}

//USE OF AN ARRAY

function adopt() {
  //get user input
  userName = prompt("What is your name?");
  userPhone = prompt("What is your phone number?");
  userCatsNo = prompt("How many cats would you like to adopt? (max. 8)");

  //Validate prompt to avoid accepting null values
  if (
    userName == null ||
    userName.length == 0 ||
    /^\s+$/.test(userName) ||
    userPhone == null ||
    userPhone.length == 0 ||
    /^\s+$/.test(userPhone) ||
    userCatsNo == null ||
    userCatsNo.length == 0 ||
    /^\s+$/.test(userCatsNo)
  ) {
    alert("Please, answer all questions.");
  } else {
    //alert("Questions answered properly")
    var userChoice = []; //Declare array
    var size = userCatsNo; // Array size

    for (var i = 0; i < size; i++) {
      userChoice[i] = prompt(
        "Enter name of the cat no " + (i + 1) + " you wish to adopt "
      );
    }

    console.log(userChoice); //Print the array in the console
    window.alert(
      userName +
        ", thank you! We will contact you on " +
        userPhone +
        " about the adoption of: " +
        userChoice +
        " shortly :)"
    ); //show msg to user
    hide();
  }
}

//hide function to hide button after request
function hide() {
  document.getElementById("button").style.display = "none";
}

