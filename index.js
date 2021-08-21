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
            if(topo > 200){
                $('.imagem').fadeOut('5000');
            }
            else{
                $('.imagem').fadeIn('5000');
            }
        })
    })

    /*****************************************************************************************/

    // função de click, após o carregamento de todo o documento
    
    $(document).ready(function(){
        $('.ex1').click(function(){
            $(this).css("color","red")
        })
    })

    // outra forma de fazer sem repetir o document

    /*
        $(function(){
            $('.ex1').click(function(){
                $(this).css("background","#c5c5c5")
            })
        })
    */

    /*****************************************************************************************/

    // função de click com variável / mudar texto

    $(function(){
        var ex2 = $('.ex2');
        ex2.click(function(){
            $(this).text("ok, realmente mudou")
        })
    })

    /*****************************************************************************************/

    // função de double click, clique duplo do mouse;
    // dblclick();

    $(function(){
        $('.ex3').dblclick(function(){
            $(this).text("MUDOU DEPOIS DE 2 CLIQUES")
        })
    });

    // pode-se usar variáveis também

    /* 
        $(function(){
            var ex3 = $('.ex3');
            ex3.dblclick(function(){
                $(this).text("texto aleatorio")
            })
        })
    */

        // utilizado quando há uso recorrente de uma mesma chamada para uma mesma classe ou id


        /*****************************************************************************************/

        // função de foco nos inputs 
        // focusin focusout

        $(function(){
            $('.inputao').focusin(function(){
                $('.ex1').text("mudou pq dei foco")
            })
        })

        // ao mesmo tempo que há uma função para acontecer ao tirar o foco

        $(function(){
            $('.inputao').focusout(function(){
                $('.ex1').text("tirei o foco ai mudou dnv")
            })
        })

        /*****************************************************************************************/

        // MESMA LOGICA PARA OS SEGUINTES EFEITOS DE MOUSE:
        // .hover(function(){})
        // .mousedown(function(){})         // para quando o mouse está pressionado
        // .mouseup(function(){})           // para quando o mouse é solto

        /*****************************************************************************************/

        // funçao para contar o numero de clicks com mouseenter
        
        $(function(){
            var numeroDeCliques = 0
            $('.botaofeliz').mouseenter(function(){
                numeroDeCliques +=1
                $('.ex4').text("aumentou um, estamos em: "+numeroDeCliques);
            })
        })

        // que esteja claro que existe uma funçao chamada mouseout que fará a mesma execução, no entanto
        // apenas quando o mouse sair do elemento

        /*****************************************************************************************/

        // debate sobre MOUSEOVER
        // .mouseover(function(){})
        // funciona como o mouseenter, porém ele CONTA nos filhos do elemento que foi especificado na funçao
        // no caso acima, se houvesse um <span></span> dentro do .ex4, pararia de contar e ''quebraria'' a funçao
        // no mouseover não, porém, conta +1 cada vez que voce passa dentro do span..
        // outra função de igual uso é o MOUSELEAVE
        //.mouseleave(function(){});
        // executa da mesma forma porém ao retirar o mouse, cada vez que retirar é +1

        /*****************************************************************************************/

        // .mousemove(function(){});
        // serve para saber, em pixels, aonde o mouse está na tela

        $(function(){
            $('.ex5').mousemove(function(move){
                var mouseX = move.pageX;
                var mouseY = move.pageY;
                $(this).text("mudou sla")
                $('.ex4').text("movimento horizontal: "+mouseX+" - movimento vertical: "+mouseY);
            })
        })

        /*****************************************************************************************/

        // placeholder com jquery para caso haja necessidade

        $(function(){
            $('.input1').each(function(){
                var input1 = $(this).attr('title')
                var input = $(this)

                input.val(input1).css('color','#ccc')
                .focusin(function(){
                    input.css('color','black');
                    if(input.val() === input1){
                        input.val('')
                    }
                })
                .focusout(function(){
                    if(input.val == ''){
                        input.css('color','#ccc');
                        input.val(input1);
                    }
                })
            })
        })

        // tudo isso pode ser substituido com a função placeholder do HTML5, era usado antigamente devido
        // a carencia de atualizações dos navegadores.

        /*****************************************************************************************/

        $(function(){
            let exemplo = $('.ev1');
            $('.a1').focus(function(){
                exemplo.text($(this).attr('placeholder'))
            })
            
        })



        // função para trocar um título ou texto de acordo com o que está sendo pedido no input

        // a variável em volta de .ev1 não é necessária, podendo ser usada a sintaxe ('.ev1').text()...etc

        /*****************************************************************************************/

        // função hide para esconder objetos ou textos;
        // $('classe').hide(tempo em milisegundos);
        // ex: usado ao clicar

      $(function(){
          var a = $('.a')
          $('.b').click(function(){
              a.hide(2000)
          })
      })

      // NÃO ESQUECER DA $(FUNCTION(){}) ANTES
      // o tempo, ao invés de milisegundos pode ser dado em noções:
      // como ('fast'), ou ('slow')

      /*****************************************************************************************/

      // função show
      // inverso do hide, para mostrar algo ao clicar

      $(function(){
          var a = $('.a')
          $('.b').click(function(){
              a.hide(1000)
          })

      })

      $(function(){
          var a = $('.a')
        $('.b').click(function(){
            a.show(1000)
        })
      })

      // ou na mesma função

      $(function(){
          var a = $('.a')
          $('.b').click(function(){
              a.hide(1200)
          })

          $('.b').click(function(){
              a.show(800)
          })
      })

      /*****************************************************************************************/

      // função toggle
      // vai fazer algo que está em hide aparecer e algo que está em show sumir
      // usado muito para a criação de menus onde ao clicar ele some ou aparece

      $(function(){
          var a = $('.a')
          $('.b').click(function(){
              a.toggle('slow')
          })
      })

      /*****************************************************************************************/

      // efeito de fadeOut e fadeIn
      // desaparecer e aparecer

      $(function(){
          $('.xubs').click(function(){
            $(this).fadeOut(1000)
          })
          $('.xubs2').dblclick(function(){
              $('.xubs').fadeIn(1000)
          })
      })

      /*****************************************************************************************/