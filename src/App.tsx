import React, { useState } from "react";
import "./App.css";
import Chessboard from "chessboardjsx";
import { ChessInstance, ShortMove } from "chess.js";

const Chess = require("chess.js");

const App: React.FC = () => {
  const [chess] = useState<ChessInstance>(
    new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  );

  const [fen, setFen] = useState(chess.fen());

  const handleMove = (move: ShortMove) => {
    if (chess.move(move)) {

      if(chess.game_over()) {
        chess.reset();
        setFen(chess.fen());
      } else {
        setTimeout(() => {
          const moves = chess.moves();
  
          if (moves.length > 0) {
            const computerMove = moves[Math.floor(Math.random() * moves.length)];
            chess.move(computerMove);
            setFen(chess.fen());
          }
        }, 150);
      }

      setFen(chess.fen());
    }
  };

  const handleReset = () => {
    chess.reset();
    setFen(chess.fen());
  }

  return (
    <div className="flex">
      <div className="flex-center-objetivo">
        <h2>Objetivo do xadrez</h2>
        <p>
          O objetivo do jogo de xadrez é dar xeque-mate ao Rei adversário, ou seja, colocando-o sob ameaça de captura (xeque), sem que ele tenha como escapar desse xeque.
        </p>
      </div>
      <div className="flex-center-chess">
        <h1>Chess Game</h1>
        <Chessboard
          width={400}
          position={fen}
          onDrop={(move) =>
            handleMove({
              from: move.sourceSquare,
              to: move.targetSquare,
              promotion: "q",
            })
          }
        />
        <button className="button-reset" onClick={handleReset}>Reiniciar Jogo</button>
      </div>
      <div className="flex-center-pecas">
        <h2>Peças do xadrez</h2>
        <span>
          <p>
            Torre -
              A torre se movimenta em direções ortogonais, isto é, pelas linhas (horizontais) e colunas (verticais), não podendo se mover pelas diagonais. Ela pode mover quantas casas desejar se estiverem desocupadas pelas colunas e linhas, porém, apenas em um sentido em cada jogada.
          </p>
          <p>
            Bispo -
              O bispo se movimenta nas direções diagonais, não podendo se mover pelas ortogonais como as torres. Ele pode mover quantas casas quiser pelas diagonais, porém, apenas em um sentido em cada jogada e desde que as mesmas estejam desobstruídas.
          </p>
          <p>          
            Dama (Rainha) -
              A Dama (também chamada de Rainha) pode movimentar-se quantas casas queira, tanto na diagonal, como na vertical ou na horizontal, porém, apenas em um sentido em cada jogada.
          </p>
          <p>     
            Rei -
              Pode mover-se em todas as direções, mas limitado somente à sua casa vizinha. O Rei pode fazer um movimento especial chamado roque com a torre desde que:

              - nenhuma das duas peças tenha sido ainda movimentada durante a partida;
              - não haja nenhuma peça amiga entre o rei e a torre, e
              - nenhuma das casas pelas quais o rei irá passar ou ficar esteja sob ataque de peça inimiga.

              Somente assim podendo ser feito o roque, que pode ser o roque pequeno ou o grande.

              O rei pode capturar, também, qualquer peça adversária, com exceção do rei adversário. Um rei deverá manter distância mínima de duas casas do outro rei, se não será considerado um lance irregular.
          </p>
          <p>            
            Cavalo -
              O movimento do cavalo corresponde ao movimento em "L". Círculo este que corresponde ao movimento octogonal permitido pelo quadriculado do tabuleiro. Ele pode andar em "forma de L", ou seja, anda duas casas em linha reta e depois uma casa para o lado. Ao colocar uma peça em cada posição disponível do movimento do Cavalo, você verá que elas formam um círculo no tabuleiro. O Cavalo goza de uma liberdade especial em seu movimento, podendo pular qualquer peça, inclusive as do adversário. Captura as peças adversárias que estejam em sua casa de chegada, mas não pode ir para uma casa ocupada por uma peça amiga.
          </p>
          <p>            
            Peão -
              O peão é a única peça do xadrez que nunca retrocede no tabuleiro. Portanto, quando se encontra na segunda fila [a2-h2 das brancas, a7-h7 das pretas] sempre estará disponível para fazer o seu primeiro movimento. Nesse caso ele pode "optar" entre "andar" uma ou duas casas sempre na mesma coluna. Passando da segunda fila, não mais pode se deslocar duas casas, mesmo que não o tenha feito em seu primeiro movimento. Ao contrário das demais peças do xadrez, quando vai capturar uma peça, seu movimento é diferente: ele desloca-se na diagonal, andando apenas uma casa, sempre para frente. O peão não pode capturar para trás, e não captura peças que obstruam o seu caminho. Assim, qualquer peça (inclusive um outro peão), pode parar a marcha de um peão.
              Uma vez que um peão não anda para trás, caso ele alcance a última fileira do tabuleiro (fileira 8 para as brancas ou 1 para as pretas) o jogador deve promover seu peão, transformando-o em qualquer outra peça menos o rei e peão (dama, torre, bispo ou cavalo). O peão pode se transformar em qualquer das quatro peças, mesmo que haja outras em jogo. É possível, então, possuir duas ou mais damas, três ou mais torres, ou situações semelhantes.
          </p>
        </span>
      </div>
    </div>
  );
};

export default App;