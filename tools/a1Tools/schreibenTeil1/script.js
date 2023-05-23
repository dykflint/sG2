// CONSTANTS
const iframeContainer = document.querySelector('.schreibenIframe');
let e = document.querySelector('#lessonNumber');
const lessonTitle = document.querySelector('.lesson-title');
const lessonText = document.querySelector('.lesson-text');
lessonTitle.innerHTML = "Eine Einladung zum Geburtstag annehmen"

e.addEventListener("change", () => {
    let value = e.value;
    if(value == 1) {
        lessonTitle.innerHTML = "Sprachschule DEUTSCH - Anmeldung"
        lessonText.innerHTML = "Ihre Freundin Lydia Aytogmus aus der Türkei, geboren am 12.3.1981 in Mersin, möchte im Januar einen Deutschkurs in Deutschland besuchen. Sie ist auf dem Niveau A2.2. Sie hat nur morgens Zeit. Sie spricht Türkisch als Muttersprache und fließend Arabisch. Helfen Sie Lydia und schreiben Sie die fünf fehlenden Informationen in das Formular unten. Am Ende schreiben Sie Ihre Lösungen bitte auf den Antwortbogen."
    }
    if(value == 2) {
        lessonTitle.innerHTML = "ANMELDUNG"
        lessonText.innerHTML = "Füllen Sie das Formular unten aus mit den folgenden Angaben: \n Herr Pierre Littbarski, geb. 16.04.1960 in Berlin, wohnhaft Mauerstraße 61, 14244 Berlin\n Am Ende schreiben Sie Ihre Lösungen bitte auf den Antwortbogen."
    }
    if(value == 3) {
        lessonTitle.innerHTML = "Dr. Frank Enstein Patienteninformation"
        lessonText.innerHTML = "Ihr Freund, Volodymyr Zelenskyy, geboren am 25. Januar 1978 in Kryvyi Rih (44) in der Ukraine lebt seit einem Monat in 65207 Wiesbaden, in der Hauptstraße 21. Er ist 45. Er hat eine neue Stelle bei HR Manager bei der Deutschen Bank. Seit Montag, dem 11.11. hat er Husten und hohes Fieber. Er ist heute zum ersten Mal bei einem deutschen Arzt und muss ein Formular ausfüllen. Seine Krankenkasse ist die Techniker Krankenkasse. Helfen Sie Ihm und schreiben Sie die fehlenden Informationen in das Formular. Am Ende schreiben Sie Ihre Lösungen bitte auf den Antwortbogen."
    }
    if(value == 4) {
        lessonTitle.innerHTML = "Formular"
        lessonText.innerHTML = "Ihre Freundin Marina Visconti aus Italien möchte vom 14.02.-21.02. mit ihrer Frau und ihren beiden Töchtern (10 und 12 Jahre alt) Urlaub in Wien machen. Im Internet bucht sie über ein Reisebüro ein Zugticket  für vier Personen von Rom nach Wien. Keine der Reisenden hat eine Bahncard. Marina hat keine Kreditkarte und kein PayPal Konto. \nHelfen Sie Ihrer Freundin und schreiben Sie die fünf fehlenden Informationen in das Formular. \nAm Ende schreiben Sie Ihre Lösungen bitte auf den Antwortbogen."
    }
    if(value == 5) {
        lessonTitle.innerHTML = "Formular"
        lessonText.innerHTML = "Ihr Freund Louis Cypher aus Wisconsin USA muss nächsten Sonntag beruflich auf die Messe in Hamburg. Er sucht für zwei Nächte ein billiges Hotelzimmer für Übernachtung mit Frühstück. Aber er möchte alleine im Zimmer schlafen.\n Helfen Sie Ihrem Freund und schreiben Sie die fünf fehlenden Informationen in das Formular. Am Ende schreiben Sie Ihre Lösungen bitte auf den Antwortbogen. "
    }
    if(value == 6) {
        lessonTitle.innerHTML = "Formular"
        lessonText.innerHTML = "Ihr Freund, Herr Mehmet Gündogdu, aus Istanbul, Türkei, möchte vom 17. bis zum 24.06. Urlaub in Berlin machen. Seine Frau und seine drei Söhne (6, 13 und 16) reisen mit ihm. Im Internet möchte er zwei Zimmer im Hotel Zum Goldenen Löwen buchen. Seine E-Mail Adresse ist  m.gundogdu@posteo.tr.\nHelfen Sie Ihrem Freund und schreiben Sie die fünf fehlenden Informationen in das Formular. Am Ende schreiben Sie Ihre Lösungen bitte auf den Antwortbogen. "
    }
    if(value == 7) {
        lessonTitle.innerHTML = "Formular"
        lessonText.innerHTML = "Ihre Freundin Carmen Andreina Olivares Moreno aus Venezuela, 23 Jahre, geboren am 14.02.1999 in Caracas möchte vom 15. März bis zum 14. April einen B1 Deutschkurs machen. Sie möchte einen Intensivkurs mit 100 Unterrichtsstunden buchen. Für den Schülerausweis muss sie ein Formular ausfüllen. \nHelfen Sie Ihrer Freundin und schreiben Sie die fünf fehlenden Informationen in das Formular. Am Ende schreiben Sie Ihre Lösungen bitte auf den Antwortbogen. "
    }
    if(value == 8) {
        lessonTitle.innerHTML = "Formular"
        lessonText.innerHTML = "Emre, der Sohn von Ihrem Nachbarn Herrn Selmanovic ist 12 Jahre alt und möchte gerne Karate machen. Es gibt zwei Trainingstage. Emre hat nur am Freitag Zeit zum Trainieren. Herr Kosic möchte den Mitgliedsbeitrag jeden Monat automatisch überweisen, so dass er nicht immer daran denken muss. Seine Telefonnummer ist: 0176 276 988 40. Emre hat noch kein Telefon. \Helfen Sie Ihrem Nachbarn und schreiben Sie die fünf fehlenden Informationen in das Formular. \nAm Ende schreiben Sie Ihre Lösungen bitte auf den Antwortbogen. "
    }
    if(value == 9) {
        lessonTitle.innerHTML = "Wohnungssuche - Standard"
        lessonText.innerHTML = "Ihr Freund, Ramo Vikation, spricht nur wenig Deutsch. Er möchte einen Deutschkurs an der Volkshochschule machen (Niveau A1.1) hat aber nur vormittags Zeit. Er wohnt in 60306 Frankfurt am Main, in der Holzapfelstraße 69. Seine Telefonnummer ist +49 (0)161 53179488. Im Kursprogramm finden Sie einen passenden Kurs für Herrn Vikation.\n Helfen Sie Ihrem Freund und schreiben Sie die fünf fehlenden Informationen in das Formular.\n Am Ende schreiben Sie Ihre Lösungen bitte auf den Antwortbogen. "
    }
    if(value == 10) {
        lessonTitle.innerHTML = "Wohnungssuche - WG"
        lessonText.innerHTML = "Ihre Nachbarin und Freundin Soein Zufall muss sich bei einer deutschen Krankenkasse anmelden. Dafür muss sie ein Formular ausfüllen. Soeins Sozialversicherungsnummer ist 15070649C103. Sie ist am 22.10.1971 in Genf in der Schweiz geboren und wohnt jetzt in Frankenthal in Deutschland. Ihr Beruf ist Lottofee. Sie hat ein Konto bei der Sparkasse Frankenthal mit folgenden Daten: BLZ: 54651240  - BIC: MALADE51DKH  - IBAN DE13 1004 0000 0546 5124 08"
    }
    iframeContainer.setAttribute("src", "https://smartergerman.github.io/a1ExamHacking/Schreiben/teil1/"+value+"/index.html")
})

