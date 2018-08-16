let dropbtns = document.getElementsByClassName ("dropbtn");
// dropbtns[0].addEventListener("mouseover", info(0));
for(let i = 0; i < dropbtns.length; i++){
  dropbtns[i].addEventListener("mouseover", function(){
    document.getElementsByClassName(this.className.split(" ")[1])[1].style.display = 'block';
  });
}

let mapElement = document.querySelector("#map");
mapElement.addEventListener("mouseover", vanish);

function vanish(){
  console.log("hello")
  let dropDownContents = document.getElementsByClassName("dropdown-content");
  for (let dropDownContent of dropDownContents){
   dropDownContent.style.display = 'none';
  }
 
}

