function greetings(name) {
    console.log("priv", name)
}
greetings("mister")


const arrow = (name) => {
    console.log("priv", name)
}
arrow("leo")

const pow = num => {
    return num ** 2
}
console.log (pow (4))

const sum = (a = 1, b = 1) => a + b
console.log (sum(52))

function sumAll(...all) {
    let result = 0
    for (let num  of all){
        result += num
    }
    return result
}
const res = sumAll (1 , 2, 3, 4, 5, 123, 4)
console.log(res)