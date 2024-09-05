hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}



var typed = new Typed(".loop",{
    strings : ["Frontend Developer", "YouTuber","Backend Developer","Full Stack Developer"],

    typeSpeed : 150,
    backSpeed : 150,
    looped : true
})



// let age = 30;
// if(age>20){
//     console.log("you can drive");
// }
// else{
//     console.log("you can not drive");
// }