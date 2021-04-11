var i;
for(i=0;i<document.querySelectorAll(".drum").length;i++)
document.querySelectorAll("button")[i].addEventListener("click", function (){
   
    var buton=this.innerHTML;

    tasta(buton);
    animatie(buton);

})
document.addEventListener("keypress", function(event){
tasta(event.key);
animatie(event.key);
})

function tasta(key){

    switch(key){
        case "w":
             var sunet=new Audio("sounds/tom-1.mp3");
             sunet.play();
        break;
        case "a":
            var sunet=new Audio("sounds/tom-2.mp3");
            sunet.play();
            break;
        case "s":
            var sunet=new Audio("sounds/tom-3.mp3");
            sunet.play();
            break;
        case "d":
            var sunet=new Audio("sounds/tom-4.mp3");
            sunet.play();
            break;
        case "j":
            var sunet=new Audio("sounds/snare.mp3");
            sunet.play();
            break;
        case "k":
            var sunet=new Audio("sounds/crash.mp3");
            sunet.play();
            break;
        case "l":
            var sunet=new Audio("sounds/kick-bass.mp3");
            sunet.play();
            break;
    
        
        }
}

function animatie(parametru){

var butonApasat=document.querySelector("."+parametru);
butonApasat.classList.add("pressed");
setTimeout(function(){
butonApasat.classList.remove("pressed");
},100);

}