//window.alert("Hey!");

//custom function which performs all the job
function calculateTip(){
    //store all the required values in variables
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    
    //Quick validation
    if(billAmount == "" || serviceQuality == 0){
        window.alert("Something missing!");
        return;//this will prevent the function from continuing
    }
    
    //check to see if this input is empty or less than or equal to 1
    if(numPeople <=1 || numPeople ==""){
        numPeople = 1;
        document.getElementById("each").style.display = "none";
        
    }else{
        document.getElementById("each").style.display="block";
    }
    
    //do some math!
    var total = (billAmount * serviceQuality)/numPeople;
    total = total.toFixed(2);
    
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
//hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
//hide the each section also
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function(){
    calculateTip();
}