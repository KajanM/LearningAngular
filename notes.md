# Notes

## Bootstrapping the angular app

WebPack loads the `angular.json`

### angular.json

`"main": "src/main.ts"

### main.ts

`platformBrowserDynamic().bootstrapModule(AppModule)`

### app.module.ts

` bootstrap: [AppComponent]`

### app.component.ts
`selector: 'app-root'`

### index.html

```
<body>
  <app-root></app-root>
</body>
```

## Data binding

Binding data in a component to a template

### Interpolation

`{{user.name}}`
put the `expression` inside double curly braces

### Property binding

`<img [src]="user.imageUrl"/>`
put the `expression` inside double quotes

## Idempotent property

Each time the expression is evaluated, the result remains same.

## Event binding

`(click)="doSomething()"`