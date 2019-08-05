window.onload = function (){
    // console.log("window on load check");

    // Declair variables.
    let specialNames =["random", "trending"]
    let searchNames = ["Dune", "Klaus Nomi","Iggy Pop","Tank Girl", "Tom Waits"]
    let gifButton;
    let gifCount = 0;
    let gifNum = 16;
    let gifRate = ""; 
    let currentTitle;
    let currentGif;
    let pausedGif;
    let result;
    let newDivBox;
    let newDiv;
    let newGif;
    let boxTest;
    let divBox0;
    let divBox4;
    let divBox8;
    let divBox12;
    let divBox16;
    let divBox20;

   
    // var e = document.getElementById("elementId");
    // var value = e.options[e.selectedIndex].value;
    // var text = e.options[e.selectedIndex].tex
    let spButtonArea = document.getElementById("special-button-area")
    let buttonArea = document.getElementById("button-area");
    
    let gifArea = document.getElementById("gif-area");
    let articleArea = document.getElementById("article-area");
    let addGifBTN = document.getElementById("add-gif")
    let gifInput = document.getElementById("gif-input")

    let numberChooser = function(){
        let numChoice = document.getElementById("num-choice");
        gifNum = numChoice.options[numChoice.selectedIndex].value;
        // console.log(gifNum)
    }
    let ratingChooser = function(){
        let ratingChoice = document.getElementById("rating-choice");
        gifRate = ratingChoice.options[ratingChoice.selectedIndex].value;
        // console.log(gifRate)
    }
 
   

    
let initializSearch = function(){
        let allButton = document.getElementsByTagName("button");
        console.log(`number of buttons: ${allButton.length}`);
        for (i = 0; i < allButton.length; i++){
            
            allButton[i].addEventListener("click",function(){
                numberChooser();
                ratingChooser();
                gifArea.innerHTML = " ";
                gifCount = 0;
                let queryURL = " ";
                // console.log("button clicked")
                currentTitle = this.getAttribute("gif-id");
                
                queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${GIFKEY}&q=${currentTitle}&limit=${gifNum}&offset=0&rating=${gifRate}&lang=en`
            
                fetch(queryURL).then(function(response){
                    return response.json()
                }).then(function(res){
                    // console.log(res)
                    result = res.data;
                    for( i = 0; i < result.length; i++){
                        
                        currentGif = result[i].images.fixed_height.url;
                        pausedGif = result[i].images.fixed_height_still.url;
                        newDiv = document.createElement("div");
                        newDiv.setAttribute("class", "new-gif")
                        newGif = document.createElement("img");
                        newGif.setAttribute("src", pausedGif);
                        newGif.setAttribute("data-still", pausedGif);
                        newGif.setAttribute("data-animate", currentGif);
                        newGif.setAttribute("data-state", "still");
                        newGif.setAttribute("listener", `false`);
                        newGif.addEventListener("click", function(){
                            console.log("GIF clicked")
                            let state = this.getAttribute("data-state");
                            let still = this.getAttribute("data-still");
                            let animate = this.getAttribute("data-animate");

                            if(state === "animate"){

                                console.log("still")
                                this.setAttribute("src",still);
                                this.setAttribute("data-state", "still")

                            }
                            else{
                                console.log("animate")
                                this.setAttribute("src",animate);
                                this.setAttribute("data-state", "animate")
                            };
                        });
                        newDiv.appendChild(newGif);
                        if (gifCount < gifNum){
                            if(gifCount < 4){
                                boxTest = document.getElementById(`big-box-0`)
                                if(!boxTest){
                                newBigBox =  document.createElement("div");
                                newBigBox.setAttribute("id", `big-box-0`);
                                newBigBox.setAttribute("class", `big-box`);
                                gifArea.appendChild(newBigBox);
                                }
                                if(gifCount === 0){
                                    newDivBox =  document.createElement("div");
                                    newDivBox.setAttribute("id", `gif-box-2`);
                                    newDivBox.setAttribute("class", `gif-box`);
                                    newBigBox.appendChild(newDivBox);
                                }
                                else if(gifCount === 2){
                                    newDivBox =  document.createElement("div");
                                    newDivBox.setAttribute("id", `gif-box-4`);
                                    newDivBox.setAttribute("class", `gif-box`);
                                    newBigBox.appendChild(newDivBox);                            
                                };
                            }
                            else if(gifCount < 8){
                                boxTest = document.getElementById(`big-box-1`)
                                if(!boxTest){
                                    newBigBox =  document.createElement("div");
                                    newBigBox.setAttribute("id", `big-box-1`);
                                    newBigBox.setAttribute("class", `big-box`);
                                    gifArea.appendChild(newBigBox);
                                }
                                if(gifCount === 4){
                                    newDivBox =  document.createElement("div");
                                    newDivBox.setAttribute("id", `gif-box-6`);
                                    newDivBox.setAttribute("class", `gif-box`);
                                    newBigBox.appendChild(newDivBox);
                                }
                                else if(gifCount === 6){
                                    newDivBox =  document.createElement("div");
                                    newDivBox.setAttribute("id", `gif-box-8`);
                                    newDivBox.setAttribute("class", `gif-box`);
                                    newBigBox.appendChild(newDivBox);                            
                                };
                            }
                            else if(gifCount < 12){
                                boxTest = document.getElementById(`big-box-2`)
                                if(!boxTest){
                                    newBigBox =  document.createElement("div");
                                    newBigBox.setAttribute("id", `big-box-2`);
                                    newBigBox.setAttribute("class", `big-box`);
                                    gifArea.appendChild(newBigBox);
                                }
                                if(gifCount === 8){
                                    newDivBox =  document.createElement("div");
                                    newDivBox.setAttribute("id", `gif-box-10`);
                                    newDivBox.setAttribute("class", `gif-box`);
                                    newBigBox.appendChild(newDivBox);
                                }
                                else if(gifCount === 10){
                                    newDivBox =  document.createElement("div");
                                    newDivBox.setAttribute("id", `gif-box-12`);
                                    newDivBox.setAttribute("class", `gif-box`);
                                    newBigBox.appendChild(newDivBox);                            
                                };
                            }
                            else if(gifCount < 16){
                                boxTest = document.getElementById(`big-box-3`)
                                if(!boxTest){
                                    newBigBox =  document.createElement("div");
                                    newBigBox.setAttribute("id", `big-box-3`);
                                    newBigBox.setAttribute("class", `big-box`);
                                    gifArea.appendChild(newBigBox);
                                }
                                if(gifCount === 12){
                                    newDivBox =  document.createElement("div");
                                    newDivBox.setAttribute("id", `gif-box-14`);
                                    newDivBox.setAttribute("class", `gif-box`);
                                    newBigBox.appendChild(newDivBox);
                                }
                                else if(gifCount === 14){
                                    newDivBox =  document.createElement("div");
                                    newDivBox.setAttribute("id", `gif-box-16`);
                                    newDivBox.setAttribute("class", `gif-box`);
                                    newBigBox.appendChild(newDivBox);                            
                                };
                            }
                            else if(gifCount < 20){
                                boxTest = document.getElementById(`big-box-4`)
                                if(!boxTest){
                                    newBigBox =  document.createElement("div");
                                    newBigBox.setAttribute("id", `big-box-4`);
                                    newBigBox.setAttribute("class", `big-box`);
                                    gifArea.appendChild(newBigBox);
                                }
                                if(gifCount === 16){
                                    newDivBox =  document.createElement("div");
                                    newDivBox.setAttribute("id", `gif-box-18`);
                                    newDivBox.setAttribute("class", `gif-box`);
                                    newBigBox.appendChild(newDivBox);
                                }
                                else if(gifCount === 18){
                                    newDivBox =  document.createElement("div");
                                    newDivBox.setAttribute("id", `gif-box-20`);
                                    newDivBox.setAttribute("class", `gif-box`);
                                    newBigBox.appendChild(newDivBox);                            
                                };
                            }
                            else if(gifCount < 24){
                                boxTest = document.getElementById(`big-box-5`)
                                if(!boxTest){
                                    newBigBox =  document.createElement("div");
                                    newBigBox.setAttribute("id", `big-box-5`);
                                    newBigBox.setAttribute("class", `big-box`);
                                    gifArea.appendChild(newBigBox);
                                }
                                if(gifCount === 20){
                                    newDivBox =  document.createElement("div");
                                    newDivBox.setAttribute("id", `gif-box-22`);
                                    newDivBox.setAttribute("class", `gif-box`);
                                    newBigBox.appendChild(newDivBox);
                                }
                                else if(gifCount === 22){
                                    newDivBox =  document.createElement("div");
                                    newDivBox.setAttribute("id", `gif-box-24`);
                                    newDivBox.setAttribute("class", `gif-box`);
                                    newBigBox.appendChild(newDivBox);                            
                                };
                            }
                            newDivBox.appendChild(newDiv)


                            
                            // divBox0 = document.getElementById("gif-box-0");
                            // divBox0 = document.getElementById("gif-box-2");
                            // divBox4 = document.getElementById("gif-box-4");
                            // divBox8 = document.getElementById("gif-box-8");
                            // divBox12 = document.getElementById("gif-box-12");
                            // divBox16 = document.getElementById("gif-box-16");
                            // divBox20 = document.getElementById("gif-box-20");
                            // if (gifCount < 4){
                            //     );
                            // }
                            // else if (gifCount < 8){
                            //     divBox4.appendChild(newDiv);
                            // }
                            // else if (gifCount < 12){
                            //     divBox8.appendChild(newDiv);
                            // }
                            // else if (gifCount < 16){
                            //     divBox12.appendChild(newDiv);
                            // }
                            // else if (gifCount < 20){
                            //     divBox16.appendChild(newDiv);
                            // }
                            // else if (gifCount < 24){
                            //     divBox20.appendChild(newDiv);
                            // };
                            gifCount++; 
                            
                        };
                    };
                })
                // .then(function() {
                //     gifPauser()
                // });
            });
        };
        
    };

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
            initializSearch(); 
            // it works!
        }
    };
    btnMaker();
   

    addGifBTN.addEventListener("click", function(){
        event.preventDefault()
        buttonArea.innerHTML = ("");
        console.log(gifInput.value)
        let newGif = gifInput.value.trim();
        console.log(newGif);
        searchNames.push(newGif);
        btnMaker();
        // gifPauser();
    });
   

    
    // Import GIFY api.

    // X the fallowing insider of an on click function.
    // X Run fetch function to pull api in.
    // X Build section box for each gif then apply the gif to it and then add gif info to it.
    // add button to add it to favorite box.

    // bonus

    // X add rating buttons G PG PG-13 R
    // X add number of gif choice.

    // X pause and start on click

    // build area for favorite gifs

    // Import news api.
    // Run fetch function to pull api in.

    // build area for favorite articles

    // X figure out how to make horizantal scrolling sections to hold gifs and articles.


};


