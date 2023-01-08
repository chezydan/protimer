
const timerText = document.getElementById("timerText")
const btnStart=document.getElementById("start")
const btnSet=document.getElementById("set")
const btnStop=document.getElementById("stop")
const timerImp = document.getElementById("timerImp")
const btnPlay=document.getElementById("btn-play")
const divOngoing= document.getElementById("ongoing-div")
const container= document.getElementById("container")
  
  //.style.width = "300px";
const PRESETS_QUANTITY =6
let time = 6;
let totalTime;
let intervalId;
let  playing=false;
  let times=[]

function setup() { 
  song=loadSound('sound.mp3')
 // wave = new p5.Oscillator();
   //wave.setType('sine') 
}
window.addEventListener('load',
 ()=>{  
   console.log("loaded")
     if(localStorage.getItem('times')!=undefined){
    times=JSON.parse(localStorage.getItem("times")) }

     let timesElems= [...new Set(times)].slice(-PRESETS_QUANTITY)
  console.log(timesElems)
  for (let i=0; i<timesElems.length; i++){
    const but =document.createElement("button")
    but.addEventListener('click',settingPreset)
    but.innerHTML=timesElems[i]
   
          but.classList.add("btn")
    container.appendChild(but)
    
    console.log(timesElems[i])
  
  }
 }
 )

const settingPreset=(event)=>{
  time = parseInt(event.target.innerHTML)
  totalTime = parseInt(event.target.innerHTML)
  console.log(totalTime)
  timerText.innerHTML = totalTime
  storeTime
}
const setting= ()=>{ 
  time= parseInt(timerImp.value)
  totalTime = parseInt(timerImp.value)
  timerText.innerHTML=time
  storeTime
}

const storeTime= ()=>{
  times.push(time)
  localStorage.setItem("times",JSON.stringify(times))

  
  console.log([...new Set(times)]  )

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
timerImp.addEventListener('click',       (e)=>{e.target.value=""})


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