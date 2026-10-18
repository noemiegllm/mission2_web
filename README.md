# Mission M2 - Async Odyssey

This is a web application built with Vite (Vanilla & Javascript) that consumes a public API (TheMealDB) using `fetch` and `async/await`. The app allows users to search for recipes.
To access the app: https://github.com/noemiegllm/mission2_web.git
---

## AI Usage

- **Tools used:** Gemini

- **Parts developed with AI:**

  * Helping me to understand how Vite works and when to use ES modules.
  * Indicate to me what was expected regarding "loading and error states"
  * Styling the layout using CSS.

- **Parts written by hand:**

  * Initial HTML structure, event listener logic & api logic.

- **Prompts Example:**

  1. *"I wrote the api logic to do a request to the 'TheMealDB'. corrects the syntaxe of my code."*

  2. *"How can I represent each recipe from the API's result to my web app ? I have to use map() but how can I use the object obtained with map() ? "*

For the AI-generated suggestions, I reviewed and adapted the code by hand to fit my exact requirements. Regarding the CSS, I used the provided styling base and simplified it to keep only what was necessary.

---

## Autopsy

The first challenging part of this mission for me was understanding the overall project architecture and getting the environment set up properly. 

Problems Encountered:
    - Environment Setup: I struggled initially with figuring out whether I needed to create a completely new environment with Vite and how to properly configure it.
    **Decision made:** I chose to set up Vite using the **Vanilla & JavaScript** template. I wasn't feeling ready to use React or TypeScript yet, opting for pure JavaScript allowed me to stay closer to native JS.

    - I didn't clearly remember how to use the `map()` method properly to transform the data coming from the API.
    **Decision made:** I re-read the course material and asked Gemini to explain the `map()` method to me step-by-step like a teacher.