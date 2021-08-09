
var submitvar=document.querySelector("#submitdate");
var bdayvar=document.querySelector("#birthday");
var luckynumvar=document.querySelector("#luckynum");
var tempdate;
submitvar.addEventListener("click",showInput)
function ballonAnimation(){
    document.getElementById("ballon").animate([
// keyframes
{ transform: 'translateY(0px)' },
{ transform: 'translateY(-100px)' }
], {
// timing options
duration: 1000,
iterations: 1
});
}
function showInput() {
    
    luckynumvar=document.querySelector("#luckynum");
   // document.querySelector('#display').innerHTML = 
   tempdate= bdayvar.value.replace(/-/g, "");
   var sum=0;
   var luck_result;
   var result=null;
   while(tempdate>0)
   {
    sum=sum+tempdate%10;
    tempdate=Math.floor(tempdate/10);
   }
   console.log(sum)
   var result=sum%luckynumvar.value;
   console.log(result);
   console.log(luckynumvar.value)
 if(result===0)
  {
  
    ballonAnimation();
    luck_result="Congratulations, You are Lucky"
    document.querySelector('#display').innerHTML = luck_result;
  }
  else if(result>0)
  {              
    luck_result="Sorry, You are not lucky."
    document.querySelector('#display').innerHTML = luck_result;
  }
  else{
    document.querySelector('#display').innerHTML ="Please fill above details"
  }
 
  
  
}

