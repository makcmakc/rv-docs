# Button

Commonly used button.

### Basic usage

Use type, plain, round and circle to define Button's style.

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```


<a href="#" class="rv-btn">Button</a>


### Disabled Button 



### Loading Button 

Click the button to load data, then the button displays a loading state.

Set loading attribute to true to display loading state.


## Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element Plus icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

button/icon

:::