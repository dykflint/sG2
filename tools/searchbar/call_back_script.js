function search_animal() {
    var tmp;
    $.getJSON("jsonData.json", callbackFuncWithData);
    
    function callbackFuncWithData(data) {
        tmp = data;
        let input = document.getElementById("searchbar").value;
        input = input.toLowerCase();
        let x = document.querySelector('#list-holder');
        x.innerHTML = "";
        for(i = 0; i < tmp.length; i++) {
            let obj = tmp[i];
            
            if(obj.Name.toLowerCase().includes(input)) {
                const elem = document.createElement("li");
                elem.innerHTML = `${obj.Name} - ${obj.Color}`;
                x.appendChild(elem)
            }
        }
    }
}
