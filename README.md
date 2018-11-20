# Votacao Servidor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## DEPENDENCES:

### [NGX-BOOTSTRAP](https://valor-software.com/ngx-bootstrap/#/getting-started) 

```
npm install ngx-bootstrap bootstrap jquery popper.js --save
```
add to file src/_custom.scss
```
$border-radius: 0 !important;
$border-radius-sm: $border-radius !important;
$border-radius-lg: $border-radius !important;

@import '~bootstrap/scss/bootstrap';
```

add to file angular.json:

```
"styles": [
  "src/_custom.scss",
  "src/styles.scss"
],
```

```

"scripts": [
  "./node_modules/jquery/dist/jquery.slim.min.js",
  "./node_modules/bootstrap/dist/js/bootstrap.js"
]
```



