let DateTime = luxon.DateTime;

let like_count = document.querySelectorAll("[id^='likecount-']");
for (let i = 0; i < like_count.length; i++) {
  let source = like_count[i].id.split("-")[1];
  fetch("https://ilikeit.chaojie.workers.dev/?source=" + source)
    .then((response) => response.json())
    .then((data) => {
      like_count[i].innerHTML = data.like_count;
    });
}

let like_btn = document.querySelectorAll("[id^='ilikeit-']");
for (let i = 0; i < like_btn.length; i++) {
  like_btn[i].addEventListener("click", function (e) {
    let source = e.target.id.split("-")[1];
    console.log(source);
    ilikeit(source);
  });
}

/* Convert a timestamp to a date string */
function ts2date(ts) {
  let dt = DateTime.fromSeconds(ts);
  return dt.toFormat("yyyy-MM-dd HH:mm:ss");
}

/* I like it */
function ilikeit(source) {
  let url = "https://ilikeit.chaojie.workers.dev/?source=" + source;
  fetch(url, { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      let like_count = document.getElementById("likecount-" + source);
      like_count.innerHTML = data.like_count;
    });
}
