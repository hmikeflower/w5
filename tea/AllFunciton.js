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

function anim(DivId,text)
    { 
    var msg="@"
    msg="."+msg;
    if (msg.length>40)
    msg=text;
    document.getElementById(DivId).innerHTML = msg
    }