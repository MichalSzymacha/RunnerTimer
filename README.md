# RunnerTimer 🏃‍♂️⏱️

A modern, responsive workout timer application built with Angular. Features interval training with customizable workout and break times, audio notifications, and automatic deployment to GitHub Pages.

![Angular](https://img.shields.io/badge/Angular-19.2.15-red.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## ✨ Features

- **⏰ Customizable Timer**: Set your own workout and break durations in seconds
- **🔄 Interval Training**: Automatic switching between workout and break phases
- **🔊 Audio Notifications**:
  - Tick sound during last 5 seconds of each phase
  - Phase change notification sound
  - Instant sound stop on pause/reset
- **📱 Responsive Design**: Optimized for desktop and mobile devices
- **🎨 Modern UI**: Beautiful gradient design with PrimeNG components
- **🚀 Auto Deployment**: Automatic deployment to GitHub Pages via GitHub Actions
- **📊 Session Summary**: Track total workouts and breaks completed

## 🎯 Live Demo

[View Live Application](https://michalszymacha.github.io/RunnerTimer/)

## 📋 Prerequisites

- Node.js 20 or higher
- npm or yarn
- GitHub account (for deployment)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MichalSzymacha/RunnerTimer.git
   cd RunnerTimer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🛠️ Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests

### Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── workout-setup/      # Setup screen with time inputs
│   │   ├── workout-timer/      # Main timer component
│   │   ├── countdown-timer/    # Timer display component
│   │   └── time-input/         # Reusable time input component
│   ├── services/
│   │   └── sound.service.ts    # Audio notification service
│   ├── app.config.ts           # Application configuration
│   ├── app.routes.ts           # Routing configuration
│   └── app.component.*         # Root component
├── assets/                     # Static assets
└── styles.scss                 # Global styles
```

## 🎨 Usage

1. **Setup Phase**: Enter your desired workout and break times in seconds
2. **Start Timer**: Click "Start Workout" to begin your interval training
3. **Timer Phase**: Watch the countdown and listen for audio cues
4. **Audio Alerts**:
   - Tick sounds during last 5 seconds of each phase
   - Phase change sound when switching between workout/break
5. **Controls**:
   - **Start**: Begin or resume timer
   - **Stop**: Pause timer and view summary
   - **Reset**: Return to setup screen
6. **Summary**: View total workouts and breaks completed

## 🔧 Configuration

### Audio Settings
The application uses Web Audio API for sound generation:
- **Tick Sound**: 800Hz sine wave, 0.1 seconds
- **Phase Change**: 600Hz → 800Hz → 1000Hz triangle wave sequence

### Timer Behavior
- Automatic phase switching when countdown reaches zero
- Sound notifications during last 5 seconds
- Session statistics tracking

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The application is automatically deployed to GitHub Pages on every push to the `master` branch.

#### How it works:
1. **Automatic Build**: GitHub Actions workflow triggers on push to `master`
2. **Production Build**: Application builds with production configuration
3. **GitHub Pages**: Files automatically published to `gh-pages` branch

#### Configuration:
- **Workflow File**: `.github/workflows/deploy.yml`
- **URL**: `https://MichalSzymacha.github.io/RunnerTimer/`
- **Routing**: Uses hash-based routing for GitHub Pages compatibility

### Manual Deployment

You can also deploy manually:

```bash
# Build for production
npm run build -- --configuration production

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/runner-timer
```

### Requirements for Deployment:
- GitHub repository
- GitHub Pages enabled in repository settings (branch: `gh-pages`)
- GitHub Actions workflow configured (already included)

## 🛠️ Technologies Used

- **Framework**: Angular 19.2.15
- **Language**: TypeScript 5.7.2
- **Styling**: SCSS with responsive design
- **UI Components**: PrimeNG with Aura theme
- **Audio**: Web Audio API
- **Build Tool**: Angular CLI
- **Deployment**: GitHub Actions & GitHub Pages
- **Package Manager**: npm

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Angular team for the amazing framework
- PrimeNG for beautiful UI components
- GitHub for hosting and Actions
- Web Audio API for sound capabilities

---

**Made with ❤️ by Michal Szymacha**
