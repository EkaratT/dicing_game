function genaerateNum(){
    let diceNumber = Math.floor((Math.random()*6)+1);
    return diceNumber;
}


function updateScrorePlayer1(p1Score){
    let c1 = document.getElementsByClassName('p1-c1');
    let c2 = document.getElementsByClassName('p1-c2');
    let c3 = document.getElementsByClassName('p1-c3');
    let c4 = document.getElementsByClassName('p1-c4');
    let c5 = document.getElementsByClassName('p1-c5');
    let c6 = document.getElementsByClassName('p1-c6');
    let c7 = document.getElementsByClassName('p1-c7');
    switch (p1Score){
        case 1:
            c1[0].style.display='none';
            c2[0].style.display='none';
            c3[0].style.display='none';
            c4[0].style.display='none';
            c5[0].style.display='none';
            c6[0].style.display='none';
            c7[0].style.display='block';
            break
        case 2:
            c1[0].style.display='none';
            c2[0].style.display='none';
            c3[0].style.display='block';
            c4[0].style.display='block';
            c5[0].style.display='none';
            c6[0].style.display='none';
            c7[0].style.display='none';
            break
        case 3:
            c1[0].style.display='none';
            c2[0].style.display='none';
            c3[0].style.display='block';
            c4[0].style.display='block';
            c5[0].style.display='none';
            c6[0].style.display='none';
            c7[0].style.display='block';
            break
        case 4:
            c1[0].style.display='block';
            c2[0].style.display='none';
            c3[0].style.display='block';
            c4[0].style.display='block';
            c5[0].style.display='none';
            c6[0].style.display='block';
            c7[0].style.display='none';
            break
        case 5:
            c1[0].style.display='block';
            c2[0].style.display='none';
            c3[0].style.display='block';
            c4[0].style.display='block';
            c5[0].style.display='none';
            c6[0].style.display='block';
            c7[0].style.display='block';
            break
        default:
            c1[0].style.display='block';
            c2[0].style.display='block';
            c3[0].style.display='block';
            c4[0].style.display='block';
            c5[0].style.display='block';
            c6[0].style.display='block';
            c7[0].style.display='none';
    }
}
function updateScrorePlayer2(p2Score){
    let c1 = document.getElementsByClassName('p2-c1');
    let c2 = document.getElementsByClassName('p2-c2');
    let c3 = document.getElementsByClassName('p2-c3');
    let c4 = document.getElementsByClassName('p2-c4');
    let c5 = document.getElementsByClassName('p2-c5');
    let c6 = document.getElementsByClassName('p2-c6');
    let c7 = document.getElementsByClassName('p2-c7');

    switch (p2Score){
        case 1:
            c1[0].style.display='none';
            c2[0].style.display='none';
            c3[0].style.display='none';
            c4[0].style.display='none';
            c5[0].style.display='none';
            c6[0].style.display='none';
            c7[0].style.display='block';
            break
        case 2:
            c1[0].style.display='none';
            c2[0].style.display='none';
            c3[0].style.display='block';
            c4[0].style.display='block';
            c5[0].style.display='none';
            c6[0].style.display='none';
            c7[0].style.display='none';
            break
        case 3:
            c1[0].style.display='none';
            c2[0].style.display='none';
            c3[0].style.display='block';
            c4[0].style.display='block';
            c5[0].style.display='none';
            c6[0].style.display='none';
            c7[0].style.display='block';
            break
        case 4:
            c1[0].style.display='block';
            c2[0].style.display='none';
            c3[0].style.display='block';
            c4[0].style.display='block';
            c5[0].style.display='none';
            c6[0].style.display='block';
            c7[0].style.display='none';
            break
        case 5:
            c1[0].style.display='block';
            c2[0].style.display='none';
            c3[0].style.display='block';
            c4[0].style.display='block';
            c5[0].style.display='none';
            c6[0].style.display='block';
            c7[0].style.display='block';
            break
        default:
            c1[0].style.display='block';
            c2[0].style.display='block';
            c3[0].style.display='block';
            c4[0].style.display='block';
            c5[0].style.display='block';
            c6[0].style.display='block';
            c7[0].style.display='none';
    }
}

let checkWinner = (p1Score, p2Score)=>{
    if(p1Score > p2Score){
        document.getElementsByClassName('winner')[0].innerHTML='player 1 wins 🎉'
    } else if (p2Score > p1Score){
        document.getElementsByClassName('winner')[0].innerHTML='player 2 wins 🎉'
    } else{
        document.getElementsByClassName('winner')[0].innerHTML='It is a draw'
    }
}

function dicing(){
    let playerOneScore = genaerateNum();
    let playerTwoScore = genaerateNum();
    updateScrorePlayer1(playerOneScore);
    updateScrorePlayer2(playerTwoScore);
    checkWinner(playerOneScore, playerTwoScore);
}

function play(){
    dicing();
}