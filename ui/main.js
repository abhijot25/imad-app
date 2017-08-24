console.log('Loaded!');
   var button= document.getElementById('button');
   
   button.onclick=function()
   {
       // create request
       var reqest =new XMlHttpRequest();
       //capture the response and store in the variable 
       request.onreadystatechange=function()
       {
            
           if(request.readystate==XMLHttprequest.DONE){
           //Take some action
           if(request.status==200){
               var counter=request.responseText;
               var span=document.getElementById('count');
               span.innerHTML=counter.toString();
           }
           }
           //don't do anything
       };
       
       //make request
       request.open('GET', 'http://simarsingh187.imad.hasura.io/counter',true);
       request.send(null);
   };
   
