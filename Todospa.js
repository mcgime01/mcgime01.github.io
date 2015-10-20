addnew = function () {
  var myList;
  myList = document.querySelector('#myList');
  myInput= document.querySelector('#myInput');
  li = document.createElement("li")
  textNode = document.createTextNode(myInput.value)
  input = doucument.createElement("input")
  input.type = "checkbox"
  textNode.appendChild(li)
  input.appendChild(li)
  
  textNode.appendChild(imput)
}

