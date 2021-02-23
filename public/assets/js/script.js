// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
    if (event) {
      console.info("DOM loaded");
    }

    const saveBtns = document.getElementById("saveBtn");


    if (saveBtns) {
    saveBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            const savedBook = e.target.getAttribute("book-id");
            const newSaved = e.target.getAttribute("book-saved");

            const newSavedBook = {
                saved: newSaved,
            };

            fetch(`/api/book/${id}`, {
                method: "PUT",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },

            body: JSON.stringify(newSavedBook),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed book to: ${newSaved}`);
            location.reload("/wishlist");
          } else {
            alert("something went wrong!");
          }
        });
    });
 });
    }
});