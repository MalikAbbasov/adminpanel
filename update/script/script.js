let get_image = document.querySelector(".user_image");
let get_name = document.querySelector(".user_name");
let get_job = document.querySelector(".user_job");
const form = document.getElementById("form");

let url = "http://localhost:3000/posts";
hash = window.location.hash.substring(1);
function goBack() {
  window.history.go(-1);
}

form.addEventListener('submit', function () {
  goBack();
  fetch(`${url}/${hash}`,{
    method: "PUT",
    body: JSON.stringify({
      image: get_image.value,
      name: get_name.value,
      job: get_job.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    catch (err){
      console.error(err);
    }
  });

});
