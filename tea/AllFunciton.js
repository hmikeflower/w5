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

picx=300,picy=50,picWidth=150;PicMode=0
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
function reset(p,s){
    document.getElementById('Pic1').style.top=p
    document.getElementById('Pic1').style.left=s
    picWidth=150
    document.getElementById('Pic1').style.width=picWidth
}
function big(){
    picWidth=picWidth+10;
    document.getElementById('Pic1').style.width=picWidth
    
}
function small(){
    picWidth=picWidth-10;
    document.getElementById('Pic1').style.width=picWidth
    
}
function change(){
    PicMode=(PicMode+1)%2
    console.log(PicMode)
    if(PicMode==0){
    document.getElementById("PicSrc").src='http://hmikeflower.github.io/w5/tea/p1.png';
    }
    if(PicMode==1){
        document.getElementById("PicSrc").src='http://hmikeflower.github.io/w5/tea/p2.png';
        }
}

function test(){
    console.log(1)

}
