
const getValueInput_develope = () =>{
    let number = Math.floor(Math.random() * 17)+46;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Developed" || inputValue == "developed"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        window.count[0] += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Developed";  
        setTimeout(function(){ javascript:window.location.href='learn_A_entry.html'; }, 2000); 
    }

  }

const getValueInput_observe = () =>{
    let number = Math.floor(Math.random() * 17)+46;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Observed" || inputValue == "observed"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        count[0] += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Observed";  
        setTimeout(function(){ javascript:window.location.href='learn_A_entry.html'; }, 2000); 
    }

  }

 const getValueInput_plan = () =>{
    let number = Math.floor(Math.random() * 17)+46;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Planned" || inputValue == "planned"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        count[0] += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Planned";  
        setTimeout(function(){ javascript:window.location.href='learn_A_entry.html'; }, 2000); 
    }

  }
    
    
 const getValueInput_prepare = () =>{
    let number = Math.floor(Math.random() * 17)+46;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Prepared" || inputValue == "prepared"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        count[0] += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Prepared";  
        setTimeout(function(){ javascript:window.location.href='learn_A_entry.html'; }, 2000); 
    }

  }


 const getValueInput_research = () =>{
    let number = Math.floor(Math.random() * 17)+46;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Researched" || inputValue == "researched"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        count[0] += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Researched";  
        setTimeout(function(){ javascript:window.location.href='learn_A_entry.html'; }, 2000); 
    }

  }


 const getValueInput_devise = () =>{
    let number = Math.floor(Math.random() * 17)+46;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Devised" || inputValue == "devised"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        count[0] += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Devised";  
        setTimeout(function(){ javascript:window.location.href='learn_A_entry.html'; }, 2000); 
    }

  }


 const getValueInput_evaluate = () =>{
    let number = Math.floor(Math.random() * 17)+46;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Evaluated" || inputValue == "evaluated"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        count[0] += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Evaluated";  
        setTimeout(function(){ javascript:window.location.href='learn_A_entry.html'; }, 2000); 
    }

  }



function start_time()
{
    var timer = document.querySelector("#timer");
    var number = 20;
    setInterval(function(){
    number -- ;
    if(number <= 0 ){
        number = 0;
        javascript:window.location.href='learn_A_entry.html';}
    timer.innerText = number + 0 }, 1000);
}


function my_true()
{
    var audio = document.createElement("audio");
    audio.src = "../../media/music/true.m4a";
    audio.playbackRate = 1.7;audio.play();
}


function my_false()
{
    var audio = document.createElement("audio");
    audio.src = "../../media/music/false.m4a";
    audio.playbackRate = 1.7;audio.play();
}