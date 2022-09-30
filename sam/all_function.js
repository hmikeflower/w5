var n=0;
function GetDate(){
    var bgcolor=["red","orange","yellow","lime","green","skyblue","blue","purple","white"]
    document.body.style.backgroundColor = bgcolor[n%9];
    n=n+1;
    date=new Date()
    var time_detail=[date.getFullYear(),date.getMonth()+1,date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds()];
    var time_format=["年","月","日","時","分","秒"];
    var array_output="現在是"+"<br>";
    i=0;
    while(i<time_detail.length){
        array_output=array_output+time_detail[i]+time_format[i];
        if (i==0 || i==2){
            array_output=array_output+"<br>"}
        i++;}
    document.getElementById("id").innerHTML=array_output;}

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