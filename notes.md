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