
   
var nameInput=document.getElementById("name").value+='';
var submit=document.getElementById('submitb');
submit.onclick=function()
{
  var names=['name1','name2','name3'];
  var list=" ";
  for(var i=1;i<=names.length;i++)
  {
      list+='<li>'+names[i]+'</li>';
      
  }
  var ul=document.getElementById('namelist').innerHTML=list;
  
};