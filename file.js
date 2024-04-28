
let divnewtext =

    ' <a href="notes.html"> Important Notes </a><br>'+
    ' <a href="careers.html">  Careers </a><br>'+
    ' <a href="bookmarks.html">  Bookmarks </a><br>'+
    ' <a href="csroadmap.html">  Road Map to CS </a><br>'



function onhov (){


    
    document.getElementById("menu").innerHTML=divnewtext;
    
}

function onleavemenu(){

    document.getElementById("menu").innerHTML='Menu';


}