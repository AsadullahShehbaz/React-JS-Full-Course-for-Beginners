# React Redux — A Teacher's Guide for React Learners

Let's build this up from **why** to **how**, since that's the order that actually sticks.

## 1. The Problem Redux Solves

In plain React, data flows through **props** — parent to child. This works fine until your app grows and you get **"prop drilling"**: passing data through 5 components that don't even need it, just to reach the 6th one that does.

```
App → Layout → Sidebar → UserPanel → UserAvatar (needs `user` data)
```

Redux's answer: put shared data in **one central store**, and let any component grab what it needs directly — no drilling required.

## 2. The Three Core Concepts

Think of Redux like a **bank**:

| Redux Term | Bank Analogy | What it does |
|---|---|---|
| **Store** | The vault | Holds all your app's state in one object |
| **Action** | A withdrawal slip | Describes *what* you want to happen (just data, no logic) |
| **Reducer** | The teller | Takes the current state + action, returns *new* state |

**Golden rule:** You never touch the store directly. You submit an "action," and a "reducer" decides how the state changes.

## 3. Modern Redux = Redux Toolkit (RTK)

Old Redux (2015-2019 style) required a lot of boilerplate. Nobody writes it that way anymore. Today, use **Redux Toolkit** — it's the official, recommended way.

```bash
npm install @reduxjs/toolkit react-redux
```

### Step 1: Create a "slice" (state + reducers + actions, together)

```javascript
// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // looks mutable, but RTK handles immutability internally
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addByAmount: (state, action) => {
      state.value += action.payload; // payload = data sent with the action
    },
  },
});

export const { increment, decrement, addByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### Step 2: Create the store

```javascript
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // add more slices here as your app grows: user: userReducer, cart: cartReducer...
  },
});
```

### Step 3: Provide the store to your React app

```javascript
// index.js
import { Provider } from 'react-redux';
import { store } from './app/store';

<Provider store={store}>
  <App />
</Provider>
```

### Step 4: Use it in components with hooks

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addByAmount } from './features/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value); // READ from store
  const dispatch = useDispatch(); // WRITE to store (via actions)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(addByAmount(5))}>+5</button>
    </div>
  );
}
```

## 4. The Mental Model to Remember

```
Component dispatches action → Reducer computes new state → Store updates → Component re-renders
```

- `useSelector` = "give me this piece of state" (component subscribes to changes)
- `useDispatch` = "here's an action, go update state"
- You **never** call `setState`-style updates directly — everything goes through an action

## 5. When Should You Actually Use Redux?

This trips up a lot of learners — Redux isn't always necessary:

- **Use local state** (`useState`) for things only one component cares about (form input, toggle, modal open/close).
- **Use Context API** for simple global data that rarely changes (theme, logged-in user info).
- **Use Redux** when you have complex, frequently-updated state shared across many unrelated components — carts, notifications, multi-step forms, real-time data, caching API responses.

## 6. Common Beginner Mistakes

1. **Putting everything in Redux** — not all state needs to be global. Keep local UI state (like `isDropdownOpen`) in `useState`.
2. **Mutating state directly outside a reducer** — RTK lets you write "mutating" code *inside* reducers only (via Immer under the hood). Never do `state.value = 5` anywhere else.
3. **Forgetting `payload`** — when you dispatch `addByAmount(5)`, the `5` arrives inside `action.payload`, not as a separate argument.

## Quick Practice Exercise

Try building a small **todo list slice** yourself:
- Actions: `addTodo`, `removeTodo`, `toggleTodo`
- State shape: `{ todos: [{ id, text, completed }] }`

Want me to walk through that todo example next, or would it help more to cover **async data fetching with Redux Toolkit's `createAsyncThunk`** (for API calls)?