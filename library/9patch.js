function Set9Patch(artboard){
  var length = [[artboard layers] count];
  if ([[artboard layers] objectAtIndex:length-1].name() != "$MarksGroup")
  {
    [[artboard absoluteRect] expandBy:1];
    for (var i=0;i<length;i++)
    {
      var l = [[artboard layers] objectAtIndex:i];
      var frameL = l.frame();
      var temX = [frameL x];
      var temY = [frameL y];
      frameL.x = temX + 1;
      frameL.y = temY + 1;
    }

    rect = getRect(artboard);
    group = addGroup("$MarksGroup", artboard),

    top = addShape('top', group);
    setPosition(top, parseInt(rect.width*0.5), 0, false);
    setSize(top, 1, 1);
    setColor(top, '#000000', 1);

    left = addShape('left', group);
    setPosition(left, 0, parseInt(rect.height*0.5), false);
    setSize(left, 1, 1);
    setColor(left, '#000000', 1);

    right = addShape('right', group);
    setPosition(right, rect.width-1, 1, false);
    setSize(right, 1, rect.height-2);
    setColor(right, '#000000', 1);

    bottom = addShape('bottom', group);
    setPosition(bottom, 1, rect.height-1, false);
    setSize(bottom, rect.width-2, 1);
    setColor(bottom, '#000000', 1);
  }
}

function Export9Patch(resolutionPath){
  var artboards = selection;
  var slicesNameList = "";
  var path = "~/Desktop/"

  if ([artboards count] > 0){
    for (var i = 0; i < [artboards count]; i++){
      var artboard = artboards[i];
      Set9Patch(artboard);
      
      var temNamesList = slicesNameList
      slicesNameList = temNamesList + artboard.name() + ".9.png" + ', ';

      if (in_sandbox()) {
        sandboxAccess.accessFilePath_withBlock_persistPermission(path, function(){
        [doc saveArtboardOrSlice:artboard toFile: path + resolutionPath + '/' + artboard.name() + ".9.png"];
        }, true)
      } else {
        [doc saveArtboardOrSlice:artboard toFile: path + resolutionPath + '/' + artboard.name() + ".9.png"];
      }
    }
    [doc showMessage: slicesNameList + "exported to " + resolutionPath]
  }
  else alert("Make sure you've selecte artboards that contain layers you want to export as 9Patch.");
}