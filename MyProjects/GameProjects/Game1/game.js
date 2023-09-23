let v1 = document.getElementById("v1");
let te1 = document.getElementById("te1");
let bq1 = document.getElementById("bq1");
let bq2 = document.getElementById("bq2");
let upp = document.getElementById("upp");
let te2 = document.getElementById("te2");
let up = document.createElement("div");
let ul = document.createElement("ul");
let hid = document.createElement("div");
let rest = document.createElement("button");
let upup = document.createElement("upup");
let container = document.createElement("div");
let upplayer = document.createElement("div");
let sitting = document.createElement("div");
let sittengpage = document.createElement("div");
let player1 = document.createElement("div");
let forn = document.createElement("form");
let upset = document.createElement("div");
let valueplayer1 = document.createElement("p");
let textvalueplayer1 = document.createTextNode("0");
let poss = document.documentElement;
let player2 = document.createElement("div");
let valueplayer2 = document.createElement("p");
let textvalueplayer2 = document.createTextNode("0");
let like = document.createElement("div");
let textlike = document.createTextNode("0");
let player11 = "";
let player22 = "";
let inbox1 = new Array();
let inbox2 = new Array();
let hoverinbox1 = new Array();
let hoverinbox2 = new Array();
let li = new Array();
let di = new Array();
let circle = new Array();
let circlesmall = new Array();
let box = new Array();
let upbox = new Array();
let sheck = new Array();
let set = new Array();
let shec = new Array();
let arr = new Array();
let arr1 = [
  "play with the Computer",
  "Rename The Players",
  "player",
  "player",
  "player",
];
let fd = true;
let red = true;
let le = true;
let calc = 0,
  calc1 = 0,
  calc2 = 0;
let fg = 0;
let fg1 = 0;
let r = 0;
let co = 0;
let top1 = 400;
let wi = 382;
let he = 800;

///////////////////////////////////////////////////////
for (let i = 0; i < 5; i++) {
  di[i] = document.createElement("div");
  if (i < 4) {
    di[i].className = "playerc";
  }
}
poss.style.setProperty("--wi", wi + "px");
poss.style.setProperty("--he", he + "px");
te1.value = "player 1";
te2.value = "player 2";
sitting.addEventListener("click", function () {
  if (red) {
    sittengpage.style.cssText = "height: 100%; padding: 20px;";
    red = false;
  } else if (red == false) {
    sittengpage.style.cssText = "height: 0; padding: 0px;";
    red = true;
  }
});
/////////////////////////////////////
di[4].className = "hid1";

// di[4].style.top = -(window.innerWidth / 2 - (wi / 2)) + "px";
di[0].append(player1);
di[1].append(player2);
di[2].append(valueplayer1);
di[3].append(valueplayer2);
valueplayer1.append(textvalueplayer1);
valueplayer2.append(textvalueplayer2);

upplayer.append(di[4], di[0], di[1], di[2], di[3]);
upplayer.className = "upplayer";
player1.classList.add("player1", "player");
player2.classList.add("player2", "player");
like.className = "like";

rest.innerHTML = "Rest";
rest.className = "rest";
sitting.className = "sitting";

for (let i = 0; i < 2; i++) {
  set[i] = document.createElement("div");
  li[i] = document.createElement("li");
  shec[i] = document.createElement("input");
  set[i].append(li[i], shec[i]);
  set[i].className = "set";
  li[i].innerHTML = arr1[i];
  li[i].className = "lii";
  forn.append(ul, set[i]);
  shec[i].className = "shekq";
  shec[i].type = "checkbox";
  shec[i].name = "shec";
  sittengpage.append(forn);
}
let n = true;
shec[0].addEventListener("click", function () {
  if (n) {
    rest.click();
    fg1 = true;
    n = false;
    fg = true;
    player2.innerHTML = "Computer [O]";
  } else {
    rest.click();
    fg1 = 0;
    n = true;
    player2.innerHTML = te2.value + " [O]";
  }
});
shec[1].type = "button";
shec[1].value = "Change";
shec[1].className = "s1";
shec[1].addEventListener("click", function () {
  upp.style.cssText = "transform: unset; visibility: unset; opacity: 1;";
});
sittengpage.className = "sittengpage";
hid.className = "hid";
upset.append(sitting, like);
upset.className = "upset";
up.prepend(sittengpage, upset, upplayer, rest);
up.className = "up";
container.className = "cont";
upup.append(up, container);
upup.className = "upup";
document.body.append(upup);
function funcm(s) {
  for (let i1 = 0; i1 < 9; i1++) {
    if (s == true && fg1 == true) {
      box[i1].style.pointerEvents = "none";
    } else {
      box[i1].style.pointerEvents = "unset";
    }
  }
}
/////////////////////////////////////////
player1.onclick = function () {
  r = 0;
  fd = true;
  this.style.backgroundColor = "rgb(255 0 0)";
  player2.style.backgroundColor = "rgb(80 80 80)";
};
player2.onclick = function () {
  r = 1;
  fd = false;
  this.style.backgroundColor = "rgb(255 0 0)";
  player1.style.backgroundColor = "rgb(80 80 80)";
};

for (let i = 0; i < 9; i++) {
  sheck[i] = undefined;
  inbox1[i] = document.createElement("div");
  inbox2[i] = document.createElement("div");
  hoverinbox1[i] = document.createElement("div");
  hoverinbox2[i] = document.createElement("div");
  box[i] = document.createElement("div");
  box[i].className = "box";
  upbox[i] = document.createElement("div");
  upbox[i].className = "upbox";
  upbox[i].append(box[i]);
  hoverinbox1[i].className = "hoverinbox1";
  hoverinbox2[i].className = "hoverinbox2";

  circle[i] = document.createElement("div");
  circlesmall[i] = document.createElement("div");

  circlesmall[i].className = "circlesmall";
  circle[i].className = "circle";
  container.prepend(upbox[i]);

  box[i].addEventListener("click", function () {
    co++;
    let rand = Number(Math.random() * 8).toFixed();
    let rand1 = Number(Math.random() * 3000).toFixed();

    if (sheck[0] == 1 && sheck[1] == 1 && sheck[2] == undefined) {
      rand = 2;
    } else if (sheck[0] == 1 && sheck[2] == 1 && sheck[1] == undefined) {
      rand = 1;
    } else if (sheck[0] == 1 && sheck[4] == 1 && sheck[8] == undefined) {
      rand = 8;
    } else if (sheck[0] == 1 && sheck[8] == 1 && sheck[4] == undefined) {
      rand = 4;
    } else if (sheck[0] == 1 && sheck[3] == 1 && sheck[6] == undefined) {
      rand = 6;
    } else if (sheck[0] == 1 && sheck[6] == 1 && sheck[3] == undefined) {
      rand = 3;
    } else if (sheck[1] == 1 && sheck[2] == 1 && sheck[0] == undefined) {
      rand = 0;
    } else if (sheck[1] == 1 && sheck[4] == 1 && sheck[7] == undefined) {
      rand = 7;
    } else if (sheck[1] == 1 && sheck[7] == 1 && sheck[4] == undefined) {
      rand = 4;
    } else if (sheck[2] == 1 && sheck[4] == 1 && sheck[6] == undefined) {
      rand = 6;
    } else if (sheck[2] == 1 && sheck[6] == 1 && sheck[4] == undefined) {
      rand = 4;
    } else if (sheck[2] == 1 && sheck[5] == 1 && sheck[8] == undefined) {
      rand = 8;
    } else if (sheck[2] == 1 && sheck[8] == 1 && sheck[5] == undefined) {
      rand = 5;
    } else if (sheck[3] == 1 && sheck[6] == 1 && sheck[0] == undefined) {
      rand = 0;
    } else if (sheck[3] == 1 && sheck[4] == 1 && sheck[5] == undefined) {
      rand = 5;
    } else if (sheck[3] == 1 && sheck[5] == 1 && sheck[4] == undefined) {
      rand = 4;
    } else if (sheck[4] == 1 && sheck[5] == 1 && sheck[3] == undefined) {
      rand = 3;
    } else if (sheck[4] == 1 && sheck[7] == 1 && sheck[1] == undefined) {
      rand = 1;
    } else if (sheck[4] == 1 && sheck[6] == 1 && sheck[2] == undefined) {
      rand = 2;
    } else if (sheck[4] == 1 && sheck[8] == 1 && sheck[0] == undefined) {
      rand = 0;
    } else if (sheck[5] == 1 && sheck[8] == 1 && sheck[2] == undefined) {
      rand = 2;
    } else if (sheck[6] == 1 && sheck[7] == 1 && sheck[8] == undefined) {
      rand = 8;
    } else if (sheck[6] == 1 && sheck[8] == 1 && sheck[7] == undefined) {
      rand = 7;
    } else if (sheck[7] == 1 && sheck[8] == 1 && sheck[6] == undefined) {
      rand = 6;
    }

    console.log(rand);
    player1.style.pointerEvents = "none";
    player2.style.pointerEvents = "none";
    if (r === 0) {
      inbox1[i].style.width = "90px";
      inbox2[i].style.width = "90px";
      circle[i].style.width = "0px";
      circle[i].style.height = "0px";
      circle[i].style.borderColor = "transparent";

      player2.style.backgroundColor = "rgb(255,0,0)";
      player1.style.backgroundColor = "rgb(80 80 80)";

      sheck[i] = 1;

      if (fd == false) {
        arr[arr.length] = i;
      }

      if (fd == true) {
        vccf(arr, rand1, rand, i);
      }

      r = 1;

      box[i].style.pointerEvents = "none";
    } else if (r === 1) {
      inbox1[i].style.width = "0px";
      inbox2[i].style.width = "0px";
      circle[i].style.width = "80px";
      circle[i].style.height = "80px";
      circle[i].style.borderColor = "#fff";

      player1.style.backgroundColor = "rgb(255,0,0)";
      player2.style.backgroundColor = "rgb(80 80 80)";

      sheck[i] = 0;

      if (fd == true) {
        arr[arr.length] = i;
      }

      if (fd == false) {
        vccf(arr, rand1, rand, i);
      }

      r = 0;
      box[i].style.pointerEvents = "none";
    }

    if (sheck[0] + sheck[4] + sheck[8] === 0) {
      pointer();
      calc += 1;
      valueplayer2.innerHTML = calc;
      player2.style.color = "rgb(0,255,0)";
      player1.style.color = "rgb(255,0,0)";
      trans();
      cseek(0, 4, 8);
    } else if (sheck[2] + sheck[4] + sheck[6] === 0) {
      pointer();
      calc += 1;
      valueplayer2.innerHTML = calc;
      player2.style.color = "rgb(0,255,0)";
      player1.style.color = "rgb(255,0,0)";
      trans();

      cseek(2, 4, 6);
    } else if (sheck[2] + sheck[4] + sheck[6] === 3) {
      pointer();
      calc1 += 1;
      valueplayer1.innerHTML = calc1;
      player1.style.color = "rgb(0,255,0)";
      player2.style.color = "rgb(255,0,0)";
      trans();
      cseek(2, 4, 6);
    } else if (sheck[0] + sheck[4] + sheck[8] === 3) {
      pointer();
      calc1 += 1;
      valueplayer1.innerHTML = calc1;
      player1.style.color = "rgb(0,255,0)";
      player2.style.color = "rgb(255,0,0)";
      trans();
      cseek(0, 4, 8);
    } else if (sheck[0] + sheck[1] + sheck[2] === 0) {
      pointer();
      calc += 1;
      valueplayer2.innerHTML = calc;
      player2.style.color = "rgb(0,255,0)";
      player1.style.color = "rgb(255,0,0)";
      trans();
      cseek(0, 1, 2);
    } else if (sheck[0] + sheck[1] + sheck[2] === 3) {
      pointer();
      player1.style.color = "rgb(0,255,0)";
      player2.style.color = "rgb(255,0,0)";
      calc1 += 1;
      valueplayer1.innerHTML = calc1;
      trans();
      cseek(0, 1, 2);
    } else if (sheck[0] + sheck[3] + sheck[6] === 0) {
      pointer();
      calc += 1;
      valueplayer2.innerHTML = calc;
      player2.style.color = "rgb(0,255,0)";
      player1.style.color = "rgb(255,0,0)";
      trans();
      cseek(0, 3, 6);
    } else if (sheck[0] + sheck[3] + sheck[6] === 3) {
      pointer();
      calc1 += 1;
      valueplayer1.innerHTML = calc1;
      player1.style.color = "rgb(0,255,0)";
      player2.style.color = "rgb(255,0,0)";
      trans();
      cseek(0, 3, 6);
    } else if (sheck[2] + sheck[5] + sheck[8] === 0) {
      pointer();
      calc += 1;
      valueplayer2.innerHTML = calc;
      player2.style.color = "rgb(0,255,0)";
      player1.style.color = "rgb(255,0,0)";
      trans();
      cseek(2, 5, 8);
    } else if (sheck[2] + sheck[5] + sheck[8] === 3) {
      pointer();
      calc1 += 1;
      valueplayer1.innerHTML = calc1;
      player1.style.color = "rgb(0,255,0)";
      player2.style.color = "rgb(255,0,0)";
      trans();
      cseek(2, 5, 8);
    } else if (sheck[6] + sheck[7] + sheck[8] === 0) {
      pointer();
      calc += 1;
      valueplayer2.innerHTML = calc;
      player2.style.color = "rgb(0,255,0)";
      player1.style.color = "rgb(255,0,0)";
      trans();
      cseek(6, 7, 8);
    } else if (sheck[6] + sheck[7] + sheck[8] === 3) {
      pointer();
      calc1 += 1;
      valueplayer1.innerHTML = calc1;
      player1.style.color = "rgb(0,255,0)";
      player2.style.color = "rgb(255,0,0)";
      trans();
      cseek(6, 7, 8);
    } else if (sheck[1] + sheck[4] + sheck[7] === 0) {
      pointer();
      calc += 1;
      valueplayer2.innerHTML = calc;
      player2.style.color = "rgb(0,255,0)";
      player1.style.color = "rgb(255,0,0)";
      trans();
      cseek(1, 4, 7);
    } else if (sheck[1] + sheck[4] + sheck[7] === 3) {
      pointer();
      calc1 += 1;
      valueplayer1.innerHTML = calc1;
      player1.style.color = "rgb(0,255,0)";
      player2.style.color = "rgb(255,0,0)";
      trans();
      cseek(1, 4, 7);
    } else if (sheck[3] + sheck[4] + sheck[5] === 0) {
      pointer();
      calc += 1;
      valueplayer2.innerHTML = calc;
      player2.style.color = "rgb(0,255,0)";
      player1.style.color = "rgb(255,0,0)";
      trans();
      cseek(3, 4, 5);
    } else if (sheck[3] + sheck[4] + sheck[5] === 3) {
      pointer();
      calc1 += 1;
      valueplayer1.innerHTML = calc1;
      player1.style.color = "rgb(0,255,0)";
      player2.style.color = "rgb(255,0,0)";
      trans();
      cseek(3, 4, 5);
    } else {
      if (co == 9) {
        calc2 += 1;
        like.innerHTML = calc2;
        trans();
      }
    }

    function pointer() {
      for (let i1 = 0; i1 < 9; i1++) {
        box[i1].style.pointerEvents = "none";
      }
      fg = false;
    }

    function cseek(a, b, c) {
      box[a].style.backgroundColor = "rgb(0,255,0)";
      box[b].style.backgroundColor = "rgb(0,255,0)";
      box[c].style.backgroundColor = "rgb(0,255,0)";
    }
    for (let c = 0; c < arr.length; c++) {
      box[arr[c]].style.pointerEvents = "none";
    }
  });

  function vccf(ar, ra1, ra, i) {
    ar[ar.length] = i;
    funcm(true);

    if (ar.length < 9) {
      while (
        ra == ar[0] ||
        ra == ar[1] ||
        ra == ar[2] ||
        ra == ar[3] ||
        ra == ar[4] ||
        ra == ar[5] ||
        ra == ar[6] ||
        ra == ar[7] ||
        ra == ar[8]
      ) {
        ra = Number(Math.random() * 8).toFixed();
      }

      let tu = setTimeout(() => {
        ran(true, ra, ar);
      }, ra1);
    }
  }
  if (fg1 != 0) {
    shec[0].style.pointerEvents = "none";
  }
  function ran(sf, ra, ar) {
    if (sf == true && fg == true) {
      box[ra].click();
      shec[0].style.pointerEvents = "unset";
      funcm(false);
      for (let b = 0; b < ar.length; b++) {
        box[ar[b]].style.pointerEvents = "none";
      }
    }
  }

  function trans() {
    player1.style.backgroundColor = "rgb(80 80 80)";
    player2.style.backgroundColor = "rgb(80 80 80)";
  }

  box[i].addEventListener("mouseover", function () {
    if (r == 1) {
      circlesmall[i].style.opacity = "0.5";
    } else {
      hoverinbox1[i].style.opacity = "0.5";
      hoverinbox2[i].style.opacity = "0.5";
    }
  });
  box[i].addEventListener("mouseout", function () {
    circlesmall[i].style.opacity = "0";
    hoverinbox1[i].style.opacity = "0";
    hoverinbox2[i].style.opacity = "0";
  });

  inbox1[i].classList.add("inbox1", "shar");
  inbox2[i].classList.add("inbox2", "shar");
  box[i].append(
    inbox1[i],
    inbox2[i],
    circle[i],
    circlesmall[i],
    hoverinbox1[i],
    hoverinbox2[i]
  );
}

rest.addEventListener("click", function () {
  player1.style.pointerEvents = "unset";
  player2.style.pointerEvents = "unset";
  player1.style.color = "rgb(255,255,255)";
  player2.style.color = "rgb(255,255,255)";
  player1.style.backgroundColor = "rgb(255,0,0)";
  player2.style.backgroundColor = "rgb(80 80 80)";
  co = 0;
  fd = true;
  for (let i1 = 0; i1 < 9; i1++) {
    arr.length = 0;
    box[i1].style.cssText =
      "backgroundColor :rgb(26 26 26); pointerEvents: unset;";
    circle[i1].style.cssText =
      "width: 0; height: 0; border-color: transparent;";
    inbox1[i1].style.cssText = "width: 0; height: 9px;";
    inbox2[i1].style.cssText = "width: 0; height: 9px;";
    sheck[i1] = undefined;
    r = 0;
  }
  if (typeof fg1 != "number") {
    fg1 = true;
  }
  if (fg1 != 0) {
    fg = true;
  }
});

valueplayer1.classList.add("player", "valueplayer1");
valueplayer2.classList.add("player", "valueplayer2");
like.append(textlike);
bq2.addEventListener("click", function () {
  player11 = te1.value.trim();
  player22 = te2.value.trim();
  if (player11 != "" && player22 != "") {
    upp.style.cssText =
      "background: transparent;  transform: scale(0.5); visibility: hidden; opacity: 0;";
    player1.innerHTML = `${player11} [X]`;
    player2.innerHTML = `${player22} [O]`;
  } else {
    upp.style.cssText =
      "background: transparent;  transform: scale(0.5); visibility: hidden; opacity: 0;";
    player1.innerHTML = `player 1 [X]`;
    player2.innerHTML = `player 2 [O]`;
  }
});
bq1.addEventListener("click", function () {
  upp.style.cssText =
    " background: transparent;  transform: scale(0.5); visibility: hidden; opacity: 0;";
  player1.innerHTML = `player 1 [X]`;
  player2.innerHTML = `player 2 [O]`;
});

window.addEventListener("load", function () {
  upp.style.cssText = "transform: unset; visibility: unset; opacity: 1;";
});
window.addEventListener("click", function (e) {
  if (e.target == upp) {
    upp.style.cssText =
      " background: transparent;  transform: scale(0.5); visibility: hidden; opacity: 0;";
    player1.innerHTML = `player 1 [X]`;
    player2.innerHTML = `player 2 [O]`;
  }
});
for (let i = 0; i < 9; i++) {
  window.addEventListener("mousemove", function (e) {
    let car = this.document
        .querySelectorAll(".upbox")
        [i].getBoundingClientRect(),
      xaxis1 = e.pageX - car.left,
      yaxis1 = e.pageY - car.top - window.scrollY;
    let car1 = di[4].getBoundingClientRect(),
      xaxis11 = e.pageX - car1.left,
      yaxis11 = e.pageY - car1.top - window.scrollY;

    if (
      xaxis1 < car.width + 70 &&
      xaxis1 > -70 &&
      yaxis1 < car.height + 70 &&
      yaxis1 > -70
    ) {
      poss.style.setProperty("--x" + i, xaxis1 + "px");
      poss.style.setProperty("--y" + i, yaxis1 + "px");
    } else {
      poss.style.setProperty("--x" + i, -70 + "px");
      poss.style.setProperty("--y" + i, -70 + "px");
    }

    poss.style.setProperty("--x1f", xaxis11 + "px");
    poss.style.setProperty("--y1f", yaxis11 + "px");
    this.document.querySelectorAll(".upbox")[
      i
    ].style.background = `radial-gradient(circle at var(--x${i}) var(--y${i}), #fff, 70px, #262626 70px)`;
    di[4].style.background = `radial-gradient(circle at var(--x1f) var(--y1f), transparent, 59px, #262626 114px)`;
  });
}
