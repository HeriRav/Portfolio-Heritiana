function validateForm() {
var name =  document.getElementById('name').value;
if (name == "") {
    document.querySelector('.status').innerHTML = "Le nom ne doit pas être vide";
    return false;
}
var email =  document.getElementById('email').value;
if (email == "") {
    document.querySelector('.status').innerHTML = "L'adresse mail ne doit pas être vide";
    return false;
} else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
        document.querySelector('.status').innerHTML = "Le format de l'adresse mail n'est pas valide";
        return false;
    }
}
var tel = document.getElementById('tel').value;
if (tel.length == 10 && (tel.startsWith("032") || tel.startsWith("034") || tel.startsWith("033") || tel.startsWith("038") || tel.startsWith("039"))){
    document.querySelector('.status').hidden;
} else if (tel == ""){
    document.querySelector('.status').innerHTML = "Le numéro de téléphone ne doit pas être vide";
    return false;
} else {
    document.querySelector('.status').innerHTML = "Veuillez saisir un numéro valide à Mada";
}
var subject =  document.getElementById('subject').value;
if (subject == "") {
    document.querySelector('.status').innerHTML = "Le sujet ne doit pas être vide";
    return false;
}
var message =  document.getElementById('message').value;
if (message == "") {
    document.querySelector('.status').innerHTML = "Le message ne doit pas être vide";
    return false;
}
document.querySelector('.status').innerHTML = "Message envoyé";
}