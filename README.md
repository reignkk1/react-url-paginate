# react-url-paginate

<img src='https://im3.ezgif.com/tmp/ezgif-3-ce5be1422b.gif'>

## install

```jsx
npm install react-router-dom
npm install react-url-paginate
```

## Examples

```jsx
import * as router from "react-router-dom";
import { Paginate } from 'react-url-paginate';

function Example(){
    return <Paginate total={100} pageItems={20} router={router}>
}
```

## Props

| Name        | Type     | Description                          |
| ----------- | -------- | ------------------------------------ |
| `total`     | `Number` | puts the total number of data.       |
| `pageItems` | `Number` | the number of data to show per page. |
| `router`    | `any`    | put the react-router-dom object in.  |
