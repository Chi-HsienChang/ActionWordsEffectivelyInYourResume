    
  
const getValueInput_maintain = () =>{
    let number = Math.floor(Math.random() * 15)+98;  
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Maintained" || inputValue == "maintained"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        correct_count_stage_1_1 += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Maintained";  
        setTimeout(function(){ javascript:window.location.href='learn_D_entry.html'; }, 2000); 
    }

  }

const getValueInput_oversee = () =>{
    let number = Math.floor(Math.random() * 15)+98;  
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Oversaw" || inputValue == "oversaw"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        correct_count_stage_1_1 += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Oversaw";  
        setTimeout(function(){ javascript:window.location.href='learn_D_entry.html'; }, 2000); 
    }

  }

 const getValueInput_review = () =>{
    let number = Math.floor(Math.random() * 15)+98;  
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Reviewed" || inputValue == "reviewed"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        correct_count_stage_1_1 += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Planed";  
        setTimeout(function(){ javascript:window.location.href='learn_D_entry.html'; }, 2000); 
    }

  }
    
const getValueInput_supervised = () =>{
    let number = Math.floor(Math.random() * 15)+98;  
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Supervised" || inputValue == "supervised"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        correct_count_stage_1_1 += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Supervised";  
        setTimeout(function(){ javascript:window.location.href='learn_D_entry.html'; }, 2000); 
    }

  }  

const getValueInput_supervise = () =>{
    let number = Math.floor(Math.random() * 15)+98;  
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Supervise" || inputValue == "supervise"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        correct_count_stage_1_1 += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Supervise";  
        setTimeout(function(){ javascript:window.location.href='learn_D_entry.html'; }, 2000); 
    }

  }


 const getValueInput_update = () =>{
    let number = Math.floor(Math.random() * 15)+98;  
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Updated" || inputValue == "updated"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        correct_count_stage_1_1 += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Updated";  
        setTimeout(function(){ javascript:window.location.href='learn_D_entry.html'; }, 2000); 
    }

  }


 const getValueInput_assess = () =>{
    let number = Math.floor(Math.random() * 15)+98;  
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Assessed" || inputValue == "assessed"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        correct_count_stage_1_1 += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Assessed";  
        setTimeout(function(){ javascript:window.location.href='learn_D_entry.html'; }, 2000); 
    }

  }


 const getValueInput_monitor = () =>{
    let number = Math.floor(Math.random() * 15)+98;  
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Monitor" || inputValue == "monitor"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        correct_count_stage_1_1 += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Monitored";  
        setTimeout(function(){ javascript:window.location.href='learn_D_entry.html'; }, 2000); 
    }

  }

 const getValueInput_monitored = () =>{
    let number = Math.floor(Math.random() * 15)+98;  
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Monitored" || inputValue == "monitored"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        correct_count_stage_1_1 += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Monitored";  
        setTimeout(function(){ javascript:window.location.href='learn_D_entry.html'; }, 2000); 
    }

  }

 const getValueInput_refine = () =>{
    let number = Math.floor(Math.random() * 15)+98;  
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Refined" || inputValue == "refined"){
        var audio = document.createElement("audio");
        audio.src = "../../media/music/true.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Correct! Next!"; 
        setTimeout(function(){ javascript:window.location.href=link; }, 2000);    
        correct_count_stage_1_1 += 1;
    }else{ 
        var audio = document.createElement("audio");
        audio.src = "../../media/music/false.m4a";
        audio.playbackRate = 1.7;audio.play();
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Refined";  
        setTimeout(function(){ javascript:window.location.href='learn_D_entry.html'; }, 2000); 
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
        javascript:window.location.href='learn_D_entry.html';}
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