# Input type color - events

```html
<input  type="color"  value="#35df90"  id="colorPicker"  name="colorPicker">
```

There are two events that can be used to detect changes to the color value:
* input
* change

The **input** event is fired every time the color changes.
The **change** event is fired when the user dismisses the color picker.

>In both cases, you can determine the new value of the element by looking at its value.

## How to develop
```js
var colorPicker;
var defaultColor = "#35df90";

colorPicker = document.querySelector("#colorPicker");

// set input value:
colorPicker.value = defaultColor;

// fires every time the color changes:
colorPicker.addEventListener("input", updateFirst, false);

// fires when the user dismisses the color picker:
colorPicker.addEventListener("change", updateAll, false)
```

### input event
When selecting a color in the palette, the new color value is set to the paragraph.
```js
function updateFirst(event) {
    var p = document.getElementById("firstP");
    if (p) p.style.color = event.target.value;
}
```

### change event
Just after closing the color picker, the new color value is set on all the paragraphs.
```js
function updateAll(event) {
    document.querySelectorAll("p").forEach(function (p) {
        p.style.color = event.target.value;
    });
}
```
