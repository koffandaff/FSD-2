const emp = [{
    "name": "xyz",
    "age": 30
}, {
    "name": "pqr",
    "age": 50
}, {
    "name": "abc",
    "age": 45
}
]
// const sortedemp = emp.sort((a, b) => {
//     return b.age - a.age
// })

// console.log(sortedemp)

// console.log(sortedemp[0].age)
// find highest age optimized

console.log(
    math.max(...emp.map(emp => emp.age))
)

