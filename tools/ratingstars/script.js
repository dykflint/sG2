function feedbackReaction_k(id_value){
    if (id_value === "star5" || id_value === "star4") {
        window.open("https://search.google.com/local/writereview?placeid=ChIJE8AWzbVPqEcRAkzc4YZNG4U");
        var form_iframe = document.getElementById("feedbackForm-konstantin");
        form_iframe.classList.add("hide-konstantin");
    }
    else {
        var form_iframe = document.getElementById("feedbackForm-konstantin");
        form_iframe.classList.remove("hide-konstantin");
    }
}