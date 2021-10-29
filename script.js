// Change fond couleur
// Affiche n° de joueur
// Nouvelle partie - Réinitialisation
// Placement pion
// Tour joueur
// Score
// Process (Win/Lose/Drag)
// Reset page

class Morpion{
  constructor(turn, joueur, titlePlayer, score, cases){
    this.turn = turn;
    this.joueur = joueur;
    this.titlePlayer = titlePlayer;
    this.score = score;
    this.cases = cases;
  }

  init(){
    this.displayColorBoard();
    this.displayPlayer();
    this.displayColorCells();
    this.newGame();
    this.process();
    this.resetGame();
    this.resetAll();
  }

  displayColorBoard(colorBoard, colorBorder){
    let contenuJeu = document.getElementById('contenuJeu');

    if(this.turn === 0){
      contenuJeu.style.backgroundColor = "red";
      contenuJeu.style.border = "outset 7px #a13b3b";
    }else if(this.turn === 1){
      contenuJeu.style.backgroundColor = "#0077ff";
      contenuJeu.style.border = "outset 7px #366397";
    }else if(this.turn === 3){
      contenuJeu.style.backgroundColor = colorBoard;
      contenuJeu.style.border = colorBorder;
    }

  }

  displayPlayer(){
    this.titlePlayer = document.getElementById('joueur');

    if(this.turn === 0){
      this.titlePlayer.innerHTML = 1;
    }else if(this.turn === 1){
      this.titlePlayer.innerHTML = 2;
    }

  }

  displayColorCells(color){
    let cells = document.getElementsByClassName('cell');

    for(let i = 0, leng = cells.length; i < leng; i++){
      if(this.turn === 0){
        cells[i].addEventListener('mouseenter', () =>{
          cells[i].style.backgroundColor = '#ffdada';
        });
        cells[i].addEventListener('mouseleave', () =>{
          cells[i].style.backgroundColor = 'white';
        });
        cells[i].addEventListener('click', () =>{
          cells[i].style.backgroundColor = '#ffdada';
        });
      }else if(this.turn === 1){
        cells[i].addEventListener('mouseenter', () =>{
          cells[i].style.backgroundColor = '#c4dfff';
        });
        cells[i].addEventListener('mouseleave', () =>{
          cells[i].style.backgroundColor = 'white';
        });
        cells[i].addEventListener('click', () =>{
          cells[i].style.backgroundColor = '#c4dfff';
        });
      }else if(this.turn === 3){
        cells[i].addEventListener('mouseenter', () =>{
          cells[i].style.backgroundColor = color;
        });
        cells[i].addEventListener('mouseleave', () =>{
          cells[i].style.backgroundColor = 'white';
        });
        cells[i].addEventListener('click', () =>{
          cells[i].style.backgroundColor = color;
        });
      }
    }
  }

  newGame(){
    this.cases = ["", "", "", "", "", "", "", "", ""];
    this.joueur = ["X", "O"];
    this.turn = 0;
    this.cases[0] = document.getElementById('pion1');
    this.cases[1] = document.getElementById('pion2');
    this.cases[2] = document.getElementById('pion3');
    this.cases[3] = document.getElementById('pion4');
    this.cases[4] = document.getElementById('pion5');
    this.cases[5] = document.getElementById('pion6');
    this.cases[6] = document.getElementById('pion7');
    this.cases[7] = document.getElementById('pion8');
    this.cases[8] = document.getElementById('pion9');


    for(let i = 0, leng = this.cases.length; i < leng; i++){
      this.cases[i].addEventListener('click', () =>{
        
        // Placement pion
        if(this.cases[i].innerHTML == "" && this.turn === 0){
          this.cases[i].innerHTML = this.joueur[this.turn];
          this.turn = 1;
          this.displayPlayer();
          this.displayColorBoard();
          this.displayColorCells();
        }else if(this.cases[i].innerHTML == "" && this.turn === 1){
          this.cases[i].innerHTML = this.joueur[this.turn];
          this.turn = 0;
          this.displayPlayer();
          this.displayColorBoard();
          this.displayColorCells();
        }
      });
    }
  }

  process(){
    let message = document.getElementById('message');
    let scoreJ1 = document.getElementById('play1');
    let scoreJ2 = document.getElementById('play2');

    for(let i = 0, leng = this.cases.length; i < leng; i++){
      this.cases[i].addEventListener('click', () =>{

        // this.isWinner()

        if(this.turn === 1){ // Tour joueur 1
          if(this.cases[0].innerHTML === "X" && this.cases[1].innerHTML === "X" && this.cases[2].innerHTML === "X"){
            message.innerHTML = 'Le joueur 1 à gagné !';
            this.score[0] += 1;
            scoreJ1.innerHTML = this.score[0];
            this.turn = 3;
            this.titlePlayer.innerHTML = 1;
            this.displayColorCells('#ffdada');
            this.displayColorBoard('red', 'outset 7px #a13b3b');
          }else if(this.cases[3].innerHTML === "X" && this.cases[4].innerHTML === "X" && this.cases[5].innerHTML === "X"){
            message.innerHTML = 'Le joueur 1 à gagné !';
            this.score[0] += 1;
            scoreJ1.innerHTML = this.score[0];
            this.turn = 3;
            this.titlePlayer.innerHTML = 1;
            this.displayColorCells('#ffdada');
            this.displayColorBoard('red', 'outset 7px #a13b3b');
          }else if(this.cases[6].innerHTML === "X" && this.cases[7].innerHTML === "X" && this.cases[8].innerHTML === "X"){
            message.innerHTML = 'Le joueur 1 à gagné !';
            this.score[0] += 1;
            scoreJ1.innerHTML = this.score[0];
            this.turn = 3;
            this.titlePlayer.innerHTML = 1;
            this.displayColorCells('#ffdada');
            this.displayColorBoard('red', 'outset 7px #a13b3b');
          }else if(this.cases[0].innerHTML === "X" && this.cases[4].innerHTML === "X" && this.cases[8].innerHTML === "X"){
            message.innerHTML = 'Le joueur 1 à gagné !';
            this.score[0] += 1;
            scoreJ1.innerHTML = this.score[0];
            this.turn = 3;
            this.titlePlayer.innerHTML = 1;
            this.displayColorCells('#ffdada');
            this.displayColorBoard('red', 'outset 7px #a13b3b');
          }else if(this.cases[2].innerHTML === "X" && this.cases[4].innerHTML === "X" && this.cases[6].innerHTML === "X"){
            message.innerHTML = 'Le joueur 1 à gagné !';
            this.score[0] += 1;
            scoreJ1.innerHTML = this.score[0];
            this.turn = 3;
            this.titlePlayer.innerHTML = 1;
            this.displayColorCells('#ffdada');
            this.displayColorBoard('red', 'outset 7px #a13b3b');
          }else if(this.cases[0].innerHTML === "X" && this.cases[3].innerHTML === "X" && this.cases[6].innerHTML === "X"){
            message.innerHTML = 'Le joueur 1 à gagné !';
            this.score[0] += 1;
            scoreJ1.innerHTML = this.score[0];
            this.turn = 3;
            this.titlePlayer.innerHTML = 1;
            this.displayColorCells('#ffdada');
            this.displayColorBoard('red', 'outset 7px #a13b3b');
          }else if(this.cases[1].innerHTML === "X" && this.cases[4].innerHTML === "X" && this.cases[7].innerHTML === "X"){
            message.innerHTML = 'Le joueur 1 à gagné !';
            this.score[0] += 1;
            scoreJ1.innerHTML = this.score[0];
            this.turn = 3;
            this.titlePlayer.innerHTML = 1;
            this.displayColorCells('#ffdada');
            this.displayColorBoard('red', 'outset 7px #a13b3b');
          }else if(this.cases[2].innerHTML === "X" && this.cases[5].innerHTML === "X" && this.cases[8].innerHTML === "X"){
            message.innerHTML = 'Le joueur 1 à gagné !';
            this.score[0] += 1;
            scoreJ1.innerHTML = this.score[0];
            this.turn = 3;
            this.titlePlayer.innerHTML = 1;
            this.displayColorCells('#ffdada');
            this.displayColorBoard('red', 'outset 7px #a13b3b');
          }else if(this.cases[0].innerHTML !== "" && this.cases[1].innerHTML !== "" && this.cases[2].innerHTML !== "" && this.cases[3].innerHTML !== "" && this.cases[4].innerHTML !== "" && this.cases[5].innerHTML !== "" && this.cases[6].innerHTML !== "" && this.cases[7].innerHTML !== "" && this.cases[8].innerHTML !== ""){
            this.turn = 3;
            message.innerHTML = "Match nul !";
            this.titlePlayer.innerHTML = 1;
            this.displayColorCells('#ffdada');
            this.displayColorBoard('red', 'outset 7px #a13b3b');
          }
        }else if(this.turn === 0){ // Tour joueur 2
          if(this.cases[0].innerHTML === "O" && this.cases[1].innerHTML === "O" && this.cases[2].innerHTML === "O"){
            console.log(this.turn);
            message.innerHTML = 'Le joueur 2 à gagné !';
            this.score[1] += 1;
            scoreJ2.innerHTML = this.score[1];
            this.turn = 3;
            this.titlePlayer.innerHTML = 2;
            console.log(this.turn);
            this.displayColorCells('#c4dfff');
            this.displayColorBoard("#0077ff", "outset 7px #366397");
          }else if(this.cases[3].innerHTML === "O" && this.cases[4].innerHTML === "O" && this.cases[5].innerHTML === "O"){
            message.innerHTML = 'Le joueur 2 à gagné !';
            this.score[1] += 1;
            scoreJ2.innerHTML = this.score[1];
            this.turn = 3;
            this.titlePlayer.innerHTML = 2;
            this.displayColorCells('#c4dfff');
            this.displayColorBoard("#0077ff", "outset 7px #366397");
          }else if(this.cases[6].innerHTML === "O" && this.cases[7].innerHTML === "O" && this.cases[8].innerHTML === "O"){
            message.innerHTML = 'Le joueur 2 à gagné !';
            this.score[1] += 1;
            scoreJ2.innerHTML = this.score[1];
            this.turn = 3;
            this.titlePlayer.innerHTML = 2;
            this.displayColorCells('#c4dfff');
            this.displayColorBoard("#0077ff", "outset 7px #366397");
          }else if(this.cases[0].innerHTML === "O" && this.cases[4].innerHTML === "O" && this.cases[8].innerHTML === "O"){
            message.innerHTML = 'Le joueur 2 à gagné !';
            this.score[1] += 1;
            scoreJ2.innerHTML = this.score[1];
            this.turn = 3;
            this.titlePlayer.innerHTML = 2;
            this.displayColorCells('#c4dfff');
            this.displayColorBoard("#0077ff", "outset 7px #366397");
          }else if(this.cases[2].innerHTML === "O" && this.cases[4].innerHTML === "O" && this.cases[6].innerHTML === "O"){
            message.innerHTML = 'Le joueur 2 à gagné !';
            this.score[1] += 1;
            scoreJ2.innerHTML = this.score[1];
            this.turn = 3;
            this.titlePlayer.innerHTML = 2;
            this.displayColorCells('#c4dfff');
            this.displayColorBoard("#0077ff", "outset 7px #366397");
          }else if(this.cases[0].innerHTML === "O" && this.cases[3].innerHTML === "O" && this.cases[6].innerHTML === "O"){
            message.innerHTML = 'Le joueur 2 à gagné !';
            this.score[1] += 1;
            scoreJ2.innerHTML = this.score[1];
            this.turn = 3;
            this.titlePlayer.innerHTML = 2;
            this.displayColorCells('#c4dfff');
            this.displayColorBoard("#0077ff", "outset 7px #366397");
          }else if(this.cases[1].innerHTML === "O" && this.cases[4].innerHTML === "O" && this.cases[7].innerHTML === "O"){
            message.innerHTML = 'Le joueur 2 à gagné !';
            this.score[1] += 1;
            scoreJ2.innerHTML = this.score[1];
            this.turn = 3;
            this.titlePlayer.innerHTML = 2;
            this.displayColorCells('#c4dfff');
            this.displayColorBoard("#0077ff", "outset 7px #366397");
          }else if(this.cases[2].innerHTML === "O" && this.cases[5].innerHTML === "O" && this.cases[8].innerHTML === "O"){
            message.innerHTML = 'Le joueur 2 à gagné !';
            this.score[1] += 1;
            scoreJ2.innerHTML = this.score[1];
            this.turn = 3;
            this.titlePlayer.innerHTML = 2;
            this.displayColorCells('#c4dfff');
            this.displayColorBoard("#0077ff", "outset 7px #366397");
          }
        }
      });

    }
  }


  // Restart
  resetGame(){
    let buttonResetGame = document.getElementById('reset');

    buttonResetGame.addEventListener('click', () =>{
      this.turn = 1;
      message.innerHTML = "";
      for(let i = 0, leng = this.cases.length; i < leng; i++){
        this.cases[i].innerHTML = "";
      }

      this.newGame();
      this.displayColorBoard();
      this.displayColorCells();
      this.displayPlayer();
    });
  }

  // Reset Score
  resetAll(){ 
    let buttonResetAll = document.getElementById('resetScore');

    buttonResetAll.addEventListener('click', () =>{
      location.reload();
    });

  }
  
}


let jeu = new Morpion(0, "X", 1, [0, 0]);

jeu.init();



