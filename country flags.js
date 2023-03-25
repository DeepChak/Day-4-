var xhttp = new XMLHttpRequest();
let countries = []
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
    countries = JSON.parse(this.responseText);
  }
};
xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
xhttp.send();
for(i=0; i<countries.length;i++){
    console.log(countries[i]["flag"]);
}

