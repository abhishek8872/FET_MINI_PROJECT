let logIn = (e) => {
    e.preventDefault();
    let url = "http://localhost:3000/users/";

    let email = $("#email").val();
    console.log(email);

    let password = $("#password").val();
    console.log(password);

    $.get(url, (res, status, req) => {
      console.log("Response: " + res);

      let flag = 0;

      for (let i = 0; i < res.length; i++) {
        if (res[i].email == email && res[i].password == password) {
          // localStorage.setItem("name", res[i].first_name);
          localStorage.setItem("email", res[i].email);
          localStorage.setItem("name", res[i].first_name);
          localStorage.setItem("id", res[i].id);
          localStorage.setItem("profile-pic", res[i].profile);
          localStorage.setItem("mobile", res[i].mobile);


          flag = 1;
          window.location.href = 'dashboard.html';
        }
      }

      if (flag == 0) {
        alert("Invalid Credentials!");
      }

      console.log(status);

      console.log(req);
    })
  }