const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const unit = urlParams.get('unit');

document.getElementById("greetings").innerHTML="Great you completed "+unit;