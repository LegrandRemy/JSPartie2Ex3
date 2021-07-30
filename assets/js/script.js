// Declaration de la premier variable pour la valeur fixe du nom d'utilisateur
let userName1 = 'remylegrand';
// Declaration de la variable de l'input
let userName = document.getElementById('userName');
//on appelle la fonction colorscreen quand on a entendu l'evenement keyup a la levée du doigt(keyup)
userName.addEventListener('keyup', colorscreen);

// Declaration de la fonction qui verifie l'username de l'utilisateur
function colorscreen() {

    if (userName.value == userName1) {
        //affichage bordure verte sur l'input
        userName.style.border = '5px solid green';
        //cibler l'element pour le bootstrap
        document.getElementById("container").innerHTML = '<div class="alert alert-success p-5 m-5"> GOOD </div>';
        // alert('GOOD')
    }
    else {
        //affichage bordure rouge sur l'input
        userName.style.border = '5px solid red';
        //cibler l'element pour le bootstrap
        document.getElementById("container").innerHTML = '<div class="alert alert-danger p-5 m-5"> ERREUR </div>';
    }
}

// Bonus
let bonus = document.getElementById('bonus');
bonus.addEventListener('click', function () {
    //sweet alert prise sur une bibliotheque sur chrome 
    swal({
        text: "c'est beau !",
    });
});