# My University Website — HTML Only

A personal university website for **Adriana Sofia Espinoza Chicaiza**, Computer Science student (Seventh Semester). Built with plain HTML5 — no CSS, no JavaScript — as part of the Web Applications course.

## Project structure

```
HTML/
├── index.html
├── images/
│   └── adriana.jpg
└── pages/
    ├── courses.html
    ├── schedule.html
    ├── contact.html
    └── hobbies.html
```

## Pages

### `index.html` — Home
The main landing page. Built with semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`). Contains:
- A profile photo and personal information (name, degree program, semester).
- A personal description across three paragraphs.
- An "Academic Interests" list (Artificial Intelligence, Web Development, Mathematics, Technology and Finance).
- A numbered list of academic goals.
- A navigation bar linking to every page of the site, present in the header of all pages.

### `pages/courses.html` — Courses
Lists the five courses currently being taken this semester: **Artificial Intelligence**, **Advanced Mathematics for Science and Engineering**, **Distributed Systems**, **Intelligent Agents**, and **Web Applications**. For each course it includes the instructor's name, an unordered list of main topics, and an ordered list of three topics expected to be learned. It also includes an external link (opens in a new tab) to the Intelligent Agents course page on the university's EVA platform.

### `pages/schedule.html` — Weekly Schedule
A weekly class schedule built as an HTML `<table>` (Monday–Friday, 07:00–19:00), using `rowspan` to merge consecutive time slots for the same class, and `bgcolor` to color-code each subject (Artificial Intelligence, Advanced Mathematics, Web Applications, Distributed Systems, Intelligent Agents).

### `pages/contact.html` — Contact
A contact form (no backend, submission not required) with the following fields: full name, email, date of birth, degree program (dropdown), semester (dropdown, 1st–10th), reason for contact (dropdown), message (`<textarea>`), an acceptance checkbox, and a submit button. All fields are marked as required.

### `pages/hobbies.html` — Hobbies
Additional personal information organized into four sections: **Sports** (soccer, basketball, gym), **Programming and Technology**, **Artificial Intelligence**, and **Mathematics**. Each section combines paragraphs with an unordered or ordered list of related interests.

## Navigation

Every page shares the same navigation bar (Home · Courses · Schedule · Hobbies · Contact), so the whole site is reachable from any page.

## Author

Adriana Sofia Espinoza Chicaiza — Computer Science, Yachay Tech University.
