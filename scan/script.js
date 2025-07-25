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

// typing speed, larger number = larger delay between char
const TITLE_TYPING_SPEED = 75;
const SECONDARY_TITLE_TYPING_SPEED = 50;

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
  const contactText = "702.335.9213";
  const emailText = "willie.alcaraz@gmail.com";
  const websiteText = "williealcaraz.dev";
  const githubText = "ProjectZuki";
  const nameText = "Willie Alcaraz";
  const contactTextSpan = document.getElementById("phone-number-line");
  const emailTextSpan = document.getElementById("email-text-line");
  const websiteTextSpan = document.getElementById("website-text-line");
  const githubTextSpan = document.getElementById("github-text-line");
  const nameTextSpan = document.getElementById("name-text-line");

  const contactTitleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          animateTitleText(contactText, contactTextSpan, cursorElement, 0, SECONDARY_TITLE_TYPING_SPEED, () => {
            setInterval(() => {
              cursorElement.style.opacity = cursorElement.style.opacity == "0"? "1" : "0";
            }, 500);
          });
        }, 3000);  //modify delay for contactText

        setTimeout(() => {
          animateTitleText(emailText, emailTextSpan, cursorElement, 0, SECONDARY_TITLE_TYPING_SPEED, () => {
            setInterval(() => {
              cursorElement.style.opacity = cursorElement.style.opacity == "0"? "1" : "0";
            }, 500);
          });
        }, 4000);  //modify delay for emailText

        setTimeout(() => {
          animateTitleText(websiteText, websiteTextSpan, cursorElement, 0, SECONDARY_TITLE_TYPING_SPEED, () => {
            setInterval(() => {
              cursorElement.style.opacity = cursorElement.style.opacity == "0"? "1" : "0";
            }, 500);
          });
        }, 5000);  //modify delay for websiteText

        setTimeout(() => {
          animateTitleText(githubText, githubTextSpan, cursorElement, 0, SECONDARY_TITLE_TYPING_SPEED, () => {
            setInterval(() => {
              cursorElement.style.opacity = cursorElement.style.opacity == "0"? "1" : "0";
            }, 500);
          });
        }, 6000);  //modify delay for githubText

        setTimeout(() => {
          animateTitleText(nameText, nameTextSpan, cursorElement, 0, SECONDARY_TITLE_TYPING_SPEED, () => {
            setInterval(() => {
              cursorElement.style.opacity = cursorElement.style.opacity == "0"? "1" : "0";
            }, 500);
          });
        }, 6000);  //modify delay for name text



        // unobserve section
        contactTitleObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 1.0}); // threshold or intersection

  contactTitleObserver.observe(document.querySelector(".phone-number-section"));

  // ---------------------- end cursor text animations ---------------------- //

});

/// **************************** EOF script.js **************************** ///
