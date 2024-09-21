function addInput() {
    const ul = document.getElementById('inputs')
  
    const newLi = document.createElement('li') // Estamos informando a tag que irá ser craiada "li"
    newLi.className = 'list-item'
    newLi.innerText = 'Novo input: '
  
    const newInput = document.createElement('input')// criado um input para ser associado ao "li" criado anteriormente
    newInput.type = 'text'
    newInput.name = 'input'
  
    newLi.appendChild(newInput)
    ul.appendChild(newLi)


  }