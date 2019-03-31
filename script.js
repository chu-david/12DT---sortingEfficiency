$(document).ready(function(){
    //main function

    //ReadFile();

    numToSort = randArray(10,0,10);
    //console.log(numToSort);
    var tally= [0,0,0,0,0,0,0,0,0,0,0];

    var simNum = 100000;
    for(var i=0;i<simNum;i++){

        var testVal = theLastNumber();

        tally[testVal] = tally[testVal]+1;
    }

    console.log(tally);

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

    for(var i=1;i<toSort.length;i++){ //loop through the 1st element to last, missing 0th element//
        console.log("pass"+i);
        for(var j=i;j>=0;j--){

            if(toSort[j-1]>toSort[j]){

                var temp1 = toSort[j-1];
                toSort[j-1] = toSort[j];
                toSort[j] = temp1;

                console.log(toSort);
            }else{

                break;
            }
        }


    }
    console.log(toSort);
return toSort}

function theLastNumber(){
    var arrayIn =[];
    for(var i=1;i<=10;i++){
        arrayIn.push(i);
    }
    
    while(arrayIn.length>1){

        var index1 = Math.floor(Math.random()*arrayIn.length); //0->9
        var index2 = Math.floor(Math.random()*arrayIn.length); //0->9

        //console.log(index1);
        //console.log(index2);
        while(index2==index1){
            index2 = Math.floor(Math.random()*arrayIn.length);
        }
            arrayIn.push(Math.abs(arrayIn[index1]-arrayIn[index2]));

            arrayIn.splice(index1,1);
            arrayIn.splice(index2,1);


    }
    //console.log(arrayIn[0]);
    return arrayIn[0];
}


function ReadFile(){
	
    $.ajax({
        
        url: "media/countriesOfTheWorld.csv", dataType:"text", async: false, 
        success: function(result){
            
            console.log("successful import");

        
        }
    });

}