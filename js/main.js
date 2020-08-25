function submit(){

    if(document.querySelector('#name').value == "" || document.querySelector("#date").value == "" || document.querySelector("#e-mail").value == "" || document.querySelector("#telephone").value == "" || document.querySelector("#textArea").value == ""){

        $("#msg-erro").slideDown(400).delay(2000).slideUp(400)

    } else {
        $("#msg-sucesso").slideDown(400).delay(2000).slideUp(400)


    }

}

function clean(){

    document.querySelector("#name").value = ""
    document.querySelector("#date").value = ""
    document.querySelector("#e-mail").value = ""
    document.querySelector("#telephone").value = ""
    document.querySelector("textArea").value = ""

}