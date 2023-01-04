let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let fname = id("fname"),
  email = id("email"),
  password = id("password"),
  mobile = id("mobile"),
  dob = id("dob"),
  form = id("form"),
  errorMsg = classes("error");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(fname, 0, "First Name cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(mobile, 2, "Mobile Number cannot be blank");
  engine(dob, 3, "Date of Birth cannot be blank");
  engine(password, 4, "Password cannot be blank");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

  }
};