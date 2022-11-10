function Show(T1){
    console.log(T1)
}

function stop(x){
    clearInterval(x)
    console.log("STOP")
}

function TimeCom(DivId)
{   
    var d = new Date();
    document.getElementById(DivId).innerHTML=+d.getFullYear()+"."+d.getMonth()
    +"."+d.getDate()+"   "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"<br/>";
}

picx=300,picy=550
function up(r){
    if(picx==0){
        picx=r
    }
    picx=picx-r
    document.getElementById('Pic1').style.top=picx
}
function down(r){
    picx=picx+r
    document.getElementById('Pic1').style.top=picx
}
function left(r){
    if(picy==0){
        picy=r
    }
    picy=picy-r
    document.getElementById('Pic1').style.left=picy
}
function right(r){
    picy=picy+r
    document.getElementById('Pic1').style.left=picy
}
function zero(p,s){
    document.getElementById('Pic1').style.top=p
    document.getElementById('Pic1').style.left=s
}