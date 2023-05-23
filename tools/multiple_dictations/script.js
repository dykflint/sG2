let dictation_levels = ["a1-mini", "a2-mini", "b1-mini", "b2-mini", "c1-mini"];

function changeDictation_k(dictation_level) {
    var i;
    for (i = 0; i < dictation_levels.length; i++) {
        var someDictation = document.querySelector("[data-text_id=" + dictation_levels[i] + "]");
        someDictation.classList.remove("dictation-checker");
    }
    var currentDictation = document.querySelector("[data-text_id="+dictation_level + "]");
    currentDictation.classList.add("dictation-checker");
}