var headerLink = document.querySelector('link[rel="import"][for="main-header"]');
var file = headerLink.import;
var headerContent = file.getElementById("main-header-content");
document.getElementById("main-header").appendChild(headerContent);