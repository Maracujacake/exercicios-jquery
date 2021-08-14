// Teste principal do uso de JQUERY;
// inclusão do JQUERY via cdn do google : "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
// acima da inclusão do arquivo JavaScript;

// primeiros testes com Jquery
// uso do $


/*
$(function(){
    //qualquer função
    //será carregada antes dos elementos da página
})

$(window).load(function(){
    //qualquer função
    //será carregada APÓS os elementos da página carregarem por completo
})

*/

/*****************************************************************************************/


// funções do Jquery.
// sempre começar com $() e dentro do parenteses colocar entre aspas simples o que quer modificar
// $('p').efeitoJquery


// $('h1').css("color","red");
// $('p').css("weight","300");
// $('h1').hide(); ---> faz o elemento começar escondido
// $('h2').delay(2000) ----> milisegundos


// testando:
    $(document).ready(function(){
        $('h1').css("color","red");
        $('p').css("color","bold");
        $('h1').hide(3000);
        $('h2').delay(1000);
    })

