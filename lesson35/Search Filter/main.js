function search () {
    var input, filter, ul, li, a, i, txtValue;
    input = doucment.getelementById("myinput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myList");
    li = ul.getElementsByTagName("li");
    for(i = 0; i < li.length; i++) {
        a = li[i]
        txtValue = a.textContent;
        if (txtValue.toUpperCase().indexOf(filter)> -1){
            li[i].style.display = "block"; 
        } else {
            li[i].style.display = "none"; 
        }

    }
}