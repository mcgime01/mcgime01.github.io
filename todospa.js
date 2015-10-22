addnew = function () {
  var myList;
  myList = document.querySelector('#myList');
  myInput= document.querySelector('#myInput');
  li = document.createElement("li")
  input = document.createElement("input")
  input.type = "checkbox"
  input.onclick = checkFunc;
  textNode = document.createTextNode(myInput.value)
  myList.appendChild(li)
  li.appendChild(input)
  li.appendChild(textNode)
  
  select = document.querySelector('#priority')
  className = select.value
  console.log (className)
  li.className = (className)
  localSave("myList")
}

checkFunc = function () {
  if (this.checked){
  this.parentNode.classList.add("done")
  } else {
    this.parentNode.classList.remove("done")
  }
  localSave("myList")
}


