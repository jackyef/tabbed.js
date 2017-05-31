var tabbed = document.querySelectorAll(".tabbed");
tabbed.forEach(asTabs);
function asTabs(element){
  var children = element.children;
  var navButtons = document.createElement("div");
  navButtons.className = "tabbed-nav";
  element.prepend(navButtons);
  var showedOne = false;
  for(var i = 0; i<children.length; i++){
    if(!children[i].getAttribute("data-tabname")) continue;
    var button = document.createElement("button");
    button.innerHTML = children[i].getAttribute("data-tabname");
    button.className = "tabbed-btn";
    button.setAttribute("data-tabname", children[i].getAttribute("data-tabname"));
    navButtons.appendChild(button);
    children[i].classList.add("tabbed-div");

    var customHeader = children[i].querySelector("tabbed-custom-header");
    if(customHeader) button.innerHTML = customHeader.innerHTML;

    if(showedOne) {
      children[i].style.display = "none";
    } else {
      showedOne = true;
      button.classList.add("tabbed-btn-active");
    }
  }
  navButtons.addEventListener("click", function(e){
    if(e.target.tagName !== "BUTTON") {
      return;
    }
    var tabbed = e.target.parentElement.parentElement; // the element with the class .tabbed
    var divs = tabbed.querySelectorAll("div[data-tabname]"); // get divs with data-tabname
    var buttons = tabbed.querySelectorAll("button[data-tabname]");
    for(var i = 0; i<divs.length; i++){
      if(divs[i].getAttribute("data-tabname") === e.target.getAttribute("data-tabname")){
        divs[i].style.display = "block";
        buttons[i].classList.add("tabbed-btn-active");
      } else {
        divs[i].style.display = "none";
        buttons[i].classList.remove("tabbed-btn-active");
      }
    }
  });
}