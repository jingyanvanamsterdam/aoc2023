const fs = require('fs')

fs.readFile('day1-input.txt', (err, data) => {
    if (err) throw err;
    const dataInput = data.toString();
    const dataArray = dataInput.split('\n');
    const calArr = []
    const searchWords = {'one':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9,
                            'oneight': [1,8], 'threeight': [3, 8], 'fiveight': [5, 8], 'nineight': [9,8], 'twone': [2,1], 'sevenine': [7,9], 'eightwo': [8,2], 'eighthree': [8,3]}
    
    function checkLetterNumber(num, first){
        if(parseInt(num)){
            return parseInt(num)
        } else{
            const searchArr = searchWords[num]
            if(!Array.isArray(searchArr)){
                return searchArr
            } else {
                return first ? searchArr[0] : searchArr[1]
            }
        }
    }


    for (i = 0; i < dataArray.length; i++) {
        const line = dataArray[i];
        const regex = /oneight|threeight|fiveight|nineight|twone|sevenine|eightwo|eighthree|one|two|three|four|five|six|seven|eight|nine|[1-9]/g
        const matchNum = line.match(regex);
        const fnum = matchNum[0];
        const lnum = matchNum[matchNum.length - 1];
        const fNumber = checkLetterNumber(fnum, true); 
        const lNumber = checkLetterNumber(lnum, false); 
        
        const final = fNumber * 10 + lNumber
        calArr.push(final)   
    }
    //console.log(calArr)
    const sumUp = calArr.reduce((acc, cur) => acc + cur)
    console.log(sumUp);

})
