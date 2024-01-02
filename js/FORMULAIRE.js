const form = document.forms.myform; // Récupérez le formulaire par le nom

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        const formData = new FormData(form);

        // Envoyez le formulaire à FormSubmit
        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                // Le formulaire a été soumis avec succès, redirigez l'utilisateur vers "thanks.html"
                window.location.href = "thanks.html";
            } else {
                alert("Erreur lors de l'envoi du formulaire.");
            }
        } catch (error) {
            alert("Erreur lors de l'envoi du formulaire:", error);
        }
    });


    // ...
form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    const formData = new FormData(form);

    // Affichez un message de chargement pendant le traitement
    const loadingMessage = document.createElement("div");
    loadingMessage.textContent = "Envoi en cours...";
    document.body.appendChild(loadingMessage);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            // Le formulaire a été soumis avec succès
            // Supprimez le message de chargement
            loadingMessage.remove();

            // Affichez un message de succès
            const successMessage = document.createElement("div");
            successMessage.textContent = "Formulaire envoyé avec succès!";
            document.body.appendChild(successMessage);

            // Redirigez l'utilisateur vers "thanks.html" après un court délai
            setTimeout(function () {
                window.location.href = "thanks.html";
            }, 2000); // Redirection après 2 secondes (ajustez selon vos besoins)
        } else {
            // Gérez les erreurs
            alert("Erreur lors de l'envoi du formulaire.");
        }
    } catch (error) {
        // Gérez les erreurs
        alert("Erreur lors de l'envoi du formulaire:", error);
    }
});
