# gulp-css2jsmap

convert css collection files to javascript map object 

[![NPM](https://nodei.co/npm/gulp-css2jsmap.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-css2jsmap/)

## Getting Started


you may install this plugin with this command:

```shell
npm install gulp-css2jsmap --save-dev
```

##Setup

Once the plugin has been installed, it may be enabled inside your gulpfile with this line of JavaScript:



```js
var css2jsmap = require('gulp-css2jsmap');


gulp.task('gen:stylejs', ['gen:css'], function() {
    return gulp.src('src/skins/**/*.css')
        .pipe(css2jsmap({
	        prefix: 'var colorsStyle = ',
            path: "colorstyle.js",
        }))
        .pipe(gulp.dest('src/content'));
})


```


##Options


**Plugin options** are:

| Property | Necessary |   Type   | Plugin default value |
| -------- | --------- | -------- | -------------------- |
| [prefix] | no        | 'String' | 'var css2jsmap = '   |
| [suffix] | no        | 'String' | ';'                  |
| path     | **yes**   | 'String' | undefined            |

	



##Generated

```javascript

var css2jsmap = {
	"filename1": "file contennt 1",
	"filename2": "file contennt 2",
	// ...

};

```


##Demo
see the [cozhihu](https://github.com/icai/cozhihu) project.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Gulp](http://gulpjs.com/).



## License
Copyright (c) 2016 Terry Cai. Licensed under the MIT license.
