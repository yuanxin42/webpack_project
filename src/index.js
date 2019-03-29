import HeaderModle from './header.js'

new HeaderModle()

import imgurl from './11.jpg'

console.log(imgurl, 'imgurl')

let img = new Image()
img.src = imgurl
var mybody = document.getElementById('myBody');
mybody.append(img);
