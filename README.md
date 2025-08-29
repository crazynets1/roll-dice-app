# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Tenzies Game App
This is a simple React application that implements the classic dice game "Tenzies". The goal of the game is to roll dice until all dice show the same value. Players can hold dice to prevent them from being re-rolled, and the game tracks the number of rolls taken to win.

## Features
- Roll 10 dice at once
- Click on a die to hold its value between rolls
- Win the game when all dice are held and show the same value
- Track the number of rolls taken to win
- Responsive and interactive UI

## Getting Started

### Available Scripts
In the project directory, you can run:

#### Prerequisites
- Node.js and npm installed on your machine

#### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/crazynets1/tenzies-game-app.git
	cd tenzies-game-app
	```
2. Install dependencies:
	```bash
	npm install
	```

#### Running the App
Start the development server:
```bash
npm start
```
The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/App.js` - Main game logic and UI
- `src/Die.jsx` - Die component
- `src/index.js` - Entry point
- `src/index.css` - Styles

## How to Play
1. Click the "Roll" button to roll all dice.
2. Click on individual dice to "hold" their value.
3. Continue rolling until all dice show the same value and are held.
4. The game will display a winning message when completed.

## License
This project is licensed under the MIT License.