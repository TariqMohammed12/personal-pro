let arr1 = [["#div", -300, 300, "#fff"]];

let arrob = new Array();

class Effect {
  constructor(id, lightstrong1, lightstrong2, colorLight) {
    this.id = id;
    this.lightstrong1 = lightstrong1;
    this.lightstrong2 = lightstrong2;
    this.colorLight = colorLight;

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

    // if (this.id.getAttribute("class") != null) {
    //   if (this.id.getAttribute("class").indexOf(" ") != -1) {
    //     this.updiv.classList.add(
    //       this.id.classList[0],
    //       this.id.classList[1]
    //     );
    //   } else {
    //     this.updiv.className = this.id.classList[0];
    //   }
    // }

    this.updiv.style.display = "inherit";
    this.updiv.style.alignItems = "inherit";
    this.updiv.style.justifyContent = "inherit";
    this.updiv.style.flexDirection = "inherit";
    this.updiv.style.padding = "inherit";
    this.updiv.style.background = "#121212";
    this.updiv.style.outline = "0";
    this.updiv.style.width = "calc(100% - 2px)";
    this.updiv.style.height = "calc(100% - 2px)";
    this.updiv.style.border = "none";
    this.updiv.style.position = "absolute";

    this.updiv.style.margin = "0";

    this.id.style.position = "relative";
    // this.id.style.height = this.id.clientHeight + "px";
    this.id.style.border = "none";
    this.id.style.outline = "0";
    this.id.style.padding = "0";

    // this.id.style.display = "flex";
    // this.id.style.alignItems = "center";
    // this.id.style.justifyContent = "center";

    if (this.id.childNodes.length > 0) {
      for (let i = 0; i < this.length2; i++) {
        if (this.id.childNodes[i] != undefined) {
        this.updiv.append(this.id.childNodes[i]);
        }
      }
    }
    if (this.id.children.length > 0) {
      for (let i = 0; i < this.length1; i++) {
        if (this.id.children[i] != undefined) {
        this.updiv.append(this.id.children[i]);
        }
      }
    }
    this.id.append(this.updiv);

    window.addEventListener("mousemove", (e) => {
      let c = this.id.getBoundingClientRect(),
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

      this.id.style.background = `radial-gradient( circle at ${x}px ${y}px, ${colorLight} ${this.lightstrong1}px, ${this.colorElseColor} ${this.lightstrong2}px )`;
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
