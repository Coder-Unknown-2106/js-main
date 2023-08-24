const product = document.getElementById('name')
const quantity = document.getElementById('quantity')
const price = document.getElementById('price')
const radios = document.getElementsByName('radio')



const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // radio button value add
    let radio = Array.from(radios).find((item) => item.checked)


    localStorage.setItem('products', JSON.stringify([...JSON.parse(localStorage.getItem('products')) || [],
    {
        product: product.value,
        quantity: quantity.value,
        price: price.value,
        Gender: radio.value
    }
    ]))
})