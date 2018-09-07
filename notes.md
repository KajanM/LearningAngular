# Notes

## Bootstrapping the angular app

WebPack loads the `angular.json`

### angular.json

`"main": "src/main.ts"

### main.ts

`platformBrowserDynamic().bootstrapModule(AppModule)`

### app.module.ts

`bootstrap: [AppComponent]`

### app.component.ts

`selector: 'app-root'`

### index.html

```angular
<body>
  <app-root></app-root>
</body>
```

## Passing event from parent component to child component

### events-list.component.ts

`<app-event-thumbnail [event]="event"></app-event-thumbnail>`

### event-thumbnail.component.ts

```angular
export class EventThumbnailComponent {
  @Input()
  event: any;
}
```

```angular
template: `
  <div class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div>Time: {{event?.time}}</div>
    <div>Price: \${{ event?.price }}</div>
    <div>
      <span>Location: {{event?.location?.address}}</span>
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
  </div>
  `,
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

