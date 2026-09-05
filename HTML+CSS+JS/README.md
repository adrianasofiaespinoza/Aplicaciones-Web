# My University Website — HTML + CSS + jQuery

The Workshop 2 (HTML + CSS) website, now extended with jQuery for Workshop 3. Same pages and layout as before; what's new is interactive behavior added to three sections: a collapsible show/hide toggle on Home, an image gallery with a modal viewer on Hobbies, and full client-side validation with a success popup on Contact.

## Tech Stack

- HTML5
- CSS3
- jQuery (via CDN)


## Project Structure

```
HTML+CSS+JS/
|-- images/
|-- pages/
|   |-- contact.html
|   |-- courses.html
|   |-- hobbies.html
|   |-- schedule.html
|-- index.html
|-- script.js
|-- style.css
|-- README.md
```


`script.js` and `style.css` are shared and linked from every page, so the jQuery behaviors below apply consistently across `index.html` and all pages inside `pages/`.

## New Interactive Features (`script.js`)

### Home (`index.html`) — Show/Hide Toggle
Collapsible content blocks (e.g. "Academic Interests," "My Academic Goals") are hidden by default with `$(".content").hide()`. Clicking a `.toggle-btn` locates its matching content block via `.closest(".section-header").next(".content")` and animates it open or closed with `.slideToggle()`. The button's arrow indicator (`▼` / `▲`) is updated in the same handler to reflect the panel's current state.

### Hobbies (`pages/hobbies.html`) — Gallery Modal
Clicking any `.gallery-img` copies its `src` into `#modalImage` and reveals the modal overlay (`#imageModal`) with `.fadeIn()`. The modal can be closed via the `.close` button or by clicking the dark background, both using `.fadeOut()`. Clicking the enlarged image itself does not close the modal, since its own click handler calls `event.stopPropagation()` to stop the click from bubbling up to the overlay's close handler.

### Contact (`pages/contact.html`) — Form Validation
On submit, `e.preventDefault()` stops the default browser submission. Each field is checked and, if invalid, marked with an `.invalid` class plus an inline error message via a shared `markInvalid()` helper:

- **Full Name** — required.
- **Email** — required and validated against a basic email regex.
- **Date of Birth** — required and cannot be a future date.
- **Degree Program** and **Semester** — required dropdowns.
- **Reason for Contact** — required dropdown.
- **Message** — required, minimum 10 characters.
- **Acceptance checkbox** — must be checked.

If all checks pass, `alert("Form submitted successfully!")` is shown and the form resets. Error states clear automatically as the user edits each field, thanks to an `input`/`change` listener.

## Navigation

Same navigation bar as previous workshops (Home · Courses · Schedule · Hobbies · Contact) on every page.

## How to View

Clone or download the project, then open `index.html` in any modern browser — no build step or server required.

```bash
git clone <repo-url>
cd HTML+CSS+JS
open index.html   # or double-click the file
```

## Author

**Adriana Sofía Espinoza Chicaiza**
Computer Science — Yachay Tech University