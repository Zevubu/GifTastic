window.onload = function (){
    console.log("window on load check");

    // Declair variables.
    let specialNames =["random", "trending"]
    let searchNames = ["Dune", "Klaus Nomi","Iggy Pop"]
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
    let addGifBTN = document.getElementById("add-gif")
    let gifInput = document.getElementById("gif-input")
    // gifInput = this.getAttribute("value");
    
    


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
        // buttonArea.innerHTML("");
        for (let i = 0; i < searchNames.length; i++){
            gifButton = document.createElement("button");
            gifButton.setAttribute("gif-id", searchNames[i]);
            gifButton.textContent = (searchNames[i]);
            buttonArea.append(gifButton);
            // it works!
        }
    };
    btnMaker();
    console.log(`number of buttons: ${allButton.length}`);

    addGifBTN.addEventListener("click", function(){
        event.preventDefault()
        console.log(gifInput.value)
        // gifInput.setAttribute("name", this.nodeName);
        let newGif = gifInput.value;
        console.log(newGif);
        searchNames.push(newGif);
        btnMaker();


    });


    for (i = 0; i < allButton.length; i++){
        console.log("for loop")
        allButton[i].addEventListener("click",function(){
            gifArea.innerHTML = " ";
            gifCount = 0;
            let queryURL = " ";
            console.log("button clicked")
            currentTitle = this.getAttribute("gif-id");
            
            queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${GIFKEY}&q=${currentTitle}&limit=25&offset=0&rating=G&lang=en`
           

            fetch(queryURL).then(function(response){
                return response.json()
            }).then(function(res){
                console.log(res)
                result = res.data;
                for( i = 0; i < result.length; i++){
                    
                    currentGif = result[i].images.fixed_height.url;
                    newDiv = document.createElement("div");
                    newDiv.setAttribute("class", "new-gif")
                    newGif = document.createElement("img");
                    newGif.setAttribute("src", currentGif);
                    newDiv.appendChild(newGif);

                    if(gifCount === 0){
                        newDivBox =  document.createElement("div");
                        newDivBox.setAttribute("id", `gif-box-0`);
                        gifArea.appendChild(newDivBox);
                    }
                    else if(gifCount%5 === 0){
                        newDivBox =  document.createElement("div");
                        newDivBox.setAttribute("id", `gif-box-${gifCount}`);
                        gifArea.appendChild(newDivBox);
                        
                    };
                    divBox0 = document.getElementById("gif-box-0");
                    divBox5 = document.getElementById("gif-box-5");
                    divBox10 = document.getElementById("gif-box-10");
                    divBox15 = document.getElementById("gif-box-15");
                    divBox20 = document.getElementById("gif-box-20");
                    if (gifCount < 5){
                        divBox0.appendChild(newDiv);
                    }
                    else if (gifCount < 10){
                        divBox5.appendChild(newDiv);

                    }
                    else if (gifCount < 15){
                        divBox10.appendChild(newDiv);

                    }
                    else if (gifCount < 20){
                        divBox15.appendChild(newDiv);

                    }
                    else if (gifCount < 25){
                        divBox20.appendChild(newDiv);

                    }
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


