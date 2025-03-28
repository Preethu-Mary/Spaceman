# Spaceman Game

The Spaceman Game is a React-based implementation of the classic Hangman game. The objective is to guess a hidden word one letter at a time while keeping track of your wrong guesses. The game ends when the word is guessed correctly or when the number of allowed wrong guesses (7) is exceeded. This version uses animations to enhance the user experience.

## Rules

- The computer randomly picks a word from a hardcoded list of fruit names, and the player tries to guess 
it by suggesting letters or guessing whole word, with up to seven incorrect guesses allowed. 
- The word to guess is represented by a row of underscores, representing each letter of
the word.
- If the player suggests a letter which occurs in the word, the computer prints out all its
correct positions (along with previously guessed letters.)
- If the suggested letter does not occur in the word, the computer draws the next stage of
a spacesuited stick figure as a tally mark.
- The game is over when:
  a. WIN: The guessing player completes the word, or guesses the whole word
correctly
  b. LOSE: The computer completes the diagram.


## Technologies Used

- **React** - JavaScript library for building user interfaces.
- **Vite** - Fast build tool for React applications.
- **Vitest** - A fast and efficient testing framework for running unit and integration tests.
- **React Toastify** (optional) - Used for showing toast notifications (if you decide to keep it).
- **CSS** (with `animate.css`) - Used for animations and styling.

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

### 1. Clone the repository

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/Preethu-Mary/Spaceman.git
```
