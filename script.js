const Wrapper = document.querySelector('.Wrapper');
const Question = document.querySelector('.Question');
const gif= document.querySelector('.gif');
const YesBtn = document.querySelector('.Yes-btn');
const NoBtn = document.querySelector('.No-btn');

YesBtn.addEventListener("click", ()=> {
    Question.innerHTML = "Yey, inamo. I'll see you on February 14!!";
    gif.src = "https://media1.tenor.com/images/10b9c449d8068481470f48451dc7789a/tenor.gif?itemid=12395952";
});

NoBtn.addEventListener("mouseover", ()=>{
const NoBtnRect = NoBtn.getBoundingClientRect();
const maxX = window.innerWidth -NoBtnRect.width;
const maxY = window.innerHeight - NoBtnRect.height;

const randomX = Math.floor(Math.random() * maxX );
const randomY = Math.floor(Math.random()* maxY );

NoBtn.style.left = randomX + "px";
NoBtn.style.top = randomY + "px";
});