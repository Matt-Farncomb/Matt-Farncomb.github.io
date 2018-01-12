//On click, append the ione full image
//and desc to the bigger-cont and temp remove the rest
//small carrow to return

let boxButton = document.getElementsByClassName('box');
let bigVisible = "false";
let bigImgBox =  document.querySelector(".bigImg");
let wrapperDiv = document.getElementById('wrapper');

let projArr = ['http://via.placeholder.com/100x126.5', 'http://via.placeholder.com/100x126.5',
          'http://via.placeholder.com/100x126.5', 'http://via.placeholder.com/100x126.5',
          'http://via.placeholder.com/100x126.5' ,'http://via.placeholder.com/100x126.5'];

let projArrLge = ['imgs/Screenshot_Crosses-300.jpg', 'http://via.placeholder.com/302x253',
          'http://via.placeholder.com/303x253', 'http://via.placeholder.com/304x253',
          'http://via.placeholder.com/305x253' ,'http://via.placeholder.com/306x253'];

//could change to objects later
let projDesc = ["one", "two", "three", "four", "five","six" ];

//on click, loop through all boxes

for (let i = 0; i < projArr.length; i++) {
    boxButton[i].onclick = function() {
      //make all boxes invisible excpet for clicked box
       for (let x = 0; x < projArr.length; x++) {
           boxButton[x].classList.add("invisible");
        }
      //load img in background beforehand to make it faster
      bigImgBox.innerHTML = "<img src='"+ projArrLge[i] + "'>";
      desc.innerHTML = projDesc[i];
      bigVisible = true;
      }
    }

if (bigVisible) {
    bigImgBox.onclick = function () {
    bigImgBox.innerHTML = "";
    desc.innerHTML = "Theses tiles show a small slection of my work. Click on each for more info."
    for (let z = 0; z < projArr.length; z++) {
       boxButton[z].classList.remove("invisible");
     }
  };
}