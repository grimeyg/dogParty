var nameDog = document.querySelector("#nameDoge");
var typeDog = document.querySelector(".nameDog");
var nameDisplay = document.querySelector(".change");

nameDog.addEventListener("click", function(){
  if (typeDog.value === ""){
    null;
  }
  else {nameDisplay.innerText = typeDog.value;
    return typeDog.value = "";
  }
});
