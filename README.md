# Popstars
This is a redux excercise from this [React course](https://www.udemy.com/course/the-complete-react-native-course-create-beautiful-apps/ )

Excercise goals:
## 1. :technologist: Completing the excercise just by following the intructor
* The data is hosted by [json-server](https://github.com/typicode/json-server).
## 2. :rocket: Publishing the app on github pages
### Imports
It was chalanging because routing was a bit different there. In github pages I got the url https://zsofiath.github.io/react-popstars/. While developing I used the http://localhost:3000/.
First problem was linking th css and the images. I had to add react-popstars/ to the deployed app, while keeping the link as it was in development mode. It couldnt be done without react. The images were imported like this:
```js
require('../../build/images/'+data.artistData[0].cover)
```
And the css like this:
```js
import './style.css';
```

## 3. :recycle: Elliminating class components and using hooks
## 4. :zap: Improving the performance
## 5. :sparkles: Create a reactive app
