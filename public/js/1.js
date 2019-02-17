function task(){
    //查找现在class为show的img
    var img=slider.getElementsByClassName('show')[0];
    img.className=''; //清空img的class
    //如果img有下一个兄弟
    if(img.nextElementSibling)
        img.nextElementSibling.className='show';
    else//否则
    //设置img的下一个兄弟的class为show
        img.parentNode.children[0].className='show';
}
var timer=setInterval(task,3000);
slider.onmouseover=function(){
    clearInterval(timer)
}
slider.onmouseout=function(){
    timer=setInterval(task,3000);
}


