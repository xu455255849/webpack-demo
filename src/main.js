
import './style.css';
import Img from './ts.jpg'

function component() {
    var element = document.createElement('div');
    
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    
    var arr = ['hello', 'world', 'xuaa']
    arr.forEach( (it)=> {
        element.innerHTML += it + '<br />'
    });
  
    element.classList.add('hello');
    
    let myIcon = new Image();
    //myIcon.src = Img;
    element.appendChild(myIcon);
    
    return element;
}

document.body.appendChild(component());

 if (process.env.NODE_ENV !== 'production') {
     console.log('Looks like we are in development mode!');
 }
 if (module.hot) {
     module.hot.accept( function() {
           console.log('Accepting the updated printMe module!');
       })
 }
