addnew = function () {
  var myList;
  myList = document.querySelector('#myList');
  myInput= document.querySelector('#myInput');
  li = document.createElement("li")
  input = document.createElement("input")
  input.type = "checkbox"
  textNode = document.createTextNode(myInput.value)
  myList.appendChild(li)
  li.appendChild(input)
  li.appendChild(textNode)
  
  select = document.querySelector('#priority')
  select.vlaue = className
  
}

