var ul = document.querySelector('.tab-list')
var lis = ul.children
var items = document.querySelector('.tab-con').querySelectorAll('.item')
for (var j = 0; j < lis.length; j++) {
    lis[j].index = j
    lis[j].onclick = function(){
        for (var j = 0; j <lis.length; j++) {
            lis[j].className = ''
            items[j].style.display = 'none'
        }
        this.className = 'current'
        items[this.index].style.display = 'block'
    }
}


var lists = document.querySelector('.item-list')
var lis1 = lists.children
console.log(lis1);
for (let j = 0; j < lis1.length; j++) {
    // lis[j].index = j
   lis1[j].onclick = function(){
       for (var j = 0; j < lis1.length; j++) {
          lis1[j].className = ''
       }
       this.className = 'current'
   }
}