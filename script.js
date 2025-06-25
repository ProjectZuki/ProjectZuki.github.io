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

// Global variables for colors
const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();

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
        entries.forEach((entry, index) => { // Added index here
            if (entry.isIntersecting) {
                // Apply a delay based on the index for staggering, only for specific parent containers
                let delay = 0;
                const parentSkillsGrid = entry.target.closest('.skills-grid');
                const parentProjectsRow = entry.target.closest('.projects-section .row');
                const parentGalleryGrid = entry.target.closest('.gallery-grid');

                if (parentSkillsGrid && entry.target.classList.contains('skill-category')) {
                    const items = Array.from(parentSkillsGrid.querySelectorAll('.skill-category'));
                    delay = items.indexOf(entry.target) * 150; // 150ms stagger
                } else if (parentProjectsRow && entry.target.classList.contains('project-card')) {
                    const items = Array.from(parentProjectsRow.querySelectorAll('.project-card'));
                    delay = items.indexOf(entry.target) * 150; // 150ms stagger
                } else if (parentGalleryGrid && entry.target.classList.contains('gallery-item')) {
                    const items = Array.from(parentGalleryGrid.querySelectorAll('.gallery-item'));
                    delay = items.indexOf(entry.target) * 100; // 100ms stagger for gallery
                }
                // For timeline items, no parent-based stagger, they appear as they intersect.

                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        // Transition delay will be handled by the setTimeout in the observer callback
        revealObserver.observe(el);
    });


    // ------------------------ Typing Animations for Section Titles ------------------------ //

    const TYPING_SPEED = 75; // Adjusted speed, slightly slower

    // Recursive function for typing animation
    function animateTitleTextRecursive(text, textElement, cursorElement, currentIndex, speed, callback) {
        if (cursorElement) cursorElement.style.display = 'inline'; // Ensure cursor is visible during animation

        if (currentIndex < text.length) {
            textElement.textContent += text.charAt(currentIndex);
            setTimeout(() => {
                animateTitleTextRecursive(text, textElement, cursorElement, currentIndex + 1, speed, callback);
            }, speed);
        } else {
            // Animation complete
            // Optional: keep cursor blinking or hide it. Currently, CSS handles blinking.
            // if (cursorElement) cursorElement.style.display = 'none';
            if (callback) callback();
        }
    }

    function setupTitleAnimation(containerId, textSpanId, fullText, color) {
        const titleContainer = document.getElementById(containerId);
        const textElement = document.getElementById(textSpanId);
        const cursorElement = textElement ? textElement.nextElementSibling : null;

        if (titleContainer && textElement && cursorElement) {
            const titleObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            textElement.textContent = ''; // Clear text just before starting
                            if (color) {
                                textElement.style.color = color;
                            }
                            animateTitleTextRecursive(fullText, textElement, cursorElement, 0, TYPING_SPEED, () => {
                                // Optional: any action after typing is complete
                            });
                        }, 500); // set delay in ms
                        titleObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            titleObserver.observe(titleContainer);
        } else {
            if (!titleContainer) console.error("Missing container:", containerId);
            if (!textElement) console.error("Missing text span:", textSpanId);
            if (!cursorElement) console.error("Missing cursor span for:", textSpanId);
        }
    }

    // Setup for each title
    // Note: The section renaming ("My Journey" to "Timeline", "Let's Connect!" to "Contact Me")
    // will be handled in the next plan step. The JS will use the new names here.

    // Typing animation for "Willie Alcaraz" in About Me section
    setupTitleAnimation("software-engineer-title-container", "software-engineer-text", "Software Engineer", accentColor);
    setupTitleAnimation("about-me-title-container", "about-me-name", "Willie Alcaraz");

    setupTitleAnimation("journey-title-container", "journey-title-text", "Timeline");
    setupTitleAnimation("skills-title-container", "skills-title-text", "Tech Stack");
    setupTitleAnimation("projects-title-container", "projects-title-text", "Projects");
    setupTitleAnimation("gallery-title-container", "gallery-title-text", "Gallery");
    setupTitleAnimation("contact-title-container", "contact-title-text", "Contact Me");

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
