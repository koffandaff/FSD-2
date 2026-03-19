// Json inbuilt Function
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

StringifiedData = JSON.stringify(data)  // Stringying the data
console.log(StringifiedData)

ParsedData = JSON.parse(StringifiedData) // Parsing the data
console.log(ParsedData) 