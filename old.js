function newGame(){
  let cases = ["", "", "", "", "", "", "", "", ""];
  let joueur = ['X', 'O']; 
  let score = [0, 0];
  let turn = 0;
  let titlePlayer = document.getElementById('joueur');
  let colorBack = document.getElementById('contenuJeu');
  let cells = document.getElementsByClassName('cell');
  let reset = document.getElementById('reset');
  let resteScore = document.getElementById('resetScore');
  let message = document.getElementById('message');
  let scorePlay1 = document.getElementById('play1');
  let scorePlay2 = document.getElementById('play2');

  titlePlayer.innerHTML = '1';
  colorBack.style.backgroundColor = 'red';
  colorBack.style.border = "outset 7px #a13b3b";

  cases[0] = document.getElementById('pion1');
  cases[1] = document.getElementById('pion2');
  cases[2] = document.getElementById('pion3');
  cases[3] = document.getElementById('pion4');
  cases[4] = document.getElementById('pion5');
  cases[5] = document.getElementById('pion6');
  cases[6] = document.getElementById('pion7');
  cases[7] = document.getElementById('pion8');
  cases[8] = document.getElementById('pion9');

  // Effet cellules j1
  function cellColorPlayer1(){
    for(let i = 0, leng = cells.length; i < leng; i++){
      cells[i].addEventListener('mouseenter', () => {
        cells[i].style.backgroundColor = '#ffdada';
      });
      cells[i].addEventListener('mouseleave', () => {
        cells[i].style.backgroundColor = 'white';
      });
      cells[i].addEventListener('click', () =>{
        cells[i].style.backgroundColor = '#ffdada';
      });
    }
  }

  // Effet cellules j2
  function cellColorPlayer2(){
    for(let i = 0, leng = cells.length; i < leng; i++){
      cells[i].addEventListener('mouseenter', () => {
        cells[i].style.backgroundColor = '#c4dfff';
      });
      cells[i].addEventListener('mouseleave', () => {
        cells[i].style.backgroundColor = 'white';
      });
      cells[i].addEventListener('click', () =>{
        cells[i].style.backgroundColor = '#c4dfff';
      });
    }
  }


  // Place les pions
  for(let i = 0, leng = cases.length; i < leng; i++){
    cases[i].addEventListener('click', () =>{

      if(cases[i].innerHTML === ""){  // Place seulement si vide
        if(turn === 0){               // Tour joueur
          cases[i].innerHTML = joueur[turn];
          titlePlayer.innerHTML = '2';
          colorBack.style.backgroundColor = "#0077ff";
          colorBack.style.border = "outset 7px #366397";
          turn = 1;
          cellColorPlayer2();

          // Process Win/Draw
          if(cases[0].innerHTML == 'X' && cases[1].innerHTML == 'X' && cases[2].innerHTML == 'X'){
            message.innerHTML = "Le joueur 1 à gagné";
            score[0] += 1;
            scorePlay1.innerHTML = score[0];
            titlePlayer.innerHTML = "1";
            turn = 3;
            colorBack.style.backgroundColor = "red";
            colorBack.style.border = "outset 7px #a13b3b";
            cellColorPlayer1();
          }else if(cases[3].innerHTML == 'X' && cases[4].innerHTML == 'X' && cases[5].innerHTML == 'X'){
            message.innerHTML = "Le joueur 1 à gagné";
            score[0] += 1;
            scorePlay1.innerHTML = score[0];
            titlePlayer.innerHTML = "1";
            turn = 3;
            colorBack.style.backgroundColor = "red";
            colorBack.style.border = "outset 7px #a13b3b";
            cellColorPlayer1();
          }else if(cases[6].innerHTML == 'X' && cases[7].innerHTML == 'X' && cases[8].innerHTML == 'X'){
            message.innerHTML = "Le joueur 1 à gagné";
            score[0] += 1;
            scorePlay1.innerHTML = score[0];
            titlePlayer.innerHTML = "1";
            turn = 3;
            colorBack.style.backgroundColor = "red";
            colorBack.style.border = "outset 7px #a13b3b";
            cellColorPlayer1();
          }else if(cases[0].innerHTML == 'X' && cases[3].innerHTML == 'X' && cases[6].innerHTML == 'X'){
            message.innerHTML = "Le joueur 1 à gagné";
            score[0] += 1;
            scorePlay1.innerHTML = score[0];
            titlePlayer.innerHTML = "1";
            turn = 3;
            colorBack.style.backgroundColor = "red";
            colorBack.style.border = "outset 7px #a13b3b";
            cellColorPlayer1();
          }else if(cases[1].innerHTML == 'X' && cases[4].innerHTML == 'X' && cases[7].innerHTML == 'X'){
            message.innerHTML = "Le joueur 1 à gagné";
            score[0] += 1;
            scorePlay1.innerHTML = score[0];
            titlePlayer.innerHTML = "1";
            turn = 3;
            colorBack.style.backgroundColor = "red";
            colorBack.style.border = "outset 7px #a13b3b";
            cellColorPlayer1();
          }else if(cases[2].innerHTML == 'X' && cases[5].innerHTML == 'X' && cases[8].innerHTML == 'X'){
            message.innerHTML = "Le joueur 1 à gagné";
            score[0] += 1;
            scorePlay1.innerHTML = score[0];
            titlePlayer.innerHTML = "1";
            turn = 3;
            colorBack.style.backgroundColor = "red";
            colorBack.style.border = "outset 7px #a13b3b";
            cellColorPlayer1();
          }else if(cases[0].innerHTML == 'X' && cases[4].innerHTML == 'X' && cases[8].innerHTML == 'X'){
            message.innerHTML = "Le joueur 1 à gagné";
            score[0] += 1;
            scorePlay1.innerHTML = score[0];
            titlePlayer.innerHTML = "1";
            turn = 3;
            colorBack.style.backgroundColor = "red";
            colorBack.style.border = "outset 7px #a13b3b";
            cellColorPlayer1();
          }else if(cases[2].innerHTML == 'X' && cases[4].innerHTML == 'X' && cases[6].innerHTML == 'X'){
            message.innerHTML = "Le joueur 1 à gagné";
            score[0] += 1;
            scorePlay1.innerHTML = score[0];
            titlePlayer.innerHTML = "1";
            turn = 3;
            colorBack.style.backgroundColor = "red";
            colorBack.style.border = "outset 7px #a13b3b";
            cellColorPlayer1();
          }else if(cases[0].innerHTML != "" && cases[1].innerHTML != "" && cases[2].innerHTML != "" && cases[3].innerHTML != "" && cases[4].innerHTML != "" && cases[5].innerHTML != "" && cases[6].innerHTML != "" && cases[7].innerHTML != "" && cases[8].innerHTML != ""){
            message.innerHTML = "Match nul";
          }
        }else if(turn === 1){ // Tour joueur
          cases[i].innerHTML = joueur[turn];
          titlePlayer.innerHTML = '1';
          colorBack.style.backgroundColor = "red";
          colorBack.style.border = "outset 7px #a13b3b";
          turn = 0;
          cellColorPlayer1();

          if(cases[0].innerHTML == 'O' && cases[1].innerHTML == 'O' && cases[2].innerHTML == 'O'){
            message.innerHTML = "Le joueur 2 à gagné";
            score[1] += 1;
            scorePlay2.innerHTML = score[1];
            titlePlayer.innerHTML = "2";
            turn = 3;
            colorBack.style.backgroundColor = "#0077ff";
            colorBack.style.border = "outset 7px #366397";
            cellColorPlayer2();
          }else if(cases[3].innerHTML == 'O' && cases[4].innerHTML == 'O' && cases[5].innerHTML == 'O'){
            message.innerHTML = "Le joueur 2 à gagné";
            score[1] += 1;
            scorePlay2.innerHTML = score[1];
            titlePlayer.innerHTML = "2";
            turn = 3;
            colorBack.style.backgroundColor = "#0077ff";
            colorBack.style.border = "outset 7px #366397";
            cellColorPlayer2();
          }else if(cases[6].innerHTML == 'O' && cases[7].innerHTML == 'O' && cases[8].innerHTML == 'O'){
            message.innerHTML = "Le joueur 2 à gagné";
            score[1] += 1;
            scorePlay2.innerHTML = score[1];
            titlePlayer.innerHTML = "2";
            turn = 3;
            colorBack.style.backgroundColor = "#0077ff";
            colorBack.style.border = "outset 7px #366397";
            cellColorPlayer2();
          }else if(cases[0].innerHTML == 'O' && cases[3].innerHTML == 'O' && cases[6].innerHTML == 'O'){
            message.innerHTML = "Le joueur 2 à gagné";
            score[1] += 1;
            scorePlay2.innerHTML = score[1];
            titlePlayer.innerHTML = "2";
            turn = 3;
            colorBack.style.backgroundColor = "#0077ff";
            colorBack.style.border = "outset 7px #366397";
            cellColorPlayer2();
          }else if(cases[1].innerHTML == 'O' && cases[4].innerHTML == 'O' && cases[7].innerHTML == 'O'){
            message.innerHTML = "Le joueur 2 à gagné";
            score[1] += 1;
            scorePlay2.innerHTML = score[1];
            titlePlayer.innerHTML = "2";
            turn = 3;
            colorBack.style.backgroundColor = "#0077ff";
            colorBack.style.border = "outset 7px #366397";
            cellColorPlayer2();
          }else if(cases[2].innerHTML == 'O' && cases[5].innerHTML == 'O' && cases[8].innerHTML == 'O'){
            message.innerHTML = "Le joueur 2 à gagné";
            score[1] += 1;
            scorePlay2.innerHTML = score[1];
            titlePlayer.innerHTML = "2";
            turn = 3;
            colorBack.style.backgroundColor = "#0077ff";
            colorBack.style.border = "outset 7px #366397";
            cellColorPlayer2();
          }else if(cases[0].innerHTML == 'O' && cases[4].innerHTML == 'O' && cases[8].innerHTML == 'O'){
            message.innerHTML = "Le joueur 2 à gagné";
            score[1] += 1;
            scorePlay2.innerHTML = score[1];
            titlePlayer.innerHTML = "2";
            turn = 3;
            colorBack.style.backgroundColor = "#0077ff";
            colorBack.style.border = "outset 7px #366397";
            cellColorPlayer2();
          }else if(cases[2].innerHTML == 'O' && cases[4].innerHTML == 'O' && cases[6].innerHTML == 'O'){
            message.innerHTML = "Le joueur 2 à gagné";
            score[1] += 1;
            scorePlay2.innerHTML = score[1];
            titlePlayer.innerHTML = "2";
            turn = 3;
            colorBack.style.backgroundColor = "#0077ff";
            colorBack.style.border = "outset 7px #366397";
            cellColorPlayer2();
          }
        }
      }
    });

    reset.addEventListener('click', () => {
      titlePlayer.innerHTML = '1';
      colorBack.style.backgroundColor = 'red';
      colorBack.style.border = "outset 7px #a13b3b";
      cases[i].innerHTML = "";
      message.innerHTML = "";
      turn = 0;
      cellColorPlayer1();
    });

    resteScore.addEventListener('click', () =>{
      location.reload();
    });
    
  }
  
}


newGame();


