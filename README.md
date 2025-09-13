# Word Scramble Game

A fun and interactive word scramble game built with HTML, CSS, and JavaScript. Test your vocabulary skills by unscrambling words within a time limit!

## 🎮 Features

- **Word Scrambling**: Randomly scrambled words from a diverse vocabulary
- **Hints**: Helpful hints to guide you when stuck
- **Timer**: 30-second countdown for each word
- **Scoring System**: Points based on time remaining when correct
- **Word Classification**: Words categorized as Common, Rare, Exclusive, or Legendary
- **Responsive Design**: Works on both desktop and mobile devices
- **Visual Feedback**: Color-coded input validation and animations

## 🎯 How to Play

1. A scrambled word appears on the screen
2. Use the hint if you need help
3. Type your guess in the input field
4. Click "Check Word" or press Enter to submit
5. Beat the 30-second timer to maximize your score!
6. Click "Refresh Word" or press Ctrl to get a new word

### Scoring System
- 26-30 seconds remaining: 20 points
- 21-25 seconds remaining: 17 points
- 16-20 seconds remaining: 14 points
- 11-15 seconds remaining: 13 points
- 0-10 seconds remaining: 10 points

## 🛠️ Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Game logic and interactivity
- **Google Fonts**: Poppins font family

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/word-scramble-game.git
   ```

2. Navigate to the project directory:
   ```bash
   cd word-scramble-game
   ```

3. Open `index.html` in your web browser

### Running the Game
Simply open the `index.html` file in any modern web browser. No additional setup required!

## 📁 Project Structure

```
word-scramble-game/
├── index.html          # Main HTML file
├── style.css           # Game styling
├── js/
│   ├── script.js       # Game logic and functionality
│   └── words.js        # Word database with hints
├── img/
│   ├── bg.png         # Background image
│   ├── game.png       # Game favicon
│   └── logo.png       # Logo image
└── README.md          # Project documentation
```

## 🎨 Customization

### Adding New Words
Edit `js/words.js` to add more words to the game:

```javascript
{
    word: "YourWord",
    hint: "A helpful hint for the word"
}
```

### Modifying Game Settings
In `js/script.js`, you can adjust:
- Timer duration (default: 30 seconds)
- Scoring values
- Word classification criteria

### Styling Changes
Modify `style.css` to customize:
- Color scheme
- Font sizes
- Layout and spacing
- Animations and transitions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Word list compiled from various sources
- Icons and images sourced from free resources
- Inspired by classic word games

## 📞 Contact

RayyanRS6 - [GitHub Profile](https://github.com/RayyanRS6)

---

**Enjoy playing Word Scramble! 🧩✨**
