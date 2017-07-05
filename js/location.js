
function Location(text,imgSrc,color,items,directions,special)
{
    this.text = text;
    this.imgSrc = imgSrc;
    this.color = color;
    this.items = items;
    this.directions = directions;
    if(special)
      this.special = special;
    else
      this.special = null;
}
Location.prototype.getInfo = function()
{
    alert("Location text: "+this.text+"\n"+
    "Location imgSrc: "+this.imgSrc+"\n"+
    "Location color: "+this.color+"\n"+
    "Location items: "+this.items+"\n"+
    "Location directions: " + this.directions + "\n" +
    "Location special: " + this.special + "\n"
    );
};
CreateLocations:
{
  var locations = []; // tablica lokacji, rozmiar tablicy: 6x7, pion, poziom
  for(var i=0; i<6; i++) {
      locations.push(new Array(7).fill(null));
  }
  locations[0][0]= new Location("You are inside a brimstone mine","11.gif", "rgb(235,211,64)",[],"-E--");
  locations[0][1]= new Location("You are at the entrance to the mine","12.gif", "rgb(89,93,87)",[],"-E-W");
  locations[0][2]= new Location("A hill","13.gif","rgb(117,237,243)",[],"-ESW");
  locations[0][3]= new Location("Some bushes","14.gif", "rgb(202,230,51)",[],"-E-W");
  locations[0][4]= new Location("An old deserted hut","15.gif", "rgb(220,204,61)",[],"-E-W");
  locations[0][5]= new Location("The edge of a forest","16.gif", "rgb(167,245,63)",[],"-E-W");
  locations[0][6]= new Location("A dark forest","17.gif","rgb(140,253,99)",[],"--SW");

  locations[1][0]= new Location("A man nearby making tar","21.gif", "rgb(255,190,99)",[],"-ES-");
  locations[1][1]= new Location("A timber yard","22.gif", "rgb(255,190,99)",[],"-ESW");
  locations[1][2]= new Location("You are by a roadside shrine","23.gif", "rgb(167,245,63)",[],"NESW");
  locations[1][3]= new Location("You are by a small chapel","24.gif", "rgb(212,229,36)",[],"-E-W");
  locations[1][4]= new Location("You are on a road leading to a wood","25.gif", "rgb(167,245,63)",[],"-ESW");
  locations[1][5]= new Location("You are in a forest","26 i 65.gif", "rgb(167,245,63)",[],"-E-W");
  locations[1][6]= new Location("You are in a deep forest","27 i 67.gif", "rgb(140,253,99)",[],"N--W");

  locations[2][0]= new Location("You are by the Vistula River","31.gif", "rgb(122,232,252)",[],"NE--");
  locations[2][1]= new Location("You are by the Vistula River","32.gif", "rgb(140,214,255)",[],"N--W");
  locations[2][2]= new Location("You are on a bridge over river","33.gif", "rgb(108,181,242)",[],"N-S-");
  locations[2][3]= new Location("You are by the old tavern","34.gif", "rgb(255,189,117)",[],"-E--");
  locations[2][4]= new Location("You are at the town's end","35.gif", "rgb(255,190,99)",[],"N-SW");
  locations[2][5]= new Location("You are in a butcher's shop","36.gif", "rgb(255,188,102)",[],"--S-");
  locations[2][6]= new Location("You are in a cooper's house","37.gif", "rgb(255,188,102)",[],"--S-");

  locations[3][0]= new Location("You are in the Wawel Castle","41.gif", "rgb(255,176,141)",[],"-E--");
  locations[3][1]= new Location("You are inside a dragon's cave","42.gif", "rgb(198,205,193)",[],"-E-W");
  locations[3][2]= new Location("A perfect place to set a trap","43.gif", "rgb(255,176,141)",[],"N--W");
  locations[3][3]= new Location("You are by the water mill","44.gif", "rgb(255,190,99)",[],"-E--");
  locations[3][4]= new Location("You are at a main crossroad","45.gif", "rgb(255,190,99)",[],"NESW");
  locations[3][5]= new Location("You are on a town street","46.gif", "rgb(255,190,99)",[],"NE-W");
  locations[3][6]= new Location("You are in a frontyard of your house","47.gif", "rgb(255,190,99)",[],"N-SW");

  locations[4][3]= new Location("You are by a swift stream","54.gif", "rgb(108,181,242)",[],"-E--");
  locations[4][4]= new Location("You are on a street leading forest","55.gif", "rgb(255,190,99)",[],"N-SW");
  locations[4][5]= new Location("You are in a woodcutter's backyard","56.gif", "rgb(255,190,99)",[],"--S-");
  locations[4][6]= new Location("You are in a shoemaker's house","57.gif", "rgb(254,194,97)",[],"N---");

  locations[5][3]= new Location("You are in a bleak funeral house","64.gif", "rgb(254,194,97)",[],"-E--");
  locations[5][4]= new Location("You are on a path leading to the wood","26 i 65.gif", "rgb(167,245,63)",[],"NE-W");
  locations[5][5]= new Location("You are at the edge of a forest","66.gif", "rgb(167,245,63)",[],"NE-W");
  locations[5][6]= new Location("You are in a deep forest","27 i 67.gif", "rgb(140,253,99)",[],"---W");
}
