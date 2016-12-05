# Modularized Gulpfile
Testing a simple modularized Gulpfile with ES6.

### Gulpfile.babel.js
This file is used for creating tasks and call them in the folder "gulp-tasks". Here you will find dependencies (imports), custom tasks, watch task and global task.
Obs.: Global task don't start Watch task. It's just for building/compiling files into their respective directories.

### Gulp-config.js
This file just sets the path to your dist folder. You'll see it in every gulp task.

### Gulp-tasks / Folder
In this folder you'll find all tasks (module.exports) that gulpfile calls. Feel free to make pull requests for any corrections or improvements.
