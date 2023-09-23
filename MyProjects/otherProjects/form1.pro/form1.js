let user = [];
let div = [];
let masseg = [];
let upmasseg = [];
let forrm = document.getElementById("for");
let forrm0 = document.getElementById("for0");
let idd = document.getElementById("idd");
let eye1 = document.getElementById("eye1");
let eye2 = document.getElementById("eye2");
let eye3 = document.getElementById("eye3");
let hid = document.querySelector(".hid");
let inp = document.getElementById("inp");
let t = null;
let eren = true;
let eren1 = true;
let erenq = true;
let log = document.getElementById("log");
let log1 = document.getElementById("log1");
let cont = document.getElementById("cont");
let box = document.getElementById("box");

for (let i = 0; i < 7; i++) {
  user[i] = document.getElementById("user" + i);
  div[i] = document.getElementById("div" + i);
  masseg[i] = document.querySelector(".mass" + i);
  upmasseg[i] = document.getElementById("mad" + i);
}

for (let i = 0; i < 7; i++) {
  div[i].addEventListener("click", function () {
    for (let i1 = 0; i1 < 7; i1++) {
      div[i1].style.cssText = "box-shadow: none; outline: 1px solid #fff";
    }

    this.style.cssText =
      "box-shadow: rgb(0 0 0 / 30%) 4px 6px 9px 5px; outline: 4px solid #0095ff";
    if (i == 3) {
      div[i].style.boxShadow = "none";
    }
  });

  for (let i1 = 0; i1 < 7; i1++) {
    div[i1].addEventListener("click", function () {
      user[i1].focus();
    });
  }

  div[i].addEventListener("mouseover", function () {
    for (let i1 = 0; i1 < 7; i1++) {
      div[i1].style.backgroundColor = "#0000002e";
    }

    this.style.backgroundColor = "transparent";
  });
}

eye1.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  eye2.classList.toggle("fa-eye-slash");

  if (eren) {
    user[3].setAttribute("type", "text");
    user[4].setAttribute("type", "text");
    eren = false;
  } else if (eren == false) {
    user[3].setAttribute("type", "password");
    user[4].setAttribute("type", "password");
    eren = true;
  }
});
eye2.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  eye1.classList.toggle("fa-eye-slash");

  if (eren) {
    user[3].setAttribute("type", "text");
    user[4].setAttribute("type", "text");
    eren = false;
  } else if (eren == false) {
    user[3].setAttribute("type", "password");
    user[4].setAttribute("type", "password");
    eren = true;
  }
});

eye3.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");

  if (erenq) {
    user[6].setAttribute("type", "text");

    erenq = false;
  } else if (erenq == false) {
    user[6].setAttribute("type", "password");

    erenq = true;
  }
});

//the sheek of form//
let bb = 0;
let bb1 = 0;
for (let f = 0; f < 2; f++) {
  user[f].addEventListener("input", function (ev) {
    let state = true;
    let letter = "";
    let lett = 0;

    this.value = this.value.trim();

    for (let i = 0; i < this.value.length; i++) {
      if (this.value[i] == this.value[i + 1]) {
        if (this.value[i + 1] == this.value[i + 2]) {
          state = false;
          letter = this.value[i];
        }
      }
    }

    if (this.value.length > 11) {
      this.value = this.value.slice(0, 11);
    }

    if (f == 0) {
      if (user[0].value == "") {
        bb = 0;
        funccc1(0);
      }
      if (bb == 0) {
        user[0].value = user[0].value[0].toUpperCase() + user[0].value;
        user[0].value = user[0].value[0] + user[0].value.slice(2);
      }
      bb++;
    }
    //////////
    if (f == 1) {
      if (user[1].value == "") {
        bb1 = 0;
        funccc1(1);
      }
      if (bb1 == 0) {
        user[1].value = user[1].value[0].toUpperCase() + user[1].value;
        user[1].value = user[1].value[0] + user[1].value.slice(2);
      }
      bb1++;
    }

    for (let i = 0; i < this.value.length; i++) {
      if (
        this.value[i].includes(",") ||
        this.value[i].includes(".") ||
        this.value[i].includes(";") ||
        this.value[i].includes("'") ||
        this.value[i].includes('"')
      ) {
        lett++;
      }
    }

    if (this.value == "") {
      funccc1(f);
    } else if (this.value.length > 11 || this.value.length < 4) {
      funccc("Please enter between 4 to 11 characters", f);
    } else if (lett > 0) {
      funccc("Please do not enter the icon ( , ; : ' \" . )", f);
    } else if (state == false) {
      funccc(`Please do not repeat the symbol " ${letter} "`, f);
    } else if (this.value.includes(" ") == true) {
      funccc("Please do not add spaces", f);
    } else {
      funccc1(f);
    }
  });
}

user[2].addEventListener("input", function () {
  let sheeck = 0;

  this.value = this.value.trim();

  for (let v = 0; v < this.value.length; v++) {
    if (this.value[v] == "@") {
      sheeck++;
    }
  }

  if (this.value == "") {
    funccc1(2);
  } else if (this.value.includes("@") == false) {
    funccc("Please enter the code '@'", 2);
  } else if (this.value[0] == "@") {
    funccc("Please enter a caracters before '@'", 2);
  } else if (sheeck > 1) {
    funccc("Please enter the '@' code once", 2);
  } else if (this.value[this.value.length - 1] == "@") {
    funccc("Please enter a caracters after '@'", 2);
  } else if (this.value.includes(" ") == true) {
    funccc("Please do not add spaces", 2);
  } else {
    upmasseg[2].style.cssText = "visibility: unset; opacity: 0;";
  }
});

user[3].addEventListener("input", function () {
  let state = true;
  let letter = "";
  let couunt = 0;
  let couunt1 = 0;
  let x = 0;
  let dd = 100;
  let cov = 0;

  if (this.value.length > 22) {
    this.value = this.value.slice(0, 22);
  }

  for (let i = 0; i < this.value.length; i++) {
    if (this.value[i] == this.value[i + 1]) {
      if (this.value[i + 1] == this.value[i + 2]) {
        state = false;
        letter = this.value[i];
      }
    }

    if (isNaN(+this.value[i]) == false) {
      couunt++;
    }

    if (isNaN(+this.value[i]) == true) {
      cov++;
    }

    if (
      this.value[i].includes("@") ||
      this.value[i].includes("$") ||
      this.value[i].includes("&") ||
      this.value[i].includes("#") ||
      this.value[i].includes("!") ||
      this.value[i].includes(")") ||
      this.value[i].includes("(") ||
      this.value[i].includes("{") ||
      this.value[i].includes("}") ||
      this.value[i].includes("]") ||
      this.value[i].includes("[") ||
      this.value[i].includes("^") ||
      this.value[i].includes("%") ||
      this.value[i].includes("?") ||
      this.value[i].includes(">") ||
      this.value[i].includes("<")
    ) {
      couunt1++;
    }
  }

  if (this.value == "") {
    funccc1(3);
  } else if (this.value.length > 22 || this.value.length < 12) {
    funccc("Enter a word larger than 12 and less than 23", 3);
  } else if (state == false) {
    funccc(`Please do not repeat the symbol " ${letter} "`, 3);
  } else if (cov < 9) {
    funccc("Please enter at lest 9 characters", 3);
  } else if (couunt < 3) {
    funccc("Please enter at least 3 numbers", 3);
  } else if (couunt1 < 1) {
    funccc("Please contain the floor at least 1 symbol such as(&,$,!,#,@)", 3);
  } else {
    funccc1(3);
  }

  if (this.value.length > 22 || this.value.length < 7) {
    dd -= 20;
  }
  if (cov < 9) {
    dd -= 20;
  }
  if (state == false) {
    dd -= 20;
  }
  if (couunt < 3) {
    dd -= 20;
  }
  if (couunt1 < 1) {
    dd -= 20;
  }
  if (this.value == "") {
    dd = 0;
  }

  if (dd == 20) {
    idd.style.backgroundColor = "rgb(255,0,0)";
    inp.innerHTML = "The Password Is Very Weak 20%";
    inp.style.color = "rgb(255,0,0)";
    div[3].style.cssText = "border: 4px solid rgb(255,0,0)";
  } else if (dd == 40) {
    idd.style.backgroundColor = "rgb(255 ,51, 0)";
    inp.innerHTML = "The Password Is Medium 40%";
    inp.style.color = "rgb(255 ,51, 0)";
    div[3].style.cssText = "border: 4px solid rgb(255 ,51, 0)";
  } else if (dd == 60) {
    idd.style.backgroundColor = "rgb(251 ,102, 0)";
    inp.innerHTML = "Good Password 60%";
    inp.style.color = "rgb(251 ,102, 0)";
    div[3].style.cssText = "border: 4px solid rgb(251 ,102, 0)";
  } else if (dd == 80) {
    idd.style.backgroundColor = "rgb(0,153,0)";
    inp.innerHTML = "The Password Is Strong 80%";
    inp.style.color = "rgb(0,153,0)";
    div[3].style.cssText = "border: 4px solid rgb(0,153,0)";
  } else if (dd == 100) {
    idd.style.backgroundColor = "rgb(0,255,0)";
    inp.innerHTML = "The Password Is Very Strong 100%";
    inp.style.color = "rgb(0,255,0)";
    div[3].style.cssText = "border: 4px solid rgb(0,255,0)";
  } else {
    inp.innerHTML = "";
  }

  idd.style.width = dd + "%";
});

user[4].addEventListener("input", function () {
  let hh = 0;
  // let tt = "kjdgffgj";
  // tt.
  //  if (this.value.length > 1) {
  //     this.value = this.value.trim();
  //     this.value[0] = "uu";
  //     console.log(this.value[0].toUpperCase());
  //  }

  // this.value = "";

  if (this.value.length > 22) {
    this.value = this.value.slice(0, 22);
  }

  if (this.value == "") {
    funccc1(4);
  } else if (user[3].value != user[4].value) {
    funccc(`Please confirm the password correctly`, 4);
  } else {
    funccc1(4);
  }
});

user[5].addEventListener("input", function () {
  let sheeck = 0;

  this.value = this.value.trim();

  for (let v = 0; v < this.value.length; v++) {
    if (this.value[v] == "@") {
      sheeck++;
    }
  }

  if (this.value == "") {
    funccc1(5);
  } else if (this.value.includes("@") == false) {
    funccc("Please enter the code '@'", 5);
  } else if (this.value[0] == "@") {
    funccc("Please enter a caracters before '@'", 5);
  } else if (sheeck > 1) {
    funccc("Please enter the '@' code once", 5);
  } else if (this.value[this.value.length - 1] == "@") {
    funccc("Please enter a caracters after '@'", 5);
  } else if (this.value.includes(" ") == true) {
    funccc("Please do not add spaces", 5);
  } else {
    funccc1(5);
  }
});

forrm.addEventListener("submit", function (event) {
  for (let f = 0; f < 2; f++) {
    let state = true;
    let letter = "";
    let lett = 0;

    for (let i = 0; i < user[f].value.length; i++) {
      if (user[f].value[i] == user[f].value[i + 1]) {
        if (user[f].value[i + 1] == user[f].value[i + 2]) {
          state = false;
          letter = user[f].value[i];
        }
      }
    }

    for (let iz = 0; iz < user[f].value.length; iz++) {
      if (
        user[f].value[iz].includes(",") ||
        user[f].value[iz].includes(".") ||
        user[f].value[iz].includes(";") ||
        user[f].value[iz].includes("'") ||
        user[f].value[iz].includes('"')
      ) {
        lett++;
      }
    }

    if (user[f].value == "") {
      funccc0("Please fill out the field", f);
      event.preventDefault();
    } else if (user[f].value.length > 11 || user[f].value.length < 4) {
      event.preventDefault();
    } else if (lett > 0) {
      event.preventDefault();
    } else if (state == false) {
      event.preventDefault();
    } else if (user[f].value.includes(" ") == true) {
      event.preventDefault();
    } else {
      funccc1(f);
    }
  }
  // ////////////////////////////////////////////////////////////////////////////////

  let sheeck = 0;

  for (let v = 0; v < user[2].value.length; v++) {
    if (user[2].value[v] == "@") {
      sheeck++;
    }
  }

  if (user[2].value == "") {
    funccc0("Please fill out the field", 2);
    event.preventDefault();
  } else if (user[2].value.includes("@") == false) {
    event.preventDefault();
  } else if (user[2].value[0] == "@") {
    event.preventDefault();
  } else if (sheeck > 1) {
    event.preventDefault();
  } else if (user[2].value[user[2].value.length - 1] == "@") {
    event.preventDefault();
  } else if (user[2].value.includes(" ") == true) {
    event.preventDefault();
  } else {
    upmasseg[2].style.cssText = "visibility: unset; opacity: 0;";
  }
  sheeck = 0;

  ///////////////////////////////////////////////////////////////////////////////////////////

  let state = true;
  let letter = "";
  let couunt = 0;
  let couunt1 = 0;
  let cov = 0;

  for (let i = 0; i < user[3].value.length; i++) {
    if (user[3].value[i] == user[3].value[i + 1]) {
      if (user[3].value[i + 1] == user[3].value[i + 2]) {
        state = false;
        letter = user[3].value[i];
      }
    }

    if (isNaN(+user[3].value[i]) == false) {
      couunt++;
    }

    if (isNaN(+user[3].value[i]) == true) {
      cov++;
    }

    if (
      user[3].value[i].includes("@") ||
      user[3].value[i].includes("$") ||
      user[3].value[i].includes("&") ||
      user[3].value[i].includes("#") ||
      user[3].value[i].includes("!") ||
      user[3].value[i].includes(")") ||
      user[3].value[i].includes("(") ||
      user[3].value[i].includes("{") ||
      user[3].value[i].includes("}") ||
      user[3].value[i].includes("]") ||
      user[3].value[i].includes("[") ||
      user[3].value[i].includes("^") ||
      user[3].value[i].includes("%") ||
      user[3].value[i].includes("?") ||
      user[3].value[i].includes(">") ||
      user[3].value[i].includes("<")
    ) {
      couunt1++;
    }
  }

  if (user[3].value == "") {
    funccc0("Please fill out the field", 3);
    event.preventDefault();
  } else if (user[3].value.length > 22 || user[3].value.length < 7) {
    event.preventDefault();
  } else if (state == false) {
    event.preventDefault();
  } else if (cov < 9) {
    event.preventDefault();
  } else if (couunt < 3) {
    event.preventDefault();
  } else if (couunt1 < 1) {
    event.preventDefault();
  } else {
    funccc1(3);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////

  let hh = 0;

  if (user[4].value == "") {
    funccc0("Please fill out the field", 4);
    event.preventDefault();
  } else if (user[3].value != user[4].value) {
    event.preventDefault();
  } else {
    funccc1(4);
  }
});

forrm0.addEventListener("submit", function (event) {
  let sheeck = 0;

  for (let v = 0; v < user[2].value.length; v++) {
    if (user[5].value[v] == "@") {
      sheeck++;
    }
  }

  if (user[5].value == "") {
    funccc0("Please fill out the field", 5);
    event.preventDefault();
  } else if (user[5].value.includes("@") == false) {
    event.preventDefault();
  } else if (user[5].value[0] == "@") {
    event.preventDefault();
  } else if (sheeck > 1) {
    event.preventDefault();
  } else if (user[5].value[user[5].value.length - 1] == "@") {
    event.preventDefault();
  } else if (user[5].value.includes(" ") == true) {
    event.preventDefault();
  } else {
    upmasseg[5].style.cssText = "visibility: unset; opacity: 0;";
  }
  sheeck = 0;
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (user[6].value == "") {
    funccc0("Please fill out the field", 6);
    event.preventDefault();
  } else {
    funccc1(6);
  }
});

function funccc(f, h) {
  masseg[h].innerHTML = f;
  upmasseg[h].style.cssText = "visibility: unset; opacity: 1;";
}

function funccc0(f, h) {
  masseg[h].innerHTML = f;
  upmasseg[h].style.cssText = "visibility: unset; opacity: 1;";
  t = setTimeout(function () {
    funccc1(h);
  }, 1500);
}

function funccc1(h1) {
  upmasseg[h1].style.cssText = "visibility: unset; opacity: 0;";
}

log.addEventListener("mousedown", function () {
  box.style.cssText = "transform: rotateY(0deg);";
});
log1.addEventListener("mousedown", function () {
  box.style.cssText = "transform: rotateY(180deg);";
});
// let rt = 0;
//  let tb = setInterval(() => {
 

  //   document.querySelector(".connect0mm").style.background = `linear-gradient(${rt}deg, rgb(255 0 0), #4a0070)`;
  //   if (rt >= 360) {
  //     rt = 0;
  //   }
  //    rt+=2;
  // });

 