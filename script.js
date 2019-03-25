$(document).ready(function(){
    //main function

    ReadFile();

    numToSort = randArray(10,5,10);
    console.log(numToSort);

    /*
    var sortByBubble = bubbleSort(numToSort);

    var sortByInsertion = insertionSort(numToSort);
    */

})

function randInt(lowerBound,upperBound){
    var intNum = lowerBound+ Math.floor(Math.random()*(upperBound-lowerBound+1));
return intNum
}

function randArray(size, lowerBound, upperBound){

    IntArray = [];

    for(var i=0;i<size;i++){

        IntArray.push(randInt(lowerBound,upperBound));

    }
return IntArray;
}

function bubbleSort(toSort){
    console.log("running bubble sort");
}

function insertionSort(toSort){

    console.log("running insertion sort");
}

function ReadFile(){
	
    $.ajax({
        
        url: "media/countriesOfTheWorld.csv", dataType:"text", async: false, 
        success: function(result){
            
            console.log("successful import");

        
        }
    });

}