// <!-- phần code js của lich sử tìm kiếm-->
var inputHeader = document.getElementById("input-header");
var subInputHistory = document.querySelector(".sub-input-history");
var app = document.getElementById("app");
var headerInput = document.getElementById("header-input-js");
inputHeader.onclick = function () {
  subInputHistory.classList.add("show-js");
};
function stopPrn() {
  event.stopPropagation();
}
headerInput.addEventListener("click", stopPrn);

// Phần code js hiện input tìm kiếm trên mobile
var searchMobile = document.querySelector(".header-with-search-mobile");
var headerWithSearch = document.querySelector(".header-with__search");
var headerSubnav = document.querySelector(".header__subnav");
searchMobile.addEventListener("click", function () {
  var isHidden = document.querySelector(".hidden");
  // nếu ishidden bằng null
  if (!isHidden) {
    headerWithSearch.classList.add("appear");
    headerSubnav.classList.add("hidden");
    // nếu có ishidden
  } else {
    headerWithSearch.classList.remove("appear");
    headerSubnav.classList.remove("hidden");
  }
});
// ngừng sủi bọt lên hai phần tử searchMobile và headerWithSearch
searchMobile.addEventListener("click", stopPrn);
headerWithSearch.addEventListener("click", stopPrn);
app.onclick = function () {
  // đối với hiện history input
  subInputHistory.classList.remove("show-js");
  // Đối với xuất hiện trên mobile
  headerWithSearch.classList.remove("appear");
  headerSubnav.classList.remove("hidden");
};
