const root = document.querySelector("#container");


const ids = ["hilo", "interruptor", "resistencia", "ampe", "pila", "volt", "gene", "motor", "bombilla"];


ids.forEach(id => {
    const obj = document.getElementById(id);
    obj.addEventListener("click", () => {
        const newObject = document.createElement("div");
        const imageObject = document.createElement("img");

        imageObject.src = "/media/" + id + ".png";
        imageObject.ondragstart = () => false;

        newObject.appendChild(imageObject);

        newObject.classList.add("dragObject");

        root.appendChild(newObject);

        newObject.addEventListener("mousedown", (e) => {

            let posX = e.clientX;
            let posY = e.clientY;

            document.onmouseup = () => {
                document.onmouseover = null;
                document.onmousedown = null;
            }

            document.onmouseover = (e) => {

                let newPosX = posX - e.clientX;
                let newPosY = posY - e.clientY;
                posX = e.clientX;
                posY = e.clientY;

                newObject.style.left = (newObject.offsetLeft - newPosX) + "px";
                newObject.style.top = (newObject.offsetTop - newPosY) + "px";
                console.log(newObject.offsetLeft);
                console.log(newObject.offsetTop);
            }
        });
            newObject.addEventListener("contextmenu", (e) => {

                e.preventDefault();
                if (imageObject.style.transform === "rotate(90deg)") {
                    imageObject.style.transform = "rotate(0deg)";
                }
                else {
                    imageObject.style.transform = "rotate(90deg)";
                }
                return false;
            }, false)
    });
});






