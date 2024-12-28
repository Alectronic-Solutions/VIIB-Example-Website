document.addEventListener("DOMContentLoaded", function () {
    // ======================
    // Back to Top Button
    // ======================
    const backToTopButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // ======================
    // Burger Menu Toggle
    // ======================
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        burger.classList.toggle("toggle");
    });

    // Close Nav Links When a Link is Clicked
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            burger.classList.remove("toggle");
        });
    });

    // ======================
    // Modal Functionality
    // ======================
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");

    // Check if modal and modalContent exist
    if (!modal || !modalContent) {
        console.error("Modal or Modal Content element not found!");
    } else {
        // Modal content templates for news items
        const modalTemplates = {
            "new-album": `
                <span class="close-modal">&times;</span>
                <h3>New Album Release: "Acoustic EP"</h3>
                <p>We’re thrilled to announce the release of our latest album, <strong>"Acoustic EP"</strong>! This album is a heartfelt tribute to the soulful rhythms of reggae and the laid-back energy of California. Featuring 4 tracks, each song is a journey through love, unity, and the power of music.</p>
                <p>From the soothing melodies of <em>"Keep Your Cool"</em> to the acoustic vibes of <em>"My Friend"</em>, this album is a celebration of life and community. We poured our hearts into every note, and we can’t wait for you to experience it.</p>
                <p><strong>"Acoustic EP"</strong> is now available on all major streaming platforms. Turn up the volume, feel the rhythm, and let the music take you away!</p>
                <div class="modal-buttons">
                    <a href="#music" class="btn">Listen Now</a>
                    <a href="#tour" class="btn">Tour Dates</a>
                </div>
            `,
            "sonora-gig": `
                <span class="close-modal">&times;</span>
                <h3>Upcoming Gig in Sonora: Black Bomb Entertainment</h3>
                <p>We’re excited to announce that the <strong>VIIB Crew</strong> performed in <strong>Sonora, CA</strong> on <strong>December 21st, 2024</strong> at <strong>Black Bomb Entertainment</strong>! This was a night filled with good vibes, great music, and positive energy.</p>
                <p>We played tracks from our latest album <em>"Acoustic EP"</em>, along with some of your favorite classics. Whether you’re a longtime fan or new to our music, this was a show you wouldn't want to miss.</p>
                <p>Come join us next time for an evening of reggae rhythms, community spirit, and unforgettable memories. Let’s make it a night to remember!</p>
                <div class="modal-buttons">
                    <a href="#tour" class="btn">Get Tickets</a>
                    <a href="#music" class="btn">Listen to Our Music</a>
                </div>
            `,
            "behind-the-scenes": `
                <span class="close-modal">&times;</span>
                <h3>Behind the Scenes: Making "Acoustic EP"</h3>
                <p>Ever wondered what goes into creating an album? We’re taking you behind the scenes of our latest project, <strong>"Acoustic EP"</strong>. From late-night jam sessions in the studio to the final mastering process, we’re giving you an exclusive look at how we bring our music to life.</p>
                <p>This album was a labor of love, inspired by the beauty of California and the timeless spirit of reggae. We experimented with new sounds, collaborated with incredible musicians, and poured our hearts into every lyric and melody.</p>
                <p>Stay tuned for more behind-the-scenes content, including studio footage, interviews, and sneak peeks of upcoming projects. The journey is just as important as the destination, and we’re excited to share it with you!</p>
                <div class="modal-buttons">
                    <a href="#music" class="btn">Listen to the Album</a>
                    <a href="#tour" class="btn">Check Out Tour Dates</a>
                </div>
            `,
        };

        // Open modal when "Read More" is clicked in news items
        const readMoreButtons = document.querySelectorAll(".news-content .btn");
        readMoreButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const newsId = button.getAttribute("data-news-id"); // Get the data-news-id attribute
                if (!modalTemplates[newsId]) {
                    console.error("Template not found for news ID:", newsId);
                    return;
                }

                modalContent.innerHTML = modalTemplates[newsId]; // Load the correct template
                modal.classList.add("active"); // Show the modal

                // Add event listener for the close button inside the modal
                const closeModalButton = modalContent.querySelector(".close-modal");
                if (closeModalButton) {
                    closeModalButton.addEventListener("click", () => {
                        modal.classList.remove("active"); // Hide the modal
                    });
                }

                // Add smooth scrolling for buttons inside the modal
                const modalButtons = modalContent.querySelectorAll(".btn");
                modalButtons.forEach((modalButton) => {
                    modalButton.addEventListener("click", (event) => {
                        event.preventDefault(); // Prevent default link behavior
                        const targetSection = document.querySelector(modalButton.getAttribute("href")); // Get the target section
                        if (targetSection) {
                            modal.classList.remove("active"); // Hide the modal
                            targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target section
                        }
                    });
                });
            });
        });

        // Close modal when clicking outside the modal content
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.remove("active"); // Hide the modal
            }
        });
    }

    // ======================
    // FAQ Dropdown Functionality
    // ======================
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector("i");

            // Toggle the 'open' class for the answer
            answer.classList.toggle("open");

            // Toggle the 'active' class for the question
            question.classList.toggle("active");

            // Rotate the icon
            icon.style.transform = question.classList.contains("active") ? "rotate(180deg)" : "rotate(0)";
        });
    });

    // ======================
    // Order Form Modal Functionality
    // ======================
    const orderModal = document.querySelector(".order-modal");
    const orderModalContent = document.querySelector(".order-modal-content");
    const buyNowButtons = document.querySelectorAll(".shop-items .btn");

    // Open the order form modal when "Buy Now" is clicked
    buyNowButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default button behavior
            orderModal.classList.add("active"); // Show the modal
        });
    });

    // Close the order form modal when the close button is clicked
    const closeOrderModalButton = document.querySelector(".close-order-modal");
    if (closeOrderModalButton) {
        closeOrderModalButton.addEventListener("click", () => {
            orderModal.classList.remove("active"); // Hide the modal
        });
    }

    // Close the order form modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === orderModal) {
            orderModal.classList.remove("active"); // Hide the modal
        }
    });

    // Handle form submission
    const orderForm = document.getElementById("order-form");
    if (orderForm) {
        orderForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission

            // Get form data
            const formData = new FormData(orderForm);
            const orderData = {};
            formData.forEach((value, key) => {
                orderData[key] = value;
            });

            // Log the order data (you can replace this with an API call or other logic)
            console.log("Order Data:", orderData);

            // Show a success message (you can replace this with a more user-friendly notification)
            alert("Order placed successfully!");

            // Reset the form and close the modal
            orderForm.reset();
            orderModal.classList.remove("active");
        });
    }
});