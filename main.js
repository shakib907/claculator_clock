function clu(x) {
      document.getElementById('result').value+=x;
   }
   function clen(){
   	document.getElementById('result').value="";
   }


   function equal(){
   	var res=document.getElementById('result').value;
   	document.getElementById('result').value=eval(res);
   }

   function cloc(){
   	var tim = new Date();
   var h=tim.getHours();
   var m=tim.getMinutes();
   var s=tim.getSeconds();
  
   var ampm="AM";
   if(h>12){
      ampm="PM";
   }
   if (h==12) {
      ampm="PM";
   }
 
   
   if (h<10) {
     h="0" + h;
   }
   if (m<10) {
      m="0" + m;
    }
    if (s<10) {
      s="0" + s;
    }
    if (h>12) {
       h=h -"12";
       
       
    }
    if (h==0) {
       h=12;
    }

   
    

   document.getElementById('hours').innerHTML= h;
   document.getElementById('minutes').innerHTML= m;
   document.getElementById('second').innerHTML= s ;
   document.getElementById('ampm').innerHTML="" + ampm;
  
   
}
   setInterval(cloc,0);