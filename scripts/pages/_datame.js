const title_pri = document.getElementById("title");
const text = document.getElementById("text");
const image = document.getElementById("image");
const skill__set = document.getElementById("skill__set");
const project = document.getElementById("project");
const container = document.getElementById("container");
const section = document.getElementById("section");

const jsonUrl = 'data/_abtm.json';
fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {

        const h1 = document.createElement('h1');
        h1.innerText = data.title.title;
        const p = document.createElement('p');
        p.innerText = data.title.content;

        title_pri.appendChild(h1);
        title_pri.appendChild(p);

        data.items.forEach(item => {
            const div = document.createElement('div');
            div.setAttribute("id", "text");

            div.setAttribute("class", `item ${item.size}`)

            if (item.background) {
                div.style.backgroundImage = `url(${item.background})`;
                div.style.backgroundSize = '100% 100%';
                div.style.backgroundPosition = 'center';
                div.style.backgroundRepeat = 'no-repeat';
                div.style.overflow = 'hidden'
            }


            const title = document.createElement('h2');
            const content = document.createElement('p');
            const time = document.createElement('p');

            title.innerText = item.title ? item.title : "";
            content.innerText = item.content ? item.content : "";
            time.innerText = item.time ? item.time : "";

            div.appendChild(title);
            div.appendChild(time)
            div.appendChild(content);

            container.appendChild(div);

            if (item.size === "small") {
                div.addEventListener("click", function () {
                    section.innerHTML = '';

                    section.style.display = "flex";

                    const sectionTitle = document.createElement('h2');
                    sectionTitle.innerText = item.title;

                    const sectionContent = document.createElement('p');
                    sectionContent.innerHTML = `${item.text}<br><br>${item.link}<br>${item.link2}`;
                    sectionContent.style.textAlign = 'center';

                    const sectionImage = document.createElement('img');
                    sectionImage.src = item.background;
                    sectionImage.alt = item.title;
                    sectionImage.style.height = '60%';

                    section.appendChild(sectionTitle);
                    section.appendChild(sectionImage);
                    section.appendChild(sectionContent);

                    const sectionButton = document.createElement('button');
                    console.log("test")
                    sectionButton.innerHTML = "Exit"
                    sectionButton.addEventListener("click", function () {
                        section.style.display = 'none';
                        section.innerHTML = '';
                    });
                    section.appendChild(sectionButton);
                });
            }

        });
    })
    .catch(error => console.error('Error fetching the data:', error));
