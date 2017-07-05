var mter = new Object();
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};
Array.prototype.moveLeft = function()
{
    var n = 1;
    var len = this.length;
    if(arguments.length == 1)
        n = arguments[0];
    for(var i=n;i>0;i--)
    {
        var first=this[0];
        for(var j=0;j<len;j++)
        {
            var copy=this[j+1];
            this[j]=copy;
        }
        this[len-1]=first;
    }
    return true;
}
Array.prototype.moveRight = function()
{
    var n = 1;
    var len = this.length;
    if(arguments.length == 1)
        n = arguments[0];
    for(var i=n;i>0;i--)
    {
        var last=this[len-1];
        for(var j=len-1;j>0;j--)
        {
            var copy=this[j-1];
            this[j]=copy;
        }
        this[0]=last;
    }
    return true;
}
mter["fadeOut"] = function(element, time, freq)
{
    if(arguments.length == 2)
        var freq = 60; // 60 hz
    var diff = time/freq;
    var time = 0;
    var startingOpacity = getComputedStyle(element).opacity;
    element.style.opacity = startingOpacity;
    var opacityDiff = startingOpacity / freq;
    for(var i=0; i<freq; i++, time += diff)
    {
        setTimeout(function(){element.style.opacity -= opacityDiff;},time); 
    }  
}
mter["fadeIn"] = function(element, time, freq)
{
    if(arguments.length == 2)
        var freq = 60; // 60 hz
    var diff = time/freq;
    var time = 0;
    var startingOpacity = getComputedStyle(element).opacity;
    element.style.opacity = Number(startingOpacity);
    var opacityDiff = Number((1 - startingOpacity) / freq);
    for(var i=0; i<freq; i++, time += diff)
    {
        setTimeout(function(){element.style.opacity = Number(element.style.opacity) + opacityDiff;},time);
    }  
}