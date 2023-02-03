setInterval(()=>{
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let date = new Date();
  var hh=date.getHours();
  var mm=date.getMinutes();
  var ss=date.getSeconds();
  var dd=date.toLocaleDateString(undefined,options);
  if(mm<=9){
      mm='0'+mm;
  }
  if(hh<=9){
      hh='0'+hh;
  }
  if(ss<=9){
      ss='0'+ss;
  }
  document.getElementById('time').innerHTML=hh+':'+mm+':'+ss;
  document.getElementById('date').innerHTML=dd+"<br>"+"\t\t~Aman Singh";
},1000);
