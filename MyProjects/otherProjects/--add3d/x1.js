let fog = [];
let fogr = [];
let fogrx = [];
let fogrz = [];
let lu = [];
let lud = [];
let ludx = [];
let ca = [];
let ludz = [];
let car = [];
let cube = [];
let buut = [];
let r = [];
let g = [];
let b = [];
let x = [];
let y = [];
let z = [];
let deg = [];
let bb = [];
let a = [];
let vfogrx = [];
let lbox = [];
let vnb = [];
let vin = new Array();
let co = document.getElementById("co");
let she1 = document.getElementById("she1");
let she2 = document.getElementById("she2");
let she3 = document.getElementById("she3");
let k1 = document.getElementById("k1");
let k2 = document.getElementById("k2");
let k3 = document.getElementById("k3");
let cir = document.getElementById("cir");
let clic = document.getElementById("clic");
let clic1 = document.getElementById("clic1");
let uu1 = document.getElementById("uu");
let si = document.getElementById("si");
let insid = document.getElementById("insid");
let doble = document.createElement("div");
let doble1 = document.createElement("div");
let doble2 = document.createElement("div");
let iddd = document.getElementById("iddd");
let bee = document.getElementById("bee");
var pos = document.documentElement;
let x1 = 0;
let y1 = 0;
let z1 = 0;
let tt = 0;
let yy = 0;
let uu = 0;
let ii = 0;
let sd = 0;
(x[0] = 0),
  (x[1] = 1),
  (x[2] = 1),
  (x[3] = 1),
  (x[4] = 0),
  (x[5] = 1),
  (x[6] = 0.326),
  (y[0] = 1),
  (y[1] = 0),
  (y[2] = 0),
  (y[3] = 0),
  (y[4] = 1),
  (y[5] = 0),
  (y[6] = (0.76975).toFixed("1")),
  (z[0] = 0),
  (z[1] = 0),
  (z[2] = 0),
  (z[3] = 0),
  (z[4] = 0),
  (z[5] = 0),
  (z[6] = (0.3505).toFixed("1")),
  (deg[0] = 90),
  (deg[1] = 0),
  (deg[2] = 90),
  (deg[3] = 0),
  (deg[4] = 90),
  (deg[5] = 90),
  (deg[6] = (200.06825).toFixed("0"));
let mot = 30;
let resize1 = 315;

let lposs = document.documentElement;
let lcont = document.createElement("div");

let ldivup = new Array();
let ldiv = new Array();
let ly = new Array(),
  lx = new Array(),
  lz = new Array();
let lrand0 = new Array();
let lrand1 = new Array();
let lrand2 = new Array();
let countr = 0;
for (let i = 0; i < 6; i++) {
  vin[i] = document.getElementById("vin" + i);
}
for (let i = 0; i < 6; i++) {
  a[i] = 1;
}
for (let m = 0; m < 6; m++) {
  if (bb[m] == undefined) {
    bb[m] = 0;
  }
}

///////////////////////////////////////////////////////

let menu = document.createElement("div");
let bbu = [];
let rez = document.getElementById("rez");

let w = window.innerWidth;
let h = window.innerHeight;
{
  /* <button type="button" id="add0" class="add">add</button> */
}
for (let i = 0; i < 2; i++) {
  bbu[i] = document.createElement("button");
  bbu[i].type = "button";
  bbu[i].className = "add";
  bbu[i].id = "add" + i;
  menu.append(bbu[i]);
}
bbu[0].innerHTML = "Add";
bbu[1].innerHTML = "deleat";

menu.className = "menu";

document.body.appendChild(menu);
document.oncontextmenu = () => true;
window.addEventListener("contextmenu", function (e) {
  menu.style.visibility = "visible";
  menu.style.opacity = "1";
  menu.style.display = "flex";
  const rect = menu.getBoundingClientRect(),
    wid = rect.width,
    hei = rect.height;
  menu.style.width = wid + "px";
  menu.style.height = hei + "px";

  if (e.clientX + wid >= this.window.innerWidth) {
    menu.style.left = e.clientX - wid + "px";
  } else {
    menu.style.left = e.clientX + "px";
  }
  if (e.clientY + hei >= this.window.innerHeight) {
    menu.style.top = this.window.innerHeight - hei - 10 + "px";
  } else {
    menu.style.top = e.clientY + "px";
  }
});
window.addEventListener("mousemove", function (x) {
  if (x.target != menu && x.target != lbutt && x.target != lbutt1) {
    x.target.onmousedown = function (e) {
      menu.style.display = "none";
      menu.style.visibility = "collapse";
      menu.style.opacity = "0";
    };
  } else {
    x.target.onclick = function (e) {
      menu.style.display = "none";
      menu.style.visibility = "collapse";
      menu.style.opacity = "0";
    };

    // console.log(x.target);
  }
});
let lbutt = document.getElementById("add0");
let lbutt1 = document.getElementById("add1");
// pos.style.setProperty("--wid", resize1 + "px");

// window.onresize = function () {
//   if (window.innerWidth > 534 && window.innerWidth < 1345) {
//     resize1 = 204;
//   } else if (window.innerWidth < 534) {
//     resize1 = 155;
//   } else {
//     resize1 = 315;
//   }
//   pos.style.setProperty("--wid", resize1 + "px");
// };
for (let i = 0; i < 6; i++) {
  buut[i] = document.getElementById("buut" + i);
  fogrx[i] = document.getElementById("fogrx" + i);
  ludx[i] = document.getElementById("ludx" + i);
  if (i < 5) {
    vfogrx[i] = document.getElementById("vfogrx" + i);
    vnb[i] = document.getElementById("vnb" + i);
  }
}
lbutt.addEventListener("click", vex);
function vex() {
  countr++;

  for (let lb = countr - 1; lb < countr; lb++) {
    (ly[lb] = 315), (lx[lb] = 315), (lz[lb] = 315);
    lbox[lb] = document.createElement("div");

    ldivup[lb] = ldiv[lb];

    for (let li = 0; li < 6; li++, sd++) {
      lrand0[lb] = Number(Math.random() * 100 + 40).toFixed();
      // lrand0[lb] = Number(Math.random() * 255).toFixed();
      lrand1[lb] = Number(Math.random() * 255).toFixed();
      lrand2[lb] = Number(Math.random() * 255).toFixed();
      ldiv[li] = document.createElement("div");

      lbox[lb].setAttribute("id", "ca" + lb);
      r[sd] = lrand0[lb];
      g[sd] = lrand0[lb];
      b[sd] = lrand0[lb];

      ldiv[
        li
      ].style.backgroundColor = `rgb(${lrand0[lb]}, ${lrand0[lb]}, ${lrand0[lb]})`;

      lbox[lb].append(ldiv[li]);

      // ldiv[li].setAttribute(
      //   "onclick",
      //   "func(" + sd + "),func1(" + sd + "),func2(" + sd + ")"
      // );
      ldiv[li].setAttribute("id", "car" + sd);
      ldiv[li].classList.add("card", "car" + (sd + Number(1)));
    }

    lbox[lb].setAttribute(
      "onclick",
      "func(" + lb + "),func1(" + lb + "),func2(" + lb + "),func3(" + lb + ")"
    );
    
   
    vfogrx[0].value = lx[lb];
    vfogrx[1].value = ly[lb];
    vfogrx[2].value = lz[lb];

    ldiv[0].innerHTML = "Y";
    ldiv[1].innerHTML = "Y";
    ldiv[2].innerHTML = "X";
    ldiv[3].innerHTML = "X";
    ldiv[4].innerHTML = "Z";
    ldiv[5].innerHTML = "Z";

    ldiv[0].style.transform = `rotateX(90deg) translateZ(${ly[lb] / 2}px)`;
    ldiv[1].style.transform = `rotateX(90deg) translateZ(-${ly[lb] / 2}px)`;
    ldiv[2].style.transform = `rotateY(90deg) translateZ(${lx[lb] / 2}px)`;
    ldiv[3].style.transform = `rotateY(90deg) translateZ(-${lx[lb] / 2}px)`;
    ldiv[4].style.transform = `translateZ(${lz[lb] / 2}px)`;
    ldiv[5].style.transform = `translateZ(-${lz[lb] / 2}px)`;

    ldiv[0].style.width = `${lx[lb]}px`;
    ldiv[0].style.height = `${lz[lb]}px`;
    ldiv[1].style.width = `${lx[lb]}px`;
    ldiv[1].style.height = `${lz[lb]}px`;
    ldiv[2].style.width = `${lz[lb]}px`;
    ldiv[2].style.height = `${ly[lb]}px`;
    ldiv[3].style.width = `${lz[lb]}px`;
    ldiv[3].style.height = `${ly[lb]}px`;
    ldiv[4].style.width = `${lx[lb]}px`;
    ldiv[4].style.height = `${ly[lb]}px`;
    ldiv[5].style.width = `${lx[lb]}px`;
    ldiv[5].style.height = `${ly[lb]}px`;

    // if (countr == 2) {
    //   lbox[1].click();
    // }

    lbox[lb].classList.add("box");
    doble.append(doble1);
    doble1.append(doble2);
    doble2.append(lbox[lb]);

    doble.setAttribute("id", "doble");
    doble.className = "doble";
    doble1.className = "doble1";
    doble2.className = "doble2";
    document.querySelector(".up1").append(doble);
  }

  for (let i = 0; i < 5; i++) {
    fog[i] = document.getElementById("fog" + i);
    fogr[i] = document.getElementById("fogr" + i);
    fogrz[i] = document.getElementById("fogrz" + i);
    lu[i] = document.getElementById("lu" + i);
    lud[i] = document.getElementById("lud" + i);
    ludz[i] = document.getElementById("ludz" + i);
  }
  for (let i = 0; i < countr; i++) {
    ca[i] = document.getElementById("ca" + i);
  }
  for (let i = 0; i < sd; i++) {
    car[i] = document.getElementById("car" + i);
    // cube[i] = document.getElementById("cube" + i);
  }

  fogrx[0].value = fogrx[0].max + fogrx[0].min / 2;
  fogrx[1].value = fogrx[0].max + fogrx[0].min / 2;
  fogrx[2].value = fogrx[0].max + fogrx[0].min / 2;
  if (fog.value == undefined) {
    fog[0].value = x[6];
    fog[1].value = y[6];
    fog[2].value = z[6];

    lu[0].value = x[6];
    lu[1].value = y[6];
    lu[2].value = z[6];

    for (let i = countr - 1; i < countr; i++) {
      document.getElementById("ca" + i).style.transform =
        "rotate3d(" + x[6] + "," + y[6] + "," + z[6] + "," + deg[6] + "deg)";
    }
  }
  // for (let i = 0; i < 6; i++) {
  //   cube[i].style.backgroundColor =
  //     "rgb(" + r[i] + "," + g[i] + "," + b[i] + "," + a[i] + ")";
  // }

  iddd.onclick = function () {
    doble.style.animationTimingFunction = "linear";
    for (let i = 1; i < 5; i++) {
      fogrz[i].value = 0;
      ludz[i].value = 0;
    }
  };
  document.getElementById("ca0").click();
  document.querySelectorAll(".buut").forEach(function (ele) {
    ele.onclick = function () {
      document.querySelectorAll(".buut").forEach(function (ele) {
        ele.style.backgroundColor = "rgb(32 32 32)";
      });
      this.style.backgroundColor = "#141414";
    };
  });

  document.querySelectorAll(".click").forEach(function (ele) {
    ele.onclick = function () {
      document.querySelectorAll(".click").forEach(function (ele) {
        ele.style.backgroundColor = "rgb(32 32 32)";
      });
      this.style.backgroundColor = "#141414";
    };
  });
  document.querySelectorAll(".vin").forEach(function (ele, ind) {
    buut[ind].addEventListener("click", function () {
      document.querySelectorAll(".vin").forEach(function (ele) {
        ele.style.cssText =
          "visibility: hidden; opacity: 0; transform: scale(0.6);";
      });

      if (ind != 0) {
        ele.style.cssText = "visibility: unset; opacity: 1; transform: unset;";
        window.onresize = function () {
          if (window.innerWidth > 649) {
            document.getElementById("cc").prepend(bee);
          } else {
            vin[5].append(bee);
          }
        };
        if (window.innerWidth > 649) {
          document.getElementById("cc").prepend(bee);
        } else {
          vin[5].append(bee);
        }
      } else {
        ele.style.cssText = "visibility: unset; opacity: 1; transform: unset;";
        window.onresize = function () {
          if (window.innerWidth > 649) {
            document.getElementById("cc").prepend(bee);
          } else {
            vin[5].append(bee);
          }
        };
        if (window.innerWidth > 649) {
          document.getElementById("cc").prepend(bee);
        } else {
          vin[5].append(bee);
        }
      }
    });
  });
  window.onresize = function () {
    if (window.innerWidth > 649) {
      document.getElementById("cc").prepend(bee);
    } else {
      vin[5].append(bee);
    }
  };
  if (window.innerWidth > 649) {
    document.getElementById("cc").prepend(bee);
  } else {
    vin[5].append(bee);
  }

  // co.onmousemove = function (em) {
  //   pos.style.setProperty("--mo", em.clientY + em.clientX + "deg");
  //   pos.style.setProperty("--mox", em.clientX);
  //   pos.style.setProperty("--moy", em.clientY);
  //   pos.style.setProperty("--moz", em.clientX / em.clientY / 100);
  // };

  clic.addEventListener("click", function () {
    si.style.display = "block";
  });

  clic1.addEventListener("click", function () {
    si.style.display = "none";
  });
  let col = countr * 6;
  let xz = [];
  let inn = [];
  let ner = [];
  let bv = [];
  let ft1 = [];
  let ii1 = [];
  for (let i = countr - 1; i < countr; i++) {
    xz[i] = document.createElement("div");
    bv[i] = document.createElement("div");
    inn[i] = document.createElement("div");
    ner[i] = document.createElement("div");
    ii1[i] = document.createElement("i");

    ii1[i].classList.add("fa-solid", "fa-eye");
    inn[i].className = "inn";
    bv[i].className = "bv";
    xz[i].className = "xz1";
    ner[i].className = "ner";
    ner[i].append(ii1[i]);
    bv[i].innerHTML = "An item (" + i + ")";
    inn[i].append(ner[i], bv[i]);
    xz[i].append(inn[i]);
    insid.append(xz[i]);
    ft1[i] = true;
    ner[i].onclick = function () {
      ii1[i].classList.toggle("fa-eye-slash");
      if (ft1[i]) {
        ii1[i].style.color = "rgb(135 135 135)";
        lbox[i].style.display = "none";
        // cube[i].style.opacity = "0.7";
        // cube[i].style.pointerEvents = "none";
        ft1[i] = false;
      } else {
        ii1[i].style.color = "#fff";
        lbox[i].style.display = "flex";
        // cube[i].style.opacity = "1";
        // cube[i].style.pointerEvents = "unset";

        ft1[i] = true;
      }
    };

    // car[i].addEventListener("mouseover", function () {
    //   car[i].style.outline = "1px solid #f00";
    //   inn[i].style.opacity = "0.7";
    //   cube[i].style.backgroundColor = "rgb(128 0 255)";
    // });
    // car[i].addEventListener("mouseout", function () {
    //   inn[i].style.opacity = "1";
    //   car[i].style.outline = "1px solid transparent";

    //   cube[i].style.backgroundColor =
    //     "rgb(" + r[i] + "," + g[i] + "," + b[i] + "," + a[i] + ")";
    // });

    // car[i].addEventListener("click", function () {
    //   fogr[0].value = r[i];
    //   fogr[1].value = g[i];
    //   fogr[2].value = b[i];
    //   fogr[3].value = a[i];
    //   lud[0].value = Number(r[i]).toFixed("0");
    //   lud[1].value = Number(g[i]).toFixed("0");
    //   lud[2].value = Number(b[i]).toFixed("0");
    //   lud[3].value = Number(a[i]).toFixed("1");
    //   fogr[0].style.backgroundImage =
    //     "linear-gradient(90deg, rgb(0," +
    //     g[i] +
    //     "," +
    //     b[i] +
    //     "," +
    //     a[i] +
    //     "), rgb(255," +
    //     g[i] +
    //     "," +
    //     b[i] +
    //     "," +
    //     a[i] +
    //     ")),url(shat.png)";
    //   fogr[1].style.backgroundImage =
    //     "linear-gradient(90deg, rgb(" +
    //     r[i] +
    //     ",0," +
    //     b[i] +
    //     "," +
    //     a[i] +
    //     "), rgb(" +
    //     r[i] +
    //     ",255," +
    //     b[i] +
    //     "," +
    //     a[i] +
    //     ")),url(shat.png)";
    //   fogr[2].style.backgroundImage =
    //     "linear-gradient(90deg, rgb(" +
    //     r[i] +
    //     "," +
    //     g[i] +
    //     ",0," +
    //     a[i] +
    //     "), rgb(" +
    //     r[i] +
    //     "," +
    //     g[i] +
    //     ",255," +
    //     a[i] +
    //     ")),url(shat.png)";
    //   fogr[3].style.backgroundImage =
    //     "linear-gradient(90deg, rgb(" +
    //     r[i] +
    //     "," +
    //     g[i] +
    //     "," +
    //     b[i] +
    //     ",0), rgb(" +
    //     r[i] +
    //     "," +
    //     g[i] +
    //     "," +
    //     b[i] +
    //     ",255)),url(shat.png)";

    //   fog[0].value = x[i];
    //   fog[1].value = y[i];
    //   fog[2].value = z[i];
    //   fog[3].value = deg[i];
    //   lu[0].value = Number(x[i]).toFixed("1");
    //   lu[1].value = Number(y[i]).toFixed("1");
    //   lu[2].value = Number(z[i]).toFixed("1");
    //   lu[3].value = Number(deg[i]).toFixed("0");
    //   ///////
    //   fogr[4].value = bb[i];
    //   lud[4].value = bb[i];
    // });

    document.querySelectorAll(".inn").forEach(function (ele, ind) {
      ele.addEventListener("mousemove", function () {
        ele.style.opacity = "0.7";
      });
      ele.addEventListener("mouseout", function () {
        ele.style.opacity = "1";
      });
    });
    document.querySelectorAll(".inn").forEach(function (ele, ind) {
      ele.addEventListener("click", (e) => {
        document.querySelectorAll(`.card`).forEach(function (el1, ind1) {
          el1.style.boxShadow = `none`;
        });
        document
          .querySelectorAll(`#ca${ind} .card`)
          .forEach(function (el, ind2) {
            el.style.boxShadow = `0px 0px 0px 1px #ff8d00`;
          });
        ca[ind].click();
      });
    });

    document.querySelectorAll(".card").forEach(function (ele, ind) {
      ele.addEventListener("click", (e) => {
        document.querySelectorAll(`.card`).forEach(function (el1, ind1) {
          el1.style.boxShadow = `none`;
        });

        document
          .querySelectorAll(`#${ele.parentElement.id} .card`)
          .forEach(function (el, ind2) {
            el.style.boxShadow = `0px 0px 0px 1px #ff8d00`;
            document.querySelectorAll(`.box`).forEach(function (el1c, bv) {
              el1c.addEventListener("click", function () {
                func(bv);
                // func1(bv);
                func2(bv);
              });
            });
          });
      });
    });

    document.querySelectorAll(".card").forEach(function (ele, ind) {
      ele.addEventListener("click", (e) => {
        lbutt1.addEventListener("click", (e) => {
          let cc = "";
          for (let i = 0; i < ele.parentElement.id.split("").length; i++) {
            if (isNaN(ele.parentElement.id.split("")[i]) == false) {
              cc += ele.parentElement.id.split("")[i].toString();
            }
          }

          document.querySelectorAll(".card")[ind].parentElement.remove();
          document.querySelectorAll(".inn")[cc].remove();
        });
      });
    });

    window.addEventListener("click", function (s) {
      if (s.target == doble || s.target == co) {
        inn[i].style.opacity = "1";
        for (let xz = col - 6; xz < col; xz++) {
          car[xz].style.boxShadow = `none`;
        }
      }
    });
  }
  document.querySelectorAll(".buut").forEach(function (ele) {
    window.addEventListener("keydown", function (key1) {
      document.querySelectorAll(".buut").forEach(function (ele) {
        ele.style.backgroundColor = "rgb(32 32 32)";
      });
      switch (key1.keyCode) {
        case 82:
          buut[0].click();
          buut[0].style.backgroundColor = "#141414";
          break;
        case 68:
          buut[1].click();
          buut[1].style.backgroundColor = "#141414";
          break;
        case 84:
          buut[2].click();
          buut[2].style.backgroundColor = "#141414";
          break;
        case 83:
          buut[3].click();
          buut[3].style.backgroundColor = "#141414";
          break;
        case 77:
          buut[4].click();
          buut[4].style.backgroundColor = "#141414";
          break;
        default:
          break;
      }
    });
  });
  document.querySelectorAll(".click").forEach(function (ele) {
    window.addEventListener("keypress", function (key1) {
      document.querySelectorAll(".click").forEach(function (ele) {
        ele.style.backgroundColor = "rgb(32 32 32)";
      });
      switch (key1.keyCode) {
        case 73:
          clic1.click();
          buut[0].style.backgroundColor = "#141414";
          break;
        case 83:
          clic.click();
          buut[1].style.backgroundColor = "#141414";
          break;

        default:
          break;
      }
    });
  });
  window.addEventListener("keypress", function (key1) {
    if (key1.keyCode == 87) {
      k1.click();
    }
  });
  window.addEventListener("keypress", function (key1) {
    if (key1.keyCode == 82) {
      k1.click();
    }
  });

  document.querySelectorAll(".input1").forEach(function (ele) {
    ele.addEventListener("mouseover", function () {
      document.querySelectorAll(".input1").forEach(function (ele) {
        ele.style.backgroundColor = "transparent";
      });
      this.style.backgroundColor = "rgb(66 66 66)";
    });
  });
}
window.addEventListener("load", () => {
  lbutt.click();
});

let vv = true;
she1.addEventListener("click", function () {
  doble.classList.toggle("ani");
  if (vv) {
    k2.style.pointerEvents = "unset";
    k2.style.opacity = "1";
    she2.style.pointerEvents = "unset";
    she2.style.opacity = "1";

    if (ff() == true) {
      document.querySelector(".df").style.color = "#ff0095";
      k3.style.pointerEvents = "none";
      k3.style.opacity = "0.6";
    } else {
      k3.style.pointerEvents = "unset";
      k3.style.opacity = "1";
    }
    ff();
    vv = false;
  } else {
    document.querySelector(".df1").style.color = "#fff";
    k2.style.pointerEvents = "none";
    k2.style.opacity = "0.6";
    she2.style.pointerEvents = "none";
    she2.style.opacity = "0.6";
    k3.style.pointerEvents = "none";
    k3.style.opacity = "0.6";
    she3.style.pointerEvents = "none";
    she3.style.opacity = "0.6";
    vv = true;
  }
});
let ss = true;
function ff() {
  if (ss == true) {
    document.querySelector(".df2").style.color = "#ff0095";
    document.querySelector(".df1").style.color = "#ff0095";
    doble.style.animationIterationCount = "infinite";
    k3.style.pointerEvents = "unset";
    k3.style.opacity = "1";
    she3.style.pointerEvents = "unset";
    she3.style.opacity = "1";
    ss = false;
  } else if (ss == false) {
    document.querySelector(".df2").style.color = "#fff";
    doble.style.animationIterationCount = "unset";
    k3.style.pointerEvents = "none";
    k3.style.opacity = "0.6";
    she3.style.pointerEvents = "none";
    she3.style.opacity = "0.6";

    ss = true;
  }

  return ss;
}
let ss1 = true;
she3.addEventListener("click", function () {
  if (ss1) {
    document.querySelector(".df3").style.color = "#ff0095";
    doble.style.animationDirection = "alternate";
    ss1 = false;
  } else {
    document.querySelector(".df3").style.color = "#fff";
    doble.style.animationDirection = "unset";
    ss1 = true;
  }
});

function func(num) {
  for (let i1 = 0; i1 < countr; i1++) {
    fog[0].oninput = function () {
      lu[0].value = Number(this.value).toFixed("1");
      ca[num].style.transform =
        "rotateX(" +
        this.value +
        "deg) rotateY(" +
        y[i1] +
        "deg) rotateZ(" +
        z[i1] +
        "deg)  translate3d(" +
        x1 +
        "px," +
        y1 +
        "px," +
        z1 +
        "px)";
      x[i1] = this.value;

      pos.style.setProperty("--x1", x[i1]);
    };
    lu[0].oninput = function () {
      if (this.value == "") {
        this.value = 0;
      }
      if (this.value > 360) {
        this.value = 360;
      }
      fog[0].value = this.value;
      ca[num].style.transform =
        "rotateX(" +
        this.value +
        "deg) rotateY(" +
        y[i1] +
        "deg) rotateZ(" +
        z[i1] +
        "deg) translate3d(" +
        x1 +
        "px," +
        y1 +
        "px," +
        z1 +
        "px)";
      x[i1] = this.value;
    };
    ///
    fog[1].oninput = function () {
      lu[1].value = Number(this.value).toFixed("1");
      ca[num].style.transform =
        "rotateX(" +
        x[i1] +
        "deg) rotateY(" +
        this.value +
        "deg) rotateZ(" +
        z[i1] +
        "deg) translate3d(" +
        x1 +
        "px," +
        y1 +
        "px," +
        z1 +
        "px)";
      y[i1] = this.value;
      pos.style.setProperty("--y1", y[i1]);
    };
    lu[1].oninput = function () {
      if (this.value == "") {
        this.value = 0;
      }
      if (this.value > 360) {
        this.value = 360;
      }
      fog[1].value = this.value;
      "rotateX(" +
        x[i1] +
        "deg) rotateY(" +
        this.value +
        "deg) rotateZ(" +
        z[i1] +
        "deg) translate3d(" +
        x1 +
        "px," +
        y1 +
        "px," +
        z1 +
        "px)";
      y[i1] = this.value;
    };
    ///
    fog[2].oninput = function () {
      lu[2].value = Number(this.value).toFixed("1");
      ca[num].style.transform =
        "rotateX(" +
        x[i1] +
        "deg) rotateY(" +
        y[i1] +
        "deg) rotateZ(" +
        this.value +
        "deg) translate3d(" +
        x1 +
        "px," +
        y1 +
        "px," +
        z1 +
        "px)";
      z[i1] = this.value;
      pos.style.setProperty("--z1", z[i1]);
    };
    lu[2].oninput = function () {
      if (this.value == "") {
        this.value = 0;
      }
      if (this.value > 360) {
        this.value = 360;
      }
      fog[2].value = this.value;
      ca[num].style.transform =
        "rotateX(" +
        x[i1] +
        "deg) rotateY(" +
        y[i1] +
        "deg) rotateZ(" +
        this.value +
        "deg) translate3d(" +
        x1 +
        "px," +
        y1 +
        "px," +
        z1 +
        "px)";
      z[i1] = this.value;
    };
    ///

    fogrx[0].oninput = function () {
      ludx[0].value = Number(this.value).toFixed("0");
      ca[num].style.transform =
        "rotate3d(" +
        x[i1] +
        "," +
        y[i1] +
        "," +
        z[i1] +
        "," +
        deg[i1] +
        "deg) translate3d(" +
        this.value +
        "px," +
        y1 +
        "px," +
        z1 +
        "px)";
      x1 = this.value;
      pos.style.setProperty("--c1", x1 + "px");
    };
    ludx[0].oninput = function () {
      if (this.value == "") {
        this.value = 0;
      }
      if (this.value > 12550) {
        this.value = 12550;
      }
      if (this.value < -12550) {
        this.value = -12550;
      }
      fogrx[0].value = this.value;
      ca[num].style.transform =
        "rotate3d(" +
        x[i1] +
        "," +
        y[i1] +
        "," +
        z[i1] +
        "," +
        deg[i1] +
        "deg) translate3d(" +
        this.value +
        "px," +
        y1 +
        "px," +
        z1 +
        "px)";
    };
    ///
    fogrx[1].oninput = function () {
      ludx[1].value = Number(this.value).toFixed("0");
      ca[num].style.transform =
        "rotate3d(" +
        x[i1] +
        "," +
        y[i1] +
        "," +
        z[i1] +
        "," +
        deg[i1] +
        "deg) translate3d(" +
        x1 +
        "px," +
        this.value +
        "px," +
        z1 +
        "px)";
      y1 = this.value;
      pos.style.setProperty("--c2", y1 + "px");
    };
    ludx[1].oninput = function () {
      if (this.value == "") {
        this.value = 0;
      }
      if (this.value > 12550) {
        this.value = 12550;
      }
      if (this.value < -12550) {
        this.value = -12550;
      }
      fogrx[1].value = this.value;
      ca[num].style.transform =
        "rotate3d(" +
        x[i1] +
        "," +
        y[i1] +
        "," +
        z[i1] +
        "," +
        deg[i1] +
        "deg) translate3d(" +
        x1 +
        "px," +
        this.value +
        "px," +
        z1 +
        "px)";
    };
    ///
    fogrx[2].oninput = function () {
      ludx[2].value = Number(this.value).toFixed("0");
      ca[num].style.transform =
        "rotate3d(" +
        x[i1] +
        "," +
        y[i1] +
        "," +
        z[i1] +
        "," +
        deg[i1] +
        "deg) translate3d(" +
        x1 +
        "px," +
        y1 +
        "px," +
        this.value +
        "px)";
      z1 = this.value;
      pos.style.setProperty("--c3", z1 + "px");
    };
    ludx[2].oninput = function () {
      if (this.value == "") {
        this.value = 0;
      }
      if (this.value > 12550) {
        this.value = 12550;
      }
      if (this.value < -12550) {
        this.value = -12550;
      }
      fogrx[2].value = this.value;
      ca[num].style.transform =
        "rotate3d(" +
        x[i1] +
        "," +
        y[i1] +
        "," +
        z[i1] +
        "," +
        deg[i1] +
        "deg) translate3d(" +
        x1 +
        "px," +
        y1 +
        "px," +
        this.value +
        "px)";
    };

    ///
    fog[4].oninput = function () {
      lu[4].value = Number(this.value).toFixed("0");
      co.style.perspective = this.value + "px";
    };
    lu[4].oninput = function () {
      if (this.value == "") {
        this.value = 0;
      }
      if (this.value > 2000) {
        this.value = 2000;
      }
      fog[4].value = this.value;
      co.style.perspective = this.value + "px";
    };
    ///
  }
}

function func1(num1) {
  for (let i1 = 0; i1 < countr; i1++) {
    fogr[0].oninput = function () {
      fogr[0].style.backgroundImage =
        "linear-gradient(90deg, rgb(0," +
        g[i1] +
        "," +
        b[i1] +
        "," +
        a[i1] +
        "), rgb(255," +
        g[i1] +
        "," +
        b[i1] +
        "," +
        a[i1] +
        ")),url(shat.png)";
      fogr[1].style.backgroundImage =
        "linear-gradient(90deg, rgb(" +
        r[i1] +
        ",0," +
        b[i1] +
        "," +
        a[i1] +
        "), rgb(" +
        r[i1] +
        ",255," +
        b[i1] +
        "," +
        a[i1] +
        ")),url(shat.png)";
      fogr[2].style.backgroundImage =
        "linear-gradient(90deg, rgb(" +
        r[i1] +
        "," +
        g[i1] +
        ",0," +
        a[i1] +
        "), rgb(" +
        r[i1] +
        "," +
        g[i1] +
        ",255," +
        a[i1] +
        ")),url(shat.png)";
      fogr[3].style.backgroundImage =
        "linear-gradient(90deg, rgb(" +
        r[i1] +
        "," +
        g[i1] +
        "," +
        b[i1] +
        ",0), rgb(" +
        r[i1] +
        "," +
        g[i1] +
        "," +
        b[i1] +
        ",255)),url(shat.png)";
      lud[0].value = Number(this.value).toFixed("0");

      document
        .querySelectorAll(`#ca${num1} .card`)
        .forEach(function (el, ind2) {
          el.style.backgroundColor =
            "rgba(" +
            (fogr[0].value - ind2 * mot).toFixed() +
            "," +
            (g[i1] - ind2 * mot).toFixed() +
            "," +
            (b[i1] - ind2 * mot).toFixed() +
            "," +
            a[i1] +
            ")";
          console.log((g[i1] - 70).toFixed());
        });

      // cube[num1].style.backgroundColor =
      //   "rgba(" + this.value + "," + g[i1] + "," + b[i1] + "," + a[i1] + ")";
      r[i1] = this.value;
    };
    lud[0].oninput = function () {
      if (this.value == "") {
        this.value = 0;
      }
      if (this.value > 255) {
        this.value = 255;
      }
      fogr[0].value = this.value;

      // cube[num1].style.backgroundColor =
      //   "rgba(" + this.value + "," + g[i1] + "," + b[i1] + "," + a[i1] + ")";
    };
    ///
    fogr[1].oninput = function () {
      fogr[0].style.backgroundImage =
        "linear-gradient(90deg, rgb(0," +
        g[i1] +
        "," +
        b[i1] +
        "," +
        a[i1] +
        "), rgb(255," +
        g[i1] +
        "," +
        b[i1] +
        "," +
        a[i1] +
        ")),url(shat.png)";
      fogr[1].style.backgroundImage =
        "linear-gradient(90deg, rgb(" +
        r[i1] +
        ",0," +
        b[i1] +
        "," +
        a[i1] +
        "), rgb(" +
        r[i1] +
        ",255," +
        b[i1] +
        "," +
        a[i1] +
        ")),url(shat.png)";
      fogr[2].style.backgroundImage =
        "linear-gradient(90deg, rgb(" +
        r[i1] +
        "," +
        g[i1] +
        ",0," +
        a[i1] +
        "), rgb(" +
        r[i1] +
        "," +
        g[i1] +
        ",255," +
        a[i1] +
        ")),url(shat.png)";
      fogr[3].style.backgroundImage =
        "linear-gradient(90deg, rgb(" +
        r[i1] +
        "," +
        g[i1] +
        "," +
        b[i1] +
        ",0), rgb(" +
        r[i1] +
        "," +
        g[i1] +
        "," +
        b[i1] +
        ",255)),url(shat.png)";
      lud[1].value = Number(this.value).toFixed("0");

      document
        .querySelectorAll(`#ca${num1} .card`)
        .forEach(function (el, ind2) {
          el.style.backgroundColor =
            "rgba(" +
            (r[i1] - ind2 * mot).toFixed() +
            "," +
            (fogr[1].value - ind2 * mot).toFixed() +
            "," +
            (b[i1] - ind2 * mot).toFixed() +
            "," +
            a[i1] +
            ")";
        });

      // cube[num1].style.backgroundColor =
      //   "rgba(" + r[i1] + "," + this.value + "," + b[i1] + "," + a[i1] + ")";
      g[i1] = this.value;
    };
    lud[1].oninput = function () {
      if (this.value == "") {
        this.value = 0;
      }
      if (this.value > 255) {
        this.value = 255;
      }
      fogr[1].value = this.value;

      // cube[num1].backgroundColor =
      //   "rgba(" + r[i1] + "," + this.value + "," + b[i1] + "," + a[i1] + ")";
    };
    ///
    fogr[2].oninput = function () {
      fogr[0].style.backgroundImage =
        "linear-gradient(90deg, rgb(0," +
        g[i1] +
        "," +
        b[i1] +
        "," +
        a[i1] +
        "), rgb(255," +
        g[i1] +
        "," +
        b[i1] +
        "," +
        a[i1] +
        ")),url(shat.png)";
      fogr[1].style.backgroundImage =
        "linear-gradient(90deg, rgb(" +
        r[i1] +
        ",0," +
        b[i1] +
        "," +
        a[i1] +
        "), rgb(" +
        r[i1] +
        ",255," +
        b[i1] +
        "," +
        a[i1] +
        ")),url(shat.png)";
      fogr[2].style.backgroundImage =
        "linear-gradient(90deg, rgb(" +
        r[i1] +
        "," +
        g[i1] +
        ",0," +
        a[i1] +
        "), rgb(" +
        r[i1] +
        "," +
        g[i1] +
        ",255," +
        a[i1] +
        ")),url(shat.png)";
      fogr[3].style.backgroundImage =
        "linear-gradient(90deg, rgb(" +
        r[i1] +
        "," +
        g[i1] +
        "," +
        b[i1] +
        ",0), rgb(" +
        r[i1] +
        "," +
        g[i1] +
        "," +
        b[i1] +
        ",255)),url(shat.png)";
      lud[2].value = Number(this.value).toFixed("0");

      document
        .querySelectorAll(`#ca${num1} .card`)
        .forEach(function (el, ind2) {
          el.style.backgroundColor =
            "rgba(" +
            (r[i1] - ind2 * mot).toFixed() +
            "," +
            (b[i1] - ind2 * mot).toFixed() +
            "," +
            (fogr[2].value - ind2 * mot).toFixed() +
            "," +
            a[i1] +
            ")";
        });

      // cube[num1].style.backgroundColor =
      //   "rgba(" + r[i1] + "," + g[i1] + "," + this.value + "," + a[i1] + ")";
      b[i1] = this.value;
    };
    lud[2].oninput = function () {
      if (this.value == "") {
        this.value = 0;
      }
      if (this.value > 255) {
        this.value = 255;
      }
      fogr[2].value = this.value;

      // cube[num1].style.backgroundColor =
      //   "rgba(" + r[i1] + "," + g[i1] + "," + this.value + "," + a[i1] + ")";
    };
    ///
    fogr[3].oninput = function () {
      fogr[0].style.backgroundImage =
        "linear-gradient(90deg, rgb(0," +
        g[i1] +
        "," +
        b[i1] +
        "," +
        a[i1] +
        "), rgb(255," +
        g[i1] +
        "," +
        b[i1] +
        "," +
        a[i1] +
        ")),url(shat.png)";
      fogr[1].style.backgroundImage =
        "linear-gradient(90deg, rgb(" +
        r[i1] +
        ",0," +
        b[i1] +
        "," +
        a[i1] +
        "), rgb(" +
        r[i1] +
        ",255," +
        b[i1] +
        "," +
        a[i1] +
        ")),url(shat.png)";
      fogr[2].style.backgroundImage =
        "linear-gradient(90deg, rgb(" +
        r[i1] +
        "," +
        g[i1] +
        ",0," +
        a[i1] +
        "), rgb(" +
        r[i1] +
        "," +
        g[i1] +
        ",255," +
        a[i1] +
        ")),url(shat.png)";
      fogr[3].style.backgroundImage =
        "linear-gradient(90deg, rgb(" +
        r[i1] +
        "," +
        g[i1] +
        "," +
        b[i1] +
        ",0), rgb(" +
        r[i1] +
        "," +
        g[i1] +
        "," +
        b[i1] +
        ",255)),url(shat.png)";
      lud[3].value = Number(this.value).toFixed("1");
      document
        .querySelectorAll(`#ca${num1} .card`)
        .forEach(function (el, ind2) {
          el.style.backgroundColor =
            "rgba(" +
            (r[i1] - ind2 * mot).toFixed() +
            "," +
            (g[i1] - ind2 * mot).toFixed() +
            "," +
            (b[i1] - ind2 * mot).toFixed() +
            "," +
            fogr[3].value +
            ")";
        });
      // cube[num1].style.backgroundColor =
      //   "rgba(" + r[i1] + "," + g[i1] + "," + b[i1] + "," + this.value + ")";
      a[i1] = this.value;
    };
    lud[3].oninput = function () {
      if (this.value == "") {
        this.value = 0;
      }
      if (this.value > 1) {
        this.value = 1;
      }
      fogr[3].value = this.value;

      // cube[num1].style.backgroundColor =
      //   "rgba(" + r[i1] + "," + g[i1] + "," + b[i1] + "," + this.value + ")";
    };
    ///
    if (num1 != 6) {
      fogr[4].oninput = function () {
        bb[i1] = this.value;
        lud[4].value = Number(this.value).toFixed("0");
        car[num1].style.borderRadius = bb[i1] + "%";
      };
      lud[4].oninput = function () {
        if (lud[4].value == "") {
          lud[4].value = 0;
        }
        if (lud[4].value > 50) {
          lud[4].value = 50;
        }
        bb[i1] = this.value;
        fogr[4].value = this.value;
        car[num1].style.borderRadius = bb[i1] + "%";
      };
    } else if (num1 == 6) {
      fogr[4].oninput = function () {
        for (let j = 0; j < 6; j++) {
          bb[j] = this.value;
          lud[4].value = Number(this.value).toFixed("0");
          car[j].style.borderRadius = bb[j] + "%";
        }
      };
      lud[4].oninput = function () {
        for (let j = 0; j < 6; j++) {
          if (lud[4].value == "") {
            lud[4].value = 0;
          }
          if (lud[4].value > 50) {
            lud[4].value = 50;
          }
          bb[j] = this.value;
          fogr[4].value = this.value;
          car[j].style.borderRadius = bb[j] + "%";
        }
      };
    }
    ///
  }
}

function func2(num1) {
  for (let i1 = 0; i1 < 7; i1++) {
    if (num1 == i1) {
      fogrz[0].oninput = function () {
        ludz[0].value = Number(this.value).toFixed("0");
        doble.style.animationDuration = this.value + "ms";
      };
      ludz[0].oninput = function () {
        fogrz[0].value = this.value;
        doble.style.animationDuration = this.value + "ms";
      };
      ///
      fogrz[1].oninput = function () {
        ludz[1].value = Number(this.value).toFixed("1");
        doble.style.animationTimingFunction =
          "cubic-bezier(" + this.value + ", " + yy + "," + uu + ", " + ii + ")";
        tt = this.value;
      };
      ludz[1].oninput = function () {
        fogrz[1].value = this.value;
        doble.style.animationTimingFunction =
          "cubic-bezier(" + this.value + ", " + yy + "," + uu + ", " + ii + ")";
      };
      ///
      fogrz[2].oninput = function () {
        ludz[2].value = Number(this.value).toFixed("1");
        doble.style.animationTimingFunction =
          "cubic-bezier(" + tt + ", " + this.value + "," + uu + ", " + ii + ")";
        yy = this.value;
      };
      ludz[2].oninput = function () {
        fogrz[2].value = this.value;
        doble.style.animationTimingFunction =
          "cubic-bezier(" + tt + ", " + this.value + "," + uu + ", " + ii + ")";
      };
      ///
      fogrz[3].oninput = function () {
        ludz[3].value = Number(this.value).toFixed("1");
        doble.style.animationTimingFunction =
          "cubic-bezier(" + tt + ", " + yy + "," + this.value + ", " + ii + ")";
        uu = this.value;
      };
      ludz[3].oninput = function () {
        fogrz[3].value = this.value;
        doble.style.animationTimingFunction =
          "cubic-bezier(" + tt + ", " + yy + "," + this.value + ", " + ii + ")";
      };
      ///
      fogrz[4].oninput = function () {
        ludz[4].value = Number(this.value).toFixed("1");
        doble.style.animationTimingFunction =
          "cubic-bezier(" + tt + ", " + yy + "," + uu + ", " + this.value + ")";
        ii = this.value;
      };
      ludz[4].oninput = function () {
        fogrz[4].value = this.value;
        doble.style.animationTimingFunction =
          "cubic-bezier(" + tt + ", " + yy + "," + uu + ", " + this.value + ")";
      };
      ///
    }
  }
}

function func3(num1) {
  
  let v = 0;
  v = 6 * num1;

  document.querySelectorAll(".card").forEach(function(ele, ind) {
     if (ind == 0) {
      ele.click();
     }
      
  for (let io = 0; io < 3; io++) {
    vfogrx[io].addEventListener("input", function () {
      if (io == 0) {
        lx[num1] = this.value;
      } else if (io == 1) {
        ly[num1] = this.value;
      } else if (io == 2) {
        lz[num1] = this.value;
      }
    
          // console.log(document.querySelectorAll(`#${ele.parentElement.id} .card`));
          document.querySelectorAll(`#${ele.parentElement.id} .card`);
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[0].style.transform = `rotateX(90deg) translateZ(${ly[num1] / 2}px)`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[1].style.transform = `rotateX(90deg) translateZ(-${ly[num1] / 2}px)`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[2].style.transform = `rotateY(90deg) translateZ(${lx[num1] / 2}px)`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[3].style.transform = `rotateY(90deg) translateZ(-${lx[num1] / 2}px)`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[4].style.transform = `translateZ(${lz[num1] / 2}px)`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[5].style.transform = `translateZ(-${lz[num1] / 2}px)`;
    
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[0].style.width = `${lx[num1]}px`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[0].style.height = `${lz[num1]}px`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[1].style.width = `${lx[num1]}px`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[1].style.height = `${lz[num1]}px`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[2].style.width = `${lz[num1]}px`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[2].style.height = `${ly[num1]}px`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[3].style.width = `${lz[num1]}px`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[3].style.height = `${ly[num1]}px`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[4].style.width = `${lx[num1]}px`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[4].style.height = `${ly[num1]}px`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[5].style.width = `${lx[num1]}px`;
          document.querySelectorAll(`#${ele.parentElement.id} .card`)[5].style.height = `${ly[num1]}px`;
      
    
    });
  } 
 
      });
}

/////////////////////////////////////////////////////////////////////////
// let va = 10;
// window.addEventListener("mousedown", fun);
// function fun(e) {

//     window.addEventListener('mousemove', nn1);
// }
// function nn1(e) {
//     const x = e.pageX;
//     const y = e.pageY;
//     let xaxis = (window.innerWidth - 350 / 2 - x ) / 3;
//     let yaxis = -(window.innerHeight / 2 - y ) / 3;
//     doble.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;

// }

// window.addEventListener("mouseup", fun1);
// function fun1(e) {

// window.removeEventListener("mousemove", nn1);
// }
let divx = document.querySelector(".div");
const arrx = new Array();
const arr1x = new Array();
let sx = true;
let countx = 0;
let cox = 0;
let co1x = 0;

co.addEventListener("mousedown", funx);
function funx(e) {
  arrx[countx] = cox;
  arr1x[countx] = co1x;

  co.addEventListener("mousemove", nn1x);
}
function nn1x(e) {
  // const rect = menu.getBoundingClientRect();
  cox = e.pageX;
  co1x = e.pageY;

  arrx[countx + 1] = cox;
  arr1x[countx + 1] = co1x;
  // divx.style.left = arrx[1] + arrx[0] + "px";
  //  divx.style.top = arr1x[1] + arr1x[0] + "px";

  doble.style.transform = `rotateY(${e.clientX}deg)  rotateX(${e.clientY}deg)`;
  
}

window.addEventListener("mouseup", fun1x);
function fun1x(e) {
  co.removeEventListener("mousemove", nn1x);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
rez.addEventListener("mousedown", fun);
function fun(e) {
  window.addEventListener("mousemove", nn1);
}
function nn1(e) {
  let r = w - e.clientX;

  if (w - e.clientX < 360 && w - e.clientX > 200) {
    document.querySelector(".up").style.width = 360 + "px";
    co.style.width = 83 + "%";
  } else if (w - e.clientX < 200) {
    document.querySelector(".up").style.width = 31 + "px";
    co.style.width = 100 + "%";
  } else if (w - r < 590) {
    co.style.width = 590 + "px";
    document.querySelector(".up").style.width = window.innerWidth - 590 + "px";
  } else {
    co.style.width = w - r + "px";
    document.querySelector(".up").style.width = w - e.clientX + "px";
  }
}

window.addEventListener("mouseup", fun1);
function fun1(e) {
  window.removeEventListener("mousemove", nn1);
}
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// let b101 = document.getElementById("b101");
// let b201 = document.getElementById("b201");
// let up01 = document.getElementById("up01");
// let text01 = document.getElementById("text01");
// let cu01 = document.getElementById("ca0");
// let pos01 = document.documentElement;
// let count01 = 0;
// let count101 = 0;
// text01.addEventListener("blur", function () {
//   b101.style.display = "none";
//   b201.style.display = "none";
//   text01.style.width = "93px";
//   text01.style.textAlign = "center";
//   text01.style.padding = "0";
//   up01.addEventListener("mouseover", func101);
// });
// up01.addEventListener("mouseover", function () {
//   b101.style.display = "flex";
//   b201.style.display = "flex";
// });

// up01.addEventListener("mouseout", function () {
//   b101.style.display = "none";
//   b201.style.display = "none";

//   this.style.justifyContent = "center";
// });
// b101.addEventListener("mouseover", function () {
//   b101.style.backgroundColor = "#868686";

// });
// b101.addEventListener("mouseout", function () {
//   b101.style.backgroundColor = "#626262";

// });
// b201.addEventListener("mouseover", function () {
//   b201.style.backgroundColor = "#868686";

// });
// b201.addEventListener("mouseout", function () {
//   b201.style.backgroundColor = "#626262";

// });
// text01.addEventListener("mouseover", function () {
//   text01.style.backgroundColor = "#868686";

// });
// text01.addEventListener("mouseout", function () {
//   text01.style.backgroundColor = "#626262";

// });
// text01.addEventListener("input", function () {
//   text01.addEventListener("blur", function () {


//     if (text01.value == "") {
//       text01.value = 0;
//     }
//     if (isNaN(text01.value) == true) {
//       this.value = 0;
//     }
//   });

//   gq01(text01.value);
// });
// function func101() {
//   b101.style.display = "flex";
//   b201.style.display = "flex";
//   text01.style.width = "93px";
//   text01.style.textAlign = "center";
//   text01.style.padding = "0";

//   this.style.justifyContent = "space-between";
// }




// b201.addEventListener("mousedown", function () {
//   text01.value++;
//   gq01(text01.value);
//   document.documentElement.style.cursor = "none";
//   b101.style.cursor = "none";
//   b201.style.cursor = "none";
//   text01.style.cursor = "none";



//   window.addEventListener('mousemove', nn01);


// });

// let r01 = true;
// let arr01 = new Array(2);
// let n01 = 0;
// function nn01(em) {
//   b101.style.backgroundColor = "#626262";
//   b201.style.backgroundColor = "#626262";
//   text01.style.backgroundColor = "#868686";
//   b101.style.display = "flex";
//   b201.style.display = "flex";
//   n01++;
//   if (r01) {
//     arr01[0] = em.clientX;
//     r01 = false;
//   } else {
//     arr01[1] = em.clientX;
//     r01 = true;
//   }

//   if (arr01[0] != undefined && arr01[1] != undefined) {
//     if (n01 > 1) {
//       if (arr01[0] < arr01[1]) {
//         text01.value++;
//       } if (arr01[0] > arr01[1]) {
//         text01.value--;
//       }

//       n01 = 0;
//     }
//   }
//   gq01(text01.value);
// }







// b101.addEventListener("mousedown", function () {
//   text01.value--;
//   gq01(text01.value);
//   document.documentElement.style.cursor = "none";
//   b101.style.cursor = "none";
//   b201.style.cursor = "none";
//   text01.style.cursor = "none";


//   window.addEventListener('mousemove', nn101);


// });

// let r101 = true;
// let arr101 = new Array(2);
// let n101 = 0;
// function nn101(em) {
//   b101.style.backgroundColor = "#626262";
//   b201.style.backgroundColor = "#626262";
//   text01.style.backgroundColor = "#868686";
//   b101.style.display = "flex";
//   b201.style.display = "flex";
//   n101++;
//   if (r101) {
//     arr101[0] = em.clientX;
//     r101 = false;
//   } else {
//     arr101[1] = em.clientX;
//     r101 = true;
//   }

//   if (arr101[0] != undefined && arr101[1] != undefined) {
//     if (n101 > 1) {
//       if (arr101[0] < arr101[1]) {
//         text01.value++;
//       } if (arr101[0] > arr101[1]) {
//         text01.value--;
//       }

//       n101 = 0;
//     }
//   }
//   gq01(text01.value);
// }








// window.addEventListener("mouseup", function () {
//   window.removeEventListener("mousemove", nn01);
//   window.removeEventListener("mousemove", nn101);
//   window.removeEventListener("mousemove", nn201);
//   document.documentElement.style.cursor = "default";
//   b101.style.cursor = "default";
//   b201.style.cursor = "default";
//   text01.style.cursor = "e-resize";

//   text01.style.backgroundColor = "#626262";


//   up01.style.justifyContent = "center";
// });

// function gq01(v) {
//   cu01.style.transform = "rotateZ(" + v + "deg)";
// }
// text01.addEventListener('click', function () {
//   pos01.style.setProperty("--select", "black");
//   text01.style.caretColor = "#fff";
//   text01.select();
//   text01.style.width = "100%";
//   text01.style.textAlign = "left";
//   text01.style.padding = "0 0 0 5px";
//   b101.style.display = "none";
//   b201.style.display = "none";
// });
// text01.addEventListener("focus", func201);
// function func201() {
//   up01.removeEventListener("mouseover", func101);
//   b101.style.display = "none";
//   b201.style.display = "none";
// }




// text01.addEventListener("mousedown", function () {
//   window.removeEventListener("focus", func201);
//   document.documentElement.style.cursor = "none";
//   b101.style.cursor = "none";
//   b201.style.cursor = "none";
//   b101.style.display = "flex";
//   b201.style.display = "flex";
//   text01.style.cursor = "none";
//   text01.style.userSelect = "none";
//   text01.style.caretColor = "transparent";

//   window.addEventListener('mousemove', nn201);


// });

// let r201 = true;
// let arr201 = new Array(2);
// let n201 = 0;
// function nn201(em) {
//   pos01.style.setProperty("--select", "transparent");
//   text01.style.caretColor = "transparent";
//   b101.style.backgroundColor = "#626262";
//   b201.style.backgroundColor = "#626262";
//   text01.style.backgroundColor = "#868686";
//   text01.style.userSelect = "none";
//   b101.style.display = "flex";
//   b201.style.display = "flex";
//   n201++;
//   if (r201) {
//     arr201[0] = em.clientX;
//     r201 = false;
//   } else {
//     arr201[1] = em.clientX;
//     r201 = true;
//   }

//   if (arr201[0] != undefined && arr201[1] != undefined) {
//     if (n201 > 1) {
//       if (arr201[0] < arr201[1]) {
//         text01.value++;
//       } else if (arr201[0] > arr201[1]) {
//         text01.value--;
//       }

//       n201 = 0;
//     }
//   }
//   gq01(text01.value);
// }