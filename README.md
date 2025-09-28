# 🤝 TCB - The Coaching Business | Landing Page de Patrocínio

Uma landing page profissional para apresentação de oportunidades de patrocínio e parcerias estratégicas do TCB. Desenvolvida com foco em conversão e experiência do usuário, otimizada para deployment no Vercel.

![TCB Sponsorship Preview](https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80)

## ✨ Características

- **🎨 Design Profissional**: Layout moderno e elegante voltado para o público empresarial
- **📱 Totalmente Responsivo**: Otimizado para todos os dispositivos e tamanhos de tela
- **⚡ Performance Excepcional**: JavaScript vanilla para máxima velocidade
- **🎯 SEO Otimizado**: Meta tags apropriadas e estrutura HTML semântica
- **🌈 Animações Suaves**: Intersection Observer API para animações performáticas
- **🤝 Foco em Conversão**: Formulários de contato e CTAs estratégicamente posicionados
- **� Pacotes Claros**: Apresentação transparente dos diferentes níveis de patrocínio
- **💼 Casos de Sucesso**: Seção de depoimentos para aumentar a credibilidade
- **♿ Acessibilidade**: Desenvolvido seguindo as melhores práticas de acessibilidade
- **🔧 Deploy Simplificado**: Pronto para publicação no Vercel com configuração mínima

## 🏗️ Estrutura do Projeto

```
├── index.html          # Arquivo HTML principal com conteúdo TCB
├── styles.css          # Estilos CSS com paleta de cores profissional
├── script.js           # Funcionalidades JavaScript interativas
├── package.json        # Configuração do projeto
├── vercel.json         # Configuração de deployment do Vercel
└── README.md           # Este arquivo
```

## 🎨 Paleta de Cores TCB

- **Azul Primário**: `#1e3a8a` - Confiança e profissionalismo
- **Azul Secundário**: `#3b82f6` - Modernidade e inovação
- **Dourado**: `#f59e0b` - Excelência e valor premium
- **Texto Principal**: `#1f2937` - Legibilidade e seriedade
- **Texto Secundário**: `#6b7280` - Hierarquia visual

## 🚀 Quick Start

### Local Development

1. **Clone or download** this project to your local machine

2. **Navigate to the project directory**:
   ```bash
   cd lp
   ```

3. **Start a local server** (choose one method):

   **Option A: Using Python (recommended)**
   ```bash
   # Python 3
   python3 -m http.server 3000
   
   # Python 2
   python -m SimpleHTTPServer 3000
   ```

   **Option B: Using Node.js**
   ```bash
   npm run dev
   ```

   **Option C: Using PHP**
   ```bash
   php -S localhost:3000
   ```

   **Option D: Using VS Code Live Server extension**
   - Install the Live Server extension
   - Right-click on `index.html` and select "Open with Live Server"

4. **Open your browser** and visit `http://localhost:3000`

### 📦 Deploy to Vercel

#### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - What's your project's name? `my-landing-page`
   - In which directory is your code located? `./`

#### Method 2: Git Integration

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

#### Method 3: Drag and Drop

1. **Zip your project files**
2. **Visit [vercel.com](https://vercel.com)**
3. **Drag and drop** the zip file onto the deployment area

## 🎨 Customization

### Colors and Branding

Update the CSS variables in `styles.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --bg-color: #ffffff;
}
```

### Content

1. **Update the brand name**: Search for "DeployFast" in `index.html` and replace with your brand
2. **Modify hero content**: Update the hero title, subtitle, and CTA buttons
3. **Customize features**: Edit the features section with your own benefits
4. **Update footer**: Add your own links and information

### Images and Icons

- **Logo**: Replace the SVG logo in the navigation
- **Hero image**: Add a hero image or replace the terminal animation
- **Favicon**: Update the favicon in the HTML head section

## 🔧 Configuration Files

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ]
}
```

### package.json
Contains project metadata and development scripts. You can modify:
- Project name and description
- Author information
- Development dependencies (if needed)

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Optimization

The template includes:
- Proper meta tags and descriptions
- Semantic HTML structure
- Open Graph tags for social sharing
- Structured data markup
- Optimized loading performance

## ♿ Accessibility Features

- Semantic HTML elements
- Proper ARIA labels
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Screen reader friendly

## 📊 Performance Optimization

- Minimal JavaScript footprint
- Optimized CSS with no unused styles
- Lazy loading for images
- Intersection Observer for animations
- Preconnect hints for external resources

## 🛠️ Development

### Adding New Sections

1. **HTML**: Add your section markup in `index.html`
2. **CSS**: Style your section in `styles.css`
3. **JS**: Add any interactivity in `script.js`

### Custom Animations

Use the existing animation classes:
```css
.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}

.slide-up {
  transform: translateY(30px);
  opacity: 0;
  animation: slideUp 0.8s ease forwards;
}
```

## 📈 Analytics Integration

To add analytics (Google Analytics, Mixpanel, etc.), update the `trackEvent` function in `script.js`:

```javascript
function trackEvent(eventName, eventData = {}) {
  // Google Analytics
  gtag('event', eventName, eventData);
  
  // Or other analytics services
  // analytics.track(eventName, eventData);
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Vercel](https://vercel.com)
- Icons from [Feather Icons](https://feathericons.com)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📞 Support

If you have any questions or need help with deployment:

1. Check the [Vercel Documentation](https://vercel.com/docs)
2. Visit the [Vercel Community](https://github.com/vercel/vercel/discussions)
3. Open an issue in this repository

## 🔮 What's Next?

Consider adding:
- Contact form with Vercel Functions
- Blog section with markdown support
- Authentication with Vercel Auth
- Database integration
- API endpoints
- Multi-language support

---

**Happy deploying! 🚀**