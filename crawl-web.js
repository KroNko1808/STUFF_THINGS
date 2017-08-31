var comment = document.getElementsByClassName('UFICommentBody');
var user = document.getElementsByClassName('UFICommentActorName');
var cmt = [];
for(var i=0; i<comment.length; i++){
    cmt.push({
        stt:i+1,
        name:user[i].innerHTML,
        content:comment[i].innerText,
    })
};
alert('done');
console.table(cmt);
