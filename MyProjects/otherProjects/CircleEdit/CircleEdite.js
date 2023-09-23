const canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);

let arrParticle = new Array();
let butt = new Array();
let code = new Array();
let sheck = new Array();
let upElement = new Array();

class upbp {
  constructor(i) {
    this.sh = true;
    this.count = new Array();
    this.i = i;
    this.inSitting = document.createElement("div");
    this.upb = document.createElement("div");
    this.buttSlid1 = document.createElement("button");
    this.span = document.createElement("span");
    this.ii = document.createElement("i");
    this.slidSit = document.createElement("div");
    this.slid1 = document.createElement("slid1");

    this.elements();
    ///////////////////////
  }
  elements() {
    this.slid1.className = "slid1";
    this.slid1.id = "slid1" + this.i;
    this.slidSit.className = "slidSit";
    this.slidSit.id = "slidSit" + this.i;
    this.ii.className = "fa-sharp fa-solid fa-caret-down";
    this.buttSlid1.className = "buttSlid1";
    this.buttSlid1.id = "buttSlid1" + this.i;
    this.buttSlid1.innerHTML = "open";
    this.inSitting.className = "inSitting";
    this.inSitting.id = "inSitting" + this.i;
    this.upb.className = "upb";
    this.inSitting.append(this.upb, this.slidSit);
    this.upb.append(this.buttSlid1, this.span);
    this.span.append(this.ii);
    this.slidSit.append(this.slid1);
    document.getElementById("innSti").append(this.inSitting);
  }
  hide() {
    for (let i = 0; i < 2; i++) {
      this.count[i] = true;
    }
    if (this.sh == true) {
      this.slidSit.style.height =
        this.slid1.getBoundingClientRect().height - 3 + "px";
    } else {
      this.slidSit.style.height = "0px";
    }

    this.buttSlid1.addEventListener("click", (e) => {
      if (this.sh) {
        this.slidSit.style.height = "0px";
        this.span.style.transform = `rotateZ(180deg)`;
        this.sh = false;
        this.count[this.i] = false;
      } else {
        this.slidSit.style.height =
          this.slid1.getBoundingClientRect().height - 3 + "px";
        this.span.style.transform = `rotateZ(0deg)`;
        this.sh = true;
        this.count[this.i] = true;
      }
    });
  }
}

class Sitting {
  constructor(i, dis, min, max, value, n) {
    this.i = i;
    this.diss = dis;
    this.min = min;
    this.max = max;
    this.opacity = 400;
    this.value = value;
    this.sizeInc = 20;
    this.n = n;
    this.step = 0.025;

    this.upSit = document.createElement("div");
    this.range = document.createElement("input");
    this.text = document.createElement("input");
    this.dis = document.createElement("span");
  }
  elements() {
    this.text.type = "text";
    this.text.value = this.sizeInc;
    this.dis.className = "dis";
    this.dis.innerHTML = this.diss;
    this.upSit.className = "upSit";
    this.range.type = "range";
    this.range.min = this.min;
    this.range.max = this.max;
    if (this.i == 0) {
      this.range.max = this.opacity;
      this.range.value = this.sizeInc;
    } else {
      this.range.value = this.value;
    }
    this.range.step = this.step;
    this.range.classList.add("range", "rangee" + this.i);
    this.upSit.append(this.dis, this.range, this.text);
    document.getElementById("slid1" + this.n).append(this.upSit);
  }
  actions() {
    if (this.i == 0) {
      this.range.addEventListener("input", (e) => {
        this.text.value = this.range.value;
        ctx.clearRect(0, 0, w, h);

        new Draw().render(this.range.value);

        for (let i = 0; i < arrParticle.length; i++) {
          arrParticle[i].draw(this.range.value, sheck[0].sh);
        }
      });
      this.text.addEventListener("input", (e) => {
        this.range.value = this.text.value;
        ctx.clearRect(0, 0, w, h);

        new Draw().render(this.range.value);

        for (let i = 0; i < arrParticle.length; i++) {
          arrParticle[i].draw(this.range.value, sheck[0].sh);
        }
      });
    } else if (this.i == 1) {
      this.range.addEventListener("input", (e) => {
        this.text.value = this.range.value;
        ctx.clearRect(0, 0, w, h);
        try {
          code[0].sc = this.range.value;
          code[0].texteareaVal();

          var result = eval(code[0].textarea.value);
          code[0].output.innerHTML = result;
        } catch (e) {
          code[0].output.innerHTML = "Error: " + e.message;
        }

        for (let i = 0; i < arrParticle.length; i++) {
          try {
            arrParticle[i].x = result[0][i];
            arrParticle[i].y = result[1][i];

            arrParticle[i].draw(upElement[0][0].range.value, sheck[0].sh);
          } catch (e) {
            code[0].output.innerHTML = "Error: " + e.message;
          }
        }
        new Draw().render(upElement[0][0].range.value);
      });
      this.text.addEventListener("input", (e) => {
        this.range.value = this.text.value;
        ctx.clearRect(0, 0, w, h);
        try {
          code[0].sc = this.text.value;
          code[0].texteareaVal();

          var result = eval(code[0].textarea.value);
          code[0].output.innerHTML = result;
        } catch (e) {
          code[0].output.innerHTML = "Error: " + e.message;
        }

        for (let i = 0; i < arrParticle.length; i++) {
          try {
            arrParticle[i].x = result[0][i];
            arrParticle[i].y = result[1][i];

            arrParticle[i].draw(upElement[0][0].range.value, sheck[0].sh);
          } catch (e) {
            code[0].output.innerHTML = "Error: " + e.message;
          }
        }
        new Draw().render(upElement[0][0].range.value);
      });
    }
  }
  render() {
    this.elements();
    this.actions();
  }
}
class Buttons {
  constructor(inner) {
    this.inner = inner;
    this.button = document.createElement("button");
    this.elements();
  }
  elements() {
    this.button.className = "but";
    this.button.innerHTML = this.inner;
    this.button.addEventListener("click", () => {
      for (let i = 0; i < butt.length; i++) {
        butt[i].button.style.backgroundColor = "#4e4e4e";
      }
      this.button.style.backgroundColor = "#363636";
    });
  }
}
class ShekBox {
  // <input type="checkbox" name="bb" id="she1" class="shek" />
  constructor(i, inner) {
    this.i = i;
    this.inner = inner;
    this.sh = false;
    this.up = document.createElement("div");
    this.dis = document.createElement("span");
    this.sheck = document.createElement("input");
    this.elements();
    this.functions();
  }
  elements() {
    this.dis.innerHTML = this.inner;
    this.sheck.type = "checkbox";
    this.sheck.name = "bb";
    this.sheck.className = "shek";
    this.up.className = "upsh";
    this.up.append(this.dis, this.sheck);
    document.getElementById("slid1" + this.i).append(this.up);
  }
  functions() {
    this.sheck.addEventListener("input", () => {
      if (this.sh == true) {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < arrParticle.length; i++) {
          arrParticle[i].draw(upElement[0][0].range.value, false);
        }
        new Draw().render(upElement[0][0].range.value);


        this.sh = false;
      } else {
        ctx.clearRect(0, 0, w, h);

        for (let i = 0; i < arrParticle.length; i++) {
          arrParticle[i].draw(upElement[0][0].range.value, true);
        }
        new Draw().render(upElement[0][0].range.value);

        this.sh = true;
      }
    });
  }
}

class Code extends Sitting {
  constructor() {
    super(0, "", 0);
    this.sc = upElement[0][1].value;

    this.textarea = document.createElement("textarea");
    this.rbt = document.createElement("div");
    this.upBotton = document.createElement("div");
    butt[0] = new Buttons("<i class='fa-solid fa-code'></i>");
    butt[1] = new Buttons("<i class='fa-solid fa-terminal'></i>");
    this.output = document.createElement("div");
    this.up = document.createElement("div");
    this.elements();
    this.functions();
  }
  elements() {
    this.output.className = "output";
    this.upBotton.className = "upBotton";
    this.up.className = "rabta";
    this.rbt.className = "rbt";
    this.texteareaVal();
    this.textarea.spellcheck = "false";
    this.upBotton.append(butt[0].button, butt[1].button);
    this.rbt.append(this.textarea, this.output);
    this.up.append(this.rbt, this.upBotton);
    document.getElementById("slid11").append(this.up);
  }
  texteareaVal() {
    this.textarea.value = `
    function algo () {
    let result = new Array();
     result[0] = new Array();
     result[1] = new Array();

     let ii = 0;
     for (let i = -w / 2; i < w * 2; i+=${this.sc}) {
       result[0][ii] = i;
       result[1][ii] = Math.cos(i);
       ii++;
     }
    return result;
}
algo();
`;
  }
  functions() {
    butt[0].button.addEventListener("click", (e) => {
      ctx.clearRect(0, 0, w, h);
      try {
        var result = eval(this.textarea.value);
        this.output.innerHTML = result;
      } catch (e) {
        this.output.innerHTML = "Error: " + e.message;
      }

      for (let i = 0; i < arrParticle.length; i++) {
        try {
          arrParticle[i].x = result[0][i];
          arrParticle[i].y = result[1][i];

          arrParticle[i].draw(upElement[0][0].range.value, sheck[0].sh);
        } catch (e) {
          this.output.innerHTML = "Error: " + e.message;
        }
      }
      new Draw().render(upElement[0][0].range.value);
    });

    butt[0].button.addEventListener("click", (e) => {
      this.output.style.zIndex = "-1";
    });
    butt[1].button.addEventListener("click", (e) => {
      this.output.style.zIndex = "1";
    });
  }
}
class Draw extends Sitting {
  constructor() {
    super(0, "");
  }

  network(val = this.sizeInc) {
    this.sizeInc = Number(val);

    let lines = 6;
    let masText = this.sizeInc / 1.5;
    let masFont = this.sizeInc / 2;
    let i1 = 0;
    let i2 = 0;
    let i3 = 0;
    let i4 = 0;
    let strongOfColor = 20;
    let col = `rgb(255 255 255 / ${this.sizeInc / (100 / 200)}%)`;
    let sh = false;

    if (masFont > 24) {
      masFont = 24;
    }
    if (masText > 24) {
      masText = 24;
    }

    for (let i = 0; i < h / 2; i += this.sizeInc) {
      ctx.beginPath();
      ctx.strokeStyle = `rgb(255 255 255 / ${
        strongOfColor - i / (this.opacity / strongOfColor)
      }%)`;
      ctx.moveTo(0, h / 2 + i);
      ctx.lineTo(w, h / 2 + i);
      ctx.stroke();
      /////////////////////////////////////
      ctx.beginPath();
      ctx.strokeStyle = `#0ff`;
      ctx.moveTo(w / 2 - lines, h / 2 + i);
      ctx.lineTo(w / 2 + lines, h / 2 + i);

      ctx.stroke();
      ///////////////////////////////////

      ctx.beginPath();

      ctx.fillStyle = `rgb(0 255 255 / ${this.sizeInc / (100 / 200)}%)`;

      if (sh == true) {
        ctx.fillText(-i, w / 2 + masText, h / 2 + i);
      } else {
        ctx.fillText(-i1, w / 2 + masText, h / 2 + i);
      }
      ctx.font = `${masFont}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fill();

      i1++;
    }

    for (let i = 0; i < h / 2; i += this.sizeInc * 5) {
      ctx.beginPath();
      ctx.strokeStyle = col;
      ctx.moveTo(0, h / 2 + i);
      ctx.lineTo(w, h / 2 + i);
      ctx.stroke();
    }

    for (let i = 0; i < h / 2; i += this.sizeInc) {
      ctx.beginPath();
      ctx.strokeStyle = `rgb(255 255 255 / ${
        strongOfColor - i / (this.opacity / strongOfColor)
      }%)`;
      ctx.moveTo(0, h / 2 - i);
      ctx.lineTo(w, h / 2 - i);
      ctx.stroke();
      //////////////
      ctx.beginPath();
      ctx.strokeStyle = `#0ff`;
      ctx.moveTo(w / 2 - lines, h / 2 - i);
      ctx.lineTo(w / 2 + lines, h / 2 - i);

      ctx.stroke();
      /////////////////
      ctx.beginPath();
      ctx.fillStyle = `#0ff`;
      if (sh == true) {
        ctx.fillText(i, w / 2 + masText, h / 2 - i);
      } else {
        ctx.fillText(i2, w / 2 + masText, h / 2 - i);
      }
      ctx.font = `${masFont}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fill();

      i2++;
    }
    for (let i = 0; i < h / 2; i += this.sizeInc * 5) {
      ctx.beginPath();
      ctx.strokeStyle = col;
      ctx.moveTo(0, h / 2 - i);
      ctx.lineTo(w, h / 2 - i);
      ctx.stroke();
    }
    for (let i = 0; i < w / 2; i += this.sizeInc) {
      ctx.beginPath();
      ctx.strokeStyle = `rgb(255 255 255 / ${
        strongOfColor - i / (this.opacity / (strongOfColor / 2))
      }%)`;
      ctx.moveTo(w / 2 + i, 0);
      ctx.lineTo(w / 2 + i, h);
      ctx.stroke();
      //////////////////
      ctx.beginPath();
      ctx.strokeStyle = `#0ff`;
      ctx.moveTo(w / 2 + i, h / 2 - lines);
      ctx.lineTo(w / 2 + i, h / 2 + lines);

      ctx.stroke();
      ////////////////////
      ctx.beginPath();
      ctx.fillStyle = `#0ff`;
      if (sh == true) {
        ctx.fillText(i, w / 2 + i, h / 2 + masText);
      } else {
        ctx.fillText(i3, w / 2 + i, h / 2 + masText);
      }
      ctx.font = `${masFont}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fill();
      i3++;
    }
    for (let i = 0; i < w / 2; i += this.sizeInc * 5) {
      ctx.beginPath();
      ctx.strokeStyle = col;
      ctx.moveTo(w / 2 + i, 0);
      ctx.lineTo(w / 2 + i, h);
      ctx.stroke();
    }
    for (let i = 0; i < w / 2; i += this.sizeInc) {
      ctx.beginPath();
      ctx.strokeStyle = `rgb(255 255 255 / ${
        strongOfColor - i / (this.opacity / (strongOfColor / 2))
      }%)`;
      ctx.moveTo(w / 2 - i, 0);
      ctx.lineTo(w / 2 - i, h);
      ctx.stroke();
      //////////////////
      ctx.beginPath();
      ctx.strokeStyle = `#0ff`;
      ctx.moveTo(w / 2 - i, h / 2 - lines);
      ctx.lineTo(w / 2 - i, h / 2 + lines);

      ctx.stroke();
      ////////////////////
      ctx.beginPath();
      ctx.fillStyle = `#0ff`;
      if (sh == true) {
        ctx.fillText(-i, w / 2 - i, h / 2 + masText);
      } else {
        ctx.fillText(-i4, w / 2 - i, h / 2 + masText);
      }
      ctx.font = `${masFont}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fill();

      i4++;
    }
    for (let i = 0; i < w / 2; i += this.sizeInc * 5) {
      ctx.beginPath();
      ctx.strokeStyle = col;
      ctx.moveTo(w / 2 - i, 0);
      ctx.lineTo(w / 2 - i, h);
      ctx.stroke();
    }
  }
  XY() {
    // X
    ctx.beginPath();
    ctx.strokeStyle = `#fff`;
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();
    //Y
    ctx.beginPath();
    ctx.strokeStyle = `#fff`;
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2, h);
    ctx.stroke();
  }
  render(val = this.sizeInc) {
    this.network(val);

    this.XY();
  }
}
class Particle extends Draw {
  constructor(x, y, sh) {
    super();
    this.x = x;
    this.y = y;

    this.sh = sh;
    this.inc = {
      incX: () => {
        return w / 2 + this.sizeInc * this.x;
      },
      incY: () => {
        return h / 2 + -(this.sizeInc * this.y);
      },
    };
    this.rad = 2;
  }
  draw(val = this.sizeInc, ss = false) {
    this.sizeInc = Number(val);

    if (ss == true) {
      if (this.sh == true) {
        ctx.beginPath();
        ctx.strokeStyle = "#f00";
        ctx.moveTo(
          w / 2 + this.sizeInc * this.x,
          h / 2 + -(this.sizeInc * this.y)
        );
      }

      // ctx.quadraticCurveTo((w / 2 + this.sizeInc * this.x) + 20, (h / 2 + -(this.sizeInc * this.y)) - 20, (w / 2 + this.sizeInc * this.x),  (h / 2 + -(this.sizeInc * this.y)));
      ctx.lineTo(
        w / 2 + this.sizeInc * this.x,
        h / 2 + -(this.sizeInc * this.y)
      );
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.fillStyle = "#f00";

      ctx.arc(
        w / 2 + this.sizeInc * this.x,
        h / 2 + -(this.sizeInc * this.y),
        this.rad,
        2 * Math.PI,
        false
      );
      ctx.fill();
    }
  }
}

function funcR() {
  let result = new Array();
  result[0] = new Array();
  result[1] = new Array();
  let ii = 0;
  console.log(code[0].sc);
  for (let i = -w / 2; i < w * 2; i += code[0].sc) {
    result[0][ii] = i;
    result[1][ii] = Math.sin(i);
    ii++;
  }
  return result;
}

function par(result) {
  // let x = [1, 9, 3, 6];
  // let y = [1, 3, 8, 6];

  for (let i = 0; i < result[0].length; i++) {
    if (i == 0) {
      arrParticle.push(new Particle(result[0][i], result[1][i], true));
    } else {
      arrParticle.push(new Particle(result[0][i], result[1][i], false));
    }
  }

  for (let i = 0; i < arrParticle.length; i++) {
    arrParticle[i].draw();
  }
}

function init() {
  let draw = new Draw();
  draw.render();

  let arrup = new Array();

  let up = [
    [
      ["Resize", 5, 400, 20],
      ["SConn", 0.0000025, 1, 0.25],
      ["sh", "connectLine"],
    ],
    [],
  ];

  for (let i = 0; i < up.length; i++) {
    upElement[i] = new Array();
    arrup.push(new upbp(i));
  }
  for (let k = 0; k < up.length; k++) {
    for (let i = 0; i < up[k].length; i++) {
      if (up[k][i][0] != "sh") {
        upElement[k].push(
          new Sitting(i, up[k][i][0], up[k][i][1], up[k][i][2], up[k][i][3], k)
        );
      } else {
        sheck.push(new ShekBox(k, up[k][i][1]));
      }
    }
  }
  code[0] = new Code();
  for (let k = 0; k < up.length; k++) {
    for (let i = 0; i < upElement[k].length; i++) {
      upElement[k][i].render();
    }
  }

  let sh = new Array();
  for (let i = 0; i < 2; i++) {
    sh[i] = true;
  }
  document.getElementById("exit").addEventListener("click", (e) => {
    if (sh[0]) {
      document.getElementById("upSitting").style.right =
        -document.getElementById("upSitting").getBoundingClientRect().width +
        "px";
      sh[0] = false;
    } else {
      document.getElementById("upSitting").style.right = "0px";
      sh[0] = true;
    }
  });

  for (let i = 0; i < arrup.length; i++) {
    arrup[i].hide();
  }
  par(funcR());
}
init();
