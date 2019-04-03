$(document).ready(function(){
    //main function

    //ReadFile();

    var Globalcounter=0;


    for(var i=0;i<1000;i++){
    numToSort = randArray(100,0,10);
    //console.log(numToSort);
    };
    
    var tally= [0,0,0,0,0,0,0,0,0,0,0];

    var simNum = 100000;
    for(var i=0;i<simNum;i++){

        var testVal = theLastNumber();

        tally[testVal] = tally[testVal]+1;
    }

    console.log(tally);

    var numToSort2 = numToSort.slice(0);    
    
    var sortByBubble = bubbleSort(numToSort);
 
    var sortByInsertion = insertionSort(numToSort2);


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
    var swapped = true;
    var counterBubble = 0;
    var counterSwap = 0;

    while (swapped == true){

        swapped = false;

        for (var i=0; i < toSort.length; i++){
            counterBubble++;
            if (toSort[i] > toSort[i+1]){
          
                var temporary = toSort[i];
                toSort[i] = toSort[i+1];
                toSort[i+1] = temporary;

                swapped = true;
                counterSwap++;

            }

            counterBubble++;

        }



    }
    console.log("counterBubble"+counterBubble);
    console.log("counterSwap"+counterSwap)

    return toSort

}

function insertionSort(toSort){

    console.log("running insertion sort");
    var counterSwapInsertion=0;
    var counterInsertion=0;

    for(var i=1;i<toSort.length;i++){ //loop through the 1st element to last, missing 0th element//
        
        for(var j=i;j>=0;j--){
            counterInsertion++;
            if(toSort[j-1]>toSort[j]){

                var temp1 = toSort[j-1];
                toSort[j-1] = toSort[j];
                toSort[j] = temp1;
                counterSwapInsertion++;

            }else{

                break;
            }
        }


    }
    console.log("countByInsertion: "+counterInsertion);
    console.log("counter Swap"+counterSwapInsertion);
return toSort}




function ReadFile(){
	
    $.ajax({
        
        url: "media/countriesOfTheWorld.csv", dataType:"text", async: false, 
        success: function(result){
            
            console.log("successful import");

        
        }
    });

}
function theLastNumber(){	
    var arrayIn =[];	
    for(var i=1;i<=10;i++){	
        arrayIn.push(i);	
    }	

     while(arrayIn.length>1){	

         var index1 = randInt(0,arrayIn.length-1); //0->9	
        var index2 = randInt(0,arrayIn.length-1); //0->9	

         //console.log(index1);	
        //console.log(index2);	
        while(index2==index1){	
            index2 = randInt(0,arrayIn.length-1);	
        }	
            arrayIn.push(Math.abs(arrayIn[index1]-arrayIn[index2]));	

        if(index1>index2){
             arrayIn.splice(index1,1);	
            arrayIn.splice(index2,1);	
        }else{
            arrayIn.splice(index2,1);	
            arrayIn.splice(index1,1);	

        }

     }	
    //console.log(arrayIn[0]);	
    return arrayIn[0];	
}