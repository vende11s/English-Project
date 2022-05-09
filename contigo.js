/*async function downloadFile(file) {
	let response = await fetch(file);
		
	if(response.status != 200) {
		throw new Error("Server Error");
	}
		
	// read response stream as text
	let text_data = await response.text();

	return text_data;
}
let shit = downloadFile("https://raw.githubusercontent.com/vende11s/English-Project/main/database.txt");
let shit2 = shit.text_data;
document.getElementById("Unit-choose").innerHTML = shit2;
console.log(shit);
*/

const database = fetch("https://raw.githubusercontent.com/vende11s/English-Project/main/database.txt")
  .then((response) => response.text())
  .then((data) => {
    return data;
  });


  const ParseAndShow = async () => {
	var a = await database;
	var output = "";
	var listOfUnits = [];


	for(var i = 0; i < a.length-3; i++){
		if(a[i]=="$" && a[i+1]=="$" && a[i+2]=="$"){

		}
	}
	document.getElementById("Unit-choose").innerHTML = a;
  };

ParseAndShow();


