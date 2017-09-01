console.log('Hello World!');

document.addEventListener('DOMContentLoaded', function() {

  var form = document.querySelector('.new-comment');
  var commentContainer = document.querySelector('.comment-container');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target.comment.value);
    var newComment = document.createElement('div');
    newComment.innerHTML = e.target.comment.value;
    commentContainer.appendChild(newComment);
    e.target.comment.value = '';
  })


});

function add(num1, num2) {
  var num3 = num1 + num2;
  console.log(num3);
}

add(3, 5);