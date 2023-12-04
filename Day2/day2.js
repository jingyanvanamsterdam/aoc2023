const fs = require('fs')

fs.readFile('day2-input.txt', (err, data) => {
    if (err) throw err;
    const dataInput = data.toString();
    const dataArray = dataInput.split('\n');
    const calArr = []; 
   

    for (let i=0; i<dataArray.length; i++){
        //add a number representing the game ID into calArr firstly
        calArr.push(i+1)
        
        //get the game ID for each round
        const game = dataArray[i].split(': '); 
        const gameSets = game[1].split('; ');
        const gameId = i+1 
        let impossible = false
        //loop for each gameSet
        for (let j=0; j<gameSets.length; j++){
            const setSplit = gameSets[j].split(', '); 
            const obj = {
                'red': 0, 
                'blue': 0, 
                'green': 0
            };
            //loop for each part of one gameSet     
            for (let q=0; q<setSplit.length; q++){
                const numAndColorArr = setSplit[q].split(' '); 
                const amount = parseInt(numAndColorArr[0]); 
                const color = numAndColorArr[1]; 
                obj[color] = amount;   
            }
            if(obj['red'] > 12 || obj['blue'] > 14 || obj['green'] >13){
                impossible = true 
            }
           
        }
        if (impossible) {
            //console.log(calArr)
            calArr.pop()
        }


    }
    
    console.log(calArr)
    const sumUp = calArr.reduce((acc, cur)=> acc+cur)
    console.log(sumUp);
})



//const str = 'Game 23: 3 red, 5 green; 10 blue, 1 green, 9 red; 2 red, 10 green, 9 blue; 9 blue, 7 green';




