// bg color
var bg_picker = document.getElementById("bg-picker");
var bg_picker_wrapper = document.getElementById("bg-picker-wrapper");
bg_picker.onchange = function() {
    bg_picker_wrapper.style.backgroundColor = bg_picker.value; 
    $(':root').css('--bgBlue', bg_picker.value);   
    setCookie("bgcolor", bg_picker.value, 365);
}
bg_picker_wrapper.style.backgroundColor = bg_picker.value;

// accent color
var accent_picker = document.getElementById("accent-picker");
var accent_picker_wrapper = document.getElementById("accent-picker-wrapper");
accent_picker.onchange = function() {
    accent_picker_wrapper.style.backgroundColor = accent_picker.value;  
    $(':root').css('--accent2', accent_picker.value); 
    $(':root').css('--accentAlpha', loweralpha(accent_picker.value, "57"));  
    setCookie("accentcolor", accent_picker.value, 365);
}
accent_picker_wrapper.style.backgroundColor = accent_picker.value;

// random bg
const button1 = document.getElementById('changebgcolor');
button1.addEventListener('click', () => {
    const color = "#" + randomColor();
    $(':root').css('--bgBlue', color);
    bg_picker_wrapper.style.backgroundColor = color;
    setCookie("bgcolor", color, 365);
});

// revert bg
const button2 = document.getElementById('revertbgcolor');
button2.addEventListener('click', () => {
    $(':root').css('--bgBlue', '#2b213a');
    bg_picker_wrapper.style.backgroundColor = '#2b213a';
    setCookie("bgcolor", '#2b213a', 365);
});

// random accent
const accentButton = document.getElementById('changeaccent');
accentButton.addEventListener('click', () => {
    const color = "#" + randomColor();
    $(':root').css('--accent2', color);
    // create lower alpha version of accent2
    $(':root').css('--accentAlpha', loweralpha(color, "57"));
    accent_picker_wrapper.style.backgroundColor = color;
    setCookie("accentcolor", color, 365);
});

// revert accent
const accentButton2 = document.getElementById('revertaccent');
accentButton2.addEventListener('click', () => {
    $(':root').css('--accent2', '#af1700');
    // create lower alpha version of accent2
    $(':root').css('--accentAlpha', '#af170057');
    accent_picker_wrapper.style.backgroundColor = '#af1700';
    setCookie("accentcolor", '#af1700', 365);
});

// text colors
var text_picker = document.getElementById("text-picker");
var text_picker_wrapper = document.getElementById("text-picker-wrapper");
text_picker.onchange = function() {
    text_picker_wrapper.style.backgroundColor = text_picker.value;  
    $(':root').css('--txtColor', text_picker.value); 
    setCookie("textcolor", text_picker.value, 365);
}
text_picker_wrapper.style.backgroundColor = text_picker.value;

// random
const textButton = document.getElementById('changetext');
textButton.addEventListener('click', () => {
    const color = "#" + randomColor();
    $(':root').css('--txtColor', color);
    text_picker_wrapper.style.backgroundColor = color;
    setCookie("textcolor", color, 365);
});

// revert
const textButton2 = document.getElementById('reverttext');
textButton2.addEventListener('click', () => {
    $(':root').css('--txtColor', '#f1f1f3');
    text_picker_wrapper.style.backgroundColor = '#f1f1f3';
    setCookie("textcolor", '#f1f1f3', 365);
});