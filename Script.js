const commentForm = document.getElementById('comment-form');
const commentsWall = document.getElementById('comments-wall'); // Use comments-wall instead of comments-container

commentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('comment-name').value;
    const email = document.getElementById('comment-email').value;
    const message = document.getElementById('comment-message').value;

    // Validate input (optional)

    // Create a new comment object
    const newComment = {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toLocaleString()
    };

    // Store the comment (e.g., in local storage or database)
    // For demonstration, we'll just add it to an array
    const comments = localStorage.getItem('comments') || [];
    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));

    // Display the new comment on the wall
    displayComment(newComment);

    // Clear the form
    commentForm.reset();
});

function displayComment(comment) {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    const commentNameElement = document.createElement('p');
    commentNameElement.classList.add('comment-name');
    commentNameElement.textContent = comment.name;

    const commentEmailElement = document.createElement('p');
    commentEmailElement.classList.add('comment-email');
    commentEmailElement.textContent = comment.email;

    const commentMessageElement = document.createElement('p');
    commentMessageElement.classList.add('comment-message');
    commentMessageElement.textContent = comment.message;

    const commentTimestampElement = document.createElement('p');
    commentTimestampElement.classList.add('comment-timestamp');
    commentTimestampElement.textContent = comment.timestamp;

    commentElement.appendChild(commentNameElement);
    commentElement.appendChild(commentEmailElement);
    commentElement.appendChild(commentMessageElement);
    commentElement.appendChild(commentTimestampElement);

    commentsWall.prepend(commentElement); // Add the comment to the top of the wall
}
