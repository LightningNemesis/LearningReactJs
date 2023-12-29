## How to make custom components (Buttons)
1. Define a Button's purpose
</br> For example: Purpose ~ Drawing user's attention to a dangerous action => color red


2. Define a *short name* for a Button type 
</br> For example: *Primary, Secondary*


3. Create a **single** Button component
</br> Define props for characteristics: ```outline?, rounded?, primary?```


Let us say we have a custom component:
```javascript
function Buttons({children}) {
    return <button>{children}</button>;
  }
  
  export default Buttons
```

We can pass ```strings```, ```components``` from parent component as props to our custom component:
```javascript
# Inside App.js
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button>Click Here!</Button>
      </div>
      <div>
        <Button><AnotherComponent/></Button> 
      </div>      
    </div>
  );
}

export default App;
```

## Prop truth handling
Scenario: We can have 2 types of button: ```Success``` ```Warning```

How do we ensure only 1 type is passed as true?
~ calls for *PropType* checking
