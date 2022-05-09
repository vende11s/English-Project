const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const unit = urlParams.get('unit');
document.getElementById("caption").innerHTML = unit;


var array = {
    polish: [],
    english: []
};
var first_size = 0;
var how_is_done = 0;
const database = fetch("https://raw.githubusercontent.com/vende11s/English-Project/main/database.txt")
  .then((response) => response.text())
  .then((data) => {
    return data;
  });
  const setup = async () => {
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
            array.polish.push(pol.replace("%"," "));
            array.english.push(eng.replace("%,"," "));
            pol = "";
            eng = "";
            continue;
        }
        if(a[i]=='\r')continue;
       if(swap)pol+=a[i];
       else eng+=a[i];
    }

    console.log(array);
  }
 

  var act = -1;
  const show_random = async () => {
    var random = Math.floor(Math.random() * array.polish.length);
    console.log("random: ",random);
    document.getElementById("word").innerHTML=array.polish[random];
    act = random;
}
async function js_is_shit(){
    await setup();
    first_size = array.polish.length;
    document.getElementById("done").innerHTML=how_is_done + "/" + first_size;
    show_random();
}
js_is_shit();

function done(){
    window.location.href = "recieve.html?unit="+encodeURIComponent(unit);
}

const correct = async () =>{
    document.getElementById("correct").innerHTML = "correct!";
    setTimeout(function (){
        document.getElementById("correct").innerHTML = "";
    },1000);
    
    array.polish.splice(act, 1);
    array.english.splice(act, 1);

}

function fail(){
    document.getElementById("fail").innerHTML = "fail!";
    setTimeout(function (){
        document.getElementById("fail").innerHTML = "the right answer was: " + array.english[act];
    },1000);
    setTimeout(function (){
        document.getElementById("fail").innerHTML="";
    },3000);
}

var input = document.getElementById("input1");
input.addEventListener("keydown", function (e) {
 if (e.key === "Enter") {  
   event(e);
 }
});

var fails = 0;
function event(){
    var x = document.getElementById("input1").value;
    if(x.toLowerCase()==array.english[act].toLowerCase()){
        console.log("correct");
        correct();
        setTimeout(function (){
           show_random();
            var jd = document.getElementById("input1");
            jd.value = "";
            how_is_done++;
            document.getElementById("done").innerHTML=how_is_done + "/" + first_size;

        },1000);
    
    }else {fail();
    setTimeout(function (){
        show_random();
        var jd = document.getElementById("input1");
            jd.value = "";
            fails++;
            document.getElementById("fails").innerHTML="fails: "+fails;
     },3000);}

    if(array.polish.length==0){
        done();
        return;
    }


}
