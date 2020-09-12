const bookmarkLayout = document.getElementById("bookmark");
var bookmark = [
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    icon: 'fab fa-facebook'
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/",
    icon: 'fab fa-youtube'
  },
];
bookmark.forEach(buildBookmark);

function buildBookmark(item, index) {
  bookmarkLayout.innerHTML += '<a href="'+item.url+'" class="item-link '+item.icon+'"></a>';
}