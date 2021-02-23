// save button linked to button id
// = add.js in activities

const saveBookBtn = document.getElementById("saveBookBtn");
saveBookBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const savedBook = {
    title: document.getElementById("title").nodeValue.trim(),
    author: document.getElementById("title").nodeValue.trim(),
    genre: document.getElementById("title").nodeValue.trim(),
    summary: document.getElementById("title").nodeValue.trim(),
    cover: document.getElementById("title").nodeValue.trim(),
  };

  fetch("/api/savedBook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(savedBook),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("You saved a book!:", data);
      alert(`book saved: ${savedBook.title}`);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // Empty the form
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("summary").value = "";
  document.getElementById("cover").value = "";
});


//---------------///

document.addEventListener("DOMContenLoaded", event) => {
  if (event) {
      console.log("DOM Loaded");
  }
}


// SEARCH Books
const searchBooksBtn = document.getElementById("")

// SAVE Books
const saveBookBtn = document.querySelectorAll("#saveBookBtn");

// DELETE Books
const trashBookBtn = document.querySelectorAll("#trashBookBtn");

// Set up the event listeners for each delete button
trashBookBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("trashBookBtn");

      // Send the delete request
      fetch(`/api/books/${id}`, {
          method: "DELETE",
      }).then((res) => {
          console.log(res);
          console.log(`Deleted book: ${id}`);

          // Reload the page
          // location.reload();
      });
  });
});

const searchBooksBtn = $(".searchBtn")
searchBooksBtn.on ("click", function (event) {
  console.log($(this).parent().attr("id"));
})