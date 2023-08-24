const box = document.getElementById('box')
const fetchData = [...JSON.parse(localStorage.getItem('products'))]
console.log(fetchData);


const product = document.getElementById('name')
const quantity = document.getElementById('quantity')
const price = document.getElementById('price')
const radios = document.getElementsByName('radio')
const form = document.getElementById('form')

let table = `<table><tr><th>S.no</th>product Name<th></th><th>qut</th><th>price</th></tr>`

for (let i = 0; i < fetchData.length; i++) {
    table += '<tr>'
    // table += `<td>${fetchData[i].id}</td>`
    table += `<td>${fetchData[i].product}</td>`
    table += `<td>${fetchData[i].quantity}</td>`
    table += `<td>${fetchData[i].price}</td>`
    table += `<td>${fetchData[i].price}</td>`
    table += `<td><button onclick="deleteBtn(this)">Delete</button></td>`
    table += `<td><button onclick="editBtn(this)">edit</button></td>`
    table += `</tr>`

}

table += '</table>'

box.innerHTML = table

function deleteBtn(element) {
    let getParent = element.parentElement.parentElement
    let getData = getParent.children[0];
    console.log(getData);
    getParent.remove()

    fetchData.forEach((item) => {
        if (item.product === getData.innerText) {
            fetchData.splice(fetchData.indexOf(item), 1)
        }
    })
    localStorage.setItem('products', JSON.stringify(fetchData))

    console.log(getParent);
}

function sortItem() {
    let fetchData = [...JSON.parse(localStorage.getItem('products'))]
    // console.log(fetchData);
    let res = fetchData.sort((a, b) => {
        let preVAl = parseFloat(a.price)
        let cureentVal = parseFloat(b.price)
        if (preVAl > cureentVal) return -1
        if (preVAl < cureentVal) return 1
        return 0
    })

    // let res = fetchData.sort((a, b) => (a.price > b.price) ? 1 : (a.price < b.price) ? -1 : 0)
    console.log(res);
    localStorage.setItem('products', JSON.stringify(fetchData))
    // console.log(fetchData);

}



// edit
function editBtn(element) {
    let getParent = element.parentElement.parentElement
    let getData = getParent.children[0];
    console.log(getData);
    // getParent.remove()
    form.style.display = 'block'

    fetchData.forEach((item) => {
        if (item.product === getData.innerText) {
            product.value = item.product
            quantity.value = item.quantity
            price.value = item.price
        }
    })
    // localStorage.setItem('products', JSON.stringify(fetchData))

    // console.log(getParent);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchData.forEach((item) => {
        // if (item) {
        //     product.value = item.product
        //     quantity.value = item.quantity
        //     price.value = item.price
        // }
        console.log(item);
    })
    // console.log(fetchData);
})

