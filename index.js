const a = document.querySelector(".mouse");
const hole = document.querySelectorAll(".circle");
const data = document.querySelector(".point");
const press= document.querySelector(".btn")
const audio = new Audio("smash.mp3");
const music = new Audio("forest.mp3");
music.loop = true;
music.volume = 0.2;

let point =0;

const reset=()=>{
   press.addEventListener("click",()=>{
    point = 0;
    data.innerText = point;
   })
}
reset();

const run = () => {
    const show = Math.floor(Math.random() * hole.length);
    console.log(show);

  
    const img = document.createElement('img');
    img.classList.add("nice", "absolute", "bottom-0", "left-1/2", "-translate-x-1/2", "h-[70px]", "z-20");
    img.src ='mole.png';
    hole[show].appendChild(img);
      img.addEventListener("click",()=>{
        point += 10 ;
        let v = point + " !";
        data.innerText = v;
        img.src ="mole-whacked.png"
        audio.play();
        if(point === 100 ){
            data.innerText = v + " Good Keep Going! "
        }else if(point ===150 ){
            data.innerText = v + " Great!";

        }else if(point === 200){
            data.innerText = v + " Awesome!!";
        } else if(point ===400){
            data.innerText = v + " Insane!!!";
        }
            
        
      })


       setTimeout(() => {
         hole[show].removeChild(img);
         run();
     }, 1000);
}


document.getElementById("startGame").addEventListener("click", () => {
    music.play();
    run(); 
  });



let isClicking = false;
let mouseX = 0;
let mouseY = 0;



function updateCursor() {
    const rotate = isClicking ? "rotate(-45deg)" : "rotate(0deg)";
    a.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -120%) ${rotate}`;
}


window.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    updateCursor();
});

window.addEventListener("mousedown", () => {
    isClicking = true;
    updateCursor();
});

window.addEventListener("mouseup", () => {
    isClicking = false;
    updateCursor();
});

