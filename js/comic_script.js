document.addEventListener("DOMContentLoaded", () => {
    const email = "o.grediushko@innopolis.university";
    const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${email}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const comicId = data;
            return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        })
        .then(response => response.json())
        .then(comic => {
            const comicTitle = document.getElementById("comic-title");
            const comicImg = document.getElementById("image");
            const comicDate = document.getElementById("date");

            comicTitle.textContent = comic.safe_title;
            comicImg.src = comic.img;
            comicImg.alt = comic.alt;
            const date = new Date(comic.year, comic.month - 1, comic.day);
            comicDate.textContent = date.toLocaleDateString();
        })
});
