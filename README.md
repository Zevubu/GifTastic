# GifTastic
before you start 
Create a keys.js file inside the assets/javascript folder. With you're own Giphy key under a variable called GIFKEY.

A page allowing you to search for gifs of your choosing using the GIPHY API.

Click on the GIF you would like to see to play it click it again to pause. 

I made this app with pure Javascript no Jquery.
all buttons and gifs and surrounding sectioning are made in javascript. 

after perhaps to much time I final figured out a way to make it stop applying up word of 4 event listeners to each GIF! IE they finally all play and pause when clicked.

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

made gifs section them selves into separate boxes of 4. So they'll lay better when it comes time for css. 
