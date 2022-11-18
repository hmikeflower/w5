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
    var n=0
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
    //document.getElementById("1").innerHTML=y;}
    //var x=setInterval('gettime()',10)
}
function website(){
    location.href='http://hmikeflower.github.io/w5/yoyo.html'
}
function stop(c){
    clearInterval(c)
}
x=300,y=550,s=50
function up(r){
    if(x==0){
        x=r
    }
    x=x-r
    document.getElementById('Pic1').style.top=x
}
function down(r){
    x=x+r
    document.getElementById('Pic1').style.top=x
}
function left(r){
    if(y==0){
        y=r
    }
    y=y-r
    document.getElementById('Pic1').style.left=y
}
function right(r){
    y=y+r
    document.getElementById('Pic1').style.left=y
}
function zero(p,s){
    document.getElementById('Pic1').style.top=p
    document.getElementById('Pic1').style.left=s
    document.getElementById('Pic1').style.width=50
}
function big(a){
    s=s+a
    document.getElementById('Pic1').style.width=s
}
function small(a){
    s=s-a
    document.getElementById('Pic1').style.width=s
}
function change(){
        document.getElementById('Pic1').src='http://hmikeflower.github.io/w5/yoyo/p1.png';
        
}
keyx=500,keyy=550
function keyright(r){
    keyy=keyy+r
    document.getElementById('Pic2').style.left=keyy
}
function keydown(r){
    keyx=keyx+r
    document.getElementById('Pic2').style.top=keyx
}
function keyup(r){
    if(keyx==0){
        keyx=r
    }
    keyx=keyx-r
    document.getElementById('Pic2').style.top=keyx
}
function keyleft(r){
    if(keyy==0){
        keyy=r
    }
    keyy=keyy-r
    document.getElementById('Pic2').style.left=keyy
}