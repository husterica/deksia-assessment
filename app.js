var coll = document.getElementsByClassName("collapsible");
var i;

function expand_box_down()
{   for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var expand_box_content = this.nextElementSibling;
      if (expand_box_content.style.maxHeight){
        expand_box_content.style.maxHeight = null;
      } else {
        expand_box_content.style.maxHeight = expand_box_content.scrollHeight + "px";
      }
    });
  }
}

