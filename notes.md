# Notes

## Bootstrapping the angular app

WebPack loads the `angular.json`

### angular.json

`"main": "src/main.ts"`

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

## Hiding elements

* using `*ngIf` will comment out the code if expression is `false`
* using `hidden` property binding will set the `hidden` property of the `HTML` element to `true` if the expression is `true`
* if not rendering on the DOM will serve performance use `*ngIf`
* if need to show and hide frequently (say for mouse click) then use property binding

`<div *ngIf="event?.onlineUrl">Online URL: {{event.onlineUrl}}</div>`

`<div [hidden]="!event?.location">`

## CSS class binding

`<div [class.green]="event?.time === '8:00 am'" ...>`

### ngClass

`<div [ngClass]=getStartTimeClass() ...`

#### Method-1: return an Object

```angular
getStartTimeClass() {
  const isEarlyStart = this.event && this.event.time === '8:00 am';
  return {green: isEarlyStart, bold: isEarlyStart};
}
```

#### Method-2: return a `String` of classes

```angular
getStartTimeClass() {
  if (this.event && this.event.time === '8:00 am') {
    return 'green bold'
  }
  return '';
}
```

#### Method-3: return an `Array` of classes

```angular
getStartTimeClass() {
  if (this.event && this.event.time === '8:00 am') {
    return ['green', 'bold']
  }
  return [];
}
```

