# Chat Real 🚀

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://chatreall.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_BADGE_ID/deploy-status)](https://app.netlify.com/sites/chatreall/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)

Modern, secure and instant video chat application built with React, TypeScript, and WebRTC.

**🌐 Live Demo: [https://chatreall.netlify.app/](https://chatreall.netlify.app/)**

## ✨ Features

- 🎥 **HD Video Calls** - High quality video with WebRTC technology
- 🎤 **Crystal Clear Audio** - Clear sound with noise cancellation  
- 🔒 **Private & Secure** - Encrypted P2P connection, no data on server
- 📱 **Multi-device** - Works on desktop, tablet and mobile
- ⚡ **Instant Rooms** - Create or join rooms quickly
- ⏰ **Unlimited Time** - No time restrictions on calls
- 🧪 **Camera Test** - Test your camera and microphone before joining
- 🎨 **Modern UI** - Clean, responsive design with modern header

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Icons**: React Icons (Material Design)
- **Real-time Communication**: WebRTC (Native)
- **Fonts**: Inter (Google Fonts)

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/chat-real.git
cd chat-real
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:5173
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── CameraTest/     # Camera/microphone testing
│   ├── Controls/       # Video call controls
│   ├── Header/         # Navigation header
│   ├── Landing/        # Landing page
│   ├── ShareButton/    # Room link sharing
│   ├── VideoChat/      # Main video chat interface
│   └── VideoContainer/ # Video display container
├── hooks/              # Custom React hooks
│   └── useVideoChat.ts # Video chat state management
├── services/           # Business logic
│   └── WebRTCService.ts # WebRTC implementation
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
│   └── roomUtils.ts    # Room ID generation
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎯 Usage

### Creating a Room
1. Click "Create New Room" on the homepage
2. Allow camera and microphone permissions
3. Share the room link with others

### Joining a Room
1. Paste the room ID in the "Join Existing Room" input
2. Click "Join Room" or press Enter
3. Allow camera and microphone permissions

### During a Call
- Toggle camera on/off
- Toggle microphone on/off  
- End call and return to homepage
- Copy room link to share with others

## 🔧 Configuration

### Environment Variables

Currently, this project doesn't require environment variables as it uses WebRTC peer-to-peer connections. For production deployment with STUN/TURN servers, you may want to add:

```env
# Optional: Custom STUN/TURN servers
VITE_STUN_SERVER=stun:your-server.com:3478
VITE_TURN_SERVER=turn:your-server.com:3478
VITE_TURN_USERNAME=your-username
VITE_TURN_PASSWORD=your-password
```

### Browser Compatibility

- Chrome 60+
- Firefox 60+
- Safari 13+
- Edge 79+

**Note**: Requires HTTPS for camera/microphone access in production.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

**Important**: Make sure your hosting provider serves the app over HTTPS for camera/microphone access.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

### Development Guidelines

- Follow the existing code style
- Add TypeScript types for new code
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed

### Code Style

- Use TypeScript for all new code
- Follow React best practices
- Use CSS Modules for styling
- Prefer functional components with hooks
- Use semantic HTML elements

## 📋 Roadmap

- [ ] Screen sharing functionality
- [ ] Chat messages during calls
- [ ] Recording capabilities
- [ ] Background blur/virtual backgrounds
- [ ] Room passwords/access control
- [ ] Mobile app (React Native)
- [ ] Multiple participants support
- [ ] File sharing
- [ ] Whiteboard integration

## 🐛 Known Issues

- Refresh required if camera access is denied initially
- iOS Safari may have audio issues in some cases
- Firefox may require manual enable of media devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- WebRTC API for real-time communication
- React team for the amazing framework
- Material Design for the icon system
- Inter font family by Rasmus Andersson
- Vite for the lightning-fast build tool

## 📞 Support

If you have any questions or need help:

- 📧 Open an issue on GitHub
- 💬 Start a discussion in the repository
- 📖 Check the documentation

---

Made with ❤️ by the Chat Real community
