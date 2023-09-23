let arr1 = [
  [".div1", -200, 200, "#fff"],
  [".div2", -200, 200, "#fff"],
];

let arrob = new Array();

class Effect {
  constructor(id, lightstrong1, lightstrong2, colorLight) {
    this.id = id;
    this.lightstrong1 = lightstrong1;
    this.lightstrong2 = lightstrong2;
    this.colorLight = colorLight;
    this.up = this.id.parentElement;
    this.colorElseColor = "#121212";
    this.length1 = this.id.children.length;
    this.length2 = this.id.childNodes.length;
    this.max = Math.max(this.lightstrong1, this.lightstrong2);
    this.swap = null;
    if (this.max == this.lightstrong1) {
      this.swap = this.lightstrong2;
      this.lightstrong2 = this.lightstrong1;
      this.lightstrong1 = this.swap;
    }

    this.updiv = document.createElement("div");

    this.updiv.style.position = "relative";
    this.updiv.style.background = "#121212";
    this.updiv.style.width = this.id.clientWidth + "px";
    this.updiv.style.height = this.id.clientHeight + "px";
    this.updiv.style.display = "flex";
    this.updiv.style.alignItems = "center";
    this.updiv.style.justifyContent = "center";

    this.id.style.background = "#121212";
    this.id.style.width = "calc(100% - 2px)";
    this.id.style.height = "calc(100% - 2px)";
    this.id.style.position = "absolute";
    this.id.style.borderRadius = "0px";
    this.id.style.border = "none";
    this.id.style.margin = "0";
    this.id.style.top = "unset";
    this.id.style.left = "unset";
    this.id.style.right = "unset";
    this.id.style.bottom = "unset";
   
    this.updiv.append(this.id);
    document.body.append(this.updiv);
    window.addEventListener("mousemove", (e) => {
      let c = this.updiv.getBoundingClientRect(),
        x = e.pageX - window.scrollX - c.left,
        y = e.pageY - window.scrollY - c.top;

      if (
        !(
          x < c.width + this.lightstrong2 &&
          x > -this.lightstrong2 &&
          y < c.height + this.lightstrong2 &&
          y > -this.lightstrong2
        )
      ) {
        x = -this.lightstrong2;
        y = -this.lightstrong2;
      }

      this.updiv.style.background = `radial-gradient( circle at ${x}px ${y}px, ${colorLight} ${this.lightstrong1}px, ${this.colorElseColor} ${this.lightstrong2}px )`;
    });
  }
}

for (let i = 0; i < arr1.length; i++) {
  if (document.querySelectorAll(arr1[i][0]).length > 0) {
    for (let j = 0; j < document.querySelectorAll(arr1[i][0]).length; j++) {
      arrob.push(
        new Effect(
          document.querySelectorAll(arr1[i][0])[j],
          arr1[i][1],
          arr1[i][2],
          arr1[i][3]
        )
      );
    }
  }
}
console.log(document.getElementById("div").draggable);