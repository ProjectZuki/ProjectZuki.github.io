/**
 * @brief Script for williealcaraz.me index.html
 * 
 * This script handles animations and interactions contained within index.html
 *  for the website. Includes typing animation for titles, image gallery animation,
 *  artificial loading screen, and more features to come.
 * 
 * @author Willie Alcaraz
 * @version 1.0.0
 * @date 28 August 2023
 */

const TITLE_TYPING_SPEED = 25;
const SECONDARY_TITLE_TYPING_SPEED = 75;

document.addEventListener("DOMContentLoaded", () => {
  // Show loading screen
  const loadingScreen = document.querySelector(".loading-screen");
  const content = document.querySelector(".content");

  // ------------------------ cursor text animations ------------------------ //

  /**
   * Function to create typing animation for specifed title text
   * @param {*} text the string to be animated
   * @param {*} spanElement the span element of the text
   * @param {*} cursorElement cursor element of the text
   * @param {*} index current index of character
   * @param {*} typeSpeed speed of which animation should appear to "type"
   * @param {*} callback callback to execute when the string is finished processing
   */
  function animateTitleText(text, spanElement, cursorElement, index, typeSpeed, callback) {
    // base case, current index is within string
    if (index < text.length) {
      spanElement.textContent += text[index];
      index++;
      setTimeout(() => {
        // recursive call function until completion
        animateTitleText(text, spanElement, cursorElement, index, typeSpeed, callback);
      }, typeSpeed); // delay amount for each character, speed of typing animatino
    } else {
      callback(); // Call the callback function once typing is done
    }
  }

  // cursor element for animation
  const cursorElement = document.getElementById("cursor-animation");

  // --- title typing animation ---

  // Text for typing animation
  // const subtitle_line1 = "Las Vegas, Nevada";
  // const subtitle_line2 = "Software Development / Engineering | UNLV Computer Science";

  // Span elements where typing animation will be displayed
  // const subtitle1Span = document.getElementById("subtitle-line1");
  // const subtitle2Span = document.getElementById("subtitle-line2");

  // Show the text "on line 1" without typing animation, this is specific to this line
  // subtitle1Span.textContent = subtitle_line1;

  // set delay for start of typing animation for line2
  // setTimeout(() => {
  //   // call function to animate the string
  //   animateTitleText(subtitle_line2, subtitle2Span, cursorElement, 0, TITLE_TYPING_SPEED, () => {
  //     cursorElement.style.opacity = "1"; // show cursor blink animation
  //     setInterval(() => {
  //       cursorElement.style.opacity = cursorElement.style.opacity === "0" ? "1" : "0";
  //     }, 500); // cursor element blink delay
  //   });
  // }, 1750); // Delay before starting line2 typing

  // --- Name title animation ---

  // repeat above processes
  const titleText = "Willie Alcaraz";
  const titleTextSpan = document.getElementById("title-text-line");

  const titleTextObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          animateTitleText(titleText, titleTextSpan, cursorElement, 0, TITLE_TYPING_SPEED, () => {
            setInterval(() => {
              cursorElement.style.opacity = cursorElement.style.opacity == "0"? "1" : "0";
            }, 500);
          });
        }, 1000);  //modify delay

        // unobserve section
        titleTextObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 1.0}); // threshold or intersection

  titleTextObserver.observe(document.querySelector(".title-text"));

  // --- Contact title animation ---

  // repeat above processes
  const contactText = "Contact";
  const contactTitleSpan = document.getElementById("contact-text-line");

  const contactTitleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          animateTitleText(contactText, contactTitleSpan, cursorElement, 0, SECONDARY_TITLE_TYPING_SPEED, () => {
            setInterval(() => {
              cursorElement.style.opacity = cursorElement.style.opacity == "0"? "1" : "0";
            }, 500);
          });
        }, 1000);  //modify delay

        // unobserve section
        contactTitleObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 1.0}); // threshold or intersection

  contactTitleObserver.observe(document.querySelector(".contact-text-title"));

  // ---------------------- end cursor text animations ---------------------- //

  // // ----------------------- image gallery animation ------------------------ //

  // // retrieve all elements within image-section class name
  // const imageSections = document.querySelectorAll(".image-section");
  // // retrieve first element within gallery-view class name
  // const firstImageSection = document.querySelector(".gallery-view");

  // // iterate through each image-section instance
  // imageSections.forEach(imageSection => {
  //   // retrieve all elements with animated-image class name
  //   const animatedImages = imageSection.querySelectorAll('.animated-image');

  //   // intersection observer will observe when image-section becomes visible
  //   const imageObserver = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         // apply animation effect for each animated-image instance
  //         animatedImages.forEach((image, index) => {
  //           setTimeout(() => {
  //             // horizontal translation: horizontal position + translation amount in pixels * (image position + 1)
  //             // const translateX = 215 + 20 * (index + 1);
  //             const opacity = 1;

  //             // apply image styles
  //             image.style.opacity = opacity;
  //             image.style.transform = `translateX(${translateX}px)`;
  //           }, index * 300); // delay each image animation
  //         });
          
  //         // unobserve section
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, { threshold: 0.5 }); // threshold for intersection

  //   // observe section
  //   imageObserver.observe(imageSection);
  // });

  // // -------------------- end image gallery animations ---------------------- //

});

/// **************************** EOF script.js **************************** ///
