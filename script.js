const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const counter = document.querySelector(".counter");

let currentIndex = 0;

function showImage(index){
    lightboxImg.src = images[index].src;
    counter.textContent = `${index + 1} / ${images.length}`;
}

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex = index;

        showImage(currentIndex);

        lightbox.classList.add("active");
    });

});

closeBtn.addEventListener("click",()=>{
    lightbox.classList.remove("active");
});

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage(currentIndex);

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage(currentIndex);

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key === "ArrowRight"){
        nextBtn.click();
    }

    if(e.key === "ArrowLeft"){
        prevBtn.click();
    }

    if(e.key === "Escape"){
        closeBtn.click();
    }

});

const filterButtons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".image-card");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>{
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card=>{

            if(filter === "all"){
                card.style.display = "block";
            }
            else{
                card.style.display =
                card.classList.contains(filter)
                ? "block"
                : "none";
            }

        });

    });

});