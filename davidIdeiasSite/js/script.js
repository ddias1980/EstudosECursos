var expanded = false;
function exibeCheckbox(){
    var checkbox = document.getElementById('checkbox');
    if (!expanded){
        checkbox.style.display = "block";
        expanded = true;
    } else {
        checkbox.style.display = "none";
        expanded = false;
    }
}