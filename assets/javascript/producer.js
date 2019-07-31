window.onload = function (){
    console.log("window on load check");

    // Declair variables.
    let specialNames =["random", "trending"]
    let searchNames = ["Dune", "Klaus Nomi"]
    let gifButton;
    let gifCount = 0;
    let currentTitle;
    let spCurrentTitle;
    let currentGif;
    let result;
    let newDivBox;
    let divBoxCount = 0;
    let newDiv;
    let newGif;
    let divBox0;
    let divBox5;

    let spButtonArea = document.getElementById("special-button-area")
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
            gifButton.setAttribute("gif-id", specialNames[i]);
            gifButton.setAttribute("special-gif-id", specialNames[i]);
            gifButton.textContent = (specialNames[i])
            spButtonArea.appendChild(gifButton);
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

    for (i = 0; i < allButton.length; i++){
        console.log("for loop")
        allButton[i].addEventListener("click",function(){
            gifArea.innerHTML = " ";
            gifCount = 0;
            queryURL = " ";
            console.log("button clicked")
            currentTitle = this.getAttribute("gif-id");
            if(currentTitle === "trending" || currentTitle === "random" ){
                console.log(currentTitle)
                let queryURL = `https://api.giphy.com/v1/gifs/${currentTitle}?api_key=${GIFKEY}&limit=10&rating=G`
            }
            else{
                queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${GIFKEY}&q=${currentTitle}&limit=10&offset=0&rating=G&lang=en`
            }

            fetch(queryURL).then(function(response){
                return response.json()
            }).then(function(res){
                console.log(res)
                result = res.data;
                for( i = 0; i < result.length; i++){
                    
                    currentGif = result[i].images.fixed_height.url;
                    newDiv = document.createElement("div");
                    newGif = document.createElement("img");
                    newGif.setAttribute("src", currentGif);
                    newDiv.appendChild(newGif);

                    if(gifCount === 0){
                        newDivBox =  document.createElement("div");
                        newDivBox.setAttribute("id", `gif-box-0`);
                        gifArea.appendChild(newDivBox);
                    }
                    else if(gifCount === 4){
                        newDivBox =  document.createElement("div");
                        newDivBox.setAttribute("id", `gif-box-5`);
                        gifArea.appendChild(newDivBox);
                        
                    };
                    divBox0 = document.getElementById("gif-box-0");
                    divBox5 = document.getElementById("gif-box-5");
                    if (gifCount < 5){
                        divBox0.appendChild(newDiv);
                    }
                    else{
                        divBox5.appendChild(newDiv);

                    };
                    gifCount++;
                    

                }
            })



        })
    }
    
    // Import GIFY api.

    // the fallowing insider of an on click function.
    // Run fetch function to pull api in.
    // Build section box for each gif then apply the gif to it and then add gif info to it.
    // add button to add it to favorite box.

    // bonus

    // add rating buttons G PG PG-13 R

    // pause and start on click

    // build area for favorite gifs

    // Import news api.
    // Run fetch function to pull api in.

    // build area for favorite articles

    // figure out how to make horizantal scrolling sections to hold gifs and articles.


};


