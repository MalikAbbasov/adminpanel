const container = document.querySelector(".container");

let url = "http://localhost:3000/posts"

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      CreateCards(element.id, element.image, element.name, element.job);

      function CreateCards(id, image, name, job) {
        let table_header = document.createElement("div");
        let table_id = document.createElement("div");
        let table_image = document.createElement("div");
        let table_name = document.createElement("div");
        let table_job = document.createElement("div");
        let table_update = document.createElement("div");
        let table_delete = document.createElement("div");

        table_header.classList.add("table-header");
        table_id.classList.add("table-id");
        table_image.classList.add("table-image");
        table_name.classList.add("table-name");
        table_job.classList.add("table-job");
        table_update.classList.add("table-update");
        table_delete.classList.add("table-delete");

        const card_id = document.createElement("div");
        const card_img = document.createElement("img");
        const card_name = document.createElement("div");
        const card_job = document.createElement("div");
        const card_delete = document.createElement("button");
        const card_update = document.createElement("button");

        card_id.textContent = id;
        card_img.textContent = image;
        card_name.textContent = name;
        card_job.textContent = job;
        card_delete.textContent = "delete";
        card_update.innerHTML = "update";

        card_update.classList.add("add_newuser");
        card_delete.classList.add("go_homepage");

        card_img.classList.add("card_photo");

        table_id.append(card_id);
        table_image.append(card_img);
        table_name.append(card_name);
        table_job.append(card_job);
        table_delete.append(card_delete);
        table_update.append(card_update);

        table_header.style.display = "flex";
        table_header.style.alignItems = "center";
        table_header.style.width = "100%";
        table_header.style.height = "140px";
        table_header.style.fontSize = "25px";
        table_header.style.color = "white";
        table_header.style.backgroundColor = "initial";

        table_id.style.width = "75px";
        table_id.style.height = "100%";
        table_id.style.display = "flex";
        table_id.style.alignItems = "center";
        table_id.style.justifyContent = "center";
        table_id.style.border = "1px solid black";

        table_image.style.width = "450px";
        table_image.style.height = "100%";
        table_image.style.display = "flex";
        table_image.style.alignItems = "center";
        table_image.style.justifyContent = "center";
        table_image.style.border = "1px solid black";

        card_img.style.width = "130px";
        card_img.style.height = "120px";
        card_img.style.borderRadius = "50%";

        table_name.style.width = "125px";
        table_name.style.height = "100%";
        table_name.style.display = "flex";
        table_name.style.alignItems = "center";
        table_name.style.justifyContent = "center";
        table_name.style.border = "1px solid black";

        table_job.style.width = "450px";
        table_job.style.height = "100%";
        table_job.style.display = "flex";
        table_job.style.alignItems = "center";
        table_job.style.justifyContent = "center";
        table_job.style.border = "1px solid black";

        table_update.style.width = "250px";
        table_update.style.height = "100%";
        table_update.style.display = "flex";
        table_update.style.alignItems = "center";
        table_update.style.justifyContent = "center";
        table_update.style.border = "1px solid black";

        table_delete.style.width = "250px";
        table_delete.style.height = "100%";
        table_delete.style.display = "flex";
        table_delete.style.alignItems = "center";
        table_delete.style.justifyContent = "center";
        table_delete.style.border = "1px solid black";



       

        table_header.append(
          table_id,
          table_image,
          table_name,
          table_job,
          table_update,
          table_delete
        );
        container.appendChild(table_header);

        card_img.setAttribute("src", element.image);

          // elementlerin id-sine gore update sehifesine kecidi.
       card_update.addEventListener("click",function () {
        location.href=`http://127.0.0.1:5500/adminpanelUpdate.html#${element.id}`

       })

       // del function
        function delUser() {
            card_delete.addEventListener("click",function () {
                fetch(`${url}/${element.id}`,{method: 'DELETE'})
                .then(res=>res.json())
            })
        }
        delUser()
        // 
      }
      

    });
    
  });

