//  randomNumber: 0,
//     totalNumber: 0,
//     start: function() {
//         // getting us a randomNumber
//         this.randomNumber = this.generateRandomNumber(19, 120);

//         // setting it in the UI
//         $("#random-number").text(this.randomNumber);
//         $("#total-number").text(this.totalNumber);

//         // generate the buttons
//         for(var i = 0; i < 4; i++) {
//             var btn = $("<button>");
//             btn.addClass("btn btn-success random-btn");
//             btn.val(this.generateRandomNumber(1, 12));
//             //btn.html("<img src='http://www.madonnamae.com/wp-content/uploads/2012/04/AuroreBoreale.jpg'>")
//             btn.text("?");
//             $("#button-container").append(btn);
//         }
//     },

//     reset: function() {
//         $("#button-container").empty();
//         this.totalNumber = 0;
//         this.start();
//     },

//     generateRandomNumber: function(min, max) {
//         return Math.floor(Math.random() * (max - min) ) + min;
//     }
// };

// // starts the game
// game.start();

// $(document).on("click", ".random-btn", function(){
//     var btnValue = parseInt($(this).val());
//     game.totalNumber += btnValue;
//     $("#total-number").text(game.totalNumber);
//     // if the totalNumber matches the randomNumber 
//     if(game.totalNumber === game.randomNumber) {
//         // we win 
//         alert("You win!");

//         // resets the game
//         game.reset();
//     } else if (game.totalNumber > game.randomNumber) {
//         alert("You lose!");

//         // resets the game
//         game.reset();
//     }
// });








 $(document).ready(function () {

      
      var lockGame = false;

      var total = 0;
      var wins = 0;
      var losses = 0;

      var buttonOne = Math.floor(Math.random() * 11) + 1;
      console.log("Computer Pick: " + buttonOne);
      $("#buttonOne").on("click",function(){
      // total = total + buttonOne;
      // console.log(total);
      if (lockGame !== true) {    
          var yourPick = $(this).val();             
          $("#computer-pick").text(computerPick);

          if (parseInt(yourPick) === computerPick) {
            $("#result").text("Yep! You got it! Refresh the page to play again.");
            lockGame = true;
          }       
          else {

            $("#result").text("Nope. Refresh the page to play again.");
            lockGame = true;
          }

      }

      });

      var buttonTwo = Math.floor(Math.random() * 11) + 1;
      console.log("Computer Pick: " + buttonTwo);
      $("#buttonTwo").on("click",function(){
      // total = total + buttonTwo;
      // console.log(total);
      if (lockGame !== true) {    
          var yourPick = $(this).val();             
          $("#computer-pick").text(computerPick);

          if (parseInt(yourPick) === computerPick) {
            $("#result").text("Yep! You got it! Refresh the page to play again.");
            lockGame = true;
          }       
          else {

            $("#result").text("Nope. Refresh the page to play again.");
            lockGame = true;
          }

      }

      

      });

      var buttonThree = Math.floor(Math.random() * 11) + 1;
      console.log("Computer Pick: " + buttonThree);
      $("#buttonThree").on("click",function(){
      // total = total + buttonThree;
      // console.log(total);
      if (lockGame !== true) {    
          var yourPick = $(this).val();             
          $("#computer-pick").text(computerPick);

          if (parseInt(yourPick) === computerPick) {
            $("#result").text("Yep! You got it! Refresh the page to play again.");
            lockGame = true;
          }       
          else {

            $("#result").text("Nope. Refresh the page to play again.");
            lockGame = true;
          }

      }

    

      });

      var buttonFour = Math.floor(Math.random() * 11) + 1;
      console.log("Computer Pick: " + buttonFour);
      $("#buttonFour").on("click",function(){
      // total = total + buttonFour;
      // console.log(total);
      if (lockGame !== true) {    
          var yourPick = $(this).val();             
          $("#computer-pick").text(computerPick);

          if (parseInt(yourPick) === computerPick) {
            $("#result").text("Yep! You got it! Refresh the page to play again.");
            lockGame = true;
          }       
          else {

            $("#result").text("Nope. Refresh the page to play again.");
            lockGame = true;
          }

      }

      

      });



      
      var computerPick = Math.floor(Math.random() * 100) + 10;
    
      console.log("Computer Pick: " + computerPick); 
      $(".btn-choice").on("click", function () { 

          if (lockGame !== true) {    
          var yourPick = $(this).val();             
          $("#computer-pick").text(computerPick);

          if (parseInt(yourPick) === computerPick) {
            $("#result").text("Yep! You got it! Refresh the page to play again.");
            lockGame = true;
          }       
          else {

            $("#result").text("Nope. Refresh the page to play again.");
            lockGame = true;
          }
        }

      });
    });

//  possible reset game

    // function roundComplete() {
    // console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);
    // document.getElementById("guesses-left").innerHTML = numGuesses;
    // document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    // document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
    // if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    // winCounter++;
    // alert("You win!");
    // ocument.getElementById("win-counter").innerHTML = winCounter;
    // startGame();
    // }
    // else if (numGuesses === 0) {
    // lossCounter++;
    // alert("You lose");
    // document.getElementById("loss-counter").innerHTML = lossCounter;
    // startGame();
    // }
    // }
    // startGame();
    // document.onkeyup = function(event) {
    // letterGuessed = String.fromCharCode(event.which).toLowerCase();
    // checkLetters(letterGuessed);
    // roundComplete();
    // };


