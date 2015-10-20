addnew = function () {
  var myList;
  myList = document.querySelector('#myList');
  myInput= document.querySelector('#myInput');
  li = document.createElement("li")
  textNode = document.createTextNode(myInput.value)
  input = document.createElement("input")
  input.type = "checkbox"
  myList.appendChild(li)
  li.appendChild(textNode)
  li.appendChild(input)
  
}

