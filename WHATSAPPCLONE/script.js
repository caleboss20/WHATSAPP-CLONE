

  function changevoice(){
  let message=document.querySelector('.message');
  let msgval=message.value;
  let iconvoice=document.querySelector('.voice');
  let send=document.querySelector('.send');
   if(msgval.length>0){
    send.style.display='block';
    iconvoice.style.display='none';
    
   }
  
 else{
   send.style.display='none';
    iconvoice.style.display='block';
 }
    
 }

  function border(){

  
   let search=document.querySelector('search');
   search.style.border ='2px solid green';
 
  }
    
  let inputsearch=document.querySelector('.search');

  inputsearch.addEventListener('keyup',search);

    function search(){
      let inputsearchvalue=inputsearch.value;
      let all=document.querySelectorAll('.first');
      for(i=0;i<all.length;i++){
     if(all[i].innerHTML.toLowerCase().includes(inputsearchvalue)){
      all[i].style.display='';

     }
     else{
       all[i].style.display='none';
     }
      }
    }



    const toggle = document.getElementById("darkModeToggle");

    toggle.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode");
      
    });





  
// Total time in milliseconds (3 hours)
const maxTime = 3 * 60 * 60 * 1000;

// Load remaining time from localStorage or default to maxTime

let remainingTime = localStorage.getItem("remainingTime");
remainingTime = remainingTime ? parseInt(remainingTime) : maxTime;

const timeDisplay = document.getElementById("timeDisplay");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(remainingTime);
  
    let popup=document.querySelector('.modal-content');
    let container=document.querySelector('.container');

    popup.style.opacity='0';
    container.style.display='block';
}

// Save time every second and update display
const countdown = setInterval(() => {
  if (remainingTime <= 0) {
    clearInterval(countdown);
    // alert("⏰ You've used up your daily limit. Please come back tomorrow.");
    // localStorage.setItem("remainingTime", 0);


    return;
  }

  remainingTime -= 1000;
  updateDisplay();
  localStorage.setItem("remainingTime", remainingTime);
}, 1000);

// Initial update
updateDisplay();

   //for display message in box//



   function displaymsg(){
     let message=document.querySelector('.message');
     let messagevalue=message.value;

     let text=document.querySelector('.message-text');
     text.innerHTML=`${messagevalue}`;

     let wraptext=document.querySelector('.message-bubble');
     wraptext.style.display='block';

     
const bell=document.getElementById('bellsound');
bell.currentTime=0;
bell.play();

let timestamp =document.querySelector('.timestamp');
   timestamp.innerHTML=`${new Date() .toLocaleTimeString('en-US',{
    hour:'numeric',
    minute:'numeric',
    hour12:true
   })}`

   }

// displaymsg();

function currenttime(){
  let current_time=document.querySelector('.current-time');
  current_time.innerHTML=`${new Date() .toLocaleDateString()}`;
}
   currenttime();




 let messageval='caleb';

//for looping messages send//
  // const myarray=[];

  // function mymessage(){

  //       let message=document.querySelector('.message');
  //       let messagevalue=message.value;
     
  //     myarray.push(messagevalue);
  //      console.log(myarray);

  //      myloop();

     

  // }

  // let allhtml='';

  // function myloop(){
     
  //   for(i=0; i < myarray.length;i++){
  //      let myeach=myarray[i];
  //      let html=`<p>${myeach}</p>`;
  //      allhtml=allhtml+html;

  //   }
  //   let message_text=document.querySelector('.message-text').innerHTML=`${allhtml}`;

       
  // }


 function settingsclick(){
  let archive=document.querySelector('.archive');
  let settings_pop=document.querySelector('.settings-popup');
  settings_pop.style.display='block';
 }


function settingsgo(){
  
   let settings_pop=document.querySelector('.settings-popup');
  settings_pop.style.display='none';
  
}


















