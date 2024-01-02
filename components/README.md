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

### Q: Where to define a child's state (inside Parent or Child component)?
Does any component besides child component, need to access its state?
- Yes: inside Parent (Since React does not share states between sibling components)
  - Will need to pass state value & update function to children components
- No: Declare inside Child


## Event Handling in React
### Q: How to check time taken for 2 events to occur?
Use ```window.timeOne = performance.now()``` for event 1 & ```window.timeTwo = performance.now()``` for event 2

Now call values for ```timeOne``` & ```timeTwo``` in browser's console & compare values.

<image src="./READMEassets/useEffectCleanUp.png"/>

<br>

# Navigation in React

Issue: Normal navigation between pages via:
- clicking on forward/back browser button
- clicking on links within page

Causes page to reload (default behavior) and we lose all API response data fetched.

This leads to making tons of API calls since we keep losing data on every reload.

Solution:
- Use `pushState` to updated *pathNames* in browser [going from `/home` -> `/cart`]
- Use a `custom link` to render links:
  - User wants to go to `Path A` within our App -> use `Custom Link`
  - User wants to go to `Domain X` outside our App -> use `HTML link element (default <a>)`

<image src="./READMEassets/navigationSteps.png"/>


