let form = document.getElementById('form');
let camposInput = document.querySelectorAll('.required');
let helperText = document.querySelectorAll('.helper-text')
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function setError(index){
  camposInput[index].classList.remove('success')
  camposInput[index].classList.add('error')
  helperText[index].classList.add('visible')
}

function setRemoveError(index){
  camposInput[index].classList.remove('error')
  camposInput[index].classList.add('success')
  helperText[index].classList.remove('visible')
}

function nameValidate(){
   if(camposInput[0].value.length < 3){
     setError(0)
   }
   else {
      setRemoveError(0)
   }
}

function emailValidate(){
  if(emailRegex.test(camposInput[1].value)){
    setRemoveError(1)
  }
  else {
   setError(1)
  }
}

function subjectValidate(){
  if(camposInput[2].value.length < 5){
    setError(2)
  }
  else {
     setRemoveError(2)
  }
}

function messageValidate(){
  if(camposInput[3].value.length < 10){
    setError(3)
  }
  else {
     setRemoveError(3)
  }
}

form.addEventListener('submit', event => {
  event.preventDefault()

  nameValidate()
  emailValidate()
  subjectValidate()
  messageValidate()

  camposInput = document.querySelectorAll('.error')

  if(!camposInput.length){
    alert('Dados enviados com sucesso!')
  }

})

