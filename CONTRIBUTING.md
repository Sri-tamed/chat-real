# Contributing to Chat Real 🤝

Thank you for considering contributing to Chat Real! We welcome contributions from everyone.

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Git

### Setup Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork locally**
```bash
git clone https://github.com/YOUR_USERNAME/chat-real.git
cd chat-real
```

3. **Add upstream remote**
```bash
git remote add upstream https://github.com/original-username/chat-real.git
```

4. **Install dependencies**
```bash
npm install
```

5. **Start development server**
```bash
npm run dev
```

## 📝 Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Changes

- Follow the existing code style
- Add TypeScript types for new code
- Write meaningful commit messages
- Test your changes thoroughly

### 3. Commit Your Changes

Use conventional commit messages:

```bash
git commit -m "feat: add screen sharing functionality"
git commit -m "fix: resolve video display issue"
git commit -m "docs: update README installation steps"
```

### 4. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 🎯 Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type when possible
- Use strict mode settings

```typescript
// Good
interface UserProps {
  name: string;
  isActive: boolean;
}

// Avoid
const user: any = { name: "John", isActive: true };
```

### React Components

- Use functional components with hooks
- Prefer named exports
- Use CSS Modules for styling
- Include proper JSX accessibility

```tsx
// Good
import styles from './Component.module.css';

interface ComponentProps {
  title: string;
  onAction: () => void;
}

export const Component = ({ title, onAction }: ComponentProps) => {
  return (
    <button className={styles.button} onClick={onAction}>
      {title}
    </button>
  );
};
```

### CSS Guidelines

- Use CSS Modules
- Follow BEM-like naming convention
- Use CSS custom properties for theming
- Ensure responsive design

```css
/* Component.module.css */
.container {
  display: flex;
  align-items: center;
  padding: var(--spacing-md);
}

.button {
  background: var(--primary-color);
  border-radius: var(--border-radius);
}

.button:hover {
  background: var(--primary-color-hover);
}
```

### File Organization

```
src/
├── components/
│   └── ComponentName/
│       ├── index.tsx
│       └── ComponentName.module.css
├── hooks/
│   └── useHookName.ts
├── services/
│   └── ServiceName.ts
└── types/
    └── index.ts
```

## 🐛 Bug Reports

When filing a bug report, please include:

1. **Description** - Clear description of the issue
2. **Steps to Reproduce** - Exact steps to reproduce the bug
3. **Expected Behavior** - What should happen
4. **Actual Behavior** - What actually happens
5. **Environment** - Browser, OS, Node version
6. **Screenshots** - If applicable

### Bug Report Template

```markdown
**Bug Description**
A clear description of what the bug is.

**To Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- Browser: [e.g. Chrome 96]
- OS: [e.g. Windows 10]
- Node Version: [e.g. 16.14.0]
```

## 💡 Feature Requests

For feature requests, please:

1. Check existing issues first
2. Provide clear use case
3. Explain expected behavior
4. Consider implementation complexity

### Feature Request Template

```markdown
**Feature Description**
A clear description of the feature you'd like to see.

**Use Case**
Describe the problem this feature would solve.

**Proposed Solution**
Describe how you envision this feature working.

**Additional Context**
Any other context or screenshots about the feature.
```

## 🧪 Testing

Currently we don't have automated tests, but when making changes:

1. **Manual Testing**
   - Test in multiple browsers
   - Test responsive design
   - Test camera/microphone functionality
   - Test edge cases

2. **Future Testing** (help wanted!)
   - Unit tests with Jest
   - Integration tests
   - E2E tests with Playwright

## 📋 PR Guidelines

### Before Submitting

- [ ] Code follows style guidelines
- [ ] Changes have been tested locally
- [ ] Documentation updated if needed
- [ ] No console errors or warnings
- [ ] Responsive design verified

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Mobile responsive tested
- [ ] Camera/mic functionality tested

## Screenshots
If applicable, add screenshots of the changes
```

## 🎯 Areas Looking for Help

We're especially looking for contributions in:

- [ ] **Testing** - Help set up automated testing
- [ ] **Accessibility** - Improve ARIA labels and keyboard navigation  
- [ ] **Performance** - Optimize video/audio processing
- [ ] **Mobile** - Improve mobile experience
- [ ] **Documentation** - Improve docs and add tutorials
- [ ] **Internationalization** - Add multi-language support
- [ ] **Screen Sharing** - Implement screen sharing feature
- [ ] **Chat Messages** - Add text chat during calls

## 🤔 Questions?

- Open an issue for questions
- Check existing discussions
- Read the documentation

## 🙏 Recognition

Contributors will be recognized in:

- README.md contributors section
- GitHub contributors page
- Release notes for significant contributions

Thank you for contributing to Chat Real! 🚀
