#Myworkout Styles Library

``npm run build`` will install dependencies and build files for distribution

``npm run dist`` or ``gulp`` will just build files for distribution if node_modules/ is already installed

``npm run watch`` or ``gulp watch`` to watch for changes, compile and distribute to dist/ on the fly

##The scope

- MSL provides SASS variables and mixins with Myworkout design details e.g. brand colours, fonts etc.

- MSL provides default CSS base rules following Myworkout design (for elements without specific class or 
id) e.g. default styles for links, paragraphs, lists, images etc.

- MSL provides CSS classes with comprehensive and complete styles for standard Myworkout elements that are 
expected to be used across multiple web projects - buttons, form elements, decoration elements and similar.

- MSL provides standard images that are expected to be used across multiple web projects e.g. logos, icons
and symbols in different sizes and colours.

- MSL provides ``docs.html`` page with following content:

    - Detailed installation instructions.
    - Documentation about all provided features.
    - Style guide reference.
    
##Dependencies

- MSL expects ``normalize.css`` to be included by host project. This can be achieved also by including
3rd party frameworks like Zurb Foundation or Bootstrap.