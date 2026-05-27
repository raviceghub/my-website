document.querySelector("button").addEventListener("click", function() {
    const comment = document.querySelector("textarea").value;

    if (comment.trim() === "") {
        alert("Please enter a comment");
        return;
    }

    const commentBox = document.createElement("p");
    commentBox.textContent = comment;

    document.body.appendChild(commentBox);

    document.querySelector("textarea").value = "";
});
