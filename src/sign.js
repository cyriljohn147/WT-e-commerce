document.getElementById('submit').addEventListener('click',function() {
    var username = document.forms["myform"]["username"].value;
    var password = document.forms["myform"]["password"].value;
    console.log(username,password);
});