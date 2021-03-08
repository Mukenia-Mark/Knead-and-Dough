// Cost //

document.getElementById('button').addEventListener("click", clickFunction);
function clickFunction(){
  if(confirm("Have you completed your order?")){
    
    var size=document.getElementById("size").value;
    var crust=document.getElementById("crust").value;
    var topping=document.getElementById("toppings").value;
    var number=document.getElementById("number").type;

    confirm("You have ordered " +number+ " "+size+ ", " +topping+ " pizza with a "+crust+" crust.")
  }
}




