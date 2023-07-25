
const data = {}
 
 const fin = new XMLHttpRequest();
 fin.open('GET', 'data.json', true);
 fin.onload = function() {
   if (this.status === 200) {
     const data = JSON.parse(this.responseText);
     console.log(data);
   }
 }
 fin.send(JSON.stringify(data));
 