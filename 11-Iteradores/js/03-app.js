//Fiz buz -- 100 numeros

// 3 4 9 12 ... fizz
// 5 10 15 ... buz
// 15 30 45 ... FIZZBUZZ

for(let i=1; i < 100; i++){
    if(i%15 === 0){
        console.log(`${i} FIZZ BUZZ`);
    }
    else if(i % 3 === 0){
        console.log(`${i} FIZZ`)
    }
    else if(i%5===0){
        console.log(`${i} BUZZ`)
    }
}


