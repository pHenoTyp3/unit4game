

// startgame() //not working, what did i do wrong?
  var playerscore = 0;
  var targetOptions = Math.floor(Math.random() * 101) + 19
  // var targetNum = targetOptions[Math.floor(Math.random() * targetOptions.length)]
  console.log(targetOptions)

  
  $("#targetnumbers").text("Number to guess: " + targetOptions)
  var numOptions = [10, 11, 5, 8, 1]
  console.log(numOptions)
  for (var i = 0; i < numOptions.length; i++) {
      var valueoptions = numOptions[Math.floor(Math.random() * numOptions.length)]
      var crystalimage = $("<button>")
      crystalimage.addClass("tri-image")
      crystalimage.addClass("btn-image")
      crystalimage.attr("src",
          "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642"
      )
      crystalimage.attr("data-idunno", valueoptions)
      $("#triangles").append(crystalimage)
  }
  $("#reset").on("click", function () {
      reset()
      // startgame()
      //not working, what did i do wrong?
  })
  // function startgame(){
  //     var targetOptions = [100, 44, 77, 78, 164]
  // var targetNum = targetOptions[Math.floor(Math.random() * targetOptions.length)]
  // console.log(targetNum)
  // $("#targetnumbers").text("Number to guess: " + targetNum)
  // }
  $(".tri-image").on("click", function () {
      var crystalValue = ($(this).attr("data-idunno"));
      crystalValue = parseInt(crystalValue);
      playerscore += crystalValue
      $("#score").text(playerscore)
      console.log(crystalValue)
      console.log(playerscore)
      if (playerscore === targetOptions) {
          alert("Win")
      } else if (playerscore >= targetOptions) {
          alert("Lost")
          reset()
      }
  })

  function reset() {
      playerscore = 0


      // var targetNum = targetOptions[Math.floor(Math.random() * targetOptions.length)]
      // var targetOptions = Math.floor(Math.random()*101) + 19
      $("#score").text(playerscore)
      var targetOptions = Math.floor(Math.random() * 101) + 19
      $("#targetnumbers").text("Number to guess: " + targetOptions)


  }