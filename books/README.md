# 1. Creating Custom Hooks

### Issue:
Say, we want to use a hook (eg. useContext) inside our App.</br>
We will need these 3 lines inside every component, that uses Hooks:

```typescript
// Component XYZ
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList() {
  const {books} = useContext(BooksContext)
  ...
}
```

### Solution:
A better approach would be to create our own custom Hook inside a separate file:
```javascript
// use-books-context.js
import { useContext } from "react";
import BooksContext from "../context/books";

function useBooksContext() {
  return useContext(BooksContext)
}

export default useBooksContext
```
And use it inside every component, with only 1 import!

```typescript
// Component XYZ
import useBooksContext from "../hooks/use-books-context.js";

function BookList() {
  const {books} = useBooksContext()
  ...
}
```


# 2. useCallback() ~ why use it?

- Every time we fetch data (eg. using ```fetchBook()```) and update the state, the component re-renders
- Upon re-rendering, a new instance of ```fetchBook()``` is created again
- Now, if useEffect had ```fetchBook()``` in its dependency list, it sees that an element in its dependency list has changed
- This leads to an infinite loop of useEffect being called again and again

To solve this, we wrap ```fetchBook()``` with ```useCallback()```: A React hook which always returns the old instance of ```fetchBook()```.</br>
As a result, ```useEffect()``` sees that the dependency list hasn't changed (as it should).

Basically, when a component is re-rendered, all its functions are created as a new instance. If a useEffect had any of these functions in its dependency list, it would keep on executing infinitely. 
We do not expect a function's value to change, hence using a useCallback() is important if we are using a *function* **inside a useEffect() dependency list.**

