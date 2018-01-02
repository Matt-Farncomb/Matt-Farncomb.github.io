
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
                        url: "https://github.com/Matt-Farncomb/piano-app",
                        img: "imgs/new_piano-300.jpg",
                        desc: "An app for playing and recording songs",
                        lang: "JQuery, HTML, CSS"
                    },
                    {
                        title: "Wikipedia Viewer",
                        url: "https://codepen.io/Mudd_101/full/weVqvX/",
                        img: "imgs/new_wiki.jpg",
                        desc: "This is an app used to search through wikpedia",
                        lang: "JQuery, HTML, CSS"
                    },
                    {
                        title: "Firefox Weather Extension",
                        url: "https://github.com/Matt-Farncomb/Time-App",
                        img: "imgs/new_weather.jpg",
                        desc: "A firefox extension used to check the weather and time",
                        lang: "JQuery, HTML, CSS"
                    },
                    {
                        title: "Sentiments",
                        url: "https://github.com/Matt-Farncomb/Cs50x-psets/tree/master/pset6",
                        img: "imgs/new_sentiments.jpg",
                        desc: "An app made through Harvard's Cs50 to determine the average 'sentiment' of Twitter member's tweets",
                        lang: "Python, Javascript, HTML, CSS"
                    },
                    {
                        title: "Google Maps API",
                        url: "https://github.com/Matt-Farncomb/Cs50x-psets/tree/master/pset8",
                        img: "imgs/new_mapsAPI.jpg",
                        desc: "A google maps api also created through Cs50",
                        lang: "Python, Javascript, HTML, CSS"
                    },
                    {
                        title: "JQUERY CALCULATOR",
                        url: "https://codepen.io/Mudd_101/full/VzeLqP/",
                        img: "imgs/new_calc-300.jpg",
                        desc: "An online calculator",
                        lang: "JQuery, HTML, CSS"
                    }
                ],
                "games":
                [
                    {
                        title:"CROSSES & CROSSES",
                        url: "https://codepen.io/Mudd_101/full/PJxjQv/",
                        img:"imgs/new_crosses-300.jpg",
                        desc:"An alternative to Naughts & Crosses",
                        lang:"Javascript, HTML, CSS"
                    },
                    {
                        title:"CAESAR QUIZ",
                        url: "https://codepen.io/Mudd_101/full/mwxzrr/",
                        img:"imgs/new_caesar-300.jpg",
                        desc:"A short simple Caesar Quiz and Puzzle",
                        lang:"JQuery, HTML, CSS"
                    },
                    {
                        title:"SAMURAI BRO",
                        url: "",
                        img:"imgs/new_samurai-300.jpg",
                        desc:"A simple Samurai platformer",
                        lang:"Unity 3D, C#"
                    },
                    {
                        title: "Fake Stock Trader",
                        url: "https://github.com/Matt-Farncomb/Cs50x-psets/tree/master/pset7",
                        img: "imgs/newer_finance-300.jpg",
                        desc: "An app used to to buy and sell stocks with fake money",
                        lang: "Python, Javascript, HTML, CSS"
                    },

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

//TODO: Maybe instead of rolling back up, it should roll down and dissapear and get replaced/pusged on by what comes down
function createHTML(title, url, desc, img, lang) {
    let tempHTML ='\
                <article class="article-box"> \
                    <div class="outer-img-box"> \
                        <div class="img-box"> \
                           <a href="' + url + '"><img src="' + img + '"></a> \
                        </div> \
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
    // window.scrollTo(0, 0);
    console.log(dict[temp].length);
    for (var x = 0; x < dict[temp].length; x++) {
         let tempHTML = createHTML(dict[temp][x].title, dict[temp][x].url, dict[temp][x].desc, dict[temp][x].img, dict[temp][x].lang);
         let tempInt = x * 10;
         let tempIntStr = String(tempInt) + "px";
         console.log(tempIntStr);
         setTimeout(function() {
            appendSpace.innerHTML += tempHTML;
                }, 100 * x); 
            $("#appendSpace").removeClass("position-change-back");   
            $("#appendSpace").addClass("position-change");
            //alert($("main").height());
            let tempHeight = $("main").height();
            // document.getElementsByTagName("main")[0].style.maxHeight = (tempHeight - 350) + "px";   
            //this makes the max height 0 so ther eis no extra 'white space' at the bottom after an append. Accidental discovery 
            document.getElementsByTagName("main")[0].style.maxHeight = "0px";       
    }
}

//on clicking on navbar, scroll to top instanntly, no animation
// for (var i = 0; i < navBar.length; i++) {
//     navBar[i].onclick = function () {
//         window.scrollTo(0, 0);
//         let temp = this.id;
//         if (justPressed == "") {
//             appendDOM(temp);
//         }
//         else {
//             $("#appendSpace").removeClass("position-change");
//             $("#appendSpace").addClass("position-change-back");
//             justPressed = "";
//             setTimeout(function() {
//                 appendDOM(temp);
//             }, 1000)
        
//         }
   
//     }
// }
// window.scrollTo(x-coord, y-coord);

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
        // alert(this.hash);

    // var nav = $('#about-me');
    // if (nav.length) {
    //     var contentNav = nav.offset().top;

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
    // }
  });
});