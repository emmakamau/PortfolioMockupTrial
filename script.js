function readMore(){
    var readMore = document.getElementById("read-more")
    var moreText = document.getElementById("more-txt")
    var btnTxt = document.getElementById("blog-btn")

    console.log("meeee")

    if (readMore.style.display === "none") {
        readMore.style.display = "inline";
        btnTxt .innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        readMore.style.display = "none";
        btnTxt .innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
}


function readMoreTwo(){
    var readMore = document.getElementById("read-more-two")
    var moreText = document.getElementById("more-txt-two")
    var btnTxt = document.getElementById("blog-btn-two")

    console.log("meeee")

    if (readMore.style.display === "none") {
        readMore.style.display = "inline";
        btnTxt .innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        readMore.style.display = "none";
        btnTxt .innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
}