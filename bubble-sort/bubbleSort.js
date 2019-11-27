(function(){
    let numbers = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
    let temp = 0;
    console.log("Unsorted numbers");
    console.log(numbers.toString());

    for(let index = 0; index < numbers.length / 2; index ++){
        for(let i = index; i < numbers.length; i++){
            if(i+1 != numbers.lentgh){
                if(numbers[i] > numbers[i+1]){
                    temp = numbers[i+1];
                    numbers[i+1] = numbers[i];
                    numbers[i] = temp;
                }
            }
            
        }
    }
    console.log("Sorted numbers.");
    console.log(numbers.toString());
})();
