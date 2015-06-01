# 9 Patch Generator

This Sketch plugin would convert selected artboards to 9patch layout, then export them to xxx.9.png at Desktop.

## How to use:

1. Put your layers in artboards. Each artboard would be export one PNG file.
2. Rename the artboard as you want, and no need to add ".9" or ".9.png".
3. Select one or more artboards, run the plugin, then you find PNG file on your desktop. It woud be in a file fold named like: "drawable-xhdpi" "drawable-xxhdpi" "drawable-xxxhdpi"...

## Note

You can edit the mark layers in the layers group "$MarksGroup", adjust the mark area. Only notice: the plugin know an artboard has been marked already by recognize that if the name of top group is "$MarksGroup". So do not delete, rename the group "$MarksGroup", and keep it on top.

## Installing Plugins

1. [Download the ZIP file](https://github.com/maundytime/sketch-9patch/archive/master.zip)
2. Unzip and copy the contents to the plugin folder (Open up Sketch, and go to `Plugins` › `Reveal Plugins Folder…` to open it.)

##Contact

* Email <maundytime@gmail.com>
* Follow [@CattLiu](http://weibo.com/maundytime) on Weibo

## Special Thanks
[@utom](http://twitter.com/utom)'s [Sketch Measure](https://github.com/utom/sketch-measure), thanks for his clean & useful code :)
