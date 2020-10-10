function openTab(evt, name){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabsContent");
  
    for(i=0; i < tabcontent.length; i++){
      tabcontent[i].style.display = 'none';
    }
  
    tablinks = document.getElementsByClassName("tabs-vertical-body_item");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("tab-selected", "");
    }
  
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += "tab-selected";
  
  }