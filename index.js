document.querySelector("button").addEventListener("click",function(){
  var message=document.querySelector("#message").value;
  document.querySelector("p").textContent = message;
});
