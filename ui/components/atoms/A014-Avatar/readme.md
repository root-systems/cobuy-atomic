## Avatar

This atom is structured with priority render order:

 - Custom image
 - Custom text/initials
 - Icon by iconname

 This means you can start by defining a placeholder icon, then if you have props.text (eg initials) and later when you have an image src you can pass that down and it will overide it. All without having to remove the existing props :)