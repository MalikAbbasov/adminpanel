const addLink = document.querySelector(".user_image");
const addName = document.querySelector(".user_name");
const addJob = document.querySelector(".user_job");
const addUser = document.querySelector(".buton")

  

addUser.addEventListener("click",function () {
    if (addName.value,addJob.value,addLink.value) {
        goBack(-1);
        myFetch()
    }
    else{
        alert("Duzgun deyer daxil edin!!!")
    }
})

function goBack() {
    window.history.back()
  }


async function myFetch() {

    fetch('http://localhost:3000/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
},
body: JSON.stringify({
    name: addName.value,
    job : addJob.value,
    image : addLink.value

})
})
}

// adminpanel ve homepage kecid ucun asidebar
let asidebar = document.querySelector(".asidebar");
let button = document.querySelector(".aside_button")
let close = document.querySelector(".close")


button.addEventListener("click",function () {
    asidebar.classList.remove("none")
})
close.addEventListener("click",function () {
    asidebar.classList.add("none")
})