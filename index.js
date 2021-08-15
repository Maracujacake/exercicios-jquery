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

    /*****************************************************************************************/

// testando:
    $(document).ready(function(){
        $('h1').css("color","red");
        $('h1').hide(3000);
        $('h2').delay(1000);
        $('h2').hide();
        $('h2').fadeIn("slow");
    })

    /*****************************************************************************************/

    // $('elemento').fadeIn("tempo"); --> aparecimento do texto
    // $('elemento').text("texto a ser mostrado a partir de agora"); --> muda o texto do elemento

    /*****************************************************************************************/

    // encadeando funções do Jquery:

    // $('elemento').função().outrafunção().outrafunçaomais()
    // note que o elemento não muda

    /*****************************************************************************************/

    // testando: 
    $(document).ready(function(){
        $('p').css("color","red").text("abluababa").delay(2000);
    })

    /*****************************************************************************************/

    // encadeamento em bloco:

     
            $(document).ready(function(){
                $('p').css("color","red")
                .text("abluababa")
                .delay(2000);
            })
    
// cada função em uma linha;
// facilita a análise;                


    /*****************************************************************************************/

    // função de click Jquery;
    // ação muito poderosa que realiza uma função ao clique;

    $(document).ready(function(){
        $('h2').click(function(){
            $('body').css("background","blue");
        })
    })

    // função que muda a cor do fundo ao clicar no h2

    /*****************************************************************************************/

    // mais de um atributo css dentro da ação .css();
    // usa=se chaves e a sintaxe do proprio css .css({color:'cor', display:'flex', font-size:'25px'})
    
    $(document).ready(function(){
        $('h1').css({color:'purple', display:'block', 'font-size':'55px'})
    })

    /*****************************************************************************************/

    // para chamar ID ou CLASSE ao invés da própria tag para não alterar todas usamos
    // para classe:
    // $(.classe).açãoJquery
    // para id:
    // $(#ID).açãoJquery
    // mesma sintaxe do css

    /*****************************************************************************************/

    // reset completo ou mudança completa das configurações do documento usando *
    // assim como no css * é usado principalmente para resetar a margin e o padding

    $(document).ready(function(){
        $('*').css("color","gold")
    })

    /*****************************************************************************************/

    // selecionando elementos filhos no jquery
    // $('.elemento ou #elemento e nomeDoFilho')
    // ex: $('.div span')

    $(document).ready(function(){
        $('.div1 h2').css({color:'purple', 'font-weight':'100'})
    })

    /*****************************************************************************************/

    // resize em imagens dependendo do tamanho da tela do navegador
    // assim como as mediaqueries fazem
    // quase o mesmo efeito de : @media and (max-width: EXEMPLOpx){}

    $(document).ready(function(){
        $('.imagem').width($(window).width()).heigth($(window).heigth());
    })

    // agora digamos que voce queira que essa função seja ativada sem precisar atualizar a pagina

    // use a função resize :
    // $(window).resize(function(){})

    $(document).ready(function(){
        $(window).resize(function(){
            $('.imagem').width($(window).width()).heigth($(window).heigth());
        })
    })

    // para ficar em ambos os casos (ao atualizar e ao redimensionar) o código precisa estar fora e dentro da função resize

    /*****************************************************************************************/

    // função fadeOut (fazer sumir)
    // exemplo usado com imagem e scroll > ao utilizar o scroll da página a imagem sumirá
/*
    $(document).ready(function(){
        $(window).scroll(function(){
            $('.imagem').fadeOut('1000')
        })
    })
*/
    /*****************************************************************************************/

    // teste para sumir a imagem a partir de certo ponto do scroll

    $(document).ready(function(){
        $(window).scroll(function(){
            var topo = $(window).scrollTop();
            if(topo > 300){
                $('.imagem').fadeOut('5000')
            }
        })
    })

    /*****************************************************************************************/