let genre = $(".genre").val();
let bookTitle = $(".searchTitle").val();




function callOne(test) {
    return $.ajax({
        url: test,
        method: "GET"
      })
}


async function handleSubmit() {

    let genre = $(".genre").val();
    let bookTitle = $(".searchTitle").val();
    bookTitle = bookTitle.replaceAll(' ', '%20');

    const test = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}`;
    const testTitle = `https://www.googleapis.com/books/v1/volumes?q=intitle:${bookTitle}`

    var resp = await callOne(test);
    var resp2 = await callOne(testTitle);


    console.log("---SEARCH GENRE---");
    console.log(resp);
    console.log(genre);

    console.log("---SEARCH TITLE---");
    console.log(resp2);
    console.log(bookTitle);

    for (let i = 0; i < 3; i++) {
        // console.log("------BOOK GENRE INFO-------")
        // console.log("Title: " + resp.items[i].volumeInfo.title)
        // console.log("Authors: " + resp.items[i].volumeInfo.authors)
        // console.log("Description: " + resp.items[i].volumeInfo.description)
        // console.log("Thumbnail: " + resp.items[i].volumeInfo.imageLinks.thumbnail)



        console.log("------BOOK GENRE INFO-------")
        console.log("Title: " + resp2.items[i].volumeInfo.title)
        console.log("Authors: " + resp2.items[i].volumeInfo.authors)
        console.log("Description: " + resp2.items[i].volumeInfo.description)
        console.log("Thumbnail: " + resp2.items[i].volumeInfo.imageLinks.thumbnail)


        //important info from the call put in variables
        // var title = resp.items[i].volumeInfo.title;
        // var authors = resp.items[i].volumeInfo.authors;
        // var description = resp.items[i].volumeInfo.description;
        // var imgs = resp.items[i].volumeInfo.imageLinks.thumbnail;


        var title = resp2.items[i].volumeInfo.title;
        var authors = resp2.items[i].volumeInfo.authors;
        var description = resp2.items[i].volumeInfo.description;
        var imgs = resp2.items[i].volumeInfo.imageLinks.thumbnail;


        /**
         * Add titles and authors to an array so you can add
         * them to db easier later
         */
        titleArr = [];
        authorArr = [];        

        var titleText = $("<h1>").text(title);
        titleText.addClass("title" + i);
        $(".da-books").append(titleText);

        var authorText = $("<h2>").text(authors);
        authorText.addClass("author" + i);
        $(".da-books").append(authorText);

        var descriptionText = $("<h3>").text(description);
        descriptionText.addClass("description" + i);
        $(".da-books").append(descriptionText);

        let img = $("<img>").attr("src", imgs);
        img.addClass([i+1])
        $(".da-books").append(img);


        
    }

}

//run the function
$("#searchForm").submit(function(e) {
    //empty out recipe cards so page doesn't become endless
    $(".da-books").empty();
    e.preventDefault();
    handleSubmit(e);
});

$("#titleSearchForm").submit(function(e) {
    //empty out recipe cards so page doesn't become endless
    $(".da-books").empty();
    e.preventDefault();
    handleSubmit(e);
});