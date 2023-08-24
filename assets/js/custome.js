document.querySelector(".bar i").addEventListener("click", function () {
  let bar = document.querySelector(".bar i");

  bar.classList.toggle("fa-times");

  let target = document.querySelector(".target");
  target.classList.toggle("active");
});

// start circle progressbar here
$(function () {
  $(".percent").percentageLoader({
    valElement: "p",
    strokeWidth: 10,
    bgColor: "#d9d9d9",
    ringColor: "#29c4c7",
    textColor: "#2C3E50",
    fontSize: "14px",
    fontWeight: "normal",
  });
});

var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-36251023-1"]);
_gaq.push(["_setDomainName", "jqueryscript.net"]);
_gaq.push(["_trackPageview"]);

(function () {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src =
    ("https:" == document.location.protocol ? "https://ssl" : "http://www") +
    ".google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();
// end circle progressbar here
