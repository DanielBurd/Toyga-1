(function addParameter(){
    let urls = document.getElementsByTagName("A");
   for(let i=0;i<urls.length;i++){
       if(urls[i].href.includes('xxx'))
       {
        document.getElementsByTagName("A")[i].href+='?test=true'
       }
   }

   let x=document.getElementsByTagName("A");
   for(let e of x){
       console.log(e.href);
   }
 
})(); 

