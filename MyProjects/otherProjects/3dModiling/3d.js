let asideLeft = document.getElementById("asideLeft");
let asideRight = document.getElementById("asideRight");
let poss = document.documentElement;
let id = 0;
let cube = new Array();
let range = new Array();
let menu = new Array();
let obj = new Array();
let option = new Array();
let arrMenu = [["Add Cube", "Remove Cube", "iiiiiiiiiii"]];
let arrSitting = [
  [4, "XYZP", "<i class='fa-solid fa-cube'></i>"],
  [3, "XYZ", "<i class='fa-brands fa-unity'></i>"],
  [3, "XYZ", "<i class='fa-solid fa-vr-cardboard'></i>"],
  [4, "RGBA", "<i class='fa-solid fa-palette'></i>"],
];

class Cube {
  constructor(id) {
    this.id = id;
    this.x = 200;
    this.y = 200;
    this.z = 200;
    this.widthFace = 200;
    this.heightFace = 200;
    this.face = new Array();
    this.box = document.createElement("div");
    this.box.className = "box";
    for (let i = 0; i < 6; i++) {
      this.face[i] = document.createElement("div");
      this.face[i].classList.add("face" + i, "face");
      this.face[i].style.backgroundColor = `rgb(${255 / ((i + 1) / 2)}, ${
        255 / ((i + 1) / 2)
      }, ${255 / ((i + 1) / 2)})`;
      this.box.append(this.face[i]);
      document.getElementById("world").append(this.box);
      // this.face[i].innerHTML = this.id + 1;

      this.face[i].style.width = this.widthFace + "px";
      this.face[i].style.height = this.heightFace + "px";

      this.box.style.width = this.widthFace + "px";
      this.box.style.height = this.heightFace + "px";
    }

    this.face[0].style.width = this.x + "px";
    this.face[0].style.height = this.y + "px";
    this.face[1].style.width = this.x + "px";
    this.face[1].style.height = this.y + "px";

    this.face[2].style.width = this.y + "px";
    this.face[2].style.height = this.z + "px";
    this.face[3].style.width = this.y + "px";
    this.face[3].style.height = this.z + "px";

    this.face[4].style.width = this.x + "px";
    this.face[4].style.height = this.z + "px";
    this.face[5].style.width = this.x + "px";
    this.face[5].style.height = this.z + "px";

    this.face[0].style.transform = `rotateX(90deg) translateZ(${this.z / 2}px)`;
    this.face[1].style.transform = `rotateX(90deg) translateZ(-${
      this.z / 2
    }px)`;
    this.face[2].style.transform = `rotateY(90deg) translateZ(${this.x / 2}px)`;
    this.face[3].style.transform = `rotateY(90deg) translateZ(-${
      this.x / 2
    }px)`;
    this.face[4].style.transform = `translateZ(${this.y / 2}px)`;
    this.face[5].style.transform = `translateZ(-${this.y / 2}px)`;

    ubdate(this);
  }
}

class Setting {
  constructor(numRange, ig, desc, fonta) {
    this.desc = desc;
    this.fonta = fonta;
    this.ig = ig;
    this.numRange = numRange;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.pluss = 1;
    this.per = 600;
    this.range = new Array();
    this.uprs = new Array();
    this.text = new Array();
    this.des = new Array();

    this.opti = document.createElement("button");

    this.up = document.createElement("div");
    this.up.className = "upRange";
    this.opti.type = "button";
    this.opti.className = "inoption";
    this.opti.innerHTML = this.fonta;
    document.getElementById("opetion").prepend(this.opti);
    for (let i = 0; i < this.numRange; i++) {
      this.uprs[i] = document.createElement("div");
      this.des[i] = document.createElement("p");
      this.range[i] = document.createElement("input");
      this.text[i] = document.createElement("input");
      this.text[i].type = "text";
      this.text[i].className = "text";
      this.text[i].value = 0;
      this.range[i].value = 0;
      this.des[i].className = "p";
      this.uprs[i].className = "uprs";
      this.range[i].type = "range";
      this.range[i].min = 0;
      this.range[i].max = 360 * 2;
      if (ig == 1) {
        this.range[i].min = -1360 * 2;
        this.range[i].max = 1360 * 2;
      } else if (ig == 2) {
        this.range[i].min = 0;
        this.range[i].max = 1360;

        this.text[i].value = 200;

        this.range[i].value = 200;
      } else if (ig == 3) {
        this.range[i].min = 0;
        this.range[i].max = 255;
        this.text[i].value = 0;
        this.range[i].value = 0;
        if (i == 3) {
          this.range[i].max = 1;
          this.range[i].value = 1;
          this.text[i].value = 1;
        }
      }
      this.range[i].step = "0.001";

      this.range[i].classList.add("range" + i, "rangee" + ig, "range");
      this.uprs[i].append(this.des[i], this.range[i], this.text[i]);

      this.up.append(this.uprs[i]);
    }

    for (let i = 0; i < this.numRange; i++) {
      this.range[i].value = this.text[i].value;
    }
    this.up.style.transform = "scale(0.4)";
    this.up.style.visibility = "hidden";
    this.up.style.opacity = "0";
    if (this.ig == 0) {
      this.text[0].value = this.x;
      this.text[1].value = this.y;
      this.text[3].value = this.per;
      this.range[3].value = this.per;
      this.range[3].max = 2000;
      this.range[3].min = 0;
      this.up.style.transform = "scale(1)";
      this.up.style.visibility = "unset";
      this.up.style.opacity = "1";
    }
    for (let i = 0; i < this.numRange; i++) {
      this.des[i].innerHTML = this.desc[i];
    }
    document.getElementById("sitteng").prepend(this.up);
  }

  transform = function (e, id) {
    if (e == 0) {
      for (let i = 0; i < range[e].numRange; i++) {
        range[e].text[i].onwheel = (ev) => {
          if (ev.deltaY < 0) {
            range[e].text[i].value++;
          } else {
            range[e].text[i].value--;
          }
          if (i == 0) {
            func0();
          } else if (i == 1) {
            func1();
          } else if (i == 2) {
            func2();
          } else if (i == 3) {
            func3();
          }
        };
        range[e].text[i].oninput = function (ev) {
          if (i == 0) {
            func0();
          } else if (i == 1) {
            func1();
          } else if (i == 2) {
            func2();
          } else if (i == 3) {
            func3();
          }
        };
      }
      for (let k = 0; k < 3; k++) {
        range[e].range[k].oninput = function (ev) {
          cube[
            id
          ].box.style.transform = `rotateX(${range[e].range[0].value}deg) rotateY(${range[e].range[1].value}deg) rotateZ(${range[e].range[2].value}deg)
        translateX(${range[1].range[0].value}px) translateY(${range[1].range[1].value}px) translateZ(${range[1].range[2].value}px)`;
          range[e].text[k].value = range[e].range[k].value;
          if (k == 0) {
            obj[id].x[id] = range[e].range[k].value;
          } else if (k == 1) {
            obj[id].y[id] = range[e].range[k].value;
          } else if (k == 2) {
            obj[id].z[id] = range[e].range[k].value;
          }
        };
      }
      function func0() {
        cube[
          id
        ].box.style.transform = `rotateX(${range[e].text[0].value}deg) rotateY(${range[e].text[1].value}deg) rotateZ(${range[e].text[2].value}deg)
        translateX(${range[1].text[0].value}px) translateY(${range[1].text[1].value}px) translateZ(${range[1].text[2].value}px)`;
        range[e].range[0].value = range[e].text[0].value;
        obj[id].x[id] = range[e].text[0].value;
      }

      function func1() {
        cube[
          id
        ].box.style.transform = `rotateX(${range[e].text[0].value}deg) rotateY(${range[e].text[1].value}deg) rotateZ(${range[e].text[2].value}deg)
        translateX(${range[1].text[0].value}px) translateY(${range[1].text[1].value}px) translateZ(${range[1].text[2].value}px)`;
        range[e].range[1].value = range[e].text[1].value;
        obj[id].y[id] = range[e].text[1].value;
      }

      function func2() {
        cube[
          id
        ].box.style.transform = `rotateX(${range[e].text[0].value}deg) rotateY(${range[e].text[1].value}deg) rotateZ(${range[e].text[2].value}deg)
        translateX(${range[1].text[0].value}px) translateY(${range[1].text[1].value}px) translateZ(${range[1].text[2].value}px)`;
        range[e].range[2].value = range[e].text[2].value;
        obj[id].z[id] = range[e].text[2].value;
      }
      range[e].range[3].oninput = function (ev) {
        asideLeft.style.perspective = `${range[e].range[3].value}px`;
        range[e].text[3].value = range[e].range[3].value;
      };

      function func3() {
        asideLeft.style.perspective = `${range[e].text[3].value}px`;
        range[e].range[3].value = range[e].text[3].value;
      }
    } else if (e == 1) {
      for (let i = 0; i < range[e].numRange; i++) {
        range[e].text[i].onwheel = (ev) => {
          if (ev.deltaY < 0) {
            range[e].text[i].value++;
          } else {
            range[e].text[i].value--;
          }
          if (i == 0) {
            func0();
          } else if (i == 1) {
            func1();
          } else if (i == 2) {
            func2();
          }
        };
        range[e].text[i].oninput = function (ev) {
          if (i == 0) {
            func0();
          } else if (i == 1) {
            func1();
          } else if (i == 2) {
            func2();
          }
        };
      }
      for (let k = 0; k < range[e].numRange; k++) {
        range[e].range[k].oninput = function (ev) {
          cube[
            id
          ].box.style.transform = `rotateX(${range[0].range[0].value}deg) rotateY(${range[0].range[1].value}deg) rotateZ(${range[0].range[2].value}deg)
         translateX(${range[e].range[0].value}px) translateY(${range[e].range[1].value}px) translateZ(${range[e].range[2].value}px)`;
          range[e].text[k].value = range[e].range[k].value;
          if (k == 0) {
            obj[id].x1[id] = range[e].range[k].value;
          } else if (k == 1) {
            obj[id].y1[id] = range[e].range[k].value;
          } else if (k == 2) {
            obj[id].z1[id] = range[e].range[k].value;
          }
        };
      }
      function func0() {
        cube[
          id
        ].box.style.transform = `rotateX(${range[0].text[0].value}deg) rotateY(${range[0].text[1].value}deg) rotateZ(${range[0].text[2].value}deg)
      translateX(${range[e].text[0].value}px) translateY(${range[e].text[1].value}px) translateZ(${range[e].text[2].value}px)`;
        range[e].range[0].value = range[e].text[0].value;
        obj[id].x1[id] = range[e].text[0].value;
      }

      function func1() {
        cube[
          id
        ].box.style.transform = `rotateX(${range[0].text[0].value}deg) rotateY(${range[0].text[1].value}deg) rotateZ(${range[0].text[2].value}deg)
      translateX(${range[e].text[0].value}px) translateY(${range[e].text[1].value}px) translateZ(${range[e].text[2].value}px)`;
        range[e].range[1].value = range[e].text[1].value;
        obj[id].y1[id] = range[e].text[1].value;
      }

      function func2() {
        cube[
          id
        ].box.style.transform = `rotateX(${range[0].text[0].value}deg) rotateY(${range[0].text[1].value}deg) rotateZ(${range[0].text[2].value}deg)
    translateX(${range[e].text[0].value}px) translateY(${range[e].text[1].value}px) translateZ(${range[e].text[2].value}px)`;
        range[e].range[2].value = range[e].text[2].value;
        obj[id].z1[id] = range[e].text[2].value;
      }
    }
  };

  scale = function (e, id) {
    for (let i = 0; i < range[e].numRange; i++) {
      range[e].text[i].onwheel = (ev) => {
        if (ev.deltaY < 0) {
          range[e].text[i].value++;
        } else {
          range[e].text[i].value--;
        }
        if (i == 0) {
          func0();
        } else if (i == 1) {
          func1();
        } else if (i == 2) {
          func2();
        }
      };
      range[e].text[i].oninput = function (ev) {
        if (i == 0) {
          func0();
        } else if (i == 1) {
          func1();
        } else if (i == 2) {
          func2();
        }
      };
    }

    range[e].range[0].oninput = function (ev) {
      cube[id].face[0].style.width = range[e].range[0].value + "px";
      cube[id].face[1].style.width = range[e].range[0].value + "px";
      cube[id].face[2].style.transform = `rotateY(90deg) translateZ(${
        range[e].range[0].value / 2
      }px)`;
      cube[id].face[3].style.transform = `rotateY(90deg) translateZ(-${
        range[e].range[0].value / 2
      }px)`;
      cube[id].face[4].style.width = range[e].range[0].value + "px";
      cube[id].face[5].style.width = range[e].range[0].value + "px";

      range[e].text[0].value = range[e].range[0].value;
      obj[id].x2[id] = range[e].range[0].value;
    };

    function func0() {
      cube[id].face[0].style.width = range[e].text[0].value + "px";
      cube[id].face[1].style.width = range[e].text[0].value + "px";
      cube[id].face[2].style.transform = `rotateY(90deg) translateZ(${
        range[e].text[0].value / 2
      }px)`;
      cube[id].face[3].style.transform = `rotateY(90deg) translateZ(-${
        range[e].text[0].value / 2
      }px)`;
      cube[id].face[4].style.width = range[e].text[0].value + "px";
      cube[id].face[5].style.width = range[e].text[0].value + "px";

      range[e].range[0].value = range[e].text[0].value;
      obj[id].x2[id] = range[e].text[0].value;
    }
    range[e].range[1].oninput = function (ev) {
      cube[id].face[2].style.width = range[e].range[1].value + "px";
      cube[id].face[3].style.width = range[e].range[1].value + "px";
      cube[id].face[4].style.transform = `translateZ(${
        range[e].range[1].value / 2
      }px)`;
      cube[id].face[5].style.transform = `translateZ(-${
        range[e].range[1].value / 2
      }px)`;
      cube[id].face[0].style.height = range[e].range[1].value + "px";
      cube[id].face[1].style.height = range[e].range[1].value + "px";

      range[e].text[1].value = range[e].range[1].value;
      obj[id].y2[id] = range[e].range[1].value;
    };

    function func1() {
      cube[id].face[2].style.width = range[e].text[1].value + "px";
      cube[id].face[3].style.width = range[e].text[1].value + "px";
      cube[id].face[4].style.transform = `translateZ(${
        range[e].text[1].value / 2
      }px)`;
      cube[id].face[5].style.transform = `translateZ(-${
        range[e].text[1].value / 2
      }px)`;
      cube[id].face[0].style.height = range[e].text[1].value + "px";
      cube[id].face[1].style.height = range[e].text[1].value + "px";

      range[e].range[1].value = range[e].text[1].value;
      obj[id].y2[id] = range[e].text[1].value;
    }
    range[e].range[2].oninput = function (ev) {
      cube[id].face[2].style.height = range[e].range[2].value + "px";
      cube[id].face[3].style.height = range[e].range[2].value + "px";
      cube[id].face[0].style.transform = ` rotateX(90deg) translateZ(${
        range[e].range[2].value / 2
      }px)`;
      cube[id].face[1].style.transform = ` rotateX(90deg) translateZ(-${
        range[e].range[2].value / 2
      }px)`;
      cube[id].face[4].style.height = range[e].range[2].value + "px";
      cube[id].face[5].style.height = range[e].range[2].value + "px";

      range[e].text[2].value = range[e].range[2].value;
      obj[id].z2[id] = range[e].range[2].value;
    };

    function func2() {
      cube[id].face[2].style.height = range[e].text[2].value + "px";
      cube[id].face[3].style.height = range[e].text[2].value + "px";
      cube[id].face[0].style.transform = ` rotateX(90deg) translateZ(${
        range[e].text[2].value / 2
      }px)`;
      cube[id].face[1].style.transform = ` rotateX(90deg) translateZ(-${
        range[e].text[2].value / 2
      }px)`;
      cube[id].face[4].style.height = range[e].text[2].value + "px";
      cube[id].face[5].style.height = range[e].text[2].value + "px";

      range[e].range[2].value = range[e].text[2].value;
      obj[id].z2[id] = range[e].text[2].value;
    }
  };

  colors = function (e, id) {
    for (let i = 0; i < range[e].numRange; i++) {
      range[e].text[i].onwheel = (ev) => {
        if (ev.deltaY < 0) {
          if (i != 3) {
            range[e].text[i].value++;
          } else {
            range[e].text[i].value = Number(range[e].text[i].value) + 0.01;
          }
        } else {
          if (i != 3) {
            range[e].text[i].value--;
          } else {
            range[e].text[i].value -= 0.01;
          }
        }
        if (i == 0) {
          func0();
        } else if (i == 1) {
          func1();
        } else if (i == 2) {
          func2();
        } else if (i == 3) {
          func3();
        }
      };
      range[e].text[i].oninput = function (ev) {
        if (i == 0) {
          func0();
        } else if (i == 1) {
          func1();
        } else if (i == 2) {
          func2();
        } else if (i == 3) {
          func3();
        }
      };
    }
    for (let k = 0; k < range[e].numRange; k++) {
      range[e].range[k].oninput = function (ev) {
        for (let i = 0; i < 6; i++) {
          cube[id].face[i].style.backgroundColor = `rgb(${
            range[e].range[0].value / ((i + 1) / 2)
          }, ${range[e].range[1].value / ((i + 1) / 2)}, ${
            range[e].range[2].value / ((i + 1) / 2)
          }, ${range[e].range[3].value}) `;
          range[e].text[k].value = range[e].range[k].value;
          if (k == 0) {
            obj[id].r[id] = range[e].range[k].value;
          } else if (k == 1) {
            obj[id].g[id] = range[e].range[k].value;
          } else if (k == 2) {
            obj[id].b[id] = range[e].range[k].value;
          } else if (k == 3) {
            obj[id].a[id] = range[e].range[k].value;
          }
        }
      };
    }

    function func0() {
      for (let i = 0; i < 6; i++) {
        cube[id].face[
          i
        ].style.backgroundColor = `rgb(${range[e].text[0].value}, ${range[e].text[1].value}, ${range[e].text[2].value}, ${range[e].text[3].value}) `;
        range[e].range[0].value = range[e].text[0].value;
        obj[id].r[id] = range[e].text[0].value;
      }
    }

    function func1() {
      for (let i = 0; i < 6; i++) {
        cube[id].face[
          i
        ].style.backgroundColor = `rgb(${range[e].text[0].value}, ${range[e].text[1].value}, ${range[e].text[2].value}, ${range[e].text[3].value}) `;
        range[e].range[1].value = range[e].text[1].value;
        obj[id].g[id] = range[e].text[1].value;
      }
    }

    function func2() {
      for (let i = 0; i < 6; i++) {
        cube[id].face[
          i
        ].style.backgroundColor = `rgb(${range[e].text[0].value}, ${range[e].text[1].value}, ${range[e].text[2].value}, ${range[e].text[3].value}) `;
        range[e].range[2].value = range[e].text[2].value;
        obj[id].b[id] = range[e].text[2].value;
      }
    }

    function func3() {
      for (let i = 0; i < 6; i++) {
        cube[id].face[
          i
        ].style.backgroundColor = `rgb(${range[e].text[0].value}, ${range[e].text[1].value}, ${range[e].text[2].value}, ${range[e].text[3].value}) `;
        range[e].range[3].value = range[e].text[3].value;
        obj[id].a[id] = range[e].text[3].value;
      }
    }
  };
}

class Obj {
  constructor(ida) {
    this.ida = ida;
    this.x = new Array();
    this.y = new Array();
    this.z = new Array();
    this.x1 = new Array();
    this.y1 = new Array();
    this.z1 = new Array();
    this.x2 = new Array();
    this.y2 = new Array();
    this.z2 = new Array();
    this.r = new Array();
    this.g = new Array();
    this.b = new Array();
    this.a = new Array();
    this.sheke = true;
    this.x[this.ida] = 0;
    this.y[this.ida] = 0;
    this.z[this.ida] = 0;
    this.x1[this.ida] = 0;
    this.y1[this.ida] = 0;
    this.z1[this.ida] = 0;
    this.x2[this.ida] = cube[ida].x;
    this.y2[this.ida] = cube[ida].y;
    this.z2[this.ida] = cube[ida].z;

    for (let i = 0; i < 6; i++) {
      this.r[this.ida] = 255;
      this.g[this.ida] = 255;
      this.b[this.ida] = 255;
      this.a[this.ida] = 1;
    }
    this.obj = document.createElement("div");
    this.objb = document.createElement("button");
    this.objp = document.createElement("p");
    this.obj.className = "obj";
    document.getElementById("objectSitteng").append(this.obj);
    this.objp.innerHTML = "Cube " + (this.ida + 1);
    this.objb.className = "objb";
    this.objb.innerHTML = "<i class='fa-solid fa-eye'></i>";
    this.obj.append(this.objp, this.objb);
    this.obj.addEventListener("mouseenter", function (e) {
      for (let i = 0; i < 6; i++) {
        cube[ida].face[i].style.border = "1px solid rgb(0 231 255)";
      }
    });
    this.obj.addEventListener("mouseleave", function (e) {
      for (let i = 0; i < obj.length; i++) {
        for (let j = 0; j < 6; j++) {
          cube[i].face[j].style.border = "1px solid transparent";
        }
      }
    });
    this.obj.addEventListener("click", function (e) {
      range[0].transform(0, ida);
      range[1].transform(1, ida);
      range[2].scale(2, ida);
      range[3].colors(3, ida);

      range[0].text[0].value = obj[ida].x[ida];
      range[0].text[1].value = obj[ida].y[ida];
      range[0].text[2].value = obj[ida].z[ida];
      range[0].range[0].value = obj[ida].x[ida];
      range[0].range[1].value = obj[ida].y[ida];
      range[0].range[2].value = obj[ida].z[ida];
      range[1].text[0].value = obj[ida].x1[ida];
      range[1].text[1].value = obj[ida].y1[ida];
      range[1].text[2].value = obj[ida].z1[ida];
      range[1].range[0].value = obj[ida].x1[ida];
      range[1].range[1].value = obj[ida].y1[ida];
      range[1].range[2].value = obj[ida].z1[ida];

      range[2].text[0].value = obj[ida].x2[ida];
      range[2].text[1].value = obj[ida].y2[ida];
      range[2].text[2].value = obj[ida].z2[ida];
      range[2].range[0].value = obj[ida].x2[ida];
      range[2].range[1].value = obj[ida].y2[ida];
      range[2].range[2].value = obj[ida].z2[ida];

      range[3].text[0].value = obj[ida].r[ida];
      range[3].text[1].value = obj[ida].g[ida];
      range[3].text[2].value = obj[ida].b[ida];
      range[3].text[3].value = obj[ida].a[ida];
      range[3].range[0].value = obj[ida].r[ida];
      range[3].range[1].value = obj[ida].g[ida];
      range[3].range[2].value = obj[ida].b[ida];
      range[3].range[3].value = obj[ida].a[ida];
      for (let i = 0; i < obj.length; i++) {
        obj[i].obj.style.outline = "1px solid transparent";
        for (let j = 0; j < 6; j++) {
          cube[i].face[j].style.outline = "2px solid transparent";
        }
      }
      obj[ida].obj.style.outline = "1px solid #939393";
      for (let i = 0; i < 6; i++) {
        cube[ida].face[i].style.outline = "2px solid rgb(255 141 0)";
      }
   document.querySelector(".upmenu").oncontextmenu = () => false;
    window.oncontextmenu = () => false;
    window.addEventListener("contextmenu", (e) => {
  
      document.querySelector(".upmenu").style.display = "flex";
      document.querySelector(".upmenu").style.left = e.x + "px";
      document.querySelector(".upmenu").style.top = e.y + "px";
    });
    asideLeft.addEventListener("click", (e) => {
      document.querySelector(".upmenu").style.display = "none";
    });
    
      // menu[1].pece[0].onclick = () => {
      //   menu[1].removee(ida);
      // };
  
    });
    this.objb.addEventListener("click", () => {
      if (this.sheke) {
        cube[ida].box.style.display = "none";
        this.objb.innerHTML = "<i class='fa-solid fa-eye fa-eye-slash'></i>";
        this.obj.style.opacity = 0.7;
        this.sheke = false;
      } else {
        cube[ida].box.style.display = "flex";
        this.objb.innerHTML = "<i class='fa-solid fa-eye'></i>";
        this.obj.style.opacity = 1;
        this.sheke = true;
      }
    });
  }
}
class Menu {
  constructor(text, i) {
    this.i = i;
    this.text = text;
    this.upmenu = document.createElement("div");
    this.pece = new Array();
    for (let i = 0; i < arrMenu[this.i].length; i++) {
      this.pece[i] = document.createElement("div");
      this.pece[i].className = "pece";
      this.pece[i].innerHTML = arrMenu[this.i][i];
      this.upmenu.append(this.pece[i]);
    }

    this.upmenu.className = "upmenu";

    document.body.append(this.upmenu);

 
  }

  add = function (id) {
    cube[id] = new Cube(id);
    obj[id] = new Obj(id);
    obj[id].obj.click();
    this.upmenu.style.display = "none";
  };
  removee = function (id) {
    cube[id].box.remove();
    obj[id].obj.remove();
  };
}
class SittingWorld {
  constructor(text, id) {
    this.text = text;
    this.id = id;
    this.button = document.createElement("div");
    this.button.classList.add("butt", "butt0");
    this.button.innerHTML = this.text;

    document.getElementById("SittingWorld").append(this.button);

    if (this.id == 2 || this.id == 3) {
      document.getElementById("SittingWorld1").append(this.button);
    }
  }
}

let sittengWorld = new Array();
let arrSittingWorld = [["R"], ["T"], ["W"], ["H"]];
for (let i = 0; i < arrSittingWorld.length; i++) {
  sittengWorld.push(new SittingWorld(arrSittingWorld[i][0], i));
}
for (let i = 0; i < arrMenu.length; i++) {
  menu[i] = new Menu(arrMenu[i], i);
}

for (let i = 0; i < arrSitting.length; i++) {
  range[i] = new Setting(
    arrSitting[i][0],
    i,
    arrSitting[i][1],
    arrSitting[i][2]
  );
}

menu[0].pece[0].addEventListener("click", () => {
  id++;
  menu[0].add(id);
});

menu[0].add(id);

obj[0].obj.click();

asideLeft.addEventListener("touchmove", (e) => {
  [...e.changedTouches].forEach((e) => {
    document.getElementById(
      "world"
    ).style.transform = `rotateY(${e.clientX}deg)  rotateX(${e.clientY}deg)`;
  });
});

let setWorld = 0;
let sizep = 20;

asideLeft.addEventListener("wheel", (e) => {
  if (e.deltaY < 0) {
    setWorld += sizep;
  } else {
    setWorld -= sizep;
  }
  document.getElementById(
    "upWorld"
  ).style.transform = `translateZ(${setWorld}px)`;
});

// sittengWorld[2].button.addEventListener("click", () => {
//   for (let i = 0; i < obj.length; i++) {
//    for (let j = 0; j < 6; j++) {
//     obj[i].r[j] = 255;
//     obj[i].g[j] = 255;
//     obj[i].b[j] = 255;

//    }

//   }
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
b(true);
sittengWorld[0].button.addEventListener("click", () => {
  b(true);
});

sittengWorld[1].button.addEventListener("click", () => {
  b(false);
});

function b(x) {
  if (x == false) {
    asideLeft.onmousedown = function () {
      asideLeft.addEventListener("mousemove", n1);
    };

    function n1(e) {
      let car = document.getElementById("upWorld").getBoundingClientRect();
      document.getElementById("upWorld").style.transform = `translateX(${
        e.clientX - car.width / 2
      }px) translateY(${e.clientY - car.height / 2}px)`;
    }

    window.addEventListener("mouseup", (e) => {
      asideLeft.removeEventListener("mousemove", n1);
    });
  } else {
    asideLeft.onmousedown = function () {
      asideLeft.addEventListener("mousemove", nn1x);
    };

    function nn1x(e) {
      document.getElementById(
        "world"
      ).style.transform = `rotateY(${e.x}deg)  rotateX(${e.y}deg)`;
    }
    window.addEventListener("mouseup", (e) => {
      asideLeft.removeEventListener("mousemove", nn1x);
    });
  }
}
function ubdate(thiis) {
  for (let i = 0; i < cube.length; i++) {
    thiis.box.style.transform = `rotateX(${range[0].x}deg) rotateY(${range[0].y}deg) rotateZ(${range[0].z}deg)`;
  }
}
ubdate(cube[0]);

range.forEach((ele, ind) => {
  ele.opti.addEventListener("click", () => {
    for (let i = 0; i < range.length; i++) {
      range[i].up.style.transform = "scale(0.6)";
      range[i].up.style.visibility = "hidden";
      range[i].up.style.opacity = "0";
      range[i].opti.style.backgroundColor = "transparent";
    }

    range[ind].up.style.transform = "scale(1)";
    range[ind].up.style.visibility = "unset";
    range[ind].up.style.opacity = "1";
    ele.opti.style.backgroundColor = "#1c1c1c";
  });
});
range[0].opti.click();

// document.querySelectorAll("p").forEach((ele) => {
//   ele.addEventListener("click", () => {
//     document.getElementById("objectSitteng").style.zIndex = "1";
//     document.getElementById("sitteng").style.display = "none";
//     document.getElementById("opetion").style.display = "none";
//
//   });
//   document.getElementById("world").addEventListener("click", () => {
//     document.getElementById("objectSitteng").style.zIndex = "-1";
//     document.getElementById("sitteng").style.display = "flex";
//     document.getElementById("opetion").style.display = "flex";
//
//   });
// });
