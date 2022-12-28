
const timerText = document.getElementById("timerText")
const btnStart=document.getElementById("start")
const btnSet=document.getElementById("set")
const btnStop=document.getElementById("stop")
const timerImp = document.getElementById("timerImp")
const btnPlay=document.getElementById("btn-play")
const divOngoing= document.getElementById("ongoing-div")
  
  //.style.width = "300px";
let time = 6;
let totalTime;
let intervalId;
let  playing=false;

function setup() { 
  song=loadSound('sound.mp3')
 // wave = new p5.Oscillator();
   //wave.setType('sine') 
}

const setting= ()=>{ 
  time= parseInt(timerImp.value)
  totalTime = parseInt(timerImp.value)
  timerText.innerHTML=time
  var times=[]
  if(localStorage.getItem('times')!=undefined){
    times=JSON.parse(localStorage.getItem("times"))
  }
  
  times.push(time)
  localStorage.setItem("times",JSON.stringify(times))
}  
 function togglePlay(){
  if (!playing){
    //console.log("no")
     //wave.start();
      //wave.amp(0.1)
      //wave.freq(150)
       // playing=true;
    song.play()
  
    }
       else{
      wave.stop();
    playing=false;
  }                      
}
timerImp.addEventListener('click',                          (e)=>{e.target.value=""})


btnSet.addEventListener('click',()=>{setting()})

btnStart.addEventListener('click',
  function(){
       intervalID=setInterval(
        function(){
          if(time===0)
          {            
            clearInterval(intervalID)
            togglePlay()
          return}  
          
          time-=1;
          timerText.textContent=time
        
 divOngoing.style.width= document.documentElement.clientWidth*(time/totalTime)+"px";     
   document.title = time;
        }
       
        
         , 1000
       ) //setInterval
     }
                          )
                      

btnStop.addEventListener('click',
                        ()=>{
                          clearInterval(intervalID)
                        })

btnPlay.addEventListener('click',
                        ()=>{togglePlay()})