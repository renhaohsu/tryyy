$(function(){
  for(var i=0;i<7*7;i++){
    $("#board").append($("<li>"))
    // $("#board li").text(function(index){return index})
  }
  
})
 
// 奇偶數   
var time1=1
function changeColor(){
  time1 += 1
  if (time1 > 0){
    setTimeout(changeColor,200)
  }
  if (time1 % 18 == 0){
    $("#board li:even").css("background-color" ,"LightSkyblue")
    $("#board li:odd").css("background-color" ,"#555")}
  if (time1 % 18 == 8){
    $("#board li:even").css("background-color" ,"#79a1b5")
    $("#board li:odd").css("background-color" ,"#555")}
  if (time1 % 18 == 9){
    $("#board li:odd").css("background-color" ,"LightSkyblue")
    $("#board li:even").css("background-color" ,"#555")}
  if (time1 % 18 == 17){
    $("#board li:odd").css("background-color" ,"#79a1b5")
    $("#board li:even").css("background-color" ,"#555")}
    
  if (time1 > 18){
    time1 = 1
    }
    
}

changeColor() 

//rainbow   
var time= 0
function changeColorrr(){
  time += 1
  if (time > 0){
    setTimeout(changeColorrr,300)
  }
  
  if (time % 7 == 0){
    $("#board li:nth-child(7n)").css("background-color" ,"purple")
    // $("#board li:nth-child(7n+6)").css("background-color" ,"#eee")
  }

  if (time % 7 == 1){
    $("#board li:nth-child(7n+1)").css("background-color" ,"red")
    // $("#board li:nth-child(7n)").css("background-color" ,"#eee")
  }

  if (time % 7 == 2){
    $("#board li:nth-child(7n+2)").css("background-color" ,"orange")
    // $("#board li:nth-child(7n+1)").css("background-color" ,"#eee")
  }

  if (time % 7 == 3){
    $("#board li:nth-child(7n+3)").css("background-color" ,"yellow")
    // $("#board li:nth-child(7n+2)").css("background-color" ,"#eee")
  }

  if (time % 7 == 4){
    $("#board li:nth-child(7n+4)").css("background-color" ,"lime")
    // $("#board li:nth-child(7n+3)").css("background-color" ,"#eee")
  }

  if (time % 7 == 5){
    $("#board li:nth-child(7n+5)").css("background-color" ,"cyan")
    // $("#board li:nth-child(7n+4)").css("background-color" ,"#eee")
  }
    
  if (time % 7 == 6){
    $("#board li:nth-child(7n+6)").css("background-color" ,"blue")
    // $("#board li:nth-child(7n+5)").css("background-color" ,"#eee")
  }

    
  if (time > 6){
    time = 0
    }
    
}

// changeColorrr()