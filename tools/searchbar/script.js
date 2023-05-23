

data = JSON.parse(allLectures);

console.log(data);


function search_animal() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let x = document.querySelector("#list-holder");
    x.innerHTML = "";
    for(i = 0; i < data.length; i++) {
        let obj = data[i];
        if(input.length > 1){
            if(obj.Name.toLowerCase().includes(input) || 
            obj.Contents.toLowerCase().includes(input) ||
            obj.Tags.toLowerCase().includes(input)) {
                const elem = document.createElement("li");
                elem.innerHTML =`${obj.Name} - ${obj.Contents}`;
                elem.innerHTML = "<a href='https://www.google.com'>" + elem.innerHTML + "</a>";
                x.appendChild(elem);
            }
        }
    }
}

// function search_animal() {
//     let input = document.getElementById("searchbar").value;
//     input = input.toLowerCase();
//     let x = document.querySelector("#list-holder");
//     x.innerHTML = "";
//     for(i = 0; i < data.length; i++) {
//         let obj = data[i];
//         if(input.length > 1){

//             if(obj.Name.toLowerCase().includes(input) || 
//             obj.Color.toLowerCase().includes(input) || 
//             obj.Description.toLowerCase().includes(input)) {
//                 const elem = document.createElement("li");
//                 elem.innerHTML = `${obj.Name} - ${obj.Color} - <br>${obj.Description}`;
//                 x.appendChild(elem);
//             }
//         }
//     }
// }