function border(){
    document.getElementById("riddle").style.borderRight="none"
    document.getElementById("r").style.top="50px"
    document.getElementById("riddle0").style.display="inline"
}
setTimeout(border, 3000)
function riddle(){
    if(document.getElementById('inpriddle').value === "code" || document.getElementById('inpriddle').value === "Code" ){
        document.getElementById("riddle1").style.display="inline"
        document.getElementById("r").style.top="140px"
        document.getElementById("riddle0").style.borderRight="none"
        setTimeout(delay, 3000)
    }
}
function rando(){
        document.getElementById("inpriddle").style.display="inline"
}
setTimeout(rando, 8000)

function delay(){
    document.getElementById("riddle2").style.display="inline"
    document.getElementById("riddle1").style.borderRight="none"
    document.getElementById("r").style.top="178.5px"
    setTimeout(delay1, 5000)
}
function delay1(){
    document.getElementById("show").style.display="inline"
}
function show(){
    document.getElementById("show").style.display="none"
    document.getElementById("cypher").style.display="inline"
    document.getElementById("r").style.top="220px"
    document.getElementById("riddle2").style.borderRight="none"
}