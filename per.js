let poss = document.documentElement;
let ofx = 181;
poss.style.setProperty("--colo", `rgb(255, 255, 255)`);
poss.style.setProperty("--colo1", `rgb(255, 0, 0)`);

let li = [["Home"], ["AboutMe"], ["MyService"], ["MyWorke"], ["Connect"]];
let arrmenu = new Array();

class Menu {
  constructor(inner, hre, id) {
    this.inner = inner;
    this.hre = hre;
    this.id = id;
    this.ul = document.querySelector(".inhed ul");
    this.lic = document.createElement("li");
    this.ina = document.createElement("a");
    this.propertys();
    this.functions();
  }
  propertys() {
    this.lic.append(this.ina);
    this.ul.append(this.lic);
    this.ina.innerHTML = this.inner;
    this.ina.id = this.id;
    this.ina.href = this.hre;
    this.ina.setAttribute("title", this.inner);
  }
  functions() {
    this.lic.addEventListener("click", () => {
      document.getElementById("uul").style.display = "none";
    });
  }
}

for (let i = 0; i < li.length; i++) {
  arrmenu[i] = new Menu(li[i][0], "#hr" + i, "gg" + i);
}

arrmenu[4].lic.addEventListener("click", () => {
  window.scrollTo(0, document.body.getBoundingClientRect().height);
});

document.querySelectorAll("section").forEach((ele, ind) => {
  ele.style.minHeight = window.innerHeight + "px";
  document.getElementById("uul").style.minHeight = window.innerHeight + "px";
  window.addEventListener("resize", () => {
    ele.style.minHeight = window.innerHeight + "px";
    document.getElementById("uul").style.minHeight = window.innerHeight + "px";
  });
});

document.body.style.width = window.innerWidth + "px";
window.addEventListener("resize", () => {
  document.body.style.width = window.innerWidth + "px";
});
let but = new Array();
let iv = new Array();
for (let i = 0; i < 3; i++) {
  but[i] = document.getElementById("butt" + i);
  iv[i] = document.getElementById("i" + i);

  but[i].addEventListener("mouseover", function (event) {
    iv[i].style.cssText = `width: 0;`;
    but[i].style.border = "1px solid #fff";
  });
  but[i].addEventListener("mouseout", function (event) {
    iv[i].style.cssText = `width: 100%; right: 0;`;
    but[i].style.border = "1px solid transparent";
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("i").style.transform =
      "scale(1) rotate3d(1, 1, 0, 0deg)";
    document.querySelectorAll(".dd").forEach((ele) => {
      ele.style.opacity = "1";
    });
  });
});

window.addEventListener("mousemove", () => {
  var eye = document.querySelectorAll(".eyex").forEach((ele) => {
    let x = ele.getBoundingClientRect().left + ele.clientWidth / 2;
    let y = ele.getBoundingClientRect().top + ele.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - window.scrollY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;

    ele.style.transform = "rotate(" + rot + "deg)";
  });
});

document.querySelector("header").addEventListener("mousemove", funn);
window.addEventListener("scroll", () => {
  if (window.scrollY <= window.innerHeight) {
    document.querySelector("header").addEventListener("mousemove", funn);
  }
});
let vn = 0;
document.querySelectorAll("section")[0].addEventListener("mousemove", funn);
function funn(e) {
  vn++;
  if (vn % 40 == 0) {
    let car = document.getElementById("i").getBoundingClientRect(),
      x = e.clientX / 10,
      y = e.clientY / 2 - e.clientY - window.scrollY;
    vn = 0;

    document.getElementById("i").style.transform = `rotateX(${
      (window.innerHeight / 2 - y) / 2
    }deg) rotateY(${-x / 2}deg)`;
  }
}
let navv = 89;
let navv1 = -40;
let maxwid1 = 1050;
window.addEventListener("mousemove", function (e) {
  if (this.window.innerWidth > maxwid1) {
    let carz = this.document.getElementById("hee").getBoundingClientRect(),
      xaxis1z = e.pageX - window.scrollX - carz.left,
      yaxis1z = e.pageY - window.scrollY - carz.top;

    if (
      !(
        xaxis1z < carz.width + 266 &&
        xaxis1z > -266 &&
        yaxis1z < carz.height + 266 &&
        yaxis1z > -266
      )
    ) {
      xaxis1z = -266;
      yaxis1z = -266;
    }

    document.getElementById(
      "hee"
    ).style.background = `radial-gradient( circle at ${xaxis1z}px ${yaxis1z}px, var(--colo) -329px, transparent 281px )`;

    if (!(window.scrollY > 0)) {
      document.getElementById("hg2").style.background = `radial-gradient(
      circle at ${xaxis1z}px ${yaxis1z}px,
      transparent 3px,
      #121212 66px
    )`;
    } else {
      document.getElementById("hg2").style.background = `radial-gradient(
      circle at ${xaxis1z}px ${yaxis1z}px,
      transparent 3px,
      #1e1e1e 66px
    )`;
    }
  }
});
let hea = document.querySelector("header");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 0) {
    this.document.getElementById("hg2").style.backgroundColor = "#1e1e1e";
    hea.style.height = "60px";

    eren(false);
  } else {
    this.document.getElementById("hg2").style.backgroundColor = "#121212";
    hea.style.height = "70px";

    eren(true);
  }
});

function eren(x) {
  for (
    let i = 0;
    i < this.document.querySelectorAll("header ul li a").length;
    i++
  ) {
    if (x == true) {
      document.querySelectorAll("header ul li a")[i].style.background =
        "#121212";
      document.getElementById("hg2").style.background = `radial-gradient(
        circle at -100px 0px,
        rgb(30 30 30) -100px,
        #121212 66px
      )`;
    } else {
      document.querySelectorAll("header ul li a")[i].style.background =
        "#1e1e1e";
      document.getElementById("hg2").style.background = `radial-gradient(
        circle at -100px -100px,
        rgb(50 50 50) 3px,
        #1e1e1e 66px
      )`;
    }
  }
  document.querySelectorAll("header a").forEach(function (ele) {
    ele.addEventListener("mouseover", function () {
      ele.style.backgroundColor = "rgb(30 30 30)";
      ele.style.color = "var(--colorr)";
    });
    ele.addEventListener("mouseout", function () {
      if (x == true) {
        ele.style.backgroundColor = "#121212";
      } else {
        ele.style.backgroundColor = "#1e1e1e";
      }
      ele.style.color = "#fff";
    });
  });
}

let span1 = document.querySelector(".sspan");
let text = ["Delovober1", "Desiner1", "Programmer1"];
let i = 0;
let i1 = 0;

if (window.innerWidth > 1000) {
  let tv = setInterval(function () {
    span1.innerHTML += text[i1][i];

    i++;

    if (i > text[i1].length - 1) {
      i = 0;
      i1++;
      span1.innerHTML = "";
    }

    if (i1 > text.length - 1) {
      i1 = 0;
    }
  }, 200);
}

let h2 = document.getElementById("h2");

let ar = "Hello, My Name is";
let a = new Array();
let car1 = new Array();
let car11 = new Array();
let sum1 = 0;
let sum12 = 0;
let cx = false;
let paddingCont = this.window.innerWidth / 20;

for (let i = 0; i < ar.length; i++) {
  a[i] = document.createElement("li");
  a[i].className = "ll";

  a[i].append(ar[i]);

  a[i].style.transitionDuration = (i + Number(1)) * 60 + 200 + "ms";

  window.addEventListener("mousemove", function (e) {
    let car = h2.getBoundingClientRect();
    if (
      e.clientX >= car.left &&
      e.clientX <= car.left + car.width &&
      e.clientY >= car.top &&
      e.clientY <= car.top + car.height
    ) {
      a[i].style.transform = " translateY(-70px)";
      this.setTimeout(() => {
        cx = true;
      }, (ar.length - 1 + Number(1)) * 60 + 200);
    } else {
      if (cx == true) {
        a[i].style.transform = " translateY(0px)";
        if (i == ar.length - 1) {
          cx = false;
        }
      }
    }
  });

  h2.append(a[i]);
  window.addEventListener("load", function (e) {
    setTimeout(() => {
      a[i].style.opacity = "1";
      a[i].style.marginTop = "0px";
      a[i].style.visibility = "unset";

      car1[i] = a[i].getBoundingClientRect();

      a[i].style.left = sum1 + paddingCont + "px";

      sum1 += car1[i].width;
    }, (i + Number(1)) * 60 + 200);
  });
}
window.addEventListener("load", function (e) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == " ") {
      sum12 += 10;

      for (let i1 = ar.length - (ar.length - i); i1 < ar.length; i1++) {
        car11[i] = a[i1].getBoundingClientRect();

        a[i1].style.marginLeft = sum12 + "px";
      }
    }
  }
});

let ii = document.getElementById("ii");
let a1 = new Array();
let car = new Array();
let cara = new Array();
let tt = new Array();
let ar1 = "Tariq Mohammad";
let sum = 0;
let sum1c = 0;

document.querySelector(".cont").style.paddingLeft = paddingCont + "px";
for (let i = 0; i < ar1.length; i++) {
  a1[i] = document.createElement("li");
  a1[i].className = "ll1";

  a1[i].innerHTML = ar1[i];

  if (i < ar1.indexOf(" ")) {
    a1[i].style.color = "var(--white)";
  }
  a1[i].style.transition = (i + Number(1)) * 60 + "ms";
  a1[i].style.marginLeft = i * -40 + "px";
  this.setTimeout(() => {
    setTimeout(() => {
      a1[i].style.opacity = "1";
      a1[i].style.marginTop = "0px";
      a1[i].style.marginLeft = "0px";
      a1[i].style.visibility = "unset";
      if (i == 6 || i == ar1.length - 1) {
        setTimeout(() => {
          a1[i].style.transform = "rotate(360deg)";
        }, 400);
      }
    }, (i + Number(1)) * 60 + 200);
  }, 1000);
  document.getElementById("ii").addEventListener("mouseover", function () {
    document.getElementById("ii").style.pointerEvents = "none";
    a1[i].style.pointerEvents = "none";
    a1[i].style.animation = `animate ${i * 300 + 1000}ms alternate  both`;

    tt[i] = setTimeout(function () {
      a1[i].style.animation = `unset`;
      document.getElementById("ii").style.pointerEvents = "unset";
      a1[i].style.pointerEvents = "unset";
      clearTimeout(tt[i]);
    }, i * 300 + 1000);
  });

  ii.append(a1[i]);
  window.addEventListener("load", function (e) {
    re(i);
  });
}

function re(i) {
  car[i] = a1[i].getBoundingClientRect();

  a1[i].style.left = sum + paddingCont + "px";

  sum += car[i].width;
  if (ar1[i] == " ") {
    sum += car[i].width + this.window.innerWidth / 70;
  }
}
let arn = new Array();
let maxx = new Array();
let sheck = true;
let max = true;
let vb = 0;
let cc = 0;
let v = 0;

poss.style.setProperty("--h", 0 + "px");
poss.style.setProperty("--w", 7 + "px");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let raycard = new Array();
let raySlider = new Array();

let arrup = [
  [
    "Food Projects",
    //////////////////////////////////
    [
      [
        "MyProjects/FoodProjects/new/websiteProject.html",
        "images/boby.jpg",
        0,
        "Meet Food",
      ],
      [
        "MyProjects/FoodProjects/proj/indexx.html",
        "images/menu2.jpg",
        0,
        "Fresh Food",
      ],
      [
        "MyProjects/FoodProjects/Abasat/asabat.html",
        "images/we.png",
        0,
        "Fresh Food 1",
      ],
    ],
  ],

  [
    "Game Projects",
    ////////////////////////////////////
    [
      ["MyProjects/GameProjects/Game2/lopi.html", "images/؟.jpg", 0, "Game 2"],
      ["MyProjects/GameProjects/Game1/gam.html", "images/xo.jpg", 0, "Game 1"],
      [
        "MyProjects/GameProjects/snake/snake.html",
        "images/snakk.jpg",
        0,
        "Game 3",
      ],
      [
        "MyProjects/GameProjects/PlaneGame/ccgame.html",
        "images/plan.png",
        0,
        "Game 4",
      ],
    ],
  ],
  [
    "Canvas Projects",
    ///////////////////////////////////////
    [
      [
        "MyProjects/CanvasProjects/cc1.html",
        "images/can1.png",
        0,
        "Canvas JS 1",
      ],
      [
        "MyProjects/CanvasProjects/cc2.html",
        "images/can2.png",
        0,
        "Canvas JS 2",
      ],
      [
        "MyProjects/CanvasProjects/cc3.html",
        "images/can3.png",
        0,
        "Canvas JS 3",
      ],
      [
        "MyProjects/CanvasProjects/cc6.html",
        "images/can4.png",
        0,
        "Canvas JS 4",
      ],
      [
        "MyProjects/CanvasProjects/cc7.html",
        "images/can5.png",
        0,
        "Canvas JS 5",
      ],
      [
        "MyProjects/CanvasProjects/caaa.html",
        "images/ccan.png",
        0,
        "Canvas JS 6",
      ],
      [
        "MyProjects/CanvasProjects/cam.html",
        "images/cir.png",
        0,
        "Canvas JS 7",
      ],
      [
        "MyProjects/CanvasProjects/caaa2.html",
        "images/ca.png",
        0,
        "Canvas JS 8",
      ],
      [
        "MyProjects/CanvasProjects/caaa8.html",
        "images/part.png",
        0,
        "Canvas JS 9",
      ],
      [
        "MyProjects/CanvasProjects/ball.html",
        "images/ccx.png",
        0,
        "Canvas JS 10",
      ],
      [
        "MyProjects/CanvasProjects/mycollection.html",
        "images/coll.png",
        0,
        "Canvas JS 11",
      ],
      [
        "MyProjects/CanvasProjects/look.html",
        "images/bom.png",
        0,
        "Canvas JS 12",
      ],
      [
        "MyProjects/CanvasProjects/prog.html",
        "images/blur.png",
        0,
        "Canvas JS 13",
      ],
      [
        "MyProjects/CanvasProjects/fraction.html",
        "images/fra.png",
        0,
        "Canvas JS 14",
      ],
      [
        "MyProjects/CanvasProjects/fra1.html",
        "images/fr1.png",
        0,
        "Canvas JS 15",
      ],
      [
        "MyProjects/CanvasProjects/matrex.html",
        "images/sud.png",
        0,
        "Canvas JS 16",
      ],
      [
        "MyProjects/CanvasProjects/tetxt.html",
        "images/style.png",
        0,
        "Canvas JS 17",
      ],
      [
        "MyProjects/CanvasProjects/canvv.html",
        "images/lines.png",
        0,
        "Canvas JS 18",
      ],
      [
        "MyProjects/CanvasProjects/newPhysical.html",
        "images/noa.png",
        0,
        "Canvas JS 19",
      ],
    ],
  ],

  [
    "Other Projects",
    ///////////////////////////////
    [
      [
        "MyProjects/otherProjects/--add3d/x1.html",
        "images/sheet.jpg",
        0,
        "Personal WebSite",
      ],

      ["Document/Document.html", "images/src.jpg", 0, "3D Project"],
      [
        "MyProjects/otherProjects/tawjehy.html",
        "images/calc.png",
        0,
        "Calce Your Marks",
      ],
      [
        "MyProjects/otherProjects/searchProject/inn.html",
        "images/pp.jpg",
        0,
        "Searsh in Cards",
      ],
      [
        "MyProjects/otherProjects/form1.pro/form1.htm",
        "images/ff.png",
        0,
        "Form LogIn",
      ],
      [
        "MyProjects/otherProjects/hacker.html",
        "images/ss.png",
        0,
        "Searsh Test",
      ],
      [
        "MyProjects/otherProjects/clock.html",
        "images/clok.png",
        0,
        "Clock Time",
      ],
      [
        "MyProjects/otherProjects/project.html",
        "images/task.png",
        0,
        "Task Project",
      ],
      [
        "MyProjects/otherProjects/add/add.html",
        "images/cards.png",
        0,
        "Add Cards",
      ],
      [
        "MyProjects/otherProjects/new11/new11.html",
        "images/3d.png",
        0,
        "3D Project",
      ],
      [
        "MyProjects/otherProjects/form/list1.html",
        "images/form.png",
        0,
        "Form LogIn",
      ],
      ["otherProjects/3dModiling/3d.html", "images/3dd1.png", 0, "3D Project"],
      [
        "MyProjects/otherProjects/CircleEdit/CircleEdite.html",
        "images/MathEdit1.png",
        0,
        "Math Function Project",
      ],
    ],
  ],
];

class Sliderr {
  constructor(head, numCard) {
    this.head = head;
    this.upslider = document.createElement("div");

    this.slider = document.createElement("ul");
    this.butt1 = document.createElement("button");
    this.butt2 = document.createElement("button");
    this.sec = document.createElement("div");
    this.h1 = document.createElement("h1");
    this.widthCard = 270;
    this.widthbutt = 100;
    this.numCard = numCard;
    this.widthslider = this.numCard * this.widthCard;
    this.x = 0;

    this.propertys();
    this.functions();
  }
  propertys() {
    this.upslider.className = "upslider";
    this.upslider.append(this.butt1, this.butt2, this.slider);
    this.slider.className = "slider";
    this.slider.style.width = this.widthslider + "px";
    this.slider.id = "slider";

    this.sec.className = "sec";
    this.sec.style.order = this.numCard;
    this.sec.append(this.h1, this.upslider);
    this.h1.className = "h1";
    this.h1.innerHTML = this.numCard + " " + this.head;
    this.butt1.type = "button";
    this.butt1.classList.add("butt1", "butt");
    this.butt1.innerHTML = "<i class='fa-solid fa-forward'></i>";
    this.butt1.style.transform = "rotateZ(180deg)";
    this.butt2.type = "button";
    this.butt2.classList.add("butt2", "butt");
    this.butt2.innerHTML = "<i class='fa-solid fa-forward'></i>";
    document.getElementById("hr3").prepend(this.sec);
  }
  functions() {
    poss.style.setProperty("--widthCard", this.widthCard + "px");
    poss.style.setProperty("--widthbutt", this.widthbutt + "px");
    if (this.widthslider < window.innerWidth - this.widthbutt * 2) {
      this.slider.style.position = "relative";
      this.upslider.style.justifyContent = "center";
    }
    if (
      this.widthslider < window.innerWidth - this.widthbutt * 2 ||
      window.innerWidth < 1020
    ) {
      this.butt1.style.display = "none";
      this.butt2.style.display = "none";
      this.upslider.style.overflowX = "auto";
    }

    this.butt1.addEventListener("click", () => {
      this.butt(true);
    });
    this.butt2.addEventListener("click", () => {
      this.butt(false);
    });

    this.butt = (sh) => {
      if (sh) {
        this.x +=
          this.widthCard *
          ((window.innerWidth - this.widthbutt * 4) / this.widthCard).toFixed(
            ""
          );
      } else {
        this.x -=
          this.widthCard *
          ((window.innerWidth - this.widthbutt * 4) / this.widthCard).toFixed(
            ""
          );
      }
      if (this.x > 0) {
        this.x = 0;
        this.butt1.style.display = "none";
      } else {
        this.butt1.style.display = "unset";
      }
      if (
        this.x < -(this.widthslider - window.innerWidth + this.widthbutt * 2)
      ) {
        this.x = -(this.widthslider - window.innerWidth + this.widthbutt * 2);
        this.butt2.style.display = "none";
      } else {
        this.butt2.style.display = "unset";
      }

      this.slider.style.left = this.x + "px";
    };
  }
}

class Card {
  constructor(src, imagSrc, left, head, slide, i) {
    this.src = src;
    this.imagSrc = imagSrc;
    this.left = left;
    this.head = head;
    this.slide = slide;
    this.i = i;
    this.card = document.createElement("div");
    this.img = document.createElement("img");
    this.upcard = document.createElement("li");
    this.incard = document.createElement("div");
    this.a = document.createElement("a");
    this.hre = document.createElement("i");
    this.h3 = document.createElement("h3");

    this.propertys();
    this.functions();
  }
  propertys() {
    this.card.className = "card1";
    this.upcard.className = "upcard";
    this.incard.className = "incard";
    this.img.className = "img";
    this.img.src = `${this.imagSrc}`;
    this.a.className = "a";
    this.h3.className = "h3";
    this.hre.classList.add("fa-solid", "fa-share");
    this.upcard.append(this.card);
    this.card.append(this.img, this.incard);
    this.incard.append(this.h3, this.a);
    this.slide.slider.prepend(this.upcard);
    this.h3.innerHTML = this.head;
    this.img.style.left = this.left + "px";
    this.a.setAttribute("href", this.src);
    this.a.setAttribute("target", "blank_");
    this.a.append(this.hre);
  }
  functions() {
    this.card.addEventListener("mouseenter", (e) => {
      this.incard.style.top = 0 + "%";
      this.img.style.transform = `scale(1.1)`;
    });
    this.card.addEventListener("mouseleave", (e) => {
      this.incard.style.top = -100 + "%";
      this.img.style.transform = `scale(1)`;
    });
    this.incard.addEventListener("click", () => {
      this.a.click();
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 2440) {
        setTimeout(() => {
          this.card.style.transform = `scale(1)`;
          this.card.style.opacity = `1`;
        }, this.i * 100);
      }
    });
  }
}

for (let i = 0; i < arrup.length; i++) {
  raySlider[i] = new Sliderr(arrup[i][0], arrup[i][1].length);
  for (let k = 0; k < arrup[i][1].length; k++) {
    raycard[i] = new Card(
      arrup[i][1][k][0],
      arrup[i][1][k][1],
      arrup[i][1][k][2],
      arrup[i][1][k][3],
      raySlider[i],
      i
    );
  }
}

let light1 = 150;
window.addEventListener("mousemove", (e) => {
  let cc = this.document.getElementById("hid").getBoundingClientRect(),
    x = e.pageX - window.scrollX - cc.left,
    y = e.pageY - window.scrollY - cc.top;

  if (
    !(
      x < cc.width + light1 &&
      x > -light1 &&
      y < cc.height + light1 &&
      y > -light1
    )
  ) {
    x = light1;
    y = -light1;
  }

  document.getElementById(
    "hid"
  ).style.background = `radial-gradient( circle at ${x}px ${y}px, transparent -60px, #121212 ${light1}px )`;
});

document.getElementById("h21").style.order = arrup.length + 5000;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener("load", (s) => {
  let vq = 200;

  let year = new Date().getFullYear();
  let inet = `© copyright ${year} Tariq Mohammad All Right Reserved`;
  let spx = new Array();
  let cvx = new Array();
  let sum = 0;
  let pp = document.getElementById("pp");

  let cv = pp.getBoundingClientRect();
  let cv1 = document.getElementById("fot").getBoundingClientRect();

  pp.style.top = cv1.height / 2 - cv.height / 2 + "px";

  for (let x = 0; x < inet.length; x++) {
    spx[x] = document.createElement("span");
    spx[0].style.fontSize = "30px";

    spx[x].innerHTML = inet[x];

    pp.append(spx[x]);
    spx[x].className = "spx";
    cvx[x] = spx[x].getBoundingClientRect();
    spx[x].style.left = sum + "px";
    if (x == 0) {
      sum += cvx[x].width + 20;
    } else {
      if (inet[x] == " ") {
        sum += cvx[x].width + 10;
      } else {
        sum += cvx[x].width;
      }
    }

    pp.style.width = sum + "px";

    pp.style.left = cv1.width / 2 - sum / 2 + "px";
  }

  let sum1 = 0;

  for (let x = 0; x < inet.length; x++) {
    cvx[x] = spx[x].getBoundingClientRect();
    if (x == 0) {
      sum1 += cvx[x].width + 20;
    } else {
      if (inet[x] == " ") {
        sum1 += cvx[x].width + 10;
      } else {
        sum1 += cvx[x].width;
      }
    }
    spx[x].style.color = `rgb(${sum1 / (sum / 255)}, ${
      255 - sum1 / (sum / 255)
    }, ${255 - sum1 / (sum / 255)})`;
  }

  window.addEventListener("mousemove", (e) => {
    let car = document.querySelector(".infot").getBoundingClientRect(),
      x = e.pageX - window.scrollX - car.left,
      y = e.pageY - window.scrollY - car.top;

    if (
      !(x < car.width + ofx && x > -ofx && y < car.height + ofx && y > -ofx)
    ) {
      x = -ofx;
      y = -ofx;
    }

    document.querySelector(".infot").style.background = `radial-gradient(
    circle at ${x}px ${y}px,
  transparent -${ofx}px,
     #181818 ${ofx}px
    )`;
  });

  let inform = [
    [
      "Front End Desiner",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel laboriosam sint in",
      "#0ff",
    ],
    [
      "Back End Devolober",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel laboriosam sint in",
      "#f00",
    ],
    [
      "Web Application",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel laboriosam sint in",
      "#0f0",
    ],
  ];

  let arrser = new Array();

  class Ser {
    constructor(par, head, background) {
      this.par = par;
      this.head = head;
      this.background = background;
      this.ser = document.createElement("li");
      this.inseri = document.createElement("div");
      this.spl = document.createElement("span");
      this.hs = document.createElement("h4");
      this.p = document.createElement("p");

      this.propertys();
      this.functions();
    }
    propertys() {
      this.ser.className = "ser";
      this.inseri.className = "inseri";
      this.spl.className = "spl";
      this.spl.style.background = this.background;
      this.hs.innerHTML = this.head;
      this.p.innerHTML = this.par;

      this.inseri.append(this.spl, this.hs, this.p);
      this.ser.append(this.inseri);
      document.getElementById("inser").prepend(this.ser);
    }
    functions() {
      for (let i1 = 0; i1 < this.ser.children.length; i1++) {
        this.ser.children[i1].style.margin = "7px 0";
      }
    }
  }

  for (let i = 0; i < inform.length; i++) {
    arrser[i] = new Ser(inform[i][1], inform[i][0], inform[i][2]);
  }

  let gf = 100;

  window.addEventListener("mousemove", (e) => {
    let car = document.getElementById("hdi").getBoundingClientRect(),
      x = e.pageX - window.scrollX - car.left,
      y = e.pageY - window.scrollY - car.top;

    if (!(x < car.width + gf && x > -gf && y < car.height + gf && y > -gf)) {
      x = -ofx;
      y = -ofx;
    }

    document.getElementById("hdi").style.background = `radial-gradient(
    circle at ${x}px ${y}px,
    transparent -${gf}px,
    #151515 ${gf}px
    )`;
  });
});

//////////////////canvas////////////

let arrInfo1 = [
  [
    "Personal Info",
    ["Name", "Tariq Mohammad Sleman Al Hawajry"],
    ["Age", new Date().getFullYear() - 2004],
    ["Address", "ps-gaza Nuserirat camp 2 Abu Khalil Al - Dirawi Street"],
    ["Phone", "<a href='tell:059-246-0159'>059-246-0159</a>"],
    [
      "E-mail",
      "<a href='mailto:tariealhawajry@gmail.com'>tariealhawajry@gmail.com</a>",
    ],
    ["Date of pirth", "27-1-2004"],
  ],
  ["Languages", ["English ", "intermediate"], ["Arapic", "Basic"]],
  [
    "Languages Prorammer",
    ["1", "Html"],
    ["2", "Css"],
    ["3", "JavaScript"],
    ["4", "php"],
  ],
  [
    "Software",
    ["1", "Visual studio code"],
    ["2", "Netbeans"],
    ["3", "PhotoShop"],
    ["4", "Premer"],
    ["5", "Dev C++"],
  ],
];
let arrInfo2 = [
  [
    "Education",
    "University of Al-Qudes open , 2020 Soft information systems design technology web pages design.",
  ],
  [
    "Experience",
    "Freelancer,2021 - web developer & desiner Working as freelancer in the development and designing of websites.",
  ],
];
let arrSkills = [
  ["CSS5", 77],
  ["HTML5", 80],
  ["XML", 77],
  ["JAVA SCRIPT", 60],
  ["POOT STRAP", 33],
  ["JEQUERY", 10],
  ["NODEJS", 20],
  ["PHP", 40],
  ["SQL", 10],
  ["OOP", 30],
];
let arrColors = ["#f00", "#0ff", "#ff0", "rgb(255, 0, 255)"];
let pl = 0;
let arrin = new Array();
let arrin1 = new Array();
let skillArr = new Array();

class Info {
  constructor(i) {
    this.i = i;
    this.upinfo = document.createElement("ul");
    this.title = document.createElement("h3");
    this.ininfo = new Array();
    this.hininfo = new Array();
    this.spanDis = new Array();
    this.spanVal = new Array();
    this.propertys();
  }
  propertys() {
    this.upinfo.className = "upinfo";
    for (let t = 0; t < arrInfo1[this.i].length; t++) {
      this.title.innerHTML = arrInfo1[this.i][0];
      this.title.className = "title";

      if (t > 0) {
        this.ininfo[t] = document.createElement("dl");
        this.hininfo[t] = document.createElement("li");
        this.spanDis[t] = document.createElement("dt");
        this.spanVal[t] = document.createElement("dd");
        this.spanDis[t].innerHTML = arrInfo1[this.i][t][0] + " : ";
        this.spanVal[t].innerHTML = arrInfo1[this.i][t][1];
        this.hininfo[t].append(this.ininfo[t]);
        this.ininfo[t].append(this.spanDis[t], this.spanVal[t]);
        this.ininfo[t].className = "ininfo";
        this.hininfo[t].className = "hininfo";
        this.spanDis[t].className = "dt1";
        this.spanVal[t].className = "dd1";
        this.spanVal[t].id = `dd${this.i}${t}`;
        this.upinfo.append(this.hininfo[t]);
        this.upinfo.prepend(this.title);
      }
    }
    document.getElementById("right").prepend(this.upinfo);
    this.upinfo.style.order = -arrInfo1[this.i].length;
  }
}

class Info1 {
  constructor(i) {
    this.i = i;

    this.pece = document.createElement("div");
    this.title1 = document.createElement("h2");
    this.p = document.createElement("p");
    this.hr = document.createElement("hr");

    this.propertys();
  }
  propertys() {
    this.pece.classList.add("pece", "pece" + this.i);
    this.title1.classList.add("h");
    this.p.classList.add("p");
    this.hr.id = "hr" + this.i;
    if (this.i < arrInfo2.length - 1) {
      this.hr.style.display = "block";
    }
    this.title1.innerHTML = arrInfo2[this.i][0];
    this.p.innerHTML = arrInfo2[this.i][1];
    this.pece.append(this.title1, this.p, this.hr);
    document.getElementById("left").append(this.pece);
  }
}

class Skills {
  constructor(i) {
    this.i = i;
    this.upPeceSkills = document.createElement("div");
    this.peceSkill = document.createElement("li");
    this.spanDis = document.createElement("span");
    this.upSize = document.createElement("div");
    this.size = document.createElement("div");

    this.propertys();
  }
  propertys() {
    this.upPeceSkills.className = "upPeceSkills";
    this.upPeceSkills.style.order = -arrSkills[this.i][1];
    this.peceSkill.className = "peceSkill";
    this.spanDis.className = "disSkill";
    this.spanDis.innerHTML = arrSkills[this.i][0];
    this.upSize.className = "upSize";
    this.size.className = "size";
    if (pl > arrColors.length - 1) {
      pl = 0;
    }
    this.size.style.background = arrColors[pl];
    // this.upPeceSkills.style.border = "1px solid " + arrColors[pl];
    if (this.i % 2 == 0) {
      pl++;
    }
    this.size.style.width = arrSkills[this.i][1] + "%";

    this.upSize.append(this.size);
    this.peceSkill.append(this.spanDis, this.upSize);
    this.upPeceSkills.append(this.peceSkill);
    document.getElementById("upskills").prepend(this.upPeceSkills);
  }
}
for (let i = 0; i < arrInfo1.length; i++) {
  arrin.push(new Info(i));
}
for (let i = 0; i < arrInfo2.length; i++) {
  arrin1.push(new Info1(i));
}
for (let i = 0; i < arrSkills.length; i++) {
  skillArr.push(new Skills(i));
}
let lightStrong = 200;
let lightStrong1 = 200;
window.addEventListener("mousemove", (e) => {
  let car = document.getElementById("upCard").getBoundingClientRect(),
    x = e.pageX - window.scrollX - car.left,
    y = e.pageY - window.scrollY - car.top;
  let car1 = document.getElementById("hi1").getBoundingClientRect(),
    x1 = e.pageX - window.scrollX - car1.left,
    y1 = e.pageY - window.scrollY - car1.top;
  let color = `rgb(${255 - x / (car.width / 255)}, ${
    255 - y / (car.height / 255)
  }, ${y / (car.height / 255)})`;

  if (
    !(
      x < car.width + lightStrong &&
      x > -lightStrong &&
      y < car.height + lightStrong &&
      y > -lightStrong
    )
  ) {
    x = -lightStrong;
    y = -lightStrong;
  } else {
    for (let i = 0; i < arrin.length; i++) {
      for (let j = 1; j < arrin[i].hininfo.length; j++) {
        arrin[i].hininfo[j].style.borderColor = color;
      }
    }
    poss.style.setProperty("--colorr", color);
  }
  if (
    !(
      x1 < car1.width + lightStrong1 &&
      x1 > -lightStrong1 &&
      y1 < car1.height + lightStrong1 &&
      y1 > -lightStrong1
    )
  ) {
    x1 = -lightStrong1;
    y1 = -lightStrong1;
  }

  document.getElementById(
    "hi"
  ).style.background = `radial-gradient( circle at ${x}px ${y}px, transparent  ${20}px, #161616 ${
    lightStrong - 100
  }px )`;
  document.getElementById(
    "hi1"
  ).style.background = `radial-gradient( circle at ${x1}px ${y1}px, transparent  ${20}px, #181818 ${
    lightStrong1 - 100
  }px )`;
  document.getElementById(
    "upCard"
  ).style.background = `radial-gradient( circle at ${x}px ${y}px, ${color}  -${lightStrong}px, #161616 ${lightStrong}px )`;
});

document.querySelectorAll(".innav button").forEach((ele, ind) => {
  ele.addEventListener("click", () => {
    for (let i = 0; i < document.querySelectorAll(".secc").length; i++) {
      document.getElementById("secc" + i).style.display = "none";
      document.querySelectorAll(".spa")[i].style.width = "0%";
    }

    document.getElementById("secc" + ind).style.display = "flex";
    document.querySelectorAll(".spa")[ind].style.width = "100%";
    nav();
  });
});
document.getElementById("b1").click();
nav();

function nav() {
  if (window.innerWidth > 900) {
    document.getElementById("nav").style.height = "0px";
    document.getElementById("nav").style.height =
      document.getElementById("insection").getBoundingClientRect().height +
      "px";
  }
}

let lightt = 200;
window.addEventListener("mousemove", (e) => {
  let car = document.getElementById("his").getBoundingClientRect(),
    x = e.pageX - window.scrollX - car.left,
    y = e.pageY - window.scrollY - car.top;
  let car1 = document.getElementById("hs").getBoundingClientRect(),
    x1 = e.pageX - window.scrollX - car1.left,
    y1 = e.pageY - window.scrollY - car1.top;

  if (
    !(
      x < car.width + lightt &&
      x > -lightt &&
      y < car.height + lightt &&
      y > -lightt
    )
  ) {
    x = -lightt;
    y = -lightt;
  }
  if (
    !(
      x1 < car1.width + lightt &&
      x1 > -lightt &&
      y1 < car1.height + lightt &&
      y1 > -lightt
    )
  ) {
    x1 = -lightt;
    y1 = -lightt;
  }

  document.getElementById("his").style.background = `radial-gradient(
        circle at ${x}px ${y}px,
        transparent -${lightt}px,
        #262626 ${lightt}px
        )`;
  document.getElementById("hs").style.background = `radial-gradient(
          circle at ${x1}px ${y1}px,
          transparent -${lightt}px,
          #262626 ${lightt}px
          )`;
});

document.querySelectorAll(".formBoxr input").forEach((ele, ind) => {
  ele.addEventListener("focus", () => {
    document.querySelectorAll(".upps .spo0")[ind].style.height = "100%";
    document.querySelectorAll(".upps .spo0")[ind].style.transitionDelay = "0s";
    document.querySelectorAll(".upps .spo1")[ind].style.width = "100%";
    document.querySelectorAll(".upps .spo1")[ind].style.transitionDelay =
      "0.2s";
  });
  ele.addEventListener("blur", () => {
    document.querySelectorAll(".upps .spo0")[ind].style.height = "0%";
    document.querySelectorAll(".upps .spo0")[ind].style.transitionDelay =
      "0.2s";
    document.querySelectorAll(".upps .spo1")[ind].style.width = "0%";
    document.querySelectorAll(".upps .spo1")[ind].style.transitionDelay = "0s";
  });
});
document.querySelector(".upps textarea").addEventListener("focus", () => {
  document.querySelector(".upv .spo0").style.height = "100%";
  document.querySelector(".upv .spo0").style.transitionDelay = "0s";
  document.querySelector(".upv .spo1").style.width = "100%";
  document.querySelector(".upv .spo1").style.transitionDelay = "0.2s";
});
document.querySelector(".upps textarea").addEventListener("blur", () => {
  document.querySelector(".upv .spo0").style.height = "0%";
  document.querySelector(".upv .spo0").style.transitionDelay = "0.2s";
  document.querySelector(".upv .spo1").style.width = "0%";
  document.querySelector(".upv .spo1").style.transitionDelay = "0s";
});
document.querySelectorAll(".span").forEach((ele, ind) => {
  ele.addEventListener("click", () => {
    if (ind == 4) {
      document.querySelector(".upps textarea").focus();
    } else {
      document.querySelectorAll(".upps input[type='text']")[ind].focus();
    }
  });
});
