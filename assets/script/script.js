const container = document.querySelector(".container")
fetch("http://localhost:3000/posts")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    data.forEach(element => {
        
        CreateHomeCards(element.image,element.name,element.job)

        function CreateHomeCards(image,name,job) {
            let table_card=document.createElement("div");
            let table_image=document.createElement("div");
            let table_name=document.createElement("div");
            let table_job=document.createElement("div")

            table_card.classList.add("box")
            table_image.classList.add("box_photo")
            table_name.classList.add("box_text_name")
            table_job.classList.add("box_text_job")

            const card_img=document.createElement("img");
            const card_name=document.createElement("div")
            const card_job = document.createElement("div")

            card_img.textContent=image;
            card_name.textContent=name;
            card_job.textContent=job;

            card_img.classList.add("card_photo")

            table_image.append(card_img);
            table_name.append(card_name);
            table_job.append(card_job);

            table_card.style.width="300px"
            table_card.style.height="400px"
            table_card.style.fontSize="25px"
            table_card.style.color="white"

            table_image.style.width="100%"
            table_image.style.height="70%"
            table_image.style.display="flex"
            table_image.style.alignItems="center"
            table_image.style.justifyContent="center"
            table_image.style.border="1px solid black"

            table_name.style.width="100%"
            table_name.style.height="15%"
            table_name.style.display="flex"
            table_name.style.alignItems="center"
            table_name.style.justifyContent="center"
            table_name.style.border="1px solid black"

            table_job.style.width="100%"
            table_job.style.height="15%"
            table_job.style.display="flex"
            table_job.style.alignItems="center"
            table_job.style.justifyContent="center"
            table_job.style.border="1px solid black"

            card_img.style.width="100%"
            card_img.style.height="100%"

            card_img.setAttribute("src",element.image)

            table_card.append(table_image,table_name,table_job);
            container.appendChild(table_card)

        }
    });
})