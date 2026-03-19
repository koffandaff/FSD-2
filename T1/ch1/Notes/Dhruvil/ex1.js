// wap to define 2 json for divison 1 and 2 name of students , these name should be sorted and displayed alphabetically


const data = {
    'div1': {
        'student_names': ['Dhruvil', 'Yash', 'Krups', 'Nidhi'],
        'age': [18, 19, 20, 25]
    },
    'div2': {
        'student_names': ['Parth', 'Vraj', 'Krisha', 'Akshat']
    }
}
let div1 = data.div1.student_names

let div2 = data.div2.student_names

console.log(div1, div2)
divs = div1.concat(div2).sort()


console.log(divs)

divs.forEach(element => {
    console.log('Yo  ' + element)
});