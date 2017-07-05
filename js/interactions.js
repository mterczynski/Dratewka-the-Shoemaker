
class Interaction
{
    constructor(itemId, location, result, message, isMilestone)
    {   
        this.itemId = itemId;  
        this.location = location;  // kolejność: y,x
        this.result = result;  
        this.message = message;  
        this.isMilestone = isMilestone;
    }
    interact()
    {
        // 1. usuń przedmiot z inventory
        // 2. dodaj nowy
        // 3. wyświetl kmunikat ew. z timeoutem
        // 4. ew. dodaj milestone
        var textArea = document.getElementById("textUnderImage");
        if(Dratewka.y+""+Dratewka.x == this.location)
        {
            textArea.innerHTML = this.message; 
            Dratewka.inventory = null;
            var newItem = getItemById(this.result);
            if(newItem.usable)
            {
                Dratewka.inventory = newItem;
            }
            else
            {
                var location = locations[Dratewka.y][Dratewka.x];
                location.items.push(newItem);
            }
            if(this.isMilestone) 
            {
                milestonesReached ++;
            }
            setTimeout(function(){gameWindow.render();},2500);
            if(milestonesReached == 6 )
            {
                setTimeout(function()
                {
                    locations[3][2].items.push(getItemById(37));
                    textArea.innerHTML = "Your fake sheep is full of poison and ready to be eaten by the dragon";
                    setTimeout(function(){gameWindow.render();},2500);
                },2500);
            }
                
        }
        else
        {
            textArea.innerHTML = "Nothing happened";
            setTimeout(function(){gameWindow.render();},1000);
        }     
    }
};
var interactions = 
[
    //zamiast (L) sprawdzę czy item jest usable, jeżeli nie to dropnie na lokacji
    new Interaction(10, 45, 11, "You opened a tool shed and took an axe", false),
    new Interaction(11, 56, 12, "You cut sticks for sheeplegs", false),
    new Interaction(12, 32, 13, "You prepared legs for your fake sheep", true),
    new Interaction(14, 23, 15, "The tavern owner paid you money", false),
    new Interaction(15, 26, 16, "The cooper sold you a new barrel", false),
    new Interaction(16, 32, 17, "You made a nice sheeptrunk, OK", true),
    new Interaction(18, 25, 19, "The butcher gave you wool", false),
    new Interaction(19, 32, 20, "You prepared skin for your fake sheep", true),
    new Interaction(21, 46, 22, "You used your tools to make a rag", false),
    new Interaction(22, 32, 23, "You made a fake sheephead", true),
    new Interaction(25, 32, 26, "You prepared a solid poison", false),
    new Interaction(27, 10, 28, "You got a bucket full of tar", false),
    new Interaction(28, 32, 29, "You prepared a liquid poison", true),
    new Interaction(34, 46, 35, "You used your tools to make shoes", false),
    new Interaction(35, 30, 36, "The King is impressed by your shoes", false)
];
/*24, 00, 25, "You are digging... (timeout) and digging... (timeout) That\'s enough sulphur for you", OK TODO
gdy zebrane wszystkie przedmioty (6*OK), 32, 37, Your fake sheep is full of poison and ready to be eaten by the dragon DONE
37, 32, 30(L), The dragon noticed your gift... (timeout) The dragon ate your sheep and died! - podmiana grafiki na lokacji (martwy smok)! TODO
33, 32 + zabity smok, 34, You cut a piece of dragon's skin TODO
36 -> koniec gry - załadowanie odpowiedniej grafiki*/ //TODO