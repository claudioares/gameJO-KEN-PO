const pedra = 1;
const papel = 2;
const tesoura = 3;

//seu código aqui
function jogar(){
    captureGamer = parseInt (document.getElementById('value').value);
    computer = Math.floor(Math.random()*(1 - 4)+4);

    //Se jogador escohe1
    if(captureGamer === 1 && computer === 1){
        captureGamer = "Pedra";
        computer = "Pedra";
        alert(`Jogador escolheu ${captureGamer} e Computador escolheu ${computer}
        Empatou!!`);
    }else if(captureGamer === 1 && computer === 2){
        captureGamer = "Pedra";
        computer ="Papel";
        alert(
            `Jogador escolheu ${captureGamer} e Computador escolheu ${computer}.
            Papel enrola pedra.
            Computador Venceu!!`);
    }else if (captureGamer === 1 && computer === 3){
        captureGamer = "Pedra";
        computer = "Tesoura";
        alert(
            `Jogador escolheu ${captureGamer} e Computador escolheu ${computer}.
            Pedra quebra tesoura.
            Jogador Venceu!!`);
    }

    //Se jogador escolhe2

    if(captureGamer === 2 && computer === 1){
        captureGamer = "Papel";
        computer = "Pedra";
        alert(`Jogador escolheu ${captureGamer} e Computador escolheu ${computer}
        Papel enrola Pedra!
        Jogador Venceu!!`);
    }else if(captureGamer === 2 && computer === 2){
        captureGamer = "Papel";
        computer = "Papel"
        alert(`Jogador escolheu ${captureGamer} e Computador escolheu ${computer}
        Empatou!!`);
    }else if(captureGamer === 2 && computer === 3){
        captureGamer = "Papel";
        computer = "Tesoura";
        alert(`Jogador escolheu ${captureGamer} e Computador escolheu ${computer}
        Tesoura corta papel!!
        Computador Venceu!!`);
    }

    //se o jogador escolher3
    if(captureGamer === 3 && computer === 1){
        captureGamer = "Tesoura";
        computer = "Pedra";
        alert(`Jogador escolheu ${captureGamer} e Computador escolheu ${computer}
        Pedra quebra tesoura!
        Computador Venceu!!`);
    }else if(captureGamer === 3 && computer === 2){
        captureGamer = "Tesoura";
        computer = "Papel";
        alert(`Jogador escolheu ${captureGamer} e Computador escolheu ${computer}
        Tesoura corta papel!!
        Jogador Venceu!!`);
    }else if(captureGamer === 3 && computer === 3){
        captureGamer = "Tesoura";
        computer = "Tesoura";
        alert(`Jogador escolheu ${captureGamer} e Computador escolheu ${computer}
        Empatou!!`);
    }
    else{
        alert('Escolha uma opção válida!')
    }

}
