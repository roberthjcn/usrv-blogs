
console.log('-------------Exercise Array Score------------------------')

//const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] Salida: 22 
//const arrayNumbers = [1, 2, 3, 4, 5] Salida: 13
//const arrayNumbers = [17, 19, 21] Salida: 9
const arrayNumbers = [5, 5, 5] //Salida: 15

console.log('Total puntos: ', calculateScore(arrayNumbers))

function calculateScore(array: Array<number>) {
    const scores = array.map(number => {
        if (number % 2 === 0) return 1
        else if (number === 5) return 5
        else return 3
    })
    const scoreTotal = scores.reduce((total, score) => total + score!, 0)

    return scoreTotal
}
