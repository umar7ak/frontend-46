const prevBtn = document.querySelector(".prev"),
    nextBtn = document.querySelector(".next"),
    imgBlock = document.querySelector("#image"),
    result = document.querySelector("#result")

const imagesList = [
    "https://th.bing.com/th/id/OIP.WjvH8zi1-PKamcjN3qVI4AHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7",
    "https://www.bing.com/th?id=OIP.zz0kryPz27bK2cwx-H9vIwHaHa&w=200&h=200&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    "https://www.bing.com/th?id=OIP.rSRkhy1aWR_b-5vR5YQOpgAAAA&w=155&h=200&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    "https://www.bing.com/th?id=OIP.xncbmIfEm9mlzrWWAXTEBQHaFM&w=202&h=200&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
]

function updateSlider(index) {
    imgBlock.setAttribute("src", imagesList[index])
    result.textContent = `Slide ${index + 1}`
}

let currentSlide = 0

nextBtn.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % imagesList.length
    updateSlider(currentSlide)
})

prevBtn.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + imagesList.length) % imagesList.length
    updateSlider(currentSlide)
})