/**
 * @brief Script for williealcaraz.dev
 * 
 * This script handles animations and interactions for the modernized portfolio website.
 * Includes smooth scrolling, and potentially new animations for hero section and reveal effects.
 * 
 * @author Willie Alcaraz | [Project]Zuki
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

     const revealElements = document.querySelectorAll('.timeline-item, .skill-row, .project-card, .gallery-item');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => { // Added index here
            if (entry.isIntersecting) {
                // Apply a delay based on the index for staggering, only for specific parent containers
                let delay = 0;
                const parentSkillsGrid = entry.target.closest('.skills-grid');
                const parentProjectsRow = entry.target.closest('.projects-section .row');
                const parentGalleryGrid = entry.target.closest('.gallery-grid');

                if (parentSkillsGrid && entry.target.classList.contains('skill-row')) {
                    const items = Array.from(parentSkillsGrid.querySelectorAll('.skill-row'));
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
                }, delay+150);

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

    const TYPING_SPEED = 35; // ms per character when typing for section titles (kept snappy)
    const MULTIWORD_TYPING_SPEED = 40; // ms per character for the multi-word name sequence (a bit slower)

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
                        }, 600); // set delay in ms
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

    // Multi-word typing with backspace, ending on final word without removing it
    function typeText(text, el, speed, callback) {
        if (!el) return;
        let i = 0;
        function step() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(step, speed);
            } else if (callback) {
                callback();
            }
        }
        step();
    }

    function backspaceText(el, speed, callback) {
        if (!el) return;
        function step() {
            if (el.textContent.length > 0) {
                el.textContent = el.textContent.slice(0, -1);
                setTimeout(step, speed);
            } else if (callback) {
                callback();
            }
        }
        step();
    }

    function setupMultiWordTyping(containerId, textSpanId, wordsArray, color) {
        const titleContainer = document.getElementById(containerId);
        const textElement = document.getElementById(textSpanId);
        const cursorElement = textElement ? textElement.nextElementSibling : null;

        if (titleContainer && textElement && cursorElement) {
            const titleObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            textElement.textContent = '';
                            if (color) textElement.style.color = color;
                            if (cursorElement) cursorElement.style.display = 'inline';

                            let idx = 0;

                            function runNext() {
                                const word = wordsArray[idx];
                                const isFinal = idx === wordsArray.length - 1;

                                typeText(word, textElement, MULTIWORD_TYPING_SPEED, () => {
                                    if (isFinal) {
                                        if (cursorElement) cursorElement.style.display = 'inline';
                                    } else {
                                        setTimeout(() => {
                                            // "backspace" delay between letters
                                            const backspaceDelay = Math.max(25, TYPING_SPEED - 10);
                                            backspaceText(textElement, backspaceDelay, () => {
                                                idx++;
                                                // delay before next word begins
                                                setTimeout(runNext, 400);
                                            });
                                        }, 250);    // delay before backspace
                                    }
                                });
                            }

                            runNext();
                        }, 1000); // initial delay before typing sequence begins
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

    // title typing animation word cycle
    setupMultiWordTyping("name-title-container", "name-text", ["Performer", "Photographer", "Developer", "Engineer", "Willie Alcaraz"], accentColor);
    setupTitleAnimation("about-me-title-container", "about-me-name", "About");

    setupTitleAnimation("journey-title-container", "journey-title-text", "Timeline");
    setupTitleAnimation("skills-title-container", "skills-title-text", "Tech Stack");
    setupTitleAnimation("projects-title-container", "projects-title-text", "Projects");
    setupTitleAnimation("gallery-title-container", "gallery-title-text", "Gallery");
    setupTitleAnimation("contact-title-container", "contact-title-text", "Contact Me");
    setupTitleAnimation("scan-title-container", "scan-title-text", "Willie Alcaraz");

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
