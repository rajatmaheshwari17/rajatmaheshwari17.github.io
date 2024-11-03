document.addEventListener("DOMContentLoaded", () => {
    const backgroundAnimation = document.querySelector(".background-animation");

    if (backgroundAnimation) {
        const stars = [];
        const numStars = 100;
        const driftSpeed = 0.02;
        backgroundAnimation.innerHTML = '';

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement("div");
            star.classList.add("star");
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.width = `${Math.random() * 2 + 1}px`;
            star.style.height = star.style.width;
            star.style.animationDuration = `${5 + Math.random() * 5}s`;
            backgroundAnimation.appendChild(star);

            stars.push({
                element: star,
                xDirection: (Math.random() - 0.5) * driftSpeed,
                yDirection: (Math.random() - 0.5) * driftSpeed
            });
        }

        function animateStars() {
            stars.forEach((starObj) => {
                const star = starObj.element;
                let currentLeft = parseFloat(star.style.left);
                let currentTop = parseFloat(star.style.top);

                currentLeft += starObj.xDirection;
                currentTop += starObj.yDirection;

                if (currentLeft > 100) currentLeft = 0;
                if (currentLeft < 0) currentLeft = 100;
                if (currentTop > 100) currentTop = 0;
                if (currentTop < 0) currentTop = 100;

                star.style.left = `${currentLeft}%`;
                star.style.top = `${currentTop}%`;
            });
            requestAnimationFrame(animateStars);
        }

        animateStars();
    } else {
        console.warn("Background animation element not found on this page.");
    }
});
