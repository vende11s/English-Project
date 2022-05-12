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
			var buff = "";
			for(var j = i+3; j < a.length; j++){
				if(a[j+1]=='\n')break;
				buff+=a[j];
			}
			listOfUnits.push(buff);
		}
	}

	output+="<div id=\"unit-group\">\n";
	for(let i = 0; i < listOfUnits.length; i++){
		output+="<a class=\"unit\" href=\"app.html?unit=" + encodeURIComponent(listOfUnits[i])+"\">";
		output+=listOfUnits[i];
		output+="</a>";
		if(i%4==3){
		output+="</div>\n"
		output+="<div id=\"unit-group\">\n";
		}
	}

	document.getElementById("Unit-choose").innerHTML = output;
  };

ParseAndShow();


