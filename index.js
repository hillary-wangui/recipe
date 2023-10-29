let likes = 0;
let dislikes = 0;

var addButton = document.getElementById("add-button")
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Add button clicked!");
}
{
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('like-dislike-button-container');
const likeButton = document.createElement('button');
likeButton.classList.add('like-button');
likeButton.innerHTML = 'Like';
const dislikeButton = document.createElement('button');
dislikeButton.classList.add('dislike-button');
dislikeButton.innerHTML = 'Dislike';
buttonContainer.appendChild(likeButton);
buttonContainer.appendChild(dislikeButton);
content.appendChild(buttonContainer)

likeButton.addEventListener('click', () => {
  content.likeCount++;
  likeButton.innerHTML = `Like (${content.likeCount})`;
});

dislikeButton.addEventListener('click', () => {
  content.dislikeCount++;
  dislikeButton.innerHTML = `Dislike (${content.dislikeCount})`;
});
}

submitCommentBtn.addEventListener('click', () => {
 let comment = commentInput.value;
 if (comment) {
    let newComment = document.createElement('p');
    newComment.innerText = comment;
    commentsDiv.appendChild(newComment);
    commentInput.value = '';
 }
});

