Loading Mobile [![Build Status](http://peppercode.com.br/git/passing.svg)](http://peppercode.com.br/git/loadingMobile.js)
=========
This source was developed without dependencies to run on any device. Use freely and enjoy.

* Web site: http://peppercode.com.br

## Installation

Just copy the contents to your library folder

## Usage

1. Inject `loadingMobile` factory into your angular project.
2. Use `loadingMobile.show()` to open the loading or `loadingMobile.hide()` to close.
   By default `loadingMobile.show()` the object comes with default values of size, color and alpha color.
3. If you prefer, you can include some parameters `loadingMobile.show(size,hexa,alpha)` for circle css.
Obs. The hexa parameter must be filled with #. Ex. #FFFFFF

### Usage example

```javascript

//TO SHOW
loadingMobile.show('5vh','#FFFFFF','0.7');

//TO HIDE
loadingMobile.hide();

```

## Contributing to the project

Please follow [Contributing to open source](https://guides.github.com/activities/contributing-to-open-source/#contributing) for the contribution guidelines.

Please also follow [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), using [git-flow cheatsheet](http://danielkummer.github.io/git-flow-cheatsheet/) should do the job.

## License

Loading Mobile is under GNU GENERAL PUBLIC LICENSE.
Please see [License file](https://github.com/peppercodebr/angular-loadingMobile/blob/master/LICENSE) for more information.
