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

