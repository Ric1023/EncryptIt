/*
 * Starter file 
 */

(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */


  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");

    encryptText();
    resetText();



  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function encryptText() {

    document.getElementById("encrypt-it").addEventListener("click", () => {
      console.log('encrypted!');
      let text = document.getElementById("input-text").value;
      document.getElementById("result").innerText = shiftCipher(text);
    });
  }

  function resetText() {
    document.getElementById("reset").addEventListener("click", () => {
      document.getElementById("input-text").value = " ";
      document.getElementById("result").innerText = " ";
    });
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for(let i = 0; i < text.length; i++) {
      if(text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if(text[i] == 'z') {
        result += 'a';
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

})();
