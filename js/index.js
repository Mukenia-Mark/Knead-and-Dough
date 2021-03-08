// Cost //
var add= function(number1, number2, number3){
  return number1+ number2+ number3;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

document.getElementById('button').addEventListener("click", clickFunction);
function clickFunction(){
  if(confirm("Have you completed your order?")){
    
    var size=document.getElementById("size").value;

    var pizzaSize=parseInt(size)

    var crust=document.getElementById("crust").value;

    var pizzaCrust=parseInt(crust)

    var topping=document.getElementById("toppings").value;

    var pizzaTopping=parseInt(topping)

    var number=document.getElementById("number").value;


    var delivery=document.getElementById("delivery").value;
    var pizzaDelivery=parseInt(delivery)

    var orderAmount=add(pizzaSize, pizzaCrust, pizzaTopping)

    var orderCost=parseInt(orderAmount)
  

    var finalAmount=multiply(orderCost, number)
    
    confirm("The price of your pizza is " +(pizzaDelivery+finalAmount)+" KSH")
    }

    var deliveryLocation=document.getElementById("place").value;


    if(pizzaDelivery === 200){
    alert("Your pizza will be delivered to " +deliveryLocation+".")} else { alert("Your pizza is being prepaired.")}
    
}

function resetFields() {
  $("input.size").val("");
  $("input.crust").val("");
  $("input.toppings").val("");
  $("input.number").val("");
  $("input.delivery").val("");
}