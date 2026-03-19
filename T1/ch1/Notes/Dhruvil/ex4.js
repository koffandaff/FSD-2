// array to json

arr = ['pqr', 'jkl', 'xyz', 'mno']

// json should be {'pqr': 'mno'}
firstlast = (a) => {
    var test = {}
    test[a[0]] = a[a.length - 1]
    return test
}

console.log(firstlast(arr))