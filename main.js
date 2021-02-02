// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector('#modal')
  const hearts = document.getElementsByClassName("like-glyph")
  likePost(hearts);
  // have a colletction of hearts
  // add an event listener to each heart
})

const likePost = (hearts) => {
  for (const heart of hearts) {
    heart.addEventListener("click", (e) => {
// make a server call
      mimicServerCall() // return a promise
// promises have the .then()
// we're using two .then()
      // 1. the first .then() will take the response and jsonify it.
            // .then(resp => resp.json()) //in this case, we do not need this first .then(), bc there's nothing to jsonify
            // you only want to jsonify objects, you do not want to jsonify strings
      // 2. the second .then() will take the jsonified, and do something with it
      .then(() =>{
        // when it's successful, change the heart
        // if it's empty, make it full, add a new class
        // else if its full, make it empty
        if (heart.innerHTML == EMPTY_HEART){
          heart.innerHTML = FULL_HEART
          heart.className = "activated-heart"
        } else {
          heart.innerHTML = EMPTY_HEART
          heart.className = "like-glyph"
        }
      })
      .catch(error =>{ // .catch is going to take an error and do something with it
        modal.hidden = false // Display the error modal by removing the .hidden class
        const modalMessage = document.querySelector("#modal-message") // Display the server error message in the modal
        modalMessage.innerText = error // this is to manipulate the text inside of the the p-tag
        setTimeout(() => { // Use setTimeout to hide the modal after 5 seconds (add the .hidden class)
          // setTimeout takes two parameters
          // 1. do this during the timeout
          modal.hidden = true
          // 2. do parameter 1 for a specified amount of time in milliseconds
        }, 5000)
      })

    })
  }
}
// fetch()
// .then(resp=> resp.json()) // this .then() will return another promise which needs to be processed in the next .then()
// .then(data => {
 // something is done the data
// })
// .catch(){}

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
