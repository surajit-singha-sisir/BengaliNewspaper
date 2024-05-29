function dropDownMenus() {
    const icon = document.querySelector(".dropDownMenus");
    const subMenus = document.querySelector(".absoluteSubMenus");
    const chevron = document.querySelector('.chevron-down');
    let isSubMenuVisible = false;
  
    icon.onclick = function(event) {
      event.stopPropagation();
      isSubMenuVisible = !isSubMenuVisible;
      subMenus.style.display = isSubMenuVisible ? "block" : "none";
      chevron.style.transform = isSubMenuVisible? "rotate(90deg)": "rotate(0deg)";

      if (isSubMenuVisible) {
        subMenus.classList.add('show-from-top'); // or 'show-from-bottom'
    } else {
        subMenus.classList.remove('show-from-top');
    }
      
    };
  
    // Hide the sub-menus when clicking anywhere outside the dropdown
    document.onclick = function(event) {
      if (isSubMenuVisible && !icon.contains(event.target) && !subMenus.contains(event.target)) {
        isSubMenuVisible = false;
        subMenus.style.display = "none";
        chevron.style.transform = isSubMenuVisible? "rotate(90deg)": "rotate(0deg)";
      }
    };
  }
  
  dropDownMenus();
  