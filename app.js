//--------------------declaring variables-----------------------------

//get both buttons
const impossiblebtn=document.getElementById('impossiblebtn');
const startbtn=document.getElementById('startbtn');

var hasWon=false; //variable to check if user won

//=================event listener for mouseover button=============
//this event listener will randomly move the buttons location when it is moused over

impossiblebtn.addEventListener('mouseover', function() {
console.log('MOUSED OVER ME! ');

const height=Math.floor(Math.random() *window.innerHeight);

const width=Math.floor(Math.random() *window.innerWidth);

impossiblebtn.style.left=`${width}px`;
impossiblebtn.style.top=`${height}px`;
});


//=====================event listened for winning====================
//if the button is clicked, you win
impossiblebtn.addEventListener('click', function(){

    hasWon=true;

    impossiblebtn.innerText='YOU GOT ME';
    impossiblebtn.style.backgroundColor="red";

});

//=====================event listener to start the game=================
// when the start button is clicked, the instrction line disappears and so does the 
//start button
startbtn.addEventListener("click", function(){

    startbtn.style.display='none';
    instructions.style.display='none';

    impossiblebtn.style.visibility='visible'; //make the impossible btn visible


    
   const timer= document.getElementById("timer");

    //starting the 15 second timer
    var timeleft = 15; 
    var downloadTimer = setInterval(function function1(){
   timer.innerHTML = timeleft +  " "+"seconds remaining";

    timeleft -= 1;
    //first check if they won before the time is up
    if(hasWon==true){
        timer.innerHTML = "YOU WON! refresh to play again.";
        impossiblebtn.style.visibility='hidden';
    }
    //when theres no more time left, tell them they lost
   else if(timeleft <= 0){
        clearInterval(downloadTimer);
        
        impossiblebtn.style.visibility='hidden';
    
            timer.innerHTML="Time is up! You lose!";

    }
    }, 1000);

});


