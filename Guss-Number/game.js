
const livesdisplay=document.getElementById("life")
const feedback=document.getElementById("your-no-range")
var randomnum=Math.round(Math.random()*100)


let lives=10
livesdisplay.innerHTML=" ❤ Lives : "+ lives;

function submitbutton(){
    
    const msg=(document.getElementById("message").value)
    lives--;
    const guess = msg;
    livesdisplay.innerHTML=" ❤ Lives : "+lives;
    if (lives==0) {
        window.location.href = "./lost.html";
    } 
    else if (guess < randomnum) {
        feedback.innerHTML = '<img src="https://i.pinimg.com/originals/fc/31/bd/fc31bdbda171598d555560c92fa038b4.jpg" width="150px"> <h2>Too low!</h2>';
    } 
    else if (guess > randomnum) {
        feedback.innerHTML = '<img src="https://wallpaperaccess.com/full/8865916.jpg" width="150px"> <h2>Too high!</h2>';
    } 
    else {
        window.location.href = "./win.html";
    }
};
