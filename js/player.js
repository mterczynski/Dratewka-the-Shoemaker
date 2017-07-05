function Player(x,y,inventory)
{
    this.x = x;
    this.y = y;
    this.inventory = inventory;
}
Player.prototype.getInfo = function()
{
    alert
    (
        "Player x: "+this.x+"\n"+
        "Player y: "+this.y+"\n"+
        "Player inventory: "+this.inventory+"\n"
    );
};
var Dratewka = new Player(6,3,null);
