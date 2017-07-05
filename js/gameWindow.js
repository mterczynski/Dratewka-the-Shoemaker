var gameWindow
=
{
    render:function()
    {
        var container = document.getElementById("container");
        var game = document.createElement("div");
            var locationHeader = document.createElement("h1");
            var locationImage = document.createElement("div");
                var originalImage = document.createElement("img");
                var filterGlass = document.createElement("div");
            var textUnderImage = document.createElement("div");
                var youCanGo = document.createElement("div");
                var youSee = document.createElement("div");
                var youAreCarrying = document.createElement("div");
                var myBr = document.createElement('br');
                var whatNow = document.createElement("div");
            var compass = document.createElement("img");
                var compass_n = document.createElement("span");
                var compass_e = document.createElement("span");
                var compass_s = document.createElement("span");
                var compass_w = document.createElement("span");

        container.innerHTML="";

        Appending:
        {
            container.appendChild(game);
            game.appendChild(locationHeader);
            game.appendChild(locationImage);
                locationImage.appendChild(originalImage);
                locationImage.appendChild(filterGlass);
            game.appendChild(textUnderImage);
                textUnderImage.appendChild(youCanGo);
                textUnderImage.appendChild(youSee);
                textUnderImage.appendChild(youAreCarrying);
                textUnderImage.appendChild(myBr);
                textUnderImage.appendChild(whatNow);
            game.appendChild(compass);
            game.appendChild(compass_n);
            game.appendChild(compass_e);
            game.appendChild(compass_s);
            game.appendChild(compass_w);
        }
        SettingAttributes:
        {
            game.setAttribute("id","game")

            locationHeader.setAttribute("id","locationHeader");

            locationImage.setAttribute("id","locationImage");
                originalImage.setAttribute("id","originalImage");
                originalImage.setAttribute("alt","");
                originalImage.setAttribute("src","gfx/location/" + locations[Dratewka.y][Dratewka.x].imgSrc);
                filterGlass.setAttribute("id","filterGlass");

            textUnderImage.setAttribute("id","textUnderImage");
                youCanGo.setAttribute("id","youCanGo");
                youSee.setAttribute("id","youSee");
                youAreCarrying.setAttribute("id","youAreCarrying");
                whatNow.setAttribute("id","whatNow");
            compass.setAttribute("id","compass");compass.setAttribute("src","gfx/kompas4.bmp");compass.setAttribute("alt","");
                compass_n.setAttribute("id","compass_n");
                compass_e.setAttribute("id","compass_e");
                compass_s.setAttribute("id","compass_s");
                compass_w.setAttribute("id","compass_w");
        }
        SettingInnerHTML:
        {
            locationHeader.innerHTML=locations[Dratewka.y][Dratewka.x].text;
            
            compass_n.innerHTML = "N";
            compass_e.innerHTML = "E";
            compass_s.innerHTML = "S";
            compass_w.innerHTML = "W";

            var myInnerHTML="You can go ";
            if(locations[Dratewka.y][Dratewka.x].directions.includes("N"))
            {
                myInnerHTML+="NORTH, ";
                compass_n.style.opacity = 1;
            }  
            if(locations[Dratewka.y][Dratewka.x].directions.includes("E"))
            {
                compass_e.style.opacity = 1;
                myInnerHTML+="EAST, ";
            }   
            if(locations[Dratewka.y][Dratewka.x].directions.includes("S"))
            {
                myInnerHTML+="SOUTH, ";
                compass_s.style.opacity = 1;
            }   
            if(locations[Dratewka.y][Dratewka.x].directions.includes("W"))
            {
                compass_w.style.opacity = 1;
                myInnerHTML+="WEST, ";
            }
                
            if(myInnerHTML.charAt(myInnerHTML.length-2)==",")
                myInnerHTML = myInnerHTML.slice(0, -2);
            youCanGo.innerHTML=myInnerHTML;

            var locItem = "";
            if(locations[Dratewka.y][Dratewka.x].items.length == 0)
                locItem = "nothing";
            else
            {
                for(var item of locations[Dratewka.y][Dratewka.x].items)
                {
                    locItem += item.fullName+", ";
                }
                locItem = locItem.slice(0, -2);
            }
            youSee.innerHTML ="You see " + locItem;
            var inventory = "";
            if(!Dratewka.inventory)
                inventory = "nothing"
            else
                inventory = Dratewka.inventory.fullName;
            youAreCarrying.innerHTML="You are carrying " + inventory;
            whatNow.innerHTML = "What now? " + "<span id='whatNowUserInput'></span>"
        }
        SettingGlassColor:
        {
            var myColor=locations[Dratewka.y][Dratewka.x].color;
            myColor= ( "rgba" + myColor.slice(3) ).slice(0,-1) + ",1)";
            filterGlass.style.backgroundColor=myColor;
        }
    },
    showVocabulary:function()
    {

    },
}
