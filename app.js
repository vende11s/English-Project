const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const unit = urlParams.get('unit');
document.getElementById("caption").innerHTML = unit;
