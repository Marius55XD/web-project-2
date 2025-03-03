let people = [{name: "Cathy", age: 25},
    {name: "Anne", age: 22},
    {name: "Dermot", age: 20},
    {name: "Bill", age: 21},
    {name: "Eric", age: 19}]


function  personTable()
{
    let htmlString = `<table>`

    htmlString += `<tr><th onclick="sortByName()">Name</th><th onclick="sortByAge()">Age</th></tr>`
    people.forEach(person => htmlString += `<tr><td>${person.name}</td><td>${person.age}</td><tr>`)
    htmlString += `</table>`


    document.getElementById('root').innerHTML = htmlString
}

function sortByName()
{
    people.sort((a, b) => a.name < b.name ? 1 : -1)
    personTable()
}

function sortByAge()
{
    people.sort((a, b) => a.age < b.age ? -1 : 1)
    personTable()
}
      