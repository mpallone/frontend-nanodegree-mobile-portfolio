## Website Performance Optimization portfolio project

#### Steps required to run application 
Simply point your browser at https://mpallone.github.io/frontend-nanodegree-mobile-portfolio/ 

#### Optimizations made 
* Minified JavaScript and CSS.
* Optimized all images using Pagespeed Insights.
* Move CSS file references to be after inline JS, and marked inline analytics JS as async.
* Marked analytics scripts as async. 
* Marked print.css as 'media="print"'.
* Replaced URL images with "local" images, so that I could optimize them. 
* Inlined style.css. 
* Scrolling in pizza.html now batches the style changes to avoid breaking the JS -> Style -> Layout rule. 
* Rewrote changePizzaSlices to compute width only once, and to set the width in a separate loop to avoid breaking the JS -> Style -> Layout rule

#### Building the project 
I use gulp to minify CSS and JS. Simply type `gulp watch`, and any file modifications in the src directory will cause JS and CSS minifiers to run. (This could be more efficient, but for this simple project, who cares.) 

To install gulp: 

`npm install gulp-cli -g`

`npm install gulp -D`

Once gulp is installed, type the following to install dependencies: 

`npm install --save-dev gulp-watch`

`npm install --save-dev gulp-minify`

`npm install gulp-clean-css --save-dev`