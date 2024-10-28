# Music Festival Project

![](./img/thumb/5.jpg)

This project is part of the Desarrollo Web Completo course taught by Professor Juan De la Torre.<br>
I will create a Onepage-type website in which three specific sections will be shown:
- first the concert line up
- second a gallery of images 
- and finally the information to obtain tickets for the event  

## Technologies I will be using

✔ HTML 5 <br>
✔ CSS 3 <br>
✔ JavaScript <br>
✔ Node.js &nbsp; v20.11.1<br>
✔ Gulp &nbsp; v5.0.0<br>
✔ NPM &nbsp; v10.9.0<br>
✔ SASS &nbsp; v1.72.0<br>
✔ gulp-sass (plugin) &nbsp; v5.1.0<br>

### Commands to install json package
---

```bash
npm init
```

### Commands to recover node_modules directory
---

```bash
npm install
npm i
```

### Commands to install dev dependencies for SASS and Gulp
---

```bash
npm install sass
npm install gulp
```
```bash
npm install sass --save-dev
npm install gulp --save-dev
```

### dev Dependencies used in the project
---

```json
"devDependencies": {
    "gulp": "^5.0.0",
    "gulp-sass": "^5.1.0",
    "sass": "^1.72.0"
}
```

### Commands to run scripts 
---

```bash
npm run sass
npm run dev
```

### scripts used in the project
---

```json
"scripts": {
    "sass": "sass --watch src/scss:build/css",
    "dev": "gulp"
}
```

### Commands to run gulpfile.js tasks with npx
---

```bash
npx gulp task
```

### Link to gulp.js
---

Needed to make the connection between SASS and Gulp in the gulpfile.js<br>
* In the search bar type _"gulp sass"_
* Select the plugin called **_gulp-sass_** - "gulp plugin for sass" for installation documentation  
📌 [https://gulpjs.com/plugins](https://gulpjs.com/plugins)

### Command to install gulp-sass dev dependency
---

```bash
npm i --save-dev gulp-sass
```

### Link to Normalize.css
---

We will use Normalize.css to make browsers display all elements more consistently
* Select and copy all CSS code:<br>
📌[https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)
