window.onload = function (){
    console.log("window on load check");

    // Declair variables.
    let specialNames =["random", "trending"]
    let searchNames = ["random", "Dune", "Klaus Nomi"]
    let gifButton;

    let buttonArea = document.getElementById("button-area");
    let allButton = document.getElementsByTagName("button");
    let gifArea = document.getElementById("gif-area");
    let articleArea = document.getElementById("article-area");
    


    // <section id="button-area"></section>
    // <section id="gif-area"></section>
    // <article id="article-area"></article>

    // creat functions to: 
    // Create for loop to make buttons inside of button area with an attribute of the search name. The text of the button is connected to the name.  
    // Get element by id button area.
    let SpecialMaker = function(){
        for (let i = 0; i < specialNames.length; i++){
            gifButton = document.createElement("button");
            gifButton.setAttribute("special-gif-id", specialNames[i]);
            gifButton.textContent = (specialNames[i])
            buttonArea.appendChild(gifButton);
            // it works!
        }
    };
    SpecialMaker();

    
    let btnMaker = function(){
        for (let i = 0; i < searchNames.length; i++){
            gifButton = document.createElement("button");
            gifButton.setAttribute("gif-id", searchNames[i]);
            gifButton.textContent = (searchNames[i])
            buttonArea.appendChild(gifButton);
            // it works!
        }
    };
    btnMaker();
    console.log(`number of buttons: ${allButton.length}`);
    // Import GIFY api.

    // the fallowing insider of an on click function.
    // Run fetch function to pull api in.
    // Build section box for each gif then apply the gif to it and then add gif info to it.
    // add button to add it to favorite box.

    // bonus

    // build area for favorite gifs

    // Import news api.
    // Run fetch function to pull api in.

    // build area for favorite articles

    // figure out how to make horizantal scrolling sections to hold gifs and articles.


};


