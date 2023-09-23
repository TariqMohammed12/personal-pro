let forr1 = document.getElementById("forr1");
let forr2 = document.getElementById("forr2");
let bq1 = document.getElementById("bq1");
let bq2 = document.getElementById("bq2");
let upb = document.getElementById("upb");
let res = document.getElementById("res");
let v1 = document.getElementById("v1");
let te1 = document.getElementById("te1");
let te2 = document.getElementById("te2");
let bb = document.getElementById("bb");
let text1 = document.getElementById("text");
let eren = document.getElementById("eren");
let h = document.getElementById("h");
let bbb = document.createElement("button");
let div = document.createElement("div");
let ma;
let add = 100;
let counter = 0;
let arr = [];
let text2 = [];
let text3 = [];
let bb1 = [];
let bb2 = [];
let imma = [];
let mas = [];
let button = [];
let xz = [];
let vb = [];
let pp = [];
let ll = [];
let bd = [];
let del = [];

div.className = "crr";
bbb.className = "bbb";

h.innerHTML = add + " " + "products";
text1.placeholder = "Search in " + add + " products";

// document.querySelector('.crr').onscroll = function () {
//     if (document.querySelector('.crr').scrollTop > 2000) {
//         bbb.style.cssText = " visibility: unset; opacity: 1;";
//         bbb.onclick = function () {
//             document.querySelector('.crr').scroll(0, 0);
//         }
//     } else {
//         bbb.style.cssText = " visibility: hidden; opacity: 0;";
//     }

// }
let na = 0;
bb.addEventListener("click", function () {
  te1.value = "";
  te1.focus();
  te2.value = "";
  v1.style.cssText = "  transform: unset; visibility: unset; opacity: 1;";
  bq2.onclick = function () {
    if (te1.value != "" && te2.value != "") {
      v1.style.cssText =
        "  transform: scale(0.5); visibility: hidden; opacity: 0;";

      na++;

      for (let i = na - 1; i < na; i++) {
        let r = (Math.random() * 14).toFixed("0");
        let im = (Math.random() * 16).toFixed("0");
        let r0 = (Math.random() * 255).toFixed("0");
        let r1 = (Math.random() * 255).toFixed("0");
        let r2 = (Math.random() * 255).toFixed("0");

        bb1[i] = document.createElement("button");
        bb2[i] = document.createElement("button");
        bb1[i].type = "button";
        bb2[i].type = "button";
        bb1[i].className = "bb1";
        bb2[i].className = "bb1";
        upb.append(bb1[i], bb2[i]);
        bb1[i].innerHTML = "Not Agree";
        bb2[i].innerHTML = "Agree";
        text2[i] = document.createElement("input");
        text3[i] = document.createElement("input");

        forr1.append(text2[i]);
        forr2.append(text3[i]);
        text2[i].className = "text2";
        text2[i].placeholder = placeholder = "Src ...";
        text3[i].className = "text2";
        text3[i].placeholder = placeholder = "Name of product ...";

        arr[i] = document.createElement("div");
        arr[i].setAttribute("id", "aa" + na);
        bd[i] = document.createElement("i");
        del[i] = document.createElement("i");
        vb[i] = document.createElement("div");
        vb[i].append(bd[i], del[i]);

        vb[i].className = "vb";
        ll[i] = document.createElement("div");
        pp[i] = document.createElement("p");
        pp[i].setAttribute("id", "vv" + na);
        imma[i] = document.createElement("img");
        imma[i].setAttribute("src", te1.value);
        imma[i].setAttribute("id", "ii" + na);
        button[i] = document.createElement("button");
        button[i].className = "butt";
        button[i].innerHTML = "By Now";

        arr[i].style.backgroundColor = "rgb(" + r0 + "," + r1 + "," + r2 + ")";

        arr[i].className = "div";
        bd[i].className = "fa-solid fa-gear";
        del[i].className = "fa-solid fa-trash";
        ll[i].append(imma[i]);
        ll[i].className = "upim";
        arr[i].append(ll[i], pp[i], button[i], vb[i]);

        div.append(arr[i], bbb);

        document.body.appendChild(div);

        pp[i].innerHTML = te2.value;

        arr[i].onmouseover = function () {
          vb[i].style.opacity = "1";
          vb[i].style.visibility = "unset";
        };
        arr[i].onmouseout = function () {
          vb[i].style.opacity = "0";
          vb[i].style.visibility = "hidden";
        };
        del[i].onclick = function () {
          arr[i].style.cssText = "transform: scale(0.5); opacity: 0;";
          let t = setTimeout(function () {
            arr[i].remove();
          }, 300);
        };

        bd[i].onclick = function () {
          for (let j = 0; j < na; j++) {
            text2[j].style.display = "none";
            text3[j].style.display = "none";
            bb1[j].style.display = "none";
            bb2[j].style.display = "none";
          }
          bb1[i].style.display = "unset";
          bb2[i].style.display = "unset";
          text2[i].style.display = "unset";
          text3[i].style.display = "unset";
          text2[i].value = imma[i].src;
          text3[i].value = pp[i].innerHTML;
          eren.style.cssText =
            "  transform: unset; visibility: unset; opacity: 1;";
        };
        bb1[i].onclick = function () {
          eren.style.cssText =
            "  transform: scale(0.5); visibility: hidden; opacity: 0;";
        };
        bb2[i].onclick = function () {
          if (text2.value != "" && text3.value != "") {
            imma[i].setAttribute("src", text2[i].value);
            pp[i].innerHTML = text3[i].value;
            eren.style.cssText =
              "  transform: scale(0.5); visibility: hidden; opacity: 0;";
          }
        };
      }

      let adad = 0;
      text1.addEventListener("input", function () {
        for (let i = 0; i < arr.length; i++) {
          if (this.value != "") {
            for (let v = 0; v < pp[i].innerHTML.length; v++) {
              if (
                this.value[0] == pp[i].innerHTML[0] ||
                this.value[0].toUpperCase() == pp[i].innerHTML[0].toUpperCase()
              ) {
                if (
                  pp[i].innerHTML.includes(this.value[v]) == true ||
                  pp[i].innerHTML.toUpperCase().includes(this.value[v]) == true
                ) {
                  adad++;
                }
              }
            }

            if (adad == this.value.length) {
              counter++;
              arr[i].style.display = "flex";
              adad = 0;
            } else {
              arr[i].style.display = "none";
            }
            adad = 0;
            h.innerHTML = counter + " " + "product";
          } else {
            arr[i].style.display = "flex";
            h.innerHTML = add + " " + "products";
          }
        }

        counter = 0;
      });
    }
  };
  bq1.onclick = function () {
    v1.style.cssText =
      "  transform: scale(0.5); visibility: hidden; opacity: 0;";
  };
});
let cv = true;
res.onclick = function () {
  document.getElementById("eye").classList.toggle("fa-eye-slash");
  if (cv) {
    bb.style.display = "none";

    for (let nm = 0; nm < na; nm++) {
      vb[nm].style.display = "none";
    }
    cv = false;
  } else {
    bb.style.display = "flex";
    for (let nm = 0; nm < na; nm++) {
      vb[nm].style.display = "flex";
    }
    cv = true;
  }
};
