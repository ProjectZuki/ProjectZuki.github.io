# Personal Website | Software Design Document
# https://williealcaraz.dev

## [Link to Doc File](https://docs.google.com/document/d/1rVxH_2AbJ2l7cCA4USXoK7Ahz2ruiaSeW7AIL1vJR20/edit?usp=sharing)

## Table of Contents

- [Section 1  | Introduction](#section-1--introduction)
- [Section 2  | Scope of Work](#section-2--scope-of-work)
- [Section 3  | Architecture and Design Stack](#section-3--architecture-and-design-stack)
- [Section 4  | Design and Content](#section-4--design-and-content)
- [Section 5  | Content](#section-5--content)
- [Section 6  | User Experience (UX)](#section-6--user-experience-ux)
- [Section 7  | Functionality](#section-7--functionality)
- [Section 8  | Technical Details](#section-8--technical-details)
- [Section 9  | Testing Plan](#section-9--testing-plan)
- [Section 10 | Deployment Strategy](#section-10--deployment-strategy)
- [Section 11 | Timeline](#section-11--timeline)
- [Section 12 | Version History](#section-12--version-history)



## Section 1 | Introduction

This personal website [[https://williealcaraz.dev](https://williealcaraz.dev)],  is an endeavor dedicated to the creation of a personal portfolio website with multifaceted objectives. Our initiative is aimed towards creating a personal portfolio website that may be viewed by employers, allow for a landing page for quick contact information exchange, serves as a project for a continuously growing skillset, and much more. 

In the current competitive landscape where growth requires proof of skill, we recognize the need for a method of showing acquired skill sets and efficient practice with purpose. This project intends to reflect on commitment to personal and professional development.


### 1.1 Project Objectives

The primary purpose of this personal website project is to create a personal website that will showcase personal and professional growth in the industry of choice, presented in a well-created website. This website shall also serve as a quick and effective means of obtaining contact information when requested via QR / NFC scan, or simply by navigation within the website.


#### 1.1.1 Showcasing 


    The website is designed to exhibit the creator’s skills, professional accomplishments, and provide a comprehensive overview of experiences, qualifications, and other factors that are of interest when seeking information about the individual.


### 1.2 Scope of Work

The scope of work of this website consists of several elements to ensure a smooth and clean website with an efficient purpose. Execution of this plan will entail several elements, such as specific programming languages, formatting, frameworks, and other methods required by the content design.


#### 1.2.1 Content Strategy


    Content will be presented in a professional and visually appealing manner to influence viewing of additional content on the website. There will be some form of an “About Me” section along with photographs of experiences will be included to familiarize the visitor with the outcomes of current exceptional achievements, including those not involving the industry. Contact information will be presented in a way that it will be easily accessible.


#### 1.2.2 Design / Layout


    The website will have a clean layout, initially presented with a title of the person’s name and title upon entrance of the website. A photo of the individual will be presented as well, where the “About Me” section will reside. This section will contain information about the individual, achievements, and other necessary details followed by a photo gallery to better elaborate on the field of work of the individual’s achievements. Lastly, the contact information will reside at the bottom of the website, presenting email, LinkedIn links, as well as a link to the Resume / CV document. \
Additionally, a landing page will be created to allow for a quick and effective way of exchanging contact information when presented with a QR code or NFC scan to the website. The subdirectory will be located in `/scan`


#### 1.2.3 Functionality, Performance Optimization


    Implementing essential functionalities, such as a contact section or form for inquiries, and dynamic sections for adding / removing information as necessary. Optimization will include proper dynamic layouts for both desktop (i.e. Chrome, Safari, FireFox, Edge) as well as mobile (iOS, Android) regardless of screen size ensuring the website loads quickly and functions smoothly across all platforms.


### 1.3 Expected Outcome

Successful completion of all elements of this website will anticipate the following outcomes:



* Visual Appeal
    * The website will look professional and, most importantly, _clean_, and effectively communicate an introduction about the owner in a minimal, but efficient way.
* Visibility / Accessibility
    * Increased visibility and accessibility to potential employers, collaborators, community, and any other applicable persons.
* Design Feedback and Project Growth 
    * Seek feedback on the website’s usability, design, and functionality with the intent of improvements as this is a growing project reflecting on the creator’s growth and ability to adapt and make adjustments. Features and changes will constantly be added to adapt to requirements as well as implementing features focusing on user experience.


## Section 2 | Scope of Work

### 2.1.1 Website Features



* “About Me” Section: This will be a dedicated section about the creator, including a headshot as well as a descriptive explanation lightly hovering over their professional journey.
* Contact Information: This section will have social links, as well as SMS and e-mail navigation links. For the time being, this will not yet be a contact form until sufficient back-end development has been implemented.
* Interactive Elements: This website will feature easy-to-use navigation elements, such as navigation buttons (links that will redirect to parts of the page), contact buttons (SMS / e-mail button, social buttons), some visual elements, as well as other elements that will enhance the webpage.
* Responsiveness: The website will be optimized to adapt to desktop environments, including Safari, FireFox, Chrome, and Edge, as well as mobile devices such as smartphones and tablets.
    * This includes appropriate re-sizing, and maintaining the smooth-scrolling aspect.


### 2.1.2 Content Management



* Content of the website is set to be flexible, as this is key. The website will be updated regularly to expand the website’s content as the website grows.
* Security Measures: HTTPS will be utilized in this website. When back-end development is implemented, strict security measures will be implemented to safeguard user information, if applicable, and protect against potential vulnerabilities.


## 2.2 Target Audience

This website aims to cater to potential employers to engage with the content and easily retrieve contact information about the user. Additionally, other visitors will be welcomed and greeted with easy to access contact information as well as a brief description of the creator in a professional manner.

**Primary Audience: **Employers, recruiters, as well as hiring managers actively seeking for candidates are the primary target audience.

**Networking Contacts: **Individuals who seek to connect with the individual for networking, whether professional or social, are an integral part of the audience, as this website will help establish professional relationships.

**General Audience: ** Our website is designed to be accessible and engaging to a very broad audience without limitations, whether on a professional or personal level.

Understanding these distinctive needs will guide our design and content decisions.

## Section 3 | Architecture and Design Stack

This section outlines the architecture and technology stack that will be utilized in the development of this website.


## 3.1 Front-end Technologies



* **HTML5: **Structure of the website’s content, semantic markups, and accessibility.
* **CSS3: **Cascading Style Sheets (CSS3) will be utilized for the styles and designs of the website. This varies in purpose such as visual appeal, formatting, and presentation across devices such as Desktop and smartphone devices.
* **JavaScript (JS):** JavaScript will be able to incorporate interactive elements as well as reactive elements of the website. Certain API’s may be required for implementation, which is dependent on how this website grows


## 3.2 Back-end Technologies

The back-end infrastructure supports the functionality and data management of the website. This will be integrated at a later time, but is not a priority until things such as a contact form are utilized.

As a precaution, the following technologies may be applied if applicable:



* **Server-Side Language: **Options include Node.js, Python, Ruby, etc.
* **Database Management System (DBMS): **Options include DBMS, MySQL, PostgreSQL, MongoDB, etc. As of the creation of this design document, more knowledge on these integrations will be required before they can be implemented.
* **API Integration: **API integration may be utilized to perform tasks such as real-time data retrieval and display.


## 3.3 Hosting and Deployment Platform



* **Web Hosting Provider: **GitHub Pages, via GitHub Education package, will be hosting the project via ProjectZuki.github.io. GitHub Pages proves to be a well-resourceful and reliable hosting provider.
* **Version Control: **Along with Pages, GitHub will be utilized for version control, facilitating collaboration among team members and enabling efficient code management.


# Section 4 | Design and Content


This section will focus on the actual design aspect of the website. Such features include the physical design style, color scheme, choice of typography, as well as the content sections.


## 4.1 Design Style



* **Color Palette:** The selection of colors will be chosen based on a professional and visually appealing aesthetic. Emphasis will be placed on consistency and accessibility, as well as cleanliness and minimalism. Although we are not graphic designers nor color professionals we will choose a color scheme that is both clean and appropriate for the content, leaning towards a darker monotone rather than colors that pop out.
* **Imagery:** High-quality and relevant images, including personal accomplishments, will be incorporated to provide a visual narrative. Although at the time of writing this, there are minimal images that can be used relating to the target industry, other images of exceptional work will be included (e.g. Vegas Golden Knights, international performances, etc.) will play a role in visualizing the creator’s accomplishments. Proper image optimization will ensure fast loading times. We would not add an 8K image to be loaded on an iPhone.
* **Layout and Composition:** Layouts will be structured to guide users' attention, and compositions will be visually appealing while maintaining an intuitive flow of content.
* **Icons and Graphics:** Consistent use of icons and graphics will enhance the visual and contribute to a cohesive design language.


## 4.2 Typography

A balanced and legible typography system will be implemented to enhance readability and convey the desired tone and style. Fonts chosen will align with the website's branding.

Google fonts will be utilized for this project. Specific fonts are to be determined as the design for the website is created and finalized. Specifics on font type, size, and font family will be determined then.


## 4.3 Content Sections

Compelling and organized content is key to engaging and informing the target audience.

NOTE: We do not want to bore the audience, nobody wants to read through a textbook of information.

** Concise and to the point is key. **



* **Portfolio Items:** Detailed descriptions, images, and links to project profiles will be provided in the portfolio showcase. Each portfolio item will highlight the project's significance, skills utilized, and outcomes achieved.
* **"About Me" Content: **The "About Me" section will include a concise yet engaging biography, emphasizing the creator's background, passions, and professional journey.
* **Contact Information:** Contact details and a user-friendly contact form will be easily accessible to encourage inquiries, collaboration, and feedback.
* **Resume/CV:** The resume/CV will be comprehensive, highlighting qualifications, education, work history, and skills. It will be available for viewing/download.
* **Interactive Elements:** Dynamic content, animations, and interactive features will be strategically integrated to enhance engagement and storytelling. Navigation icons or links will be utilized for easy quick access to specific content sections.
* **Content Updates:** An easily accessible content management system will allow the creator to regularly update and expand the website's content to reflect ongoing growth and accomplishments.


## 4.4 Brand and Identity

Consistent branding elements will be applied throughout the website to contribute to the creator's personal and professional identity.

Branding Elements:



* **Logo: **If applicable, a logo will be designed to represent the creator's personal brand.
    * Currently, a signature initials logo may be utilized. No “official” logo exists. 
    * Branding currently leans on the creator’s name.
* **Colors and Typography:** The selected color palette and typography choices will align with the creator's personal branding, ensuring visual consistency. Professionalism is priority, rather than any artsy styling.
* **Tone and Voice:** The website's content will reflect a consistent tone and voice that resonate with the creator's professional identity.

# 
    Section 5 | Content


This section goes over the actual content that lies within each section of the website. Specifically, content sections that are guaranteed to be on the site. Additional content will be added in the future.


## 5.1 “About Me” Section

This section will feature information about the creator, in a direct way so that those who come to this page will have a good understanding through the content provided.


## 5.2 Projects Section

The “Projects” section is to be determined based on the type of projects that come up. This website, along with its content requirements, source code, and other elements will be included as a project. This section is subject to growth and modification.


## 5.3 Contact Information

The contact section will be utilized with quick-access links that will redirect to the creator’s email, and other personal contact information that is appropriate for sharing on a public website. This will be where the resume/cv will be available for viewing or download.


## 5.4 QR Code \ NFC Scan Landing Page

This will be a separate subdirectory (/scan) that will be utilized specifically for QR codes as well as NFC business cards that, when presented and scanned, will redirect to this landing page. It will feature contact icons convenient for contacting the creator, as well as the .vcf file containing the contact information directly for download.


# Section 6 | User Experience (UX)

This section focuses on information and contents of the website that directly affect the user experience. This includes things such as interactive elements. This section will focus on the user flow, navigation structure, as well as the overall layout and responsiveness of the elements within the website.


### 6.1 User Flow


### 6.2 Navigation Structure


### 6.3 Layout and Responsiveness


## Section 7 | Functionality


### 7.1 Portfolio Item Display


### 7.2 Contact Form


### 7.3 Resume / CV Section


### 7.4 Social Media Integration


## Section 8 | Technical Details


### 8.1 Data Models


### 8.2 API Integration


## Section 9 | Testing Plan


### 9.1 Cross-Browser Testing


### 9.2 Mobile Responsiveness Testing


## Section 10 | Deployment Strategy


### 10.1 Hosting Setup

Currently, this website is being hosted via GitHub Pages through the GitHub Education pack for students. This allows for efficient ways of committing, pushing, and updating contents of the website.


### 10.2 Domain Configuration

The Domain was purchased via Namecheap.com with a .dev domain name.


## Section 11 | Timeline


### 11.1 Project Timeline


### 11.2 Milestones and Deadlines


#### 	11.2.1 Current Milestones


    July 2023 – HTML and CSS was explored in depth.


    August 2023 – The basic structure of this website was created


    11 August 2023 – Original repository created in GitHub, first commit


    28 August 2023 – Domain changed from .me to .dev, website published.

	


#### 	11.2.2 Current Deadlines



1. **31 July 2023** – Have solid understanding of HTML, CSS, create very basic websites.
2. **06 August 2023** – Create basic structure of website
3. **20 August 2023** – Implement Bootstrap Framework as well as Javascript for interactive elements. Animate images
4. **25 August 2023** – Implement “typing” animation on title and other title text.
5. **30 August 2023** – Confirm functionality for popular web browsers, mobile devices
6. **01 September 2023** – Publish Website
7. **15 September 2023** – Create a landing page subdirectory similar to linktr.ee, utilize for QR / NFC
8. **30 September 2023** – Simplify webpage, more efficient text
9. **15 October 2023** – Create subdomain or subdirectory, migrate “about me” portion of the website to a subdomain or subdirectory.
10. **30 October 2023 **– Find more features to implement to the website, possible redesign of layout.

		

	More deadlines will be added based on demands and success of the website.


## Section 12 | Version History


### 12.1 Document Changes and Revision History

In this section, we will track all revisions that have been made on this project.


<table>
  <tr>
   <td><strong>Date</strong>
   </td>
   <td><strong>Comment</strong>
   </td>
   <td><strong>Author</strong>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>


