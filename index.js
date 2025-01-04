```javascript
// pages/about.js
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default function About() {
  console.log(publicRuntimeConfig.MY_VARIABLE);

  return (
    <div>
      <h1>About Page</h1>
      <p>Environment Variable: {publicRuntimeConfig.MY_VARIABLE}</p>
    </div>
  );
}
```
```javascript
// next.config.js
module.exports = {
  publicRuntimeConfig: {
    MY_VARIABLE: process.env.MY_VARIABLE,
  },
};
```