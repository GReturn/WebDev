// holds the slider
const initialize_slider = () => {
    // variables that holds the different HTML tags
    // holds the first htlm tags with the class defined
    const image_list = document.querySelector(".slider_wrapper .image_list");
    // hold all elements with the class
    const slide_buttons = document.querySelectorAll(".slider_wrapper .slide_button");
    const slider_scrollbar = document.querySelector(".container .slider_scrollbar");
    const scrollbar_thumb = document.querySelector(".scrollbar_thumb");

    // to get the distance of the scrollbar
    const max_scroll_left = image_list.scrollWidth - image_list.clientWidth;

    // Handle scrollbar thumb drag
    scrollbar_thumb.addEventListener("mousedown", (e) => {
        // starting the position of the scrollbar
        const start_x = e.clientX;
        // current position of the thumb
        const thumb_position = scrollbar_thumb.offsetLeft;
        // ensure that the scrollbar is bounded in the scrolltrack
        const max_thumb_position = slider_scrollbar.getBoundingClientRect().width - scrollbar_thumb.offsetWidth;

        // Update thumb position on mouse move
        const handle_mouse_move = (e) => {
            const delta_x = e.clientX - start_x;
            const new_thumb_position = thumb_position + delta_x;

            // Ensure that the scrollbar thumb stays within bounds
            const bounded_position = Math.max(0, Math.min(max_thumb_position, new_thumb_position));
            const scroll_position = (bounded_position / max_thumb_position) * max_scroll_left;

            // CSS STYLE TO MAKE SOME CHANGES ON THE POSITION OF OUR SCROLLBAR
            scrollbar_thumb.style.left = `${bounded_position}px`;
            image_list.scrollLeft = scroll_position;
        }

        // Remove even listeners on mouse up
        const handle_mouse_up = () => {
            document.removeEventListener("mousemove", handle_mouse_move);
            document.removeEventListener("mouseup", handle_mouse_up);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handle_mouse_move);
        document.addEventListener("mouseup", handle_mouse_up);
    });

    // Slide images according to the slide button clicks
    slide_buttons.forEach(button => {
        button.addEventListener("click", () => {
            // CHECKS THE DIRECTION
            const direction = button.id === "prev_button" ? -1 : 1;
            const scroll_amount = image_list.clientWidth * direction;
            image_list.scrollBy({ left: scroll_amount, behavior: "smooth" });
        })
    });

    // Show or hide slide buttons based on scroll position
    const handle_slide_buttons = () => {
        slide_buttons[0].style.display = image_list.scrollLeft <= 0 ? "none" : "flex";
        slide_buttons[1].style.display = image_list.scrollLeft >= max_scroll_left ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const update_scroll_thumb_position = () => {
        const scroll_position = image_list.scrollLeft;
        const thumb_position = (scroll_position / max_scroll_left) * (slider_scrollbar.clientWidth - scrollbar_thumb.offsetWidth);
        scrollbar_thumb.style.left = `${thumb_position}px`;
    }

    // Call these two functions when image list scrolls
    image_list.addEventListener("scroll", () => {
        update_scroll_thumb_position();
        handle_slide_buttons();
    })

}

window.addEventListener("resize", initialize_slider);
window.addEventListener("load", initialize_slider);

console.log("carousel.js has successfully connected to index.html");