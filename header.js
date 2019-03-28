function HeaderModle() {
    var mybody = document.getElementById('myBody');
    var header = document.createElement('div');
    header.innerText = '我是哪个header啊';
    mybody.append(header);
}

export default HeaderModle