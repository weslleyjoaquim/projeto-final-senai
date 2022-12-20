//Função ativa o menu ao clicar no modo mobile

let menu = document.querySelector('.menu');
let navMenu = document.querySelector('.nav-menu')

menu.addEventListener('click', function ativar(){
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})

//Seção de pesquisa dos cursos
function procurar (){
    let item = document.getElementById('search-item').value.toUpperCase();
    let listaProdutos = document.getElementById('lista-produtos')
    let produto = document.querySelectorAll('.produtos')
    let nomes = document.getElementsByTagName('h2')


    for (let i =0; i <nomes.length; i++){

        let match = produto[i].getElementsByTagName('h2')[0];

        if(match){
            let texto = match.textContent || match.innerHTML
            if(texto.toUpperCase().indexOf(item)> -1){
                produto[i].style.display = "";
            }else{
                produto[i].style.display = "none";
            }
        }
        
    }
}
