//grafiki:
//		Czołówka
//		Wstęp - A
//		Wstęp - B
		
//podczas czołówki odgrywany jest hejnał Krakowa (nie musi być ten z gry)

//końcowa grafika (wygrana)- wedle uznania (byle nie "obrażała" uczuć religijnych itp.)
//TODO koniec gry
var main=
{
    createContainer:function()
    {
        var container=document.createElement("div");
        container.setAttribute("id","container");
        document.body.appendChild(container);
    },
    start:function()
    {
        var start1 = "<img src='gfx/start1.jpg' alt='error' class='startingImg startingImg1'>";
        var start2 = "<img src='gfx/start2.jpg' alt='error2' class='startingImg startingImg2'>";
        var start3 = "<img src='gfx/start3.jpg' alt='error3' class='startingImg startingImg3'>";
        document.body.innerHTML += start1 + start2 + start3;  
        start1 = document.getElementsByClassName("startingImg1")[0];
        start2 = document.getElementsByClassName("startingImg2")[0];
        start3 = document.getElementsByClassName("startingImg3")[0];
        mter.fadeIn(start1,1500); 
        setTimeout(function()
        {
            var currentScreen = 1;
            var isBusy = false;
            function nextScreen()
            {
                if(!isBusy)
                {
                    var running = document.getElementsByClassName("startingImg"+currentScreen)[0];
                    if(running)
                    {
                        mter.fadeOut(running, 1000);
                        isBusy = true;
                        setTimeout(function(){isBusy=false},1000)
                        currentScreen++;
                    }
                    if(currentScreen<4)
                    {
                        setTimeout(function()
                        {
                            running = document.getElementsByClassName("startingImg"+currentScreen)[0];
                            mter.fadeIn(running, 1000);
                            isBusy = true;
                            setTimeout(function(){isBusy = false},1000);
                        },1000);
                    }
                    else
                    {
                        if(running)
                        {
                            setTimeout(function()
                            {
                                document.removeEventListener("keydown", keyEvent1);
                                gameWindow.render();
                                document.getElementById("game").style.opacity = 0;
                                mter.fadeIn(document.getElementById("game"),1000);
                                main.addKeyboardEvent();
                            },1000);
                        }
                    }
                }
            }
            setTimeout(function()
            {
                nextScreen();
            },27000);
            var keyEvent1 = function()
            {
                nextScreen();
                audio.pause();
            };
            document.addEventListener("keydown", keyEvent1);
        },1500);
        var audio = new Audio('audio/hejnal.mp3');
        audio.volume = .1;
        audio.currentTime = 5; 
        audio.play();
        
        
        
    },
    showVocabulary:function()
    {
        var textArea=document.getElementById("textUnderImage");
        textArea.innerHTML=
        "NORTH or N, SOUTH or S<br>"+
        "WEST or W, EAST or E<br>"+
        "TAKE (object) or T (object)<br>"+
        "DROP (object) or D (object)<br>"+
        "USE (object) or U (object)<br>"+
        "GOSSIP or G, VOCABULARY or V<br>"+
        "Press any key";
    },
    showGossips:function()
    {
        var textArea=document.getElementById("textUnderImage");
        textArea.innerHTML=
        "The  woodcutter lost  his home key...<br>"+
		"The butcher likes fruit... The cooper<br>"+
		"is greedy... Dratewka plans to make a<br>"+
		"poisoned  bait for the dragon...  The<br>"+
		"tavern owner is buying food  from the<br>"+
		"pickers... Making a rag from a bag...<br>"+
		"Press any key";
    },
    executeCommand:function(command)
    {
        var textArea=document.getElementById("textUnderImage");
        var whatNow = document.getElementById("whatNow");
        switch (command.split(" ")[0])
        {
            //--------------------------------Directions---------------------------------------
            case "N":
            case "NORTH":
                if( locations[Dratewka.y][Dratewka.x].directions.includes("N") )
                {
                    Dratewka.y--;
                    whatNow.innerHTML= "You are going north...";
                    setTimeout(function(){gameWindow.render()},1000);
                }   
                else
                {
                    whatNow.innerHTML= "You can\'t go that way";
                    setTimeout(function(){gameWindow.render()},1000);
                }
                break;

            case "E":
            case "EAST":
                if( locations[Dratewka.y][Dratewka.x].directions.includes("E") )
                {
                    Dratewka.x++;
                    whatNow.innerHTML= "You are going east...";
                    setTimeout(function(){gameWindow.render()},1000);
                }   
                else
                {
                    whatNow.innerHTML= "You can\'t go that way";
                    setTimeout(function(){gameWindow.render()},1000);
                }
                break;
            case "S":
            case "SOUTH":
                if( locations[Dratewka.y][Dratewka.x].directions.includes("S") )
                {
                    Dratewka.y++;
                    whatNow.innerHTML= "You are going south...";
                    setTimeout(function(){gameWindow.render()},1000);
                }   
                else
                {
                    whatNow.innerHTML= "You can\'t go that way";
                    setTimeout(function(){gameWindow.render()},1000);
                }
                break;
            case "W":
            case "WEST":
                if( locations[Dratewka.y][Dratewka.x].directions.includes("W") )
                {
                    if(Dratewka.y == 3 && Dratewka.x == 1 && !isDragonDead)
                    {
                       // próba wejścia na lokację za smokiem (warunkowa z zamkiem)
		                 // "You can't go that way... (timeout) The dragon sleeps in a cave! (timeout)"
                        whatNow.innerHTML =  "You can\'t go that way";
                        setTimeout(function(){whatNow.innerHTML += "."},500);
                        setTimeout(function(){whatNow.innerHTML += "."},1000);
                        setTimeout(function(){whatNow.innerHTML += "."},1500);
                        setTimeout(function(){whatNow.innerHTML = "The dragon sleeps in a cave!"},2500);
                        setTimeout(function(){gameWindow.render()},4100);
                    }
                    else
                    {
                        Dratewka.x--;
                        whatNow.innerHTML= "You are going west...";
                        setTimeout(function(){gameWindow.render()},1000);
                    }
                        
                    
                }   
                else
                {
                    whatNow.innerHTML= "You can\'t go that way";
                    setTimeout(function(){gameWindow.render()},1000);
                }
                break;
            //--------------------------------Vocabulary-----------------------------------------
            case "V":
            case "VOCABULARY":
                currentGameState="pressAnyKey"
                main.showVocabulary();
                break;
            //--------------------------------Others
            case "":
                break;

            case "T":
            case "TAKE":
                var splitted = command.split(" ");
                var request = "";
                for(var i=1; i<splitted.length; i++)
                {
                    request += splitted[i] + " ";
                }
                request = request.slice(0,-1);
                var item = locations[Dratewka.y][Dratewka.x].items.filter(function (el) {return el.shortName == request;});
                if(item.length == 0)
                {
                    whatNow.innerHTML = "There isn\'t anything like that here";
                    setTimeout(function(){gameWindow.render()},1300);
                }
                else if(Dratewka.inventory != null)
                {
                    whatNow.innerHTML = "You are carrying something";
                    setTimeout(function(){gameWindow.render()},1300);
                }
                else if(item[0].usable == false)
                {
                    whatNow.innerHTML = "You can\'t carry it"
                    setTimeout(function(){gameWindow.render()},1300);
                }
                else
                {
                    whatNow.innerHTML = "You are taking " + item[0].fullName;
                    Dratewka.inventory = item[0];  
                    var pos = locations[Dratewka.y][Dratewka.x].items.map(function(e) { return e; }).indexOf(item[0]);
                    locations[Dratewka.y][Dratewka.x].items.splice(pos,1);
                    setTimeout(function(){gameWindow.render()},1000);
                }          
                break;
            case "D":
            case "DROP":
                var splitted = command.split(" ");
                var request = "";
                for(var i=1; i<splitted.length; i++)
                {
                    request += splitted[i] + " ";
                }
                request = request.slice(0,-1);
                if(Dratewka.inventory == null)
                {
                    whatNow.innerHTML = "You are not carrying anything";
                    setTimeout(function(){gameWindow.render()},1000);
                }
                else
                {
                    var howManyItems = 0;
                    for(var i=0; i<locations[Dratewka.y][Dratewka.x].items.length; i++)
                    {
                        if(locations[Dratewka.y][Dratewka.x].items[i].usable == true)
                           howManyItems++; 
                    }
                    if(howManyItems<3)
                    {
                        if(Dratewka.inventory.shortName == request)
                        {
                            whatNow.innerHTML = "You are about to drop " + Dratewka.inventory.fullName;
                            locations[Dratewka.y][Dratewka.x].items.push(Dratewka.inventory)
                            Dratewka.inventory = null;
                            setTimeout(function(){gameWindow.render()},1000);
                        }
                        else
                        {
                            whatNow.innerHTML = "You are not carrying it";
                            setTimeout(function(){gameWindow.render()},1000);
                        }
                    }
                    else
                    {
                        whatNow.innerHTML = "You can\'t store any more here";
                        setTimeout(function(){gameWindow.render()},1000);
                    }
                }
                break;
            case "U":
            case "USE":
                var splitted = command.split(" ");
                var request = "";
                for(var i=1; i<splitted.length; i++)
                {
                    request += splitted[i] + " ";
                }
                request = request.slice(0,-1);
                console.log(request)
                if(!Dratewka.inventory || Dratewka.inventory.shortName != request)
                {
                    whatNow.innerHTML = "You aren\'t carrying anything like that";
                    setTimeout(function(){gameWindow.render()},1000);
                }
                else
                {
                    var id = Dratewka.inventory.id
                    console.log(Dratewka.inventory.id)
                    if(id == 24 && Dratewka.x == 0 && Dratewka.y == 0)
                    {
                        Dratewka.inventory = null;
                        var item = getItemById(25);
                        if(item.usable)
                            Dratewka.inventory = item;
                        else
                            locations[0][0].items.push(item);
                        whatNow.innerHTML = "You are digging";
                        setTimeout(function(){whatNow.innerHTML+="."},500);
                        setTimeout(function(){whatNow.innerHTML+="."},1000);
                        setTimeout(function(){whatNow.innerHTML+="."},1500);
                        setTimeout(function(){whatNow.innerHTML+=" and digging"},2500);
                        setTimeout(function(){whatNow.innerHTML+="."},3000);
                        setTimeout(function(){whatNow.innerHTML+="."},3500);
                        setTimeout(function(){whatNow.innerHTML+="."},4000);
                        setTimeout(function(){whatNow.innerHTML= "That\'s enough sulphur for you"},5000);
                        setTimeout(function(){gameWindow.render()},7500);
                        milestonesReached ++;
                    }
                    else if(id == 37)
                    {
                        //37, 32, 30(L), The dragon noticed your gift... (timeout) The dragon ate your sheep and died! - podmiana grafiki na lokacji (martwy smok)!
                        if(Dratewka.y == 3 && Dratewka.x == 2)
                        {
                            Dratewka.inventory = null;
                            whatNow.innerHTML = "The dragon noticed your gift";
                            setTimeout(function(){whatNow.innerHTML += "."},500);
                            setTimeout(function(){whatNow.innerHTML += "."},1000);
                            setTimeout(function(){whatNow.innerHTML += "."},1500);
                            setTimeout(function(){whatNow.innerHTML = "The dragon ate your sheep and died!"},2500);
                            setTimeout(function(){gameWindow.render()},3500);
                            locations[3][2].items.push(getItemById(30));
                            locations[3][2].imgSrc = "gfx/dragon.bmp";
                            isDragonDead = true;
                        }   
                        else
                        {
                            whatNow.innerHTML = "Nothing happened";
                            setTimeout(function(){gameWindow.render()},1000);
                        }
                        
                    }
                    else if(id == 33)
                    {
                        //33, 32 + zabity smok, 34, You cut a piece of dragon\'s skin
                        if(isDragonDead && Dratewka.y == 3 && Dratewka.x == 2)
                        {
                            Dratewka.inventory = null;
                            Dratewka.inventory = getItemById(34);
                            whatNow.innerHTML = "You cut a piece of dragon\'s skin";
                            setTimeout(function(){gameWindow.render()},1500);
                        }
                    }
                    else if(id == 36)
                    {
                        //36 -> koniec gry - załadowanie odpowiedniej grafiki
                        //fadeOut
                        //fadeIn grafiki
                        var end1 = "<img src='gfx/endGame1.jpg' alt='' id='endGame1'>";
                        var end2 = "<img src='gfx/endGame2.jpg' alt='' id='endGame2'>";
                        document.body.innerHTML += end1 + end2;
                        end1 = document.getElementById("endGame1");
                        end2 = document.getElementById("endGame2");
                        mter.fadeOut(document.getElementById("game"),1000); 
                        setTimeout(function(){mter.fadeIn(end2,1000);},1000)
                        /*setTimeout(function()
                        {
                            mter.fadeIn(end1,1000);
                            function endGameKeyEvent()
                            {
                                mter.fadeOut(end1,1000);
                                setTimeout(function()
                                {
                                    mter.fadeIn(end2,1000);
                                },1000)
                            }
                            setTimeout(function()
                            {
                                whatNow.innerHTML ="";
                                document.addEventListener("keydown",endGameKeyEvent);
                            },1000);
                        },1000);
                        currentGameState = "over";*/
                    }
                    else
                    {
                        var itemAction = interactions.filter(function(el){return el.itemId == id})[0];
                        if(itemAction === undefined || itemAction.length == 0)
                        {
                            whatNow.innerHTML = "Nothing happened";
                            setTimeout(function(){gameWindow.render()},1000);
                        }  
                        else
                            itemAction.interact();
                    }
                }
                break;
            case "G":
            case "GOSSIPS":
                currentGameState = "pressAnyKey";
                main.showGossips();
                break;

            default:
                document.getElementById("whatNow").innerHTML="Try another word or V for vocabulary";
                setTimeout(function(){gameWindow.render()},1000);
                break;
        }
    },
    addKeyboardEvent:function()
    {
        //document.removeEventListener("keydown", keyDownTextField, false);
        document.addEventListener("keydown", keyDownTextField);
        document.addEventListener("keyup", myKeyUp);
        function keyDownTextField(e)
        {
            var keyCode = e.keyCode;
            //console.log(keyCode)
            var mySpan=document.getElementById("whatNowUserInput");
            //var bannedInputs = [9,16,18,45,46,112,113,114,115,116,117,118,119,120,121,122,123];
            var legalInputs =[8,13,16,20,32];
            for(var i=65;i<91;i++)
            {
                legalInputs.push(i)
            }
            if(currentGameState=="pressAnyKey")
            {
                gameWindow.render();
                currentGameState="whatNow";
            }
            else if (legalInputs.includes(e.keyCode) && mySpan && mySpan.innerHTML!="Try another word or V for vocabulary")
            {
                switch(keyCode)
                {
                    case 8: //backspace
                        mySpan.innerHTML=mySpan.innerHTML.slice(0,-1);
                        break;
                    case 13: //enter
                        main.executeCommand( mySpan.innerHTML );
                        break;
                    case 16: //shift
                        isShiftPressed = true;
                        break;
                    case 20: //caps lock
                        isCapsOn = !isCapsOn;
                        break;
                    default:
                        var key=String.fromCharCode(keyCode)
                        if(!isCapsOn && !isShiftPressed)
                            key = key.toLowerCase();
                        
                        mySpan.innerHTML+=key
                        break;
                }
            }
           /* else if(document.getElementById("whatNow") && document.getElementById("whatNow").innerHTML=="Try another word or V for vocabulary")
            {
                if(keyCode==86)
                {
                    main.executeCommand("V")
                }
                else
                {
                    gameWindow.render();
                }
            }*/
        }
        function myKeyUp(e)
        {
            var keyCode = e.keyCode;
            switch(keyCode)
            {
                case 16: //shift
                    isShiftPressed = false;
                    break;
            }
        }
    },
}
