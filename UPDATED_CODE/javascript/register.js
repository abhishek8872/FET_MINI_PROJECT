// const form = document.querySelector("form"),
// emailField = form.querySelector(".email-field"),
// emailInput = emailField.querySelector(".email");





// function checkEmail() {
//   const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//   if (!emailInput.value.match(emaiPattern)) {
//     return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
//   }
//   emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
// }



let register = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // checkEmail();


    let url = "http://localhost:3000/users/";

    if($("#first-name").val()!="" && $("#last-name").val()!="" && $("#email").val()!="" && $("#phone").val()!="" && $("#password").val()!="" && $("#confirm-password").val()!="")
    {
    if ($("#password").val() == $("#confirm-password").val()) {
      let body = {
        first_name: $("#first-name").val(),
        last_name: $("#last-name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        mobile: $("#phone").val(),

      }
      console.log("body: " + body);

      $.post(url, body, (response) => {
        console.log(response);

        $("form").submit();
        window.location.href = 'login.html';
      })



    } else {
      alert("password does not match");
    }
  }

else
{
   alert("All fields need to be filled!");
}
}