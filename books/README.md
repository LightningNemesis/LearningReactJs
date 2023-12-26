# Creating Custom Hooks

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