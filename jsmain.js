function loweralpha(color, alpha){
    //lower alpha value of hex color
    colors = color.toString();
    if (colors.length == 9){
        colors[7] = alpha[0];
        colors[8] = alpha[1];
    }
    else if (colors.length == 7){
        colors = colors + alpha;
    }
    else {
        throw "color " + color + " is " + colors.length + " characters; should be 7 or 9";
    }
    return colors;
}

function randomColor(){
    // generate random number in hex
    var color = Math.floor(Math.random()*16777215).toString(16);
    while(color.length < 6) {
        color = '0' + color;
    }
    return color;
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";";
}

function getCookie(cname) {
    let name = cname + "=";
    let cookiestring = decodeURIComponent(document.cookie);
    let vars = cookiestring.split(';');
    for(let i = 0; i <vars.length; i++) {
      let c = vars[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

// function to make sideOL display member images
function sideColReplace(memberid, imageclass, imageurl) {
    const button = document.getElementById(memberid);
    button.addEventListener('click', () => {
        var image = document.getElementsByClassName(imageclass)
        for (const element of image){
            element.src = imageurl;
        }
    });
}

// function to keep colors across pages
function setColors(){
    let bg = getCookie("bgcolor");
    if (bg != "") {
        $(':root').css('--bgBlue', bg);
    }
    let accent = getCookie("accentcolor");
    if (accent != "") {
        $(':root').css('--accent2', accent);
        let accentAlpha = loweralpha(accent, "57");
        $(':root').css('--accentAlpha', accentAlpha);
    }
    let txt = getCookie("textcolor");
    if (txt != "") {
        $(':root').css('--txtColor', txt);
    }
}
setColors();