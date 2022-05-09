const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const unit = urlParams.get('unit');
document.getElementById("caption").innerHTML = unit;

/*document.getElementById("button1").onclick = function(){
    var x = document.getElementById("input1").value;
    console.log(x);
}
*/

const database = fetch("https://raw.githubusercontent.com/vende11s/English-Project/main/database.txt")
  .then((response) => response.text())
  .then((data) => {
    return data;
  });

  const gowno = async () => {
    var a = await database;
    let start_pos = a.search(unit);
    while(a[start_pos]!='\n'){
        start_pos++;
    }
    start_pos++;

    a=a.substring(start_pos,a.length);
    let end_pos = a.search("$$$");
    console.log(a);
    const map = new Map();

    var pol = "", eng = "";
    for(let i = start_pos; i < end_pos; i++){
       var swap = false;
        if(a[i]==' ')swap=true;

        if(a[i]=='\n'){
            map.set(pol,eng);
            pol.trim();
            eng.trim();
        }

       if(!swap)pol+=a[i];
       else eng+=a[i];
    }

    console.log(map);
    


  }

  gowno();
