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

x=300;
y=300;
function moveup(r){
    if (y>0){
        y=y-r;}
    document.getElementById('Pic1').style.top=y;}

function movedown(r){
    y=y+r;
    document.getElementById('Pic1').style.top=y;}

function moveleft(r){
    if (x>0){
        x=x-r;}
    document.getElementById('Pic1').style.left=x;}

function moveright(r){
    x=x+r;
    document.getElementById('Pic1').style.left=x;}
function moveback(){
    x=300;
    y=300;
    document.getElementById('Pic1').style.left=x;
    document.getElementById('Pic1').style.top=y;}