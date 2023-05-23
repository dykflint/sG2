<script>
preScrollContainer();

function scrollRight() {
    var container = document.getElementById('scroll-right');
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        container.scrollLeft += 20;
        scrollAmount += 20;
        if(scrollAmount >= 200){
            window.clearInterval(slideTimer);
        }
    }, 25);
  };

function scrollTestimonialsRight() {
  var container1 = document.getElementsByClassName('pre-scroll')[0];
  var container2 = document.getElementsByClassName('pre-scroll')[1];
  scrollAmount = 0;
  var slideTimer = setInterval(function(){
      container1.scrollLeft += 20;
      if (container2) {
      container2.scrollLeft += 20;
      };
      scrollAmount += 20;
      if(scrollAmount >= 400){
          window.clearInterval(slideTimer);
      }
  }, 25);
};

function scrollTestimonialsLeft() {
  var container1 = document.getElementsByClassName('pre-scroll')[0];
  var container2 = document.getElementsByClassName('pre-scroll')[1];
  scrollAmount = 400;
  var slideTimer = setInterval(function(){
      container1.scrollLeft -= 20;
      if (container2) {
        container2.scrollLeft -= 20;
      };
      scrollAmount -= 20;
      if(scrollAmount <= 0){
          window.clearInterval(slideTimer);
      }
  }, 25);
};

function preScrollContainer() {
  var scrollContainer = document.getElementById('preScroll1');
  console.log(scrollContainer);
  scrollContainer.scrollLeft += 40;
}
</script>
