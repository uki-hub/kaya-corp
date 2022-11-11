const DaScroll = (elementId, whenComplete) => {
  // var timer = null;

  // const scrollListener = () => {
  //   if (timer !== null) {
  //     console.log(2);
  //     clearTimeout(timer);
  //   }
  //   timer = setTimeout(function () {
  //     whenComplete();
  //     window.removeEventListener("scroll", scrollListener);
  //   }, 150);
  // };

  // window.addEventListener("scroll", scrollListener, false);

  // let timer = setTimeout(function () {
  //   whenComplete();
  //   clearTimeout(timer);
  // }, 2000);
  document.getElementById(elementId).scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
};

export default DaScroll;
