function create(){
	var li= document.createElement("li");
	var input=document.getElementById("input").value;
	var text=document.createTextNode(input);
  li.appendChild(text);

  if(input===""){
    alert("please! write something")
  }else
{
  document.getElementById("the-ul").appendChild(li);

  var v = document.createElement("BUTTON");
  var t = document.createTextNode("Delete");
  v.appendChild(t);
  v.style.background="#7EBACA" ;

    v.style.padding="15px";
    v.style.borderRadius="5px";
    v.style.padding="15px";
    v.style.margin="0 10px"
    v.style.borderRadius="5px";
    v.style.marginLeft="70px";

  li.appendChild(v);
  v.setAttribute("class", "delete")
  v.addEventListener('click',()=>{
   v.parentElement.remove()
   })
   li.appendChild(v)

  var x = document.createElement("BUTTON");
  var p = document.createTextNode("Cheked");
  x.appendChild(p);
    x.style.background="#445626";

    x.style.padding="15px";
    x.style.borderRadius="5px";
    x.style.padding="15px";
    x.style.margin="0 10px"
    x.style.borderRadius="5px";
    x.setAttribute("class", "barre")
  x.addEventListener('click',()=>{
   li.style.textDecoration="line-through"
   })
  li.appendChild(x);


}

document.getElementById("input").value="";


   
}



