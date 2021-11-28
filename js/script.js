// В первом примере сделал так, что бы при каждом вызове функции - генерировалось одно рандомное число, и пушилось в массив.
{
    function randomNumbers () {
        let array = [];
        return function numbers () {
            let random = Math.floor(Math.random() * 100) + 1;
            if (array.length === 100) return `хвациць`
            else if (array.find(item => item === random)) return numbers();
            else {
                array.push(random)
                return array;
            }
        }
    }
let a = randomNumbers();
console.log(a());
console.log(a());
console.log(a());

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