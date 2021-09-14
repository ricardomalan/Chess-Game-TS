(this["webpackJsonpchess-game"]=this["webpackJsonpchess-game"]||[]).push([[0],{11:function(e,a,o){},12:function(e,a,o){},17:function(e,a,o){"use strict";o.r(a);var s=o(0),r=o(1),n=o.n(r),t=o(4),i=o.n(t),d=(o(11),o(3)),m=(o(12),o(5)),c=o.n(m),u=o(13),p=function(){var e=Object(r.useState)(new u("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")),a=Object(d.a)(e,1)[0],o=Object(r.useState)(a.fen()),n=Object(d.a)(o,2),t=n[0],i=n[1];return Object(s.jsxs)("div",{className:"flex",children:[Object(s.jsxs)("div",{className:"flex-center-objetivo",children:[Object(s.jsx)("h2",{children:"Objetivo do xadrez"}),Object(s.jsx)("p",{children:"O objetivo do jogo de xadrez \xe9 dar xeque-mate ao Rei advers\xe1rio, ou seja, colocando-o sob amea\xe7a de captura (xeque), sem que ele tenha como escapar desse xeque."})]}),Object(s.jsxs)("div",{className:"flex-center-chess",children:[Object(s.jsx)("h1",{children:"Chess Game"}),Object(s.jsx)(c.a,{width:400,position:t,onDrop:function(e){return function(e){a.move(e)&&(a.game_over()?(a.reset(),i(a.fen())):setTimeout((function(){var e=a.moves();if(e.length>0){var o=e[Math.floor(Math.random()*e.length)];a.move(o),i(a.fen())}}),150),i(a.fen()))}({from:e.sourceSquare,to:e.targetSquare,promotion:"q"})}}),Object(s.jsx)("button",{className:"button-reset",onClick:function(){a.reset(),i(a.fen())},children:"Reiniciar Jogo"})]}),Object(s.jsxs)("div",{className:"flex-center-pecas",children:[Object(s.jsx)("h2",{children:"Pe\xe7as do xadrez"}),Object(s.jsxs)("span",{children:[Object(s.jsx)("p",{children:"Torre - A torre se movimenta em dire\xe7\xf5es ortogonais, isto \xe9, pelas linhas (horizontais) e colunas (verticais), n\xe3o podendo se mover pelas diagonais. Ela pode mover quantas casas desejar se estiverem desocupadas pelas colunas e linhas, por\xe9m, apenas em um sentido em cada jogada."}),Object(s.jsx)("p",{children:"Bispo - O bispo se movimenta nas dire\xe7\xf5es diagonais, n\xe3o podendo se mover pelas ortogonais como as torres. Ele pode mover quantas casas quiser pelas diagonais, por\xe9m, apenas em um sentido em cada jogada e desde que as mesmas estejam desobstru\xeddas."}),Object(s.jsx)("p",{children:"Dama (Rainha) - A Dama (tamb\xe9m chamada de Rainha) pode movimentar-se quantas casas queira, tanto na diagonal, como na vertical ou na horizontal, por\xe9m, apenas em um sentido em cada jogada."}),Object(s.jsx)("p",{children:"Rei - Pode mover-se em todas as dire\xe7\xf5es, mas limitado somente \xe0 sua casa vizinha. O Rei pode fazer um movimento especial chamado roque com a torre desde que: - nenhuma das duas pe\xe7as tenha sido ainda movimentada durante a partida; - n\xe3o haja nenhuma pe\xe7a amiga entre o rei e a torre, e - nenhuma das casas pelas quais o rei ir\xe1 passar ou ficar esteja sob ataque de pe\xe7a inimiga. Somente assim podendo ser feito o roque, que pode ser o roque pequeno ou o grande. O rei pode capturar, tamb\xe9m, qualquer pe\xe7a advers\xe1ria, com exce\xe7\xe3o do rei advers\xe1rio. Um rei dever\xe1 manter dist\xe2ncia m\xednima de duas casas do outro rei, se n\xe3o ser\xe1 considerado um lance irregular."}),Object(s.jsx)("p",{children:'Cavalo - O movimento do cavalo corresponde ao movimento em "L". C\xedrculo este que corresponde ao movimento octogonal permitido pelo quadriculado do tabuleiro. Ele pode andar em "forma de L", ou seja, anda duas casas em linha reta e depois uma casa para o lado. Ao colocar uma pe\xe7a em cada posi\xe7\xe3o dispon\xedvel do movimento do Cavalo, voc\xea ver\xe1 que elas formam um c\xedrculo no tabuleiro. O Cavalo goza de uma liberdade especial em seu movimento, podendo pular qualquer pe\xe7a, inclusive as do advers\xe1rio. Captura as pe\xe7as advers\xe1rias que estejam em sua casa de chegada, mas n\xe3o pode ir para uma casa ocupada por uma pe\xe7a amiga.'}),Object(s.jsx)("p",{children:'Pe\xe3o - O pe\xe3o \xe9 a \xfanica pe\xe7a do xadrez que nunca retrocede no tabuleiro. Portanto, quando se encontra na segunda fila [a2-h2 das brancas, a7-h7 das pretas] sempre estar\xe1 dispon\xedvel para fazer o seu primeiro movimento. Nesse caso ele pode "optar" entre "andar" uma ou duas casas sempre na mesma coluna. Passando da segunda fila, n\xe3o mais pode se deslocar duas casas, mesmo que n\xe3o o tenha feito em seu primeiro movimento. Ao contr\xe1rio das demais pe\xe7as do xadrez, quando vai capturar uma pe\xe7a, seu movimento \xe9 diferente: ele desloca-se na diagonal, andando apenas uma casa, sempre para frente. O pe\xe3o n\xe3o pode capturar para tr\xe1s, e n\xe3o captura pe\xe7as que obstruam o seu caminho. Assim, qualquer pe\xe7a (inclusive um outro pe\xe3o), pode parar a marcha de um pe\xe3o. Uma vez que um pe\xe3o n\xe3o anda para tr\xe1s, caso ele alcance a \xfaltima fileira do tabuleiro (fileira 8 para as brancas ou 1 para as pretas) o jogador deve promover seu pe\xe3o, transformando-o em qualquer outra pe\xe7a menos o rei e pe\xe3o (dama, torre, bispo ou cavalo). O pe\xe3o pode se transformar em qualquer das quatro pe\xe7as, mesmo que haja outras em jogo. \xc9 poss\xedvel, ent\xe3o, possuir duas ou mais damas, tr\xeas ou mais torres, ou situa\xe7\xf5es semelhantes.'})]})]})]})},l=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,18)).then((function(a){var o=a.getCLS,s=a.getFID,r=a.getFCP,n=a.getLCP,t=a.getTTFB;o(e),s(e),r(e),n(e),t(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),l()}},[[17,1,2]]]);
//# sourceMappingURL=main.5cd3fe99.chunk.js.map