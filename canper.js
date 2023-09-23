let cax = document.getElementById("canvas"),
  ctxx = cax.getContext("2d");
let w1 = (cax.width = window.innerWidth);
let h1 = (cax.height = window.innerHeight);
window.addEventListener("resize", () => {
  w1 = cax.width = window.innerWidth;
  h1 = cax.height = window.innerHeight;
}); 
let Timer = 1000;
ctxx.imageSmoothingQuality = "high";

ctxx.lineCap = "round";
ctxx.lineJoin = "round";
let gf = true;
function circle(x, y, rad, arrv1, arrv2) {
  this.x = x;
  this.y = y;
  this.arrv1 = arrv1;
  this.arrv2 = arrv2;
  this.e = Math.random() * 1;
  this.ma = 2;
  this.pls = 0.1;
  this.m = 10;
  this.m1 = 20;
  this.smooth = Math.random() * 1.5;

  ctxx.beginPath();


  this.draw = function () {
    ctxx.lineWidth = 1;

    ctxx.strokeStyle = `rgb(0, 255, 255, ${(this.m1 -= 0.1 * this.m1)})`;


    ctxx.lineTo(this.x, this.y);
    ctxx.stroke();

    ctxx.beginPath();
    ctxx.fillStyle = `rgb(${this.x / (w1 / 255)}, ${
      255 - this.y / (h1 / 255)
    }, ${this.y / (h1 / 255)}, ${(this.m1 -= 0.1 * this.m1)})`;
    ctxx.arc(this.x, this.y, rad / 2, 2 * Math.PI, false);
    ctxx.fill();
  };
  this.update = function () {

    this.e += this.pls;

    this.y += this.arrv1 * this.smooth;
    this.x += this.arrv2 * this.smooth;
    this.draw();
  };
}

let area = new Array();
let cur = 100;
let arrv = [-1, 1];
document.querySelectorAll("header")[0].addEventListener("mousemove", func);
document.querySelectorAll("section")[0].addEventListener("mousemove", func);
function func(e) {
  if (window.scrollY < window.innerHeight) {
    let rad = 1;
    let x = e.clientX + cur;
    let y = e.clientY + cur / 2 + window.scrollY;

    area.push(
      new circle(
        x,
        y,
        rad,
        arrv[(Math.random() * (arrv.length - 1)).toFixed("")],
        arrv[(Math.random() * (arrv.length - 1)).toFixed("")]
      )
    );

    setTimeout(() => {
      area.shift();
    }, Timer);
  }

 
}

function animate1() {
  requestAnimationFrame(animate1);
 if (window.scrollY <= h1) {
  ctxx.clearRect(0, 0, w1, h1);
  // ctxx.fillStyle = `rgba(18, 18, 18, ${0.01 * 50})`;
  // ctxx.fillRect(0, 0, w1, h1);
    for (let i = 0; i < area.length; i++) {
      area[i].update();
    }
  }
}

animate1();
