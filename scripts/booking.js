$(document).ready(function(){
    $(".btn-submit").click(function(){
        let name = $("#name").val();
        let firstName = $("#firstName").val();
        let mail = $("#mail").val();
        let destination = $("#destination option:selected").val();
        let message = `Bonjour ${firstName} ${name}, votre demande de devis pour ${destination} a bien été prise en compte
        nous vous envoyons notre proposition sur votre adresse ${mail}.</br> Cordialement, l'équipe d'ECO.`;
        document.getElementById("modal-body").innerHTML = message;
        $("#myModal").modal('show');
    });
});