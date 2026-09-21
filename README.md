# Calculator

A simple calculator built with **HTML, CSS, and JavaScript**.

This project was built as part of my JavaScript learning journey, with a focus on DOM manipulation, event handling, state management, and writing JavaScript that is organized and easy to understand.

## Features

* Basic arithmetic operations

  * Addition `+`
  * Subtraction `-`
  * Multiplication `×`
  * Division `÷`
* Percentage calculations
* Decimal numbers
* Delete the last entered value
* Clear calculator
* Keyboard input support
* Handles consecutive calculations
* Prevents common invalid calculator states

## Built With

* HTML5
* CSS3
* JavaScript (ES6+)

## What I Practiced

Through this project, I practiced:

* DOM selection and manipulation
* Event listeners
* Event delegation
* `data-*` attributes
* Functions and control flow
* Managing calculator state
* Working with strings and numbers
* Handling user input
* Conditional logic
* Separating UI behavior from calculation logic

## How It Works

The calculator keeps track of the current input and the operation being performed.

When a user interacts with a button, JavaScript reads the button's `data-*` attribute and determines what action should be performed.

For example:

```html
<button data-number="7">7</button>
<button data-operator="+">+</button>
<button data-action="clear">AC</button>
```

JavaScript can then use these attributes to determine whether the user entered a number, selected an operator, or triggered an action.

## Project Structure

```text
calculator/
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
├── DEVLOG.md
└── REFERENCES.md
```

## Getting Started

Clone the repository:

```bash
https://github.com/hamzafullstack/calculator.git
```

Open the project directory:

```bash
cd calculator
```

Then open `index.html` in your browser.

No dependencies or build tools are required.

## Future Improvements

Possible improvements for future versions:

* More advanced operations
* Better keyboard support
* Improved error handling
* Calculation history
* More responsive UI
* Accessibility improvements

## License

This project is available under the MIT License.

## Behind The Scenes

If you want to read about my personal coding journey, mistakes, and the exact resources I used to build this, check out:

* [My DevLog & Struggles](./DEVLOG.md)
* [References & Learnings](./REFERENCES.md)

<div align="center">

### *“And say, ‘My Lord, increase me in knowledge.’”*

**- Holy Quran 20:114**

</div>

