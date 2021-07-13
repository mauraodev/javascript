let items = [10, 20, 30]
let existe = [10, 20, 40]

let newItems = items.filter(function (value) {
    return existe.indexOf(value)
})

console.log(newItems)