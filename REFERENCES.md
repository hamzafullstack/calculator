References & Support Log

Every link, article, and video that helped me unblock a feature or teach me something new during this project.

## Explored Resources & Learnings

### Documentation, Articles & Community Threads (Reddit, StackOverflow, GitHub Issues, Youtube Videos, etc)

* **[Reddit Post on Calculator Architecture / r/learnjavascript](https://www.reddit.com/r/learnjavascript/comments/1pdudal/so_when_is_object_used_exactly/)**
  * **The Problem I Had**: I was confused about whether I should use objects and method-based code or plain functions to structure my JavaScript logic.
  * **What I Learned**: A comment explained that standard functions are completely fine for this scope. While an object-oriented approach (e.g., a `calculator` object with `add()` and `subtract()` methods) organizes things, it shifts the focus to deep OOP/Classes. This helped me decide to keep it simple and stick to plain functions to avoid overcomplicating the project.

* **[The Odin Project - Calculator Project Requirements](https://www.theodinproject.com/lessons/foundations-calculator)**
  * **The Problem I Had**: Needed to understand the baseline project layout and core math requirements for building a functional calculator application.
  * **What I Learned**: Carefully reading the instructions gave me a solid roadmap for what inputs and edge cases I needed to plan for before touching any code.

  * **[Addition (+) - JavaScript | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)**
  * **The Problem I Had**: I was second-guessing my calculator's addition function and wanted to confirm if my data types and math logic aligned with official JavaScript standards.
  * **What I Learned**: I studied how the addition operator handles numeric operands and type coercion. Reviewing this helped me validate that my own code was already structured correctly, which boosted my confidence and stopped me from over-complicating the function.

---
### Day 2

* **[MDN Web Docs: null Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)** & **[web.dev: JavaScript Data Types (Null & Undefined)](https://web.dev/learn/javascript/data-types/null-undefined)**
  * **The Problem I Had**: I was unsure whether to use an empty string `""`, `null`, or `undefined` for uninitialized calculator operator states.
  * **What I Learned**: The documentation clarified that `null` represents the intentional absence of an object value. This made it the ideal choice for initializing an operator state before user input, avoiding the ambiguity of empty strings.

* **[StackOverflow: Can parameters have same name as a global variable and still called inside a function?](https://stackoverflow.com/questions/64604489/can-parameters-have-same-name-as-a-global-variable-and-still-called-inside-a-fun)**
  * **The Problem I Had**: I declared function parameters with the same names as my global state variables, leading to variable shadowing and UI bugs.
  * **What I Learned**: Reusing parameter names for outer global variables shadows the globals inside the function scope, causing potential bugs and confusion. Using separate, clear naming conventions for parameters vs. global state avoids scope collisions.

* **[MDN Web Docs: switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)**
  * **The Problem I Had**: I wanted to step away from repetitive `if/else` blocks and practice using `switch` statements for multi-branch operation logic in my `operate` function.
  * **What I Learned**: MDN provided a quick, effective refresher on `switch` statement syntax and case handling, allowing me to cleanly replace nested `if/else` logic with a structured conditional block.

* **[MDN Web Docs: How to use data attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes)**, **[MDN Web Docs: DOMStringMap](https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap)** & **[MDN Web Docs: HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)**
  * **The Problem I Had**: I needed to efficiently select calculator buttons and retrieve custom data values from HTML `data-*` attributes inside my JavaScript DOM handlers.
  * **What I Learned**: I learned how to read and write custom data attributes using `element.dataset.propertyName` (which returns string values) and how to target them in the DOM using CSS attribute selectors with `querySelector()` and `querySelectorAll()` (e.g., `document.querySelectorAll('[data-action]')`).

* **[MDN Web Docs: Element.closest()](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)**
  * **The Problem I Had**: Clicking nested elements within calculator buttons made it difficult to consistently read target `data-*` attributes for display and state updates.
  * **What I Learned**: The `.closest()` method traverses up the DOM tree from the target element until it matches a specified selector (e.g., `event.target.closest('button')`). This ensures reliable access to the container button's `dataset` properties during click events.

* **[MDN Web Docs: Addition assignment (+=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)**
  * **The Problem I Had**: I needed a quick refresher on using the `+=` operator to update display state variables cleanly through numeric addition and string concatenation.
  * **What I Learned**: The `+=` operator performs numeric addition or string concatenation based on operand types and evaluates the left operand only once (`x += y` is equivalent to `x = x + y`). This helped me efficiently append input digits and update state variables.

---

### Day 3

* **[StackOverflow: onclick for all buttons with a data attribute](https://stackoverflow.com/questions/30325251/onclick-for-all-buttons-with-a-data-attribute)**
  * **The Problem I Had**: I needed an efficient way to attach event listeners across a group of data-attribute buttons inside a `div` to update state and update the display screen without redundant code.
  * **What I Learned**: Learned how to target multiple elements sharing `data-*` attributes using `querySelectorAll('[data-...]')` and iterate over them (or delegate events) to dynamically bind click handlers, read attributes, and sync state variables cleanly.

* **[JavaScript.info: Event Delegation](https://javascript.info/event-delegation)**, **[MDN Web Docs: Event Bubbling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling)**, **[MDN Web Docs: HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)**, **[MDN Web Docs: How to Use Data Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes)**, **[MDN Web Docs: Element.closest()](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)** & **[Adactio: Journal Entry 20551](https://adactio.com/journal/20551)**
  * **The Problem I Had**: My input function picked up all inputs indiscriminately instead of filtering strictly for numbers, and my display overwrote digits instead of chaining them for multi-digit entries.
  * **What I Learned**: Learned to leverage event delegation and `closest()` along with HTML `data-*` attributes to target digit keys exclusively. Additionally, using string concatenation (`+=`) on a dedicated `currentNumber` state variable enabled seamless multi-digit entry.


* **[MDN Web Docs: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** & **[JavaScript.info: Object references and copying](https://javascript.info/object-copy)**
  * **The Problem I Had**: String input values caused numeric additions to concatenate (`2 + 2 = "22"`), button operator symbols didn't match `switch` case strings, and calculated outcomes weren't syncing cleanly to the screen display.
  * **What I Learned**: Converted operand strings to numeric primitives using `Number()` before performing math operations, matched `switch` cases to raw button symbols (`+`, `-`, `*`, `/`), and established a dedicated `result` state variable (`result = operate(...)`) to cleanly update `display.value`.
---

### Day 4

* **[DEV Community: Let's build a basic calculator using Flexbox and Vanilla JavaScript](https://dev.to/chrisblakely01/let-s-build-a-basic-calculator-using-flexbox-and-vanilla-javascript-5f9l)**, **[StackOverflow: Calculator keypad layout with Flexbox](https://stackoverflow.com/questions/39079773/calculator-keypad-layout-with-flexbox)**, **[YouTube: Building a Calculator Layout with CSS](https://www.youtube.com/watch?v=Gx8IEdvtx3w)** & **[W3Schools: CSS Flexbox Reference](https://www.w3schools.com/css/css3_flexbox.asp)**
  * **The Problem I Had**: I struggled with CSS and Flexbox concepts, making it difficult to convert raw HTML calculator elements into an organized, visual button keypad layout.
  * **What I Learned**: Studied real-world Flexbox layout implementations for calculator keypads. Learned how to use flex containers, wrap rows, and align button grids efficiently to build a clean UI skeleton without getting bogged down by CSS complexity.


* **[Personal Project Reference: Rock Paper Scissors Game State Reset Pattern]**
  * **The Problem I Had**: I needed a consistent method to clear all active memory states and handle display resetting when the user clicks the "AC" (All Clear) button.
  * **What I Learned**: Applied the state-reinitialization pattern from my Rock Paper Scissors project to set all calculator memory variables back to their default starting states and cleared the active screen by assigning `display.value = ''`.

* **[Practical Application: JavaScript Template Literals for Dynamic UI State Strings]**
  * **The Problem I Had**: Clicking an operator button cleared the display screen instantly, leaving the user with zero visual indication of their current operator choice or stored first operand.
  * **What I Learned**: Applied Template Literal syntax (`` `${firstNumber}${operator}` ``) directly within the operator handler to dynamically combine stored state variables, giving the user real-time visual feedback on the calculator display.

  * **[MDN Web Docs: String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)** & **[Flavio Copes: How to remove the last character of a string in JS](https://flaviocopes.com/how-to-remove-last-char-string-js/)**
  * **The Problem I Had**: I needed to make the calculator Delete button remove the last typed character from my `currentNumber` string state variable.
  * **What I Learned**: Learned that calling `.slice(0, -1)` on a string returns a new string with the last character removed. It works reliably across all modern browsers, making it the ideal choice for backspace/delete functionality on string states.

---

### Day 5

* **[W3Schools: JavaScript String slice() Reference](https://www.w3schools.com/jsref/jsref_slice_string.asp)**, **[MDN Web Docs: Number() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)** & **[MDN Web Docs: Basic math in JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math)**
  * **The Problem I Had**: My initial Delete logic struggled with edge cases (like backspacing down to zero or handling empty state transitions), causing conditional checks to fail.
  * **What I Learned**: Refreshed string slicing (`slice(0, -1)`) and type conversion (`Number()`, `toString()`) to clean up delete edge cases. Learned to leverage search/AI tools constructively as learning accelerants without feeling guilty, ensuring I thoroughly understand the underlying logic before integrating it.

* **[Medium: Understanding State Machines: A Developer's Guide](https://medium.com/@melekcharradi/understanding-state-machines-a-developers-guide-to-predictable-application-logic-d3df50e3e621)** & **[Microsoft DevBlogs: How the Windows Calculator percentage key works](https://devblogs.microsoft.com/oldnewthing/20080110-00/?p=23853/)**
  * **The Problem I Had**: Adding a percentage key caused unexpected multiplication bugs when hitting the `=` button immediately after calculating a percentage.
  * **What I Learned**: Studied real world calculator percentage behaviors and applied Finite State Machine principles to govern state transitions. Using a state flag (`percentageApplied`) allowed the calculator to distinguish between standard calculations and percentage-modified states.

---

### Day 6

* **[Practical CSS Application: Full-Viewport Centering with Semantic HTML & Viewport Units]**
  * **The Problem I Had**: The calculator container stretched full width, display text was oversized, and Flexbox failed to center the app vertically on the screen.
  * **What I Learned**: Wrapped content inside a semantic `<main>` tag with `min-height: 100vh` to give Flexbox a full-screen context (`justify-content: center`, `align-items: center`), while restricting the calculator wrapper to a fixed width (`300px`) and dialing back display font sizing (`25px`).

* **[Practical Application: State-Driven UI Rendering for Dynamic Multi-Step Inputs]**
  * **The Problem I Had**: Typing a second operand (e.g., `55 + 7`) directly assigned `currentNumber` to `display.value`, erasing `55 +` from the screen.
  * **What I Learned**: Refactored the UI update logic to dynamically construct the display string based on active state variables (`firstNumber`, `operator`, `currentNumber`), ensuring the full calculation sequence stays visible throughout user input.

* **[Practical Application: Defensive Programming & Guard Clauses for Edge Case Prevention]**
  * **The Problem I Had**: Pressing `=` on a blank screen invoked the math operator prematurely, causing the default `switch` case to output `"Invalid Operation"` on the display.
  * **What I Learned**: Applied defensive guard conditions (`firstNumber !== null && operator !== null && currentNumber !== ''`) inside the equals button handler to ensure calculations run exclusively when complete operand and operator state data is present.

* **[Real-World UI/UX Benchmarking: Realme Chinese Android Phone Native Calculator App Behavior]**
  * **The Problem I Had**: Consecutive operator presses (e.g., `5 + + +`) erased stored first operands and created erratic state behavior.
  * **What I Learned**: Benchmarked mobile OS calculator behavior to design a state guard condition. Blocking operator updates while `currentNumber === ''` ensures the calculator locks onto the existing operator until the user begins entering the next operand.

---
### Day 7

* **[MDN Web Docs: String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)** & **[Practical Application: Multi-Variable State Machine Guards]**
  * **The Problem I Had**: Pressing an operator on an empty screen rendered `null +` because isolated variable checks couldn't differentiate between a fresh state and a state with typed digits waiting in `currentNumber`.
  * **What I Learned**: Learned that application state is defined by the combination of state variables rather than single values in isolation. Checking both `firstNumber === null` AND `currentNumber === ''` provided an effective guard against invalid state transitions.

* **[MDN Web Docs: String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)**
  * **The Problem I Had**: The calculator allowed entering multiple decimal points in a single operand, leading to invalid numeric formats.
  * **What I Learned**: Used `currentNumber.includes('.')` as a conditional guard to verify whether a decimal point was already present before appending a new one, ensuring input integrity.

* **[Practical Application: Post-Evaluation State Reset & Entry Overwrite Flags]**
  * **The Problem I Had**: Typing a digit immediately after pressing `=` appended the new digit onto the previous result (e.g., `15` then `5` became `55`) instead of clearing the screen for a new entry.
  * **What I Learned**: Implemented state tracking following evaluation cycles to differentiate between active operand concatenation and fresh calculation starts, ensuring post-result digit inputs reset the display state cleanly.

* **[The Odin Project: Foundations - Calculator Project Guidelines](https://www.theodinproject.com/lessons/foundations-calculator)** & **[Practical Application: Iterative Development & Modular Milestone Management]**
  * **The Problem I Had**: Deciding when a project is functionally complete for official peer review while balancing post-mvp UI and design aspirations.
  * **What I Learned**: Embraced the concept of the Minimum Viable Product (MVP). Securing a fully hardened, logic complete application allows for confident project submission, while visual styling and CSS enhancements can be iterated on continuously without risking core regression.
---

## Credits & Acknowledgments
- Big thanks to Myself AKA AMEER HAMZA 😂 for the code reviews, debugging sessions, and moral support when I felt like giving up!!
