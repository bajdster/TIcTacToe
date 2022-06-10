const field = document.querySelectorAll(".field");
const turnBox = document.querySelector(".turnBox");

const areas = Array.from(field);


const winningComb = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
        ];

   

let players = ["x", "o"];


let turn = players[Math.floor(Math.random()*players.length)];

turnBox.innerHTML = turn;

function play()
{
   
    
    this.removeEventListener("click", play);
    this.style.backgroundColor = "lightgrey";
    this.innerHTML = turn;

    // console.log(turn);
    if(turn == "x")
    {
        turnBox.innerHTML = "o";
        turn = "o";
    }
    else
    {
        turnBox.innerHTML = "x";
        turn = "x";
    }

    



    //checking if any player wins
    winningComb.some((combination) =>
    {
        if(combination.every((el) => field[el].innerHTML=="x"))
        {
            combination.forEach((el) => field[el].style.backgroundColor = "#90EE90");
            turnBox.innerHTML = "X WINS!"
            field.forEach((field)=>field
            .removeEventListener("click", play));
            return;
        }
        else if (combination.every((el) => field[el].innerHTML=="o"))
        {
            combination.forEach((el) => field[el].style.backgroundColor = "#90EE90");
            turnBox.innerHTML = "O WINS!"
            field.forEach((field)=>field.removeEventListener("click", play));
            return;
        }          

            //checking if DRAW appears
        else if(areas.every((el)=>el.innerHTML !=""))
        {
            turnBox.innerHTML = "DRAW";
            return;
        }

    })

}



field.forEach(field=> field.addEventListener("click", play));





//Trash

  // if(field[0].innerHTML == "x" && field[1].innerHTML == 'x' && field[2].innerHTML =="x")
    // {
    //     turnBox.innerHTML = "X WON!";
    // }

    // else if(field.every((el) => el.innerHTML != ""))
        // {
        //     turnBox.innerHTML = "DRAW!";
        // }



            // field.forEach((el) => 
    //     {
    //         // console.log(el.innerHTML);
    //         if(el.every((area)=>
    //         {
    //             area.innerHTML !=""
    //         }))
    //         {
    //             turnBox.innerHTML=="DRAW";
    //         }
    //     })