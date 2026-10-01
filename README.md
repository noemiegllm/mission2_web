# Mission 2 - The Key Forge

This is a est website that create password. The user can choose the length of the password and also if it contains letters, symbols or digits.
To access to the game : https://noemiegllm.github.io/mission2_web/
---

## AI Usage

* **Tools used:** Gemini
* **Parts developed with AI:**
  * Debugging syntax errors (conditional checks, assignment checks).
  * styling the entire page with simple CSS.
* **Parts written by hand:**
  * Initial HTML and JavaScript code was written by hand to implement my logic.
* **Prompts Example:**
  1. *"The CSS is perfect, do not modify anything. I would like you to add a CSS class to change the message color to red when the password length is invalid."*

  2. *"I need to meet the following requirements: [...] Tell me which ones are not being met."*

For the AI JS & HTML result, I only used them to modify my code by hand (not copy the code). Regarding the CSS, I copied the code, then reviewed and removed unnecessary code parts.

---

## Autopsy

I was hesitant about the choice of input type. I hesitated between a simple text input and a drop-down menu.
**Decision made: **To prevent length errors, I chose a number type input with a displayed limit from 4 to 32. The user can only enter an invalid value if they manually type a number into the input.
---
