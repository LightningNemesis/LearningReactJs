# How to make custom components (Buttons)
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

# Prop truth handling
Scenario: We can have 2 types of button: ```Success``` ```Warning```

How do we ensure only 1 type is passed as true?
~ calls for *PropType* checking

Check ```src/Button.js``` for example; we have used a *custom* react-proptype


# Pages & Components
### What is the difference between Components & Pages?
- Components: Reusable & does not contain a lot of content (Buttons, Search Bar, DropDown)
- Pages: Not Reusable, contain a lot of content (LandingPage, CheckoutPage, LoginPage)

### How to *best* organize project pages?
Do a hybrid organization (by Features & Types):

src/
  - Components
    - Forms
      - `input.js`
      - `SearchBar.js`
    - Products
      -  `ProductList.js`
      -  `ProductShow.js`
  - Pages
    - `LoginPage.js`
    - `LogoutPage.js`
    - `CartPage.js`

<br/>

# Designing the App State system
Basically capture every step as *states* or *events*
- User will perform an action --> This needs to be *captured*
<br/>
We use an `eventHandler` for capturing the user action as *input*

- Based on action, we might need to change elements on screen (collapse, open... etc)
<br/>
We use `states` to achieve this; change value of a state to cause the page/component to rerender & reflect changes

<details>
    <summary>Q: Where to define a child's state (inside Parent or Child component)?</summary>
    <p>Does any component besides Child, need to access child's state?
    <br/>If yes, then inside Parent. If no, then inside Child.
    <p>Note: React does not allow sharing states between "sibling" components</p>
    </p>
    
</details>



