// Requiring fs module in which 
// readFile function is defined.
const fs = require('fs')

fs.readFile('day1-input.txt', (err, data) => {
    if (err) throw err;
    const dataInput = data.toString(); 
    const dataArray = dataInput.split('\n'); 
    const calArr = []

    for(i=0; i<dataArray.length; i++){
        let stringNum = dataArray[i]; 
        const regex = /\d/g; 
        const matchNum = stringNum.match(regex); 
        
        const fnum = parseInt(matchNum[0]); 
        const lnum = parseInt(matchNum[matchNum.length-1]); 
        const final = fnum*10 + lnum; 
        
        calArr.push(final)
    }
    console.log(calArr)
    const sumUp = calArr.reduce((acc, cur)=> acc+cur)
    console.log(sumUp);

})