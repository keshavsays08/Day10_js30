const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxs);

let selectAll = document.getElementById("selectAll")
let deSelectAll = document.getElementById("deSelectAll")
//working fine

selectAll.addEventListener("click",function(){
    checkboxs.forEach(checkbox =>{
        checkbox.checked = true;
    })
})
deSelectAll.addEventListener("click",function(){
    checkboxs.forEach(checkbox =>{
        checkbox.checked = false;
    })
})

let lastChecked;

function handleCheck(e) {
    //check if they had the shift key  down
    //And check that they are checking it
    //   console.log(e)
    //loop over every single checkbox
    let inBwt = false;
    
    if (e.shiftKey && this.checked) {
        checkboxs.forEach(checkbox => {
            console.log(checkbox)
            if(checkbox===this || checkbox===lastChecked){
                inBwt =!inBwt;
                console.log("starting to check them in between")
            }
            if(inBwt){
              checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}



checkboxs.forEach(checkbox => checkbox.addEventListener("click", handleCheck));






