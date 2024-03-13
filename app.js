const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const phoneInput = document.querySelector('.phone')
const ernolInput = document.querySelector('.ernol')
const dateInput = document.querySelector('.date')
const addbtn2 = document.querySelector('.btn2')

readData()


function createData(){
    let newObj = {
        name:nameInput.value,
        email:emailInput.value,
        phone:phoneInput.value,
        ernol:ernolInput.value,
        date:dateInput.value,

    }
    let storage = JSON.parse(localStorage.getItem('card'))|| []
    storage.push(newObj)
    localStorage.setItem('card' , JSON.stringify(storage))
   
    readData()
}
function readData (){
    let storage = JSON.parse(localStorage.getItem('card'))|| []
storage.forEach((el) => {
    const name = document.createElement('h2')
    const div = document.createElement('div')
    const email = document.createElement('h2')
    const phone = document.createElement('h2')  
      const ernol  = document.createElement('h2')
      const date = document.createElement('h2')

name.innerText = el.name,
email.innerText = el.email,
phone.innerText = el.phone,
ernol.innerText = el.ernol,
date.innerText = el.date,




      block.append(div)
      div.append(name)
      div.append(email) 
      div.append(phone) 
      div.append(ernol)
       div.append(date)


})
    
    



}