function GetDate(){
    date=new Date()
    var time_detail=[date.getFullYear(),date.getMonth()+1,date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds()];
    var time_format=["年","月","日","時","分","秒"];
    var array_output="現在是";
    i=0;
    while(i<time_detail.length){
        array_output=array_output+time_detail[i]+time_format[i];
        i++;}
    document.getElementById("id").innerHTML=array_output;}
    
    var n=0;
    function changebgcolor(){
        var bgcolor=["red","orange","yellow","lime","green","skyblue","blue","purple","white"]
        document.body.style.backgroundColor = bgcolor[n%9];
        n=n+1;}

var word="$1";
j=0;
function animatoion(){
    j=j+1;
    word=word+"0";
    if (j>=10){
        j=0;
        word="$1";}
    document.getElementById("animation").innerHTML=word;
}

/*--------------------------------------------------------------------------------------------------------------------*/

picx=300;
picy=300;
picsize=50;
function moveup(r){
    if (y>0){
        picy=picy-r;}
    document.getElementById('Pic1').style.top=picy;}

function movedown(r){
    picy=picy+r;
    document.getElementById('Pic1').style.top=picy;}

function moveleft(r){
    if (x>0){
        picx=picx-r;}
    document.getElementById('Pic1').style.left=picx;}

function moveright(r){
    picx=picx+r;
    document.getElementById('Pic1').style.left=picx;}
function moveback(r1,r2,size){
    picx=r1;
    picy=r2;
    picsize=size;
    document.getElementById('Pic1').style.left=picx;
    document.getElementById('Pic1').style.top=picy;
    document.getElementById('Pic1').style.width=picsize;}

function big(c){
    picsize=picsize+c
    document.getElementById('Pic1').style.width=picsize}

function small(c){
    picsize=picsize-c
    document.getElementById('Pic1').style.width=picsize}

function change(){
    pic=(pic+1)%2
    if(pic==0){
        document.getElementById("Pic1").src='http://hmikeflower.github.io/w5/yoyo/p2.png';}
    if(pic==1){
        document.getElementById("Pic1").src='http://hmikeflower.github.io/w5/yoyo/p3.png';}}

        keyx=500,keyy=550
        function keyright(r){
            keyy=keyy+r
            document.getElementById('Pic1').style.left=keyy
        }
        function keydown(r){
            keyx=keyx+r
            document.getElementById('Pic1').style.top=keyx
        }
        function keyup(r){
            if(keyx==0){
                keyx=r
            }
            keyx=keyx-r
            document.getElementById('Pic1').style.top=keyx
        }
        function keyleft(r){
            if(keyy==0){
                keyy=r
            }
            keyy=keyy-r
            document.getElementById('Pic1').style.left=keyy
        }