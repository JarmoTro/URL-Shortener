function copyToClipboard(){
    var shortUrl = document.getElementById("shortenedURL");

    shortUrl.select();
    shortUrl.setSelectionRange(0,9999);

    navigator.clipboard.writeText(shortUrl.value);
}