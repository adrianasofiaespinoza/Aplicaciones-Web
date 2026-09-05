$(document).ready(function() {

    $(".content").hide();

    $(".toggle-btn").click(function() {

        $(this)
            .closest(".section-header")
            .next(".content")
            .slideToggle();

        $(this).text(
            $(this).text() === "▼" ? "▲" : "▼"
        );
    });

    $(".gallery-img").click(function(){

    let imageSrc = $(this).attr("src");

    $("#modalImage").attr("src", imageSrc);

    $("#imageModal").fadeIn();
    });

    $(".close, #imageModal").click(function(){
        $("#imageModal").fadeOut();
    });

    $("#modalImage").click(function(event){
        event.stopPropagation();
    });
    

    $(".contact-form").on("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        // Limpiar estados previos
        $(".contact-form input, .contact-form select, .contact-form textarea")
            .removeClass("invalid");
        $(".error-message").remove();

        function markInvalid(field, message) {
            field.addClass("invalid");
            field.after(`<span class="error-message show">${message}</span>`);
            isValid = false;
        }

        // Nombre completo
        const name = $("#name");
        if (name.val().trim() === "") {
            markInvalid(name, "El nombre es obligatorio.");
        }

        // Email
        const email = $("#email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.val().trim() === "" || !emailPattern.test(email.val().trim())) {
            markInvalid(email, "Ingresa un correo válido.");
        }

        // Fecha de nacimiento
        const birthdate = $("#birthdate");
        if (birthdate.val() === "") {
            markInvalid(birthdate, "La fecha de nacimiento es obligatoria.");
        } else {
            const today = new Date();
            const bDate = new Date(birthdate.val());
            if (bDate > today) {
                markInvalid(birthdate, "La fecha no puede ser futura.");
            }
        }

        // Degree
        const degree = $("#degree");
        if (degree.val() === "") {
            markInvalid(degree, "Selecciona un programa de estudio.");
        }

        // Semestre
        const semester = $("#semester");
        if (semester.val() === "") {
            markInvalid(semester, "Selecciona un semestre.");
        }

        // Motivo
        const reason = $("#reason");
        if (reason.val() === "") {
            markInvalid(reason, "Selecciona un motivo de contacto.");
        }

        // Mensaje
        const message = $("#message");
        if (message.val().trim() === "") {
            markInvalid(message, "El mensaje no puede estar vacío.");
        } else if (message.val().trim().length < 10) {
            markInvalid(message, "El mensaje debe tener al menos 10 caracteres.");
        }

        // Checkbox de aceptación
        const accept = $("#accept");
        if (!accept.is(":checked")) {
            markInvalid(accept, "Debes aceptar el uso de tu información.");
        }

        if (isValid) {
            alert("Form submitted successfully!");
            $(this)[0].reset();
        }
    });

    // Quitar el error al escribir/cambiar el campo
    $(".contact-form").on("input change", "input, select, textarea", function () {
        $(this).removeClass("invalid");
        $(this).next(".error-message").remove();
    });

    
});


