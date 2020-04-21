# reactbox
Our little [React](https://reactjs.org/) toolbox


## Install

```sh
$ npm i @pixelherz/reactbox
```

**Note:** The package is hosted on [GitHub](https://github.com/). To install the package you need to authenticate to GitHub Packages and add a `.pmrc` to your project. Follow the instructions from the [GitHub Help section "Installing a package"](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#installing-a-package). 


## Modules

### ScrollDistanceObserver

#### Properties

`isActive`: Boolean, de-/activates the observer. The observer is reset when re-activated (starts counting the scroll distance from zero).

`onScrollDistYUpdate`: Callback function. The current scrollY distance is passed as argument. 

```js
import { useState } from 'react'
import ScrollDistObserver from '@pixelherz/reactbox/scroll-distance-observer'

export default const MyComp = ({}) => {
  const [ isObserverActive, setIsObserverActive ] = useState(true)
  return (
    <ScrollDistObserver
      isActive={isObserverActive}
      onScrollDistYUpdate={scrollDistY => {
        console.log(`scrollY distance is ${scrollDistY}px`)
        if (scrollDistY >= 500) {
          setIsObserverActive(false)
        }
      }}
    />
  )
}
```

### ScrollOffsetObserver

#### Properties

`isActive`: Boolean, de-/activates the observer. 

`onScrollOffsetYUpdate`: Callback function. The current scrollY offset is passed as argument. 

```js
import ScrollOffsetObserver from '@pixelherz/reactbox/scroll-offset-observer'

export default const MyComp = ({}) => {
  const [ isObserverActive, setIsObserverActive ] = useState(true)
  return (
    <ScrollOffsetObserver
      isActive
      onScrollOffsetYUpdate={scrollOffsetY => {
        console.log(`scrollY offset is ${scrollOffsetY}px`)
      }}
    />
  )
}
```


## Development

### Build

```sh
$ npm run build
```

### Publish

```sh
$ npm publish
```

### Versioning

We use [Semantic Versioning](https://semver.org/).


## Contact

Pixelherz  
Design und Code für Digitales

René Keller  
rene@pixelherz.com

Pixelherz GmbH  
Allmendstrasse 61  
CH-8041 Zürich

[pixelherz.com](https://pixelherz.com)


