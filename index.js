const recuperarButton = document.querySelector(".btn");
const recuperarDiv = document.querySelector('.app');

recuperarButton.addEventListener("click", function(){
insertarTextoEnDiv();
});

function insertarTextoEnDiv(){
    recuperarDiv.textContent = "Mierda culo69";
}