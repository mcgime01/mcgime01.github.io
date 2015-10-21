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
  select.vlaue = className
}

checkFunc = function () {
  if (this.checked){
  this.parentNode.classList.add("done")
  } else {
    this.[arentNode.clasList.remove("done")
  }


