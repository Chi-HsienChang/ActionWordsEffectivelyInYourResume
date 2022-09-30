    
    
const getValueInput_collect = () =>{
    let number =  Math.floor(Math.random() * 18)+80;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "collected"){
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
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: collected";  
        setTimeout(function(){ javascript:window.location.href='learn_C_entry.html'; }, 2000); 
    }

  }
    
const getValueInput_Collect = () =>{
    let number = Math.floor(Math.random() * 18)+80;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Collected" || inputValue == "collected"){
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
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Collected";  
        setTimeout(function(){ javascript:window.location.href='learn_C_entry.html'; }, 2000); 
    }

  }
 const getValueInput_complete = () =>{
    let number =  Math.floor(Math.random() * 18)+80;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Completed" || inputValue == "completed"){
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
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Completed";  
        setTimeout(function(){ javascript:window.location.href='learn_C_entry.html'; }, 2000); 
    }

  }
    
    
 const getValueInput_conduct = () =>{
    let number =  Math.floor(Math.random() * 18)+80;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Conducted" || inputValue == "conducted"){
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
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Conducted";  
        setTimeout(function(){ javascript:window.location.href='learn_C_entry.html'; }, 2000); 
    }

  }


 const getValueInput_handle = () =>{
    let number =  Math.floor(Math.random() * 18)+80;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Handled" || inputValue == "handled"){
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
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Handled";  
        setTimeout(function(){ javascript:window.location.href='learn_C_entry.html'; }, 2000); 
    }

  }


 const getValueInput_perform = () =>{
    let number =  Math.floor(Math.random() * 18)+80;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Performed" || inputValue == "performed"){
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
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Performed";  
        setTimeout(function(){ javascript:window.location.href='learn_C_entry.html'; }, 2000); 
    }

  }


 const getValueInput_install = () =>{
    let number =  Math.floor(Math.random() * 18)+80;
    let link = 'learn_'+number+'.html';
    let inputValue = document.getElementById("domTextElement").value;
    if (inputValue == "Installed" || inputValue == "installed"){
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
        document.getElementById("valueInput").innerHTML = "Wrong! Answer: Installed";  
        setTimeout(function(){ javascript:window.location.href='learn_C_entry.html'; }, 2000); 
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
        javascript:window.location.href='learn_C_entry.html';}
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