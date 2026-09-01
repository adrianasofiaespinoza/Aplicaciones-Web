# My University Website — HTML + CSS

The Workshop 1 website, restyled with CSS. Same content and same pages as the HTML-only version, now with a shared stylesheet plus page-specific styles for a cleaner, more polished layout.

## Project structure

```
HTML+CSS/
├── index.html
├── css/
│   └── style.css
├── images/
│   └── adriana.png
└── pages/
    ├── courses.html
    ├── schedule.html
    ├── contact.html
    └── hobbies.html
```

## Shared stylesheet (`css/style.css`)

Linked from every page and used for the site-wide look:
- Global typography (Arial/Helvetica) and a white background.
- A dark `header` with a bold, pill-shaped, bordered `nav` that highlights on hover.
- A `main` content column centered and capped at 900px wide.
- Consistent heading styles, section spacing, and green horizontal dividers between sections.
- Table styling (borders, header background, centered cells) for the schedule.
- Styled form elements (`input`, `textarea`, `select`) with a highlighted submit button.
- A dark `footer`.

## Pages and their custom styling

### `index.html` — Home
Adds an internal `<style>` block on top of the shared stylesheet:
- The profile photo (`.profile-photo`) is displayed as a rounded, shadowed square.
- Personal information (name, degree program, semester) is shown inside a bordered card (`.personal-info`) with each label/value pair on its own row.
- The "About Me", "Academic Interests", and "Academic Goals" sections are wrapped in a rounded, shadowed green box (`.info-box`).

### `pages/courses.html` — Courses
Each of the five courses is displayed as a card (`.course-card`) with a colored left border unique to that course, plus styled instructor name, topic list, and "expected to learn" list. The external resources section is wrapped in its own styled box (`.resources-box`).

### `pages/schedule.html` — Weekly Schedule
The table from Workshop 1 is rebuilt using CSS classes instead of the `bgcolor` attribute: each subject has its own class (`.subj-ai`, `.subj-math`, `.subj-web`, `.subj-distributed`, `.subj-agents`) for color-coding, wrapped in a scrollable `.schedule-wrapper` container so it stays readable on smaller screens.

### `pages/contact.html` — Contact
The form is redesigned as a styled card (`.contact-card`) with a header/body layout, grouped fields (`.field-group`), a highlighted asterisk for required fields (`.required`), and dedicated rows for the checkbox and the submit button.

### `pages/hobbies.html` — Hobbies
Each hobby section (Sports, Programming and Technology, Artificial Intelligence, Mathematics) is laid out as an alternating image/text row (`.hobby-row`, with `.reverse` alternating the direction) featuring an emoji icon (`.hobby-icon`) next to the description and interest list (`.interest-list`), separated by styled dividers (`.divider`).

## Navigation

Same navigation bar as Workshop 1 (Home · Courses · Schedule · Hobbies · Contact) on every page, now styled to match the rest of the site.

## Author

Adriana Sofia Espinoza Chicaiza — Computer Science, Yachay Tech University.
