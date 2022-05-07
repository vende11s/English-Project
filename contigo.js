fetch('database.txt')
  .then(response => response.text())
  .then(text => console.log(text))

//document.getElementById("Unit-choose").innerHTML = fileContent;