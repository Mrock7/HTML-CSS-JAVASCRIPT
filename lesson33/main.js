function validation()  {

    var name = document.getElementById("name").value;

    var  valid_name_regex = /^[A-Za-Z]+$/;

    var name = document.getElementById("age").value;

    var  valid_age_regex = /^[0-9]+$/;

}

    if(!(name.match(valid_name_regex))|| !(name.match(valid_name_regex)) ) {
        if(!(name.match(valid_name_regex))) {
            document.getElementById("name_error").style.visibility = "visible" ;
            document.getElementById("name").style.borderColor = "red" ;
        }
        else {

            document.getElementById("name_error").style.visibility = "hidden" ;
            document.getElementById("name").style.borderColor = "black" ;
        }

                if(!(name.match(valid_age_regex))) {
            document.getElementById("age_error").style.visibility = "visible" ;
            document.getElementById("age").style.borderColor = "red" ;
        }
        else {

            document.getElementById("age_error").style.visibility = "hidden" ;
            document.getElementById("age").style.borderColor = "black" ;
        }

        return false;

      
}

else{
            document.getElementById("name_error").style.visibility = "hidden" ;
            document.getElementById("name").style.borderColor = "black" ;
            ocument.getElementById("age_error").style.visibility = "hidden" ;
            document.getElementById("age").style.borderColor = "black" ;     
}




