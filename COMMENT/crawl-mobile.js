var more = document.getElementsByClassName('_3cw_');
for(var i=0; i<more.length; i++){
    more[i].click();
};
setTimeout(function(){
var cmt = [];
var comment = document.getElementsByClassName('_14ye');
var user = document.getElementsByClassName('_52jh _1s79');
for(var i=0; i<comment.length; i++){
    cmt.push({
        stt:i+1,
        name:user[i].innerHTML,
        link:user[i].href,
        content:comment[i].innerText,
    })
};
alert('done');
console.table(cmt);
}, 5000)
