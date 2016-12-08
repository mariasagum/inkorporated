var canvas = document.getElementById("drawydrawdraw");
    canvas.width = document.body.clientWidth; //document.width is obsolete
    canvas.height = window.innerHeight; //document.height is obsolete
var context = canvas.getContext("2d");
var drawing = false;

var space = document.body.clientWidth / 360;    
for (var i = 0; i < 360; i = i + 1){
    context.fillStyle = "hsl(" + i + ", 100%, 50%)";
    context.fillRect(i * space,window.innerHeight-50,space,50);
}

$(canvas).mousedown(function(e){ 
    drawing = true;
if(e.pageY>=window.innerHeight-50){
    var hue = Math.floor(e.pageX / space);
    context.fillStyle = "hsl(" + hue + ", 100%, 50%)";
}
});
$(canvas).mousemove(function(e){ 
    if (drawing && e.pageY<window.innerHeight-50){
    context.fillRect(e.pageX,e.pageY,5,5);
    } 

});
$(canvas).mouseup(function(e){ 
    drawing = false;
});