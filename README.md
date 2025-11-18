# ✅ To-Do App

A minimal, aesthetic task management application with light/dark mode support. Built with vanilla HTML, CSS, and JavaScript with Progressive Web App (PWA) capabilities.

## Features

- ✨ **Clean, Modern UI** - Minimal design with smooth transitions and animations
- 🌓 **Light/Dark Mode** - Toggle between themes with preference saved locally
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 💾 **Local Storage** - Tasks persist across browser sessions
- 📲 **PWA Ready** - Installable as a standalone app with service worker support
- ⌨️ **Keyboard Support** - Press Enter to add tasks quickly
- ♿ **Accessible** - ARIA labels and semantic HTML for better accessibility

## Installation

### Option 1: Run Locally

Clone the repository and navigate to the directory:

```bash
## banta singh please add your github repo link with the clone command here 
cd To-Do-App
```

Start a local web server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server
```

Open your browser and visit `http://localhost:8000`

### Option 2: Install as PWA

Once the app is open in your browser, look for the install button in the bottom-right corner or use your browser's menu to install it to your device.

## Usage

### Adding Tasks
1. Type your task in the input field
2. Click the **Add** button or press **Enter**
3. Your task appears at the top of the list

### Completing Tasks
- Click on a task to mark it as complete (strikethrough and faded)
- Click again to undo

### Deleting Tasks
- Click the **×** button on the right side of any task to delete it

### Switching Themes
- Click the **🌙** or **☀️** button in the top-right of the card to toggle between light and dark modes
- Your preference is automatically saved

## Project Structure

```
To-Do-App/
├── index.html          # Main HTML file
├── style.css           # Styling (light/dark modes)
├── script.js           # JavaScript functionality
├── service-worker.js   # PWA service worker
├── manifest.json       # PWA manifest
├── README.md           # This file
└── images/
    ├── github.svg      # GitHub icon
    ├── install.png     # Install icon
    └── list.png        # List icon (optional)
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Variables, gradients, flexbox, responsive design
- **Vanilla JavaScript** - No frameworks or dependencies
- **Service Worker** - Offline support and PWA capabilities
- **LocalStorage API** - Data persistence

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Breakdown

### Light Mode (Default)
- Light blue gradient background (#f6f7fb)
- Clean white cards with subtle shadows
- Dark blue text (#10203a)
- Soft blue accent color (#5b8def)

### Dark Mode
- Deep dark background (#0f1419)
- Dark cards (#1a1f2e) with transparent glass effect
- Light text (#e8ecf1)
- Bright blue accent (#6b9cff)

### Animations & Transitions
- Smooth theme switching (0.3s)
- Task hover effects with elevation
- Button hover and active states
- Scroll animations for list updates

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Enter | Add new task |

## Local Storage

The app automatically saves your tasks to browser localStorage under the key `data`. Your theme preference is saved under the key `theme`.

To clear all data, open browser DevTools and run:
```javascript
localStorage.clear();
```

## PWA Support

This app is a Progressive Web App and can be:
- Installed on your home screen
- Used offline (with cached assets)
- Updated automatically via service worker

To install:
1. Open the app in a compatible browser
2. Click the install button that appears (varies by browser)
3. Or use your browser's "Install app" option in the menu

## Performance

- **Minimal bundle size** - No external dependencies
- **Fast load time** - Optimized CSS and JavaScript
- **Smooth animations** - GPU-accelerated transitions
- **Responsive scrolling** - Custom scrollbar styling

## Accessibility

- ♿ Semantic HTML structure
- 🎯 ARIA labels on interactive elements
- ⌨️ Keyboard navigation support
- 🎨 High contrast color schemes
- 📱 Touch-friendly button sizes (44px minimum)

## Development

### Adding New Features

1. Update HTML in `index.html`
2. Add styles in `style.css` (use CSS variables for colors)
3. Add functionality in `script.js`
4. Test on multiple devices

### CSS Variables (Theming)

Light mode (`:root`):
```css
--bg: #f6f7fb;
--card: #ffffff;
--text: #10203a;
--accent: #5b8def;
```

Dark mode (`[data-theme="dark"]`):
```css
--bg: #0f1419;
--card: #1a1f2e;
--text: #e8ecf1;
--accent: #6b9cff;
```

## Future Enhancements

- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Search and filter functionality
- [ ] Export/import tasks
- [ ] Cloud sync support
- [ ] Collaborative task sharing
- [ ] Dark mode auto-detect (prefers-color-scheme)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

Created by [harivanshx](https://github.com/harivanshx)

## Support

If you encounter any issues or have suggestions, please open an issue on the [GitHub repository](https://github.com/harivanshx/To-Do-App).


---

**Made with ❤️ and a focus on minimalism and usability**