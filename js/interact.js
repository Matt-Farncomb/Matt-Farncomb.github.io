
let appendSpace = document.getElementById('appendSpace')
let navBar = document.getElementsByClassName('header-nav');

//always begins with that appended
let justPressed = "";
let gamesArr = [];
let meArr = [];
let webArr = [];

let navDict = {"web-apps": ["imgs/new_piano-300.jpg"], "games":["imgs/new_crosses-300.jpg"], "about-me": ["imgs/new_caesar-300.jpg"]};
let htmlArr = [];

let dict = {
                "web-apps": 
                [
                    {
                        title: "ONLINE PIANO",
                        img: "imgs/new_piano-300.jpg",
                        desc: "An app for playing and recording songs",
                        lang: "JQuery, HTML, CSS"
                    },
                    {
                        title: "JQUERY CALCULATOR",
                        img: "imgs/new_calc-300.jpg",
                        desc: "An online calculator",
                        lang: "JQuery, HTML, CSS"
                    }
                ],
                "games":
                [
                    {
                        title:"CROSSES & CROSSES",
                        img:"imgs/new_crosses-300.jpg",
                        desc:"An alternative to Naughts & Crosses",
                        lang:"Javascript, HTML, CSS"
                    },
                    {},{},{},{}
                ],
          }

$(window).scroll(function() {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 116) {
                $('.nav-box ').addClass('fix');

            } else {
                $('.nav-box ').removeClass('fix');
            }
    });

//creates the HTML that is used to append to the DOM
function createHTML(title, desc, img, lang) {
    let tempHTML ='\
                <article class="article-box"> \
                    <div class="img-box"> \
                        <img src="' + img + '"> \
                    </div> \
                    <div class="text-box"> \
                        <h4 class="app-title">' + title + '</h3> \
                        <h3 class="app-desc">' + desc + '</h4> \
                        <h4 class="app-lang">' + lang + '</h4> \
                    </div> \
                </article> '
    return tempHTML;
}

//appeds the HTML to the DOM with the animation
function appendDOM (temp) {
    justPressed = temp;
    appendSpace.innerHTML = "";
    window.scrollTo(0, 0);
    console.log(dict[temp].length);
    for (var x = 0; x < dict[temp].length; x++) {
         let tempHTML = createHTML(dict[temp][x].title, dict[temp][x].desc, dict[temp][x].img, dict[temp][x].lang);
         let tempInt = x * 10;
         let tempIntStr = String(tempInt) + "px";
         console.log(tempIntStr);
         setTimeout(function() {
            appendSpace.innerHTML += tempHTML;
                }, 100 * x); 
            $("#appendSpace").removeClass("position-change-back");   
            $("#appendSpace").addClass("position-change");
    }
}

//on clicking on navbar, scroll to top instanntly, no animation
for (var i = 0; i < navBar.length; i++) {
    navBar[i].onclick = function () {

        let temp = this.id;
        if (justPressed == "") {
            appendDOM(temp);
        }
        else {
            $("#appendSpace").removeClass("position-change");
            $("#appendSpace").addClass("position-change-back");
            justPressed = "";
            setTimeout(function() {
                appendDOM(temp);
            }, 100)
        
        }
   
    }
}
// window.scrollTo(x-coord, y-coord);

    