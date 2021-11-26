// В первом примере сделал так, что бы при каждом вызове функции - генерировалось одно рандомное число, и пушилось в массив.
{
let randomNumbers = (() => {
    let array = [];
        return () => {
            let random = Math.floor(Math.random() * 100) + 1;
            if (array.find(item => item === random)) return array;
            else {
                array.push(random)
                return array;
            }
        }
})();
console.log(randomNumbers());
console.log(randomNumbers());
console.log(randomNumbers());
}

// OR

// Во втором примере, при вызове функции - массив наполняется числами в рандомном порядке, пока в нем не появятся все числа от 1 до 100. 
{
let randomNumbers = (() => {
    let array = [];
        return () => {
            let random;
            while (array.length !== 100){
                random = Math.floor(Math.random() * 100) + 1;
                if (!array.find(item => item === random)) {
                    array.push(random)
                }  
            }
            return array;
        }
})();
console.log(randomNumbers());
}