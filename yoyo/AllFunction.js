function xd(){
    alert("xddd")
}
function xdd(){

    x="."+x
    document.getElementById('d1').innerHTML=x
    if(x.length>40){
        x=""
    }
}
function gettime(){
    var n=0,m=0
    date=new Date()
    var bgcolor=["red","orange","yellow","lime","green","skyblue","blue","purple","white"]
    var time1=[date.getFullYear(),date.getMonth()+1,date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds()];
    var time2=["年","月","日","時","分","秒"];
    var y="現在是";
    i=0;
    while(i<time1.length){
        y=y+time1[i]+time2[i];
        document.body.style.backgroundColor = bgcolor[n];
        if (i==0 || i==2){
            document.body.style.backgroundColor = bgcolor[n];
            y=y}
            n++
            i++;
        if(n==9){
            n=0
        }}
    document.getElementById("1").innerHTML=y;}
    var x=setInterval('gettime()',10)
function website(){
    location.href='http://hmikeflower.github.io/w5/yoyo.html'
}