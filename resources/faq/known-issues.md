# Known Issues

## `<dom-repeat>` Style Recycling

### TL:DR

Polymer's dom-repeat recycles information previously used in dom-repeated items. This makes list rendering more efficient. However, because of this, if you change the css styles of a displayed item, those changes will persist in that displayed position, even if you've re-ordered the information in the array that the dom-repeat is pulling from.

### The Problem

If you have four users: 

`["Walter", "Sara", "Julie", "Mark"]`

A dom-repeat would basically create a slot for each user. Notice that one of them is styled red.

```html
<div style="color:red">Walter</div>  <!--slot 1-->
<div style="color:black">Sara</div>  <!--slot 2-->
<div style="color:black">Julie</div> <!--slot 3-->
<div style="color:black">Mark</div>  <!--slot 4-->
```

You might expect that moving Walter to the end of the array would keep Walter's name red, but the slots do not move, only the data:

```html
<div style="color:red">Sara</div>     <!--slot 1-->
<div style="color:black">Julie</div>  <!--slot 2-->
<div style="color:black">Mark</div>   <!--slot 3-->
<div style="color:black">Walter</div> <!--slot 4-->
```

The dom-repeat template does this to increase performance, but the downside is that any changes you make to a dom-repeated element attributes or styles, won't move with the data inside of them.

### Solution 1: Set The Style With A Databound Function

Dynamically set the attributes either using a method call that returns a truthy or falsey value, or in this case a string that sets the value of the attribute based on data in the array object.


```html
<template is="dom-repeat" items="[[userArray]]">
  <div class="user-name" on-click="selectUser">
    <div style$="color: [[setColor(item.selected)]]">[[item.name]]</div>
  </div>
</template>
```

```js
// Property in custom element
userArray: {
  type: Array,
  value: [
    { name: "Walter", selected: false },
    { name: "Sara", selected: false },
    { name: "Julie", selected: false },
    { name: "Mark", selected: false },
    { name: "Allie", selected: false },
    { name: "Chuck", selected: false }
  ]
}

setColor(isSelected) {
    return isSelected ? 'red' : 'black';
  }
```

Here is a codepen example of this solution:

- [Problem](https://codepen.io/anon/pen/WaGeXV?editors=1011)
- [Solution](https://codepen.io/anon/pen/LgRYLM?editors=1010)




