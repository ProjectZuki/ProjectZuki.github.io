/**
 * @brief Script for williealcaraz.dev
 * 
 * This script handles animations and interactions for the modernized portfolio website.
 * Includes smooth scrolling, and potentially new animations for hero section and reveal effects.
 * 
 * @author Willie Alcaraz | [Project]Zuki (Updated by AI)
 * @version 2.0.0
 * @date Current Date
 */

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------ Smooth Scrolling for Navigation ------------------------ //
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let targetId = this.getAttribute("href");
            // For local dev, if URL is like file:///...#projects, direct querySelector won't work.
            // We only want the #projects part.
            if (targetId.includes('/')) { // Basic check if it's a full path
                 targetId = '#' + targetId.split('#').pop();
            }
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // ------------------------ Hero Section Name Animation (Example) ------------------------ //
    // This is a placeholder for a more complex animation if desired, like the example site.
    // For now, let's make the highlighted name subtly pulse or change.
    const animatedName = document.getElementById("animated-name");
    if (animatedName) {
        // Example: Simple text color change animation
        let colors = ["#bb86fc", "#ffffff", "#a36bfc"];
        let currentIndex = 0;
        // setInterval(() => {
        //     animatedName.style.color = colors[currentIndex % colors.length];
        //     currentIndex++;
        // }, 1500);
        // The above might be too distracting. A subtle opacity pulse might be better.
        // Or a more sophisticated typing/reveal animation could be implemented here.
    }

    // ------------------------ Intersection Observer for Animations ------------------------ //
    // Re-implement or adapt previous Intersection Observer animations if they fit the new design.
    // Example: Fade-in elements as they scroll into view.

    const revealElements = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .gallery-item');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                // entry.target.classList.add('visible'); // Or add a class to trigger CSS animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }); // Trigger a bit before it's fully in view

    revealElements.forEach(el => {
        // Initial state for animation (set via JS for elements that might not have CSS initial state)
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        revealObserver.observe(el);
    });


    // ------------------------ Old Typing Animations (To be reviewed/repurposed) ------------------------ //
    // The old script had typing animations for section titles.
    // This might not fit the new design, which has static titles.
    // If typing animations are desired for specific elements (e.g., the hero role), they can be adapted.

    /*
    const TITLE_TYPING_SPEED = 25;
    const SECONDARY_TITLE_TYPING_SPEED = 50;

    function animateTitleText(text, spanElement, cursorElement, index, typeSpeed, callback) {
        if (index < text.length) {
            spanElement.textContent += text[index];
            index++;
            setTimeout(() => {
                animateTitleText(text, spanElement, cursorElement, index, typeSpeed, callback);
            }, typeSpeed - 20);
        } else {
            if (cursorElement) cursorElement.style.display = 'none'; // Hide cursor after typing
            if (callback) callback();
        }
    }

    // Example of how it might be repurposed for the hero role:
    const heroRoleElement = document.querySelector(".hero-role");
    if (heroRoleElement) {
        const originalText = heroRoleElement.textContent;
        heroRoleElement.textContent = ""; // Clear it
        // Create a cursor element if needed, or manage visibility of an existing one.
        // For simplicity, this example won't use a visible cursor during typing.
        // animateTitleText(originalText, heroRoleElement, null, 0, SECONDARY_TITLE_TYPING_SPEED, null);
    }
    */

    // ------------------------ Old Image Gallery Animation (To be reviewed/repurposed) ------------------------ //
    // The previous image gallery had a specific slide-in animation.
    // The new CSS for .gallery-item has its own hover animation.
    // The Intersection Observer above now handles a generic reveal for .gallery-item.
    // If more complex gallery-specific entry animations are needed, they can be added here.

    // ------------------------ Old Button Scroll Logic (Removed) ------------------------ //
    // The old script had specific button IDs for scrolling.
    // This is now handled by the generic smooth scrolling for anchor links.
    // document.getElementById("scroll_images_btn") etc. are no longer in the HTML.

    console.log("Modernized script loaded. Smooth scrolling and reveal animations active.");
});

/// **************************** EOF script.js **************************** ///
