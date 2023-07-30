let onbulb1=document.getElementById("onbulb")
let image_cat1=document.getElementById("image_cat")
let switchon1=document.getElementById("switchon")
let buttonon1=document.getElementById("buttonon")
let buttonoff1=document.getElementById("buttonoff")
function onbutton(){
    onbulb1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    image_cat1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    switchon1.textContent="Switch On"
    switchon1.style.color="red";
    buttonon1.style.backgroundColor="green";
    buttonoff1.style.backgroundColor="gray";
}
function offbutton(){
    onbulb1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    image_cat1.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    switchon1.textContent="Switch On"
    switchon1.style.color="red";
    buttonon1.style.backgroundColor="gray";
    buttonoff1.style.backgroundColor="red";
}

