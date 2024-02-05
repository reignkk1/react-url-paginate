# [react-url-paginate](https://www.npmjs.com/package/react-url-paginate) &middot; [![npm version](https://img.shields.io/badge/npm-v0.0.7-blue)](https://www.npmjs.com/package/react-url-paginate)

![paginate-ezgif com-video-to-gif-converter](https://github.com/reignkk1/react-url-paginate/assets/87847136/842ff5b2-5be7-40f2-95df-7d2456869923)

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
