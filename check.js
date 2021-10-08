function checkAll(){
    var name= document.getElementById("name").value;
    var dob= document.getElementById("DOB").value;
    var email= document.getElementById("email").value;
    var contact= document.getElementById("contact").value;
    var genre= document.getElementById("genre").value;
    var nameCheck= /[\w]/.test(name);
    let date=/\d{1,2}-\d{1,2}-\d{4}/;
    var dobCheck= date.test(name);
    var emailCheck=/[\S]/.test(email) + /@/.test(email) + /\./.test(email) ;
    var contactCheck= /^\d+$/.test(contact);
    var genreCheck= /[\w]/.test(genre);
    alert(genreCheck);
 }