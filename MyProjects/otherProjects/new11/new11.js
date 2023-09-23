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
let vin0 = document.getElementById("vin0");
let vin1 = document.getElementById("vin1");
let vin2 = document.getElementById("vin2");
let vin3 = document.getElementById("vin3");
let vin4 = document.getElementById("vin4");
let vin5 = document.getElementById("vin5");
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

(r[0] = 42), (g[0] = 41), (b[0] = 50);
(r[1] = 94), (g[1] = 91), (b[1] = 98);
(r[2] = 170), (g[2] = 165), (b[2] = 159);
(r[3] = 55), (g[3] = 59), (b[3] = 57);
(r[4] = 139), (g[4] = 139), (b[4] = 141);
(r[5] = 73), (g[5] = 78), (b[5] = 83);

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

let resize1 = 315;

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
  a[i] = 1;
}
for (let m = 0; m < 6; m++) {
  if (bb[m] == undefined) {
    bb[m] = 0;
  }
}

for (let ix = 0; ix < 6; ix++) {
  ca[ix] = document.createElement("div");

  ca[ix].setAttribute(
    "onclick",
    "func(" + ix + "),func1(" + ix + "),func2(" + ix + ")"
  );
  ca[ix].setAttribute("id", "car" + ix);
  ca[ix].classList.add("card", "car" + (ix + Number(1)));
  document.getElementById("car6").appendChild(ca[ix]);
}

for (let i = 0; i < 5; i++) {
  fog[i] = document.getElementById("fog" + i);
  fogr[i] = document.getElementById("fogr" + i);
  fogrz[i] = document.getElementById("fogrz" + i);
  lu[i] = document.getElementById("lu" + i);
  lud[i] = document.getElementById("lud" + i);
  ludz[i] = document.getElementById("ludz" + i);
}

for (let i = 0; i < 7; i++) {
  car[i] = document.getElementById("car" + i);
  cube[i] = document.getElementById("cube" + i);
}
for (let i = 0; i < 6; i++) {
  buut[i] = document.getElementById("buut" + i);
  fogrx[i] = document.getElementById("fogrx" + i);
  ludx[i] = document.getElementById("ludx" + i);
}
fogrx[0].value = fogrx[0].max + fogrx[0].min / 2;
fogrx[1].value = fogrx[0].max + fogrx[0].min / 2;
fogrx[2].value = fogrx[0].max + fogrx[0].min / 2;
if (fog.value == undefined) {
  func(6);
  func1(6);
  func2(6);
  fog[0].value = x[6];
  fog[1].value = y[6];
  fog[2].value = z[6];
  fog[3].value = deg[6];
  lu[0].value = x[6];
  lu[1].value = y[6];
  lu[2].value = z[6];
  lu[3].value = deg[6];
  document.getElementById("car6").style.transform =
    "rotate3d(" + x[6] + "," + y[6] + "," + z[6] + "," + deg[6] + "deg)";
}

function func(num) {
  for (let i1 = 0; i1 < 7; i1++) {
    if (num == i1) {
      fog[0].oninput = function () {
        lu[0].value = Number(this.value).toFixed("1");
        car[num].style.transform =
          "rotate3d(" +
          this.value +
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
          z1 +
          "px)";
        x[i1] = this.value;

        pos.style.setProperty("--x1", x[i1]);
      };
      lu[0].oninput = function () {
        if (this.value == "") {
          this.value = 0;
        }
        if (this.value > 1) {
          this.value = 1;
        }
        fog[0].value = this.value;
        car[num].style.transform =
          "rotate3d(" +
          this.value +
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
          z1 +
          "px)";
        x[i1] = this.value;
      };
      ///
      fog[1].oninput = function () {
        lu[1].value = Number(this.value).toFixed("1");
        car[num].style.transform =
          "rotate3d(" +
          x[i1] +
          "," +
          this.value +
          "," +
          z[i1] +
          "," +
          deg[i1] +
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
        if (this.value > 1) {
          this.value = 1;
        }
        fog[1].value = this.value;
        car[num].style.transform =
          "rotate3d(" +
          x[i1] +
          "," +
          this.value +
          "," +
          z[i1] +
          "," +
          deg[i1] +
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
        car[num].style.transform =
          "rotate3d(" +
          x[i1] +
          "," +
          y[i1] +
          "," +
          this.value +
          "," +
          deg[i1] +
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
        if (this.value > 1) {
          this.value = 1;
        }
        fog[2].value = this.value;
        car[num].style.transform =
          "rotate3d(" +
          x[i1] +
          "," +
          y[i1] +
          "," +
          this.value +
          "," +
          deg[i1] +
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
      fog[3].oninput = function () {
        lu[3].value = Number(this.value).toFixed("0");
        car[num].style.transform =
          "rotate3d(" +
          x[i1] +
          "," +
          y[i1] +
          "," +
          z[i1] +
          "," +
          this.value +
          "deg) translate3d(" +
          x1 +
          "px," +
          y1 +
          "px," +
          z1 +
          "px)";
        deg[i1] = this.value;
        pos.style.setProperty("--deg", deg[i1]);
      };
      lu[3].oninput = function () {
        if (this.value == "") {
          this.value = 0;
        }
        if (this.value > 360) {
          this.value = 360;
        }
        fog[3].value = this.value;
        car[num].style.transform =
          "rotate3d(" +
          x[i1] +
          "," +
          y[i1] +
          "," +
          z[i1] +
          "," +
          this.value +
          "deg) translate3d(" +
          x1 +
          "px," +
          y1 +
          "px," +
          z1 +
          "px)";
        deg[i1] = this.value;
      };

      fogrx[0].oninput = function () {
        ludx[0].value = Number(this.value).toFixed("0");
        car[num].style.transform =
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
        car[num].style.transform =
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
        car[num].style.transform =
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
        car[num].style.transform =
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
        car[num].style.transform =
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
        car[num].style.transform =
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
}

function func1(num1) {
  for (let i1 = 0; i1 < 7; i1++) {
    if (num1 == i1) {
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
        car[num1].style.backgroundColor =
          "rgba(" + this.value + "," + g[i1] + "," + b[i1] + "," + a[i1] + ")";
        cube[num1].style.backgroundColor =
          "rgba(" + this.value + "," + g[i1] + "," + b[i1] + "," + a[i1] + ")";
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
        car[num1].style.backgroundColor =
          "rgba(" + this.value + "," + g[i1] + "," + b[i1] + "," + a[i1] + ")";
        cube[num1].style.backgroundColor =
          "rgba(" + this.value + "," + g[i1] + "," + b[i1] + "," + a[i1] + ")";
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
        car[num1].style.backgroundColor =
          "rgba(" + r[i1] + "," + this.value + "," + b[i1] + "," + a[i1] + ")";
        cube[num1].style.backgroundColor =
          "rgba(" + r[i1] + "," + this.value + "," + b[i1] + "," + a[i1] + ")";
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
        car[num1].style.backgroundColor =
          "rgba(" + r[i1] + "," + this.value + "," + b[i1] + "," + a[i1] + ")";
        cube[num1].backgroundColor =
          "rgba(" + r[i1] + "," + this.value + "," + b[i1] + "," + a[i1] + ")";
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
        car[num1].style.backgroundColor =
          "rgba(" + r[i1] + "," + g[i1] + "," + this.value + "," + a[i1] + ")";
        cube[num1].style.backgroundColor =
          "rgba(" + r[i1] + "," + g[i1] + "," + this.value + "," + a[i1] + ")";
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
        car[num1].style.backgroundColor =
          "rgba(" + r[i1] + "," + g[i1] + "," + this.value + "," + a[i1] + ")";
        cube[num1].style.backgroundColor =
          "rgba(" + r[i1] + "," + g[i1] + "," + this.value + "," + a[i1] + ")";
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
        car[num1].style.backgroundColor =
          "rgba(" + r[i1] + "," + g[i1] + "," + b[i1] + "," + this.value + ")";
        cube[num1].style.backgroundColor =
          "rgba(" + r[i1] + "," + g[i1] + "," + b[i1] + "," + this.value + ")";
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
        car[num1].style.backgroundColor =
          "rgba(" + r[i1] + "," + g[i1] + "," + b[i1] + "," + this.value + ")";
        cube[num1].style.backgroundColor =
          "rgba(" + r[i1] + "," + g[i1] + "," + b[i1] + "," + this.value + ")";
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
}

function func2(num1) {
  for (let i1 = 0; i1 < 7; i1++) {
    if (num1 == i1) {
      fogrz[0].oninput = function () {
        ludz[0].value = Number(this.value).toFixed("0");
        car[num1].style.animationDuration = this.value + "ms";
      };
      ludz[0].oninput = function () {
        fogrz[0].value = this.value;
        car[num1].style.animationDuration = this.value + "ms";
      };
      ///
      fogrz[1].oninput = function () {
        ludz[1].value = Number(this.value).toFixed("1");
        car[num1].style.animationTimingFunction =
          "cubic-bezier(" + this.value + ", " + yy + "," + uu + ", " + ii + ")";

        tt = this.value;
      };
      ludz[1].oninput = function () {
        fogrz[1].value = this.value;
        car[num1].style.animationTimingFunction =
          "cubic-bezier(" + this.value + ", " + yy + "," + uu + ", " + ii + ")";
      };
      ///
      fogrz[2].oninput = function () {
        ludz[2].value = Number(this.value).toFixed("1");
        car[num1].style.animationTimingFunction =
          "cubic-bezier(" + tt + ", " + this.value + "," + uu + ", " + ii + ")";

        yy = this.value;
      };
      ludz[2].oninput = function () {
        fogrz[2].value = this.value;
        car[num1].style.animationTimingFunction =
          "cubic-bezier(" + tt + ", " + this.value + "," + uu + ", " + ii + ")";
      };
      ///
      fogrz[3].oninput = function () {
        ludz[3].value = Number(this.value).toFixed("1");
        car[num1].style.animationTimingFunction =
          "cubic-bezier(" + tt + ", " + yy + "," + this.value + ", " + ii + ")";

        uu = this.value;
      };
      ludz[3].oninput = function () {
        fogrz[3].value = this.value;
        car[num1].style.animationTimingFunction =
          "cubic-bezier(" + tt + ", " + yy + "," + this.value + ", " + ii + ")";
      };
      ///
      fogrz[4].oninput = function () {
        ludz[4].value = Number(this.value).toFixed("1");
        car[num1].style.animationTimingFunction =
          "cubic-bezier(" + tt + ", " + yy + "," + uu + ", " + this.value + ")";
        ii = this.value;
      };
      ludz[4].oninput = function () {
        fogrz[4].value = this.value;
        car[num1].style.animationTimingFunction =
          "cubic-bezier(" + tt + ", " + yy + "," + uu + ", " + this.value + ")";
      };
      ///
    }
  }
}

for (let i = 0; i < 6; i++) {
  cube[i].style.backgroundColor =
    "rgb(" + r[i] + "," + g[i] + "," + b[i] + "," + a[i] + ")";
}

iddd.onclick = function () {
  car[6].style.animationTimingFunction = "linear";
  for (let i = 1; i < 5; i++) {
    fogrz[i].value = 0;
    ludz[i].value = 0;
  }
};

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
    if (ind != 5) {
      ele.style.cssText = "visibility: unset; opacity: 1; transform: unset;";
      window.onresize = function () {
        if (window.innerWidth > 649) {
          document.getElementById("cc").prepend(bee);
        } else {
          vin5.append(bee);
        }
      };
      if (window.innerWidth > 649) {
        document.getElementById("cc").prepend(bee);
      } else {
        vin5.append(bee);
      }
    } else {
      ele.style.cssText = "visibility: unset; opacity: 1; transform: unset;";
      window.onresize = function () {
        if (window.innerWidth > 649) {
          document.getElementById("cc").prepend(bee);
        } else {
          vin5.append(bee);
        }
      };
      if (window.innerWidth > 649) {
        document.getElementById("cc").prepend(bee);
      } else {
        vin5.append(bee);
      }
    }
  });
});
window.onresize = function () {
  if (window.innerWidth > 649) {
    document.getElementById("cc").prepend(bee);
  } else {
    vin5.append(bee);
  }
};
if (window.innerWidth > 649) {
  document.getElementById("cc").prepend(bee);
} else {
  vin5.append(bee);
}
let vv = true;
she1.addEventListener("click", function () {
  car[6].classList.toggle("ani");
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
    car[6].style.animationIterationCount = "infinite";
    k3.style.pointerEvents = "unset";
    k3.style.opacity = "1";
    she3.style.pointerEvents = "unset";
    she3.style.opacity = "1";
    ss = false;
  } else if (ss == false) {
    document.querySelector(".df2").style.color = "#fff";
    car[6].style.animationIterationCount = "unset";
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
    car[6].style.animationDirection = "alternate";
    ss1 = false;
  } else {
    document.querySelector(".df3").style.color = "#fff";
    car[6].style.animationDirection = "unset";
    ss1 = true;
  }
});

// co.onmousemove = function (em) {
//   pos.style.setProperty("--mo", em.clientY + em.clientX + "deg");
//   pos.style.setProperty("--mox", em.clientX);
//   pos.style.setProperty("--moy", em.clientY);
//   pos.style.setProperty("--moz", em.clientX / em.clientY / 100);
// };

clic.addEventListener("click", function () {
  si.style.display = "block";
  uu1.style.display = "none";
});

clic1.addEventListener("click", function () {
  si.style.display = "none";
  uu1.style.display = "flex";
});

let xz = [];
let inn = [];
let ner = [];
let bv = [];
let ft1 = [];
let ii1 = [];
for (let i = 0; i < 6; i++) {
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
      car[i].style.display = "none";
      cube[i].style.opacity = "0.7";
      cube[i].style.pointerEvents = "none";
      ft1[i] = false;
    } else {
      ii1[i].style.color = "#fff";
      car[i].style.display = "block";
      cube[i].style.opacity = "1";
      cube[i].style.pointerEvents = "unset";

      ft1[i] = true;
    }
  };

  car[i].addEventListener("mouseover", function () {
    car[i].style.outline = "1px solid #f00";
    inn[i].style.opacity = "0.7";
    cube[i].style.backgroundColor = "rgb(128 0 255)";
  });
  car[i].addEventListener("mouseout", function () {
    inn[i].style.opacity = "1";
    car[i].style.outline = "1px solid transparent";

    cube[i].style.backgroundColor =
      "rgb(" + r[i] + "," + g[i] + "," + b[i] + "," + a[i] + ")";
  });

  car[i].addEventListener("click", function () {
    fogr[0].value = r[i];
    fogr[1].value = g[i];
    fogr[2].value = b[i];
    fogr[3].value = a[i];
    lud[0].value = Number(r[i]).toFixed("0");
    lud[1].value = Number(g[i]).toFixed("0");
    lud[2].value = Number(b[i]).toFixed("0");
    lud[3].value = Number(a[i]).toFixed("1");
    fogr[0].style.backgroundImage =
      "linear-gradient(90deg, rgb(0," +
      g[i] +
      "," +
      b[i] +
      "," +
      a[i] +
      "), rgb(255," +
      g[i] +
      "," +
      b[i] +
      "," +
      a[i] +
      ")),url(shat.png)";
    fogr[1].style.backgroundImage =
      "linear-gradient(90deg, rgb(" +
      r[i] +
      ",0," +
      b[i] +
      "," +
      a[i] +
      "), rgb(" +
      r[i] +
      ",255," +
      b[i] +
      "," +
      a[i] +
      ")),url(shat.png)";
    fogr[2].style.backgroundImage =
      "linear-gradient(90deg, rgb(" +
      r[i] +
      "," +
      g[i] +
      ",0," +
      a[i] +
      "), rgb(" +
      r[i] +
      "," +
      g[i] +
      ",255," +
      a[i] +
      ")),url(shat.png)";
    fogr[3].style.backgroundImage =
      "linear-gradient(90deg, rgb(" +
      r[i] +
      "," +
      g[i] +
      "," +
      b[i] +
      ",0), rgb(" +
      r[i] +
      "," +
      g[i] +
      "," +
      b[i] +
      ",255)),url(shat.png)";

    fog[0].value = x[i];
    fog[1].value = y[i];
    fog[2].value = z[i];
    fog[3].value = deg[i];
    lu[0].value = Number(x[i]).toFixed("1");
    lu[1].value = Number(y[i]).toFixed("1");
    lu[2].value = Number(z[i]).toFixed("1");
    lu[3].value = Number(deg[i]).toFixed("0");
    ///////
    fogr[4].value = bb[i];
    lud[4].value = bb[i];
  });
  cube[i].addEventListener("click", function () {
    fogr[0].value = r[i];
    fogr[1].value = g[i];
    fogr[2].value = b[i];
    fogr[3].value = a[i];
    lud[0].value = Number(r[i]).toFixed("0");
    lud[1].value = Number(g[i]).toFixed("0");
    lud[2].value = Number(b[i]).toFixed("0");
    lud[3].value = Number(a[i]).toFixed("1");
    //////////////////
    fogr[0].style.backgroundImage =
      "linear-gradient(90deg, rgb(0," +
      g[i] +
      "," +
      b[i] +
      "," +
      a[i] +
      "), rgb(255," +
      g[i] +
      "," +
      b[i] +
      "," +
      a[i] +
      ")),url(shat.png)";
    fogr[1].style.backgroundImage =
      "linear-gradient(90deg, rgb(" +
      r[i] +
      ",0," +
      b[i] +
      "," +
      a[i] +
      "), rgb(" +
      r[i] +
      ",255," +
      b[i] +
      "," +
      a[i] +
      ")),url(shat.png)";
    fogr[2].style.backgroundImage =
      "linear-gradient(90deg, rgb(" +
      r[i] +
      "," +
      g[i] +
      ",0," +
      a[i] +
      "), rgb(" +
      r[i] +
      "," +
      g[i] +
      ",255," +
      a[i] +
      ")),url(shat.png)";
    fogr[3].style.backgroundImage =
      "linear-gradient(90deg, rgb(" +
      r[i] +
      "," +
      g[i] +
      "," +
      b[i] +
      ",0), rgb(" +
      r[i] +
      "," +
      g[i] +
      "," +
      b[i] +
      ",255)),url(shat.png)";
    //////////
    fog[0].value = x[i];
    fog[1].value = y[i];
    fog[2].value = z[i];
    fog[3].value = deg[i];
    lu[0].value = Number(x[i]).toFixed("1");
    lu[1].value = Number(y[i]).toFixed("1");
    lu[2].value = Number(z[i]).toFixed("1");
    lu[3].value = Number(deg[i]).toFixed("0");
    /////////
    fogr[4].value = bb[i];
    lud[4].value = bb[i];
  });
  document.getElementById("cube6").addEventListener("click", function () {
    fog[0].value = x[6];
    fog[1].value = y[6];
    fog[2].value = z[6];
    fog[3].value = deg[6];
    lu[0].value = Number(x[6]).toFixed("1");
    lu[1].value = Number(y[6]).toFixed("1");
    lu[2].value = Number(z[6]).toFixed("1");
    lu[3].value = Number(deg[6]).toFixed("1");
  });
  inn[i].addEventListener("mouseover", function () {
    car[i].style.backgroundColor = "rgb(80 59 108)";
    inn[i].style.opacity = "0.7";
  });

  inn[i].addEventListener("mouseout", function () {
    inn[i].style.opacity = "1";
    car[i].style.backgroundColor =
      "rgb(" + r[i] + "," + g[i] + "," + b[i] + "," + a[i] + ")";
  });

  cube[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = "rgb(128 0 255)";
    car[i].style.backgroundColor = "rgb(128 0 255)";
  });
  cube[i].addEventListener("mouseout", function () {
    this.style.backgroundColor =
      "rgb(" + r[i] + "," + g[i] + "," + b[i] + "," + a[i] + ")";
    car[i].style.backgroundColor =
      "rgb(" + r[i] + "," + g[i] + "," + b[i] + "," + a[i] + ")";
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
