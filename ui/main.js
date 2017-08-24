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
   
var nameInput=document.getElementById("name").value+='';
var submit=document.getElementById('submitb');
submit.onclick=function()
{
  var names=['name1','name2','name3'];
  var list=" ";
  for(var i=1;i<=names.length;i++)
  {
      list='<li>'+names[i]+'</li>';
      
  }
  var ul=document.getElementById('namelist').innerHTML=list;
  
};