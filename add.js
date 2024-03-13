const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const phoneInput = document.querySelector('.phone')
const ernolInput = document.querySelector('.ernol')
const dateInput = document.querySelector('.date')
const addbtn2 = document.querySelector('.btn2')

addbtn2.addEventListener('click', () => {
   createData()
})
function createData(){
    let newObj = {
        name:nameInput.value,
        email:emailInput.value,
        phone:phoneInput.value,
        ernol:ernolInput.value,
        date:dateInput.value,

    }}