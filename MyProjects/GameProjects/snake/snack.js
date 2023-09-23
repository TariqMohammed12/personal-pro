canvas = document.getElementById("canvas"),
            ctx = canvas.getContext('2d');

        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        let numOfCircle = 400;
        let arrCircle = new Array();

        class Circle {
            constructor(x, y, rad, color, i) {
                this.x = x;
                this.y = y;
                this.rad = rad;
                this.color = color;
                this.i = i;


            }
            draw() {
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.rad, 2 * Math.PI, false);
                ctx.fill();


            }
            update() {
                this.draw();


            }
            func(x, y) {


                setTimeout(() => {
                    this.x = x;
                    this.y = y;

                }, this.i * 100);

            }



        }


        function init() {
            for (let i = 0; i < numOfCircle; i++) {
                let rad = 10;
                let x = w / 2;
                let y = h / 2
                let color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

                arrCircle[i] = new Circle(x, y, rad, color, i);
            }
            window.addEventListener("mousedown", (e) => {
                window.addEventListener("mousemove", move);
                window.addEventListener("click", move);
            });
            function move(e) {

                for (let i = 0; i < arrCircle.length; i++) {

                    arrCircle[i].func(e.clientX, e.clientY);

                }
            }

            window.addEventListener("mouseup", (e) => {
                window.removeEventListener("mousemove", move);
            });

        }

        function animate() {
            ctx.clearRect(0, 0, w, h);

            requestAnimationFrame(animate);

            for (let i = 0; i < arrCircle.length; i++) {
                arrCircle[i].update();


            }
        }
        init();
        animate();
// let div = [];
// let up = document.getElementById("up");
// let cont = 100;
// let pos = [];
// let ii = 0;
// let car = new Array();

// for (let i = 0; i < cont; i++) {
//   div[i] = document.createElement("div");

//   div[i].className = "red";
//   pos[i] = document.documentElement;
//   ii += 0.1;

//   up.appendChild(div[i]);
// }

//   for (let i = 0; i < cont; i++) {
//     car[i] = div[i].getBoundingClientRect();
//     let lef = Math.ceil(Math.random() * ( window.innerWidth - car[i].width));
//     let top = Math.ceil(Math.random() * ( window.innerHeight - car[i].height));
//     let ran = Math.ceil(Math.random() * 255);
//     let ran1 = Math.ceil(Math.random() * 255);
//     let ran2 = Math.ceil(Math.random() * 255);
//     let ttc = Math.ceil(Math.random() * 360);
//     let dd = Math.ceil(Math.random() * 50);
//     let dd1 = Math.ceil(Math.random() * 50);
//     let tran = Math.random();

//     div[i].style.background = "rgb(" + ran + "," + ran1 + "," + ran2 + ")";
//     // div[i].style.borderRadius = dd + "px";
//     // div[i].style.width = dd1 + "px";
//     // div[i].style.height = dd1 + "px";
//     div[i].style.transform = "rotate3d(0,0,1," + ttc + "deg)";
//     div[i].style.left = lef + "px";
//     div[i].style.top = top + "px";
//     pos[i].addEventListener("touchstart", func);
//     pos[i].addEventListener("touchmove", func);
//     function func(em) {
//       [...em.changedTouches].forEach(touch => {
//      let ttt = setTimeout(() => {
//       div[i].style.left = touch.clientX - (car[i].width / 2) + "px";
//       div[i].style.top = touch.clientY - (car[i].height / 2) + "px";
//      }, (i * 100));
//     });

//     }
//   }

///////////////////////////////////////////////////////////////////////////////

// let div = [];
// let up = document.getElementById("up");
// let cont = 100;
// let pos = [];
// let ii = 0;

// for (let i = 0; i < cont; i++) {
//   div[i] = document.createElement("div");

//   div[i].className = "red";
//   pos[i] = document.documentElement;
//   ii += 0.1;

//   div[i].style.transition = ii + "s";

//   up.appendChild(div[i]);
// }
// let car = new Array();
// let t1 = setInterval(function () {
//   for (let i = 0; i < cont; i++) {
//      car[i] = div[i].getBoundingClientRect();
//     let lef = Math.ceil(Math.random() *( window.innerWidth - car[i].width));
//     let top = Math.ceil(Math.random() * (window.innerHeight - car[i].height));
//     let ran = Math.ceil(Math.random() * 255);
//     let ran1 = Math.ceil(Math.random() * 255);
//     let ran2 = Math.ceil(Math.random() * 255);
//     let ttc = Math.ceil(Math.random() * 360);
//     let dd = Math.ceil(Math.random() * 50);
//     let dd1 = Math.ceil(Math.random() * 50);
//     let tran = Math.random();

//     div[i].style.background = "rgb(" + ran + "," + ran1 + "," + ran2 + ")";
//     div[i].style.borderRadius = dd + "px";
//     div[i].style.width = dd1 + "px";
//     div[i].style.height = dd1 + "px";
//     div[i].style.transform = "rotate3d(0,0,1," + ttc + "deg)";
//     div[i].style.left = lef + "px";
//     div[i].style.top = top + "px";

//     pos[i].addEventListener("touchmove", func);
//     pos[i].addEventListener("touchstart", func);

//     function func(em) {
//        [...em.changedTouches].forEach(touch => {
//       div[i].style.left = touch.clientX - (car[i].width  / 2) + "px";
//       div[i].style.top = touch.clientY - (car[i].height / 2) + "px";

//     });
//   }

// }
// }, 5000);

// while ((v = Math.ceil(Math.random() * 3))) {
//   let v = Math.floor(Math.random() * 3);
//   console.log(v);
//   if (v == 0) {
//     break;
//   }
// }
