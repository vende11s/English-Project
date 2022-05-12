const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const unit = urlParams.get('unit');

const database = fetch("https://raw.githubusercontent.com/vende11s/English-Project/main/database.txt")
  .then((response) => response.text())
  .then((data) => {
    return data;
  });

  var array = {
    polish: [],
    english: []
};

  const Parse = async () => {
    var a = await database;
    let start_pos = a.indexOf(unit);
    while(a[start_pos]!='\n'){
        start_pos++;
    }
    start_pos++;

    a=a.substring(start_pos,a.length);
    let end_pos = a.indexOf("$$$");
    if(end_pos == -1)end_pos=a.length;


    var pol = "";
    var eng = "";
    var swap = true;
    for(let i = 0; i < end_pos; i++){
        if(a[i]==' ') {swap=false; continue;}

        if(a[i]=='\n'){
            swap = true;
            pol = pol.charAt(0).toUpperCase() + pol.slice(1);
            eng = eng.charAt(0).toUpperCase() + eng.slice(1);
            array.polish.push(pol.replace(/%/g," "));
            array.english.push(eng.replace(/%/g," "));
            pol = "";
            eng = "";
            continue;
        }
        if(a[i]=='\r')continue;
       if(swap)eng+=a[i];
       else pol+=a[i];
    }

    console.log(array);


  }

  async function create_list(){
      var out = "";
    for(let i = 0; i < array.polish.length; i++){
        out +="<div class=\"element\">";
        out += array.english[i];
        out += " - ";
        out += array.polish[i];
        out += "</div>\n";

    }
    return out;
  }

async function show(){
    document.getElementById("word2").innerHTML="<a href=\"app.html?unit=" + unit +"\">Back to the quiz</a>"
    document.getElementById("caption1").innerHTML="Word list of " + unit;
    await Parse();

    var out = await create_list();
    document.getElementById("list").innerHTML=out;

}
show();
