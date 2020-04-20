# reactbox
Our little [React](https://reactjs.org/) toolbox


## Install

```sh
$ npm i @pixelherz/reactbox
```


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


## Development

### Build

```sh
$ npm run build
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


