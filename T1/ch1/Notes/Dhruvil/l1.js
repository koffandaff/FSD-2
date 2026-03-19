const data = {
    'Name': 'Dhruvil',
    'Age': 20,
    'Interest': ['FOotball', 'F1'],
    'Marks': {
        'FSD': 99,
        'Python': 99,
        'Pr': [10, 23, 30]
    },
    'Pass': true
}

console.log(`Name: ${data.Name}`)
console.log(`Age: ${data.Age}`)
console.log(`Interset: ${data.Interest[0]} , ${data.Interest[1]}`)
console.log(`Fsdd Marks: ${data.Marks.FSD}`)
console.log(`Python Makrs: ${data.Marks.Python}`)
console.log(`Pr Marks: ${data.Marks.Pr[0]} ,${data.Marks.Pr[1]} , ${data.Marks.Pr[2]}`)
console.log(`IsPass: ${data.Pass}`)
