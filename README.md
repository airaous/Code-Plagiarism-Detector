# AI Code Plagiarism Detector

## 🚀 Smart. Fair. Original.

A comprehensive full-stack web application for detecting code plagiarism using multiple AI models and providing detailed code analysis. Built with Flask backend and Next.js frontend, featuring beautiful UI, multiple analysis modes, and AI-powered insights.

![AI Code Plagiarism Detector](https://img.shields.io/badge/AI-Code%20Plagiarism%20Detector-blue)
![Flask](https://img.shields.io/badge/Flask-Backend-green)
![Next.js](https://img.shields.io/badge/Next.js-Frontend-black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-blue)

## ✨ Features

### 🔍 **Code Comparison & Plagiarism Detection**
- **Multi-AI Analysis**: Uses Cohere, Together.ai, and Replicate APIs for comprehensive similarity detection
- **Semantic Similarity**: Advanced embedding models analyze code meaning, not just syntax
- **Aggregated Scoring**: Combines multiple AI model results for accurate plagiarism detection
- **Real-time Results**: Instant feedback with detailed similarity percentages

### 📊 **Advanced Code Analysis**
- **Structure Analysis**: Analyze code organization, functions, classes, and comments
- **Complexity Metrics**: Cyclomatic complexity analysis for maintainability assessment
- **Style Evaluation**: Code style, patterns, and best practices analysis
- **AI-Generated Code Detection**: Identify if code was likely generated by AI tools

### 🔬 **Detailed Comparison Mode**
- **Side-by-side Analysis**: Comprehensive comparison of two code snippets
- **Individual Metrics**: Separate analysis for each code snippet
- **Comparison Insights**: Structural and style similarity explanations
- **Plagiarism Indicators**: Specific flags for potential plagiarism patterns

### 🎨 **Modern UI/UX**
- **Dark/Light Mode**: Toggle between beautiful themes
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion powered interactions
- **Monaco Editor**: Professional code editor with syntax highlighting
- **Interactive Charts**: Visual representation of similarity scores

## 🛠️ Technology Stack

### Backend
- **Flask**: Lightweight Python web framework
- **Cohere API**: Advanced text embedding models
- **Together.ai**: Code-specialized embedding models
- **Replicate**: Machine learning model inference
- **scikit-learn**: Cosine similarity calculations
- **Python AST**: Code structure analysis

### Frontend
- **Next.js 14**: React framework with server-side rendering
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Monaco Editor**: VS Code-style code editor
- **Chart.js**: Interactive data visualization

## 🚀 Deployment (Recommended)

**Split Architecture for Optimal Performance:**

### Backend (Zeabur) + Frontend (Vercel)
1. **Backend**: Deploy on [Zeabur](https://zeabur.com) - Python Flask API
2. **Frontend**: Deploy on [Vercel](https://vercel.com) - Next.js React App

📚 **Detailed Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)  
⚡ **Quick Setup**: See [QUICKSTART.md](./QUICKSTART.md)

### Why Split Deployment?
- ✅ **Better Performance**: Each service optimized for its purpose
- ✅ **Independent Scaling**: Scale backend and frontend separately  
- ✅ **Cost Effective**: Generous free tiers on both platforms
- ✅ **Professional**: Enterprise-grade infrastructure

---

## 🛠️ Local Development

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### 1. Clone Repository
```bash
git clone https://github.com/your-username/Code-Plagiarism-Detector.git
cd Code-Plagiarism-Detector
```

### 2. Backend Setup
```bash
# Install Python dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

### 4. API Keys Configuration
Add your API keys to `.env`:
```env
COHERE_API_KEY=your_cohere_api_key
TOGETHER_API_KEY=your_together_api_key
REPLICATE_API_TOKEN=your_replicate_token
```

### 5. Run the Application
```bash
# Terminal 1: Start Flask backend
python main.py

# Terminal 2: Start Next.js frontend
cd frontend
npm run dev
```

Visit `http://localhost:3000` in your browser!

## 📖 Usage Guide

### 🔍 Basic Code Comparison
1. Navigate to the **Home** page
2. Paste your code snippets in the two editors
3. Click **"Compare Code"** to analyze similarity
4. View results with individual model scores and combined analysis

### 📊 Single Code Analysis
1. Go to **"Code Analysis"** page
2. Paste a single code snippet
3. Click **"Analyze Code"** for comprehensive insights
4. Review structure, complexity, style, and AI detection results

### 🔬 Detailed Comparison
1. Visit **"Detailed Comparison"** page
2. Enter two code snippets for side-by-side analysis
3. Get comprehensive comparison with individual analysis for each snippet
4. Review structural similarities and plagiarism indicators

## 🔧 API Endpoints

### Code Similarity
```http
POST /check
Content-Type: application/json

{
  "code1": "def hello():\n    print('Hello')",
  "code2": "def greet():\n    print('Hello')"
}
```

### Single Code Analysis
```http
POST /analyze
Content-Type: application/json

{
  "code": "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)"
}
```

### Detailed Comparison
```http
POST /detailed-check
Content-Type: application/json

{
  "code1": "first code snippet",
  "code2": "second code snippet"
}
```

## 🧠 AI Models Used

### Cohere Embed
- **Model**: `embed-english-v3.0`
- **Strength**: Advanced semantic understanding
- **Use Case**: Natural language similarity in code comments and structure

### Together.ai
- **Model**: `BAAI/bge-base-en-v1.5`
- **Strength**: Code-specialized embeddings
- **Use Case**: Technical code pattern recognition

### Replicate
- **Model**: Universal sentence encoder variants
- **Strength**: General-purpose similarity detection
- **Use Case**: Cross-validation and ensemble scoring

## 🔒 AI-Generated Code Detection

The system uses advanced pattern recognition to detect AI-generated code:

- **Structural Patterns**: Common AI code generation signatures
- **Style Analysis**: Typical AI formatting and naming conventions
- **Semantic Analysis**: AI-like logical flow and structure
- **Confidence Scoring**: Probability estimates for AI generation

## 📁 Project Structure

```
Code-Plagiarism-Detector/
├── main.py                 # Flask backend application
├── requirements.txt        # Python dependencies
├── .env                   # Environment variables
├── README.md              # Documentation
├── frontend/              # Next.js frontend
│   ├── pages/            # Page components
│   │   ├── index.js      # Home page (code comparison)
│   │   ├── analysis.js   # Single code analysis
│   │   └── comparison.js # Detailed comparison
│   ├── components/       # Reusable components
│   │   ├── CodeEditor.js
│   │   ├── ResultsPanel.js
│   │   ├── CodeAnalysisPage.js
│   │   └── ThemeToggle.js
│   └── styles/          # CSS and styling
└── debug/               # Debug and test scripts
```

## 🎯 Similarity Scoring

The application provides nuanced similarity scoring:

- **🟢 0-40%**: Different implementations
- **🔵 40-60%**: Some similarities, likely coincidental
- **🟡 60-80%**: Significant similarities, review recommended
- **🔴 80-100%**: High similarity, potential plagiarism

## 🔧 Complexity Analysis

Cyclomatic complexity levels:
- **Low (1-5)**: Simple, maintainable code
- **Moderate (6-10)**: Acceptable complexity
- **High (11-15)**: Consider refactoring
- **Very High (16+)**: Difficult to maintain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Cohere**: For advanced embedding models
- **Together.ai**: For code-specialized AI models
- **Replicate**: For machine learning infrastructure
- **Next.js Team**: For the amazing React framework
- **TailwindCSS**: For beautiful, utility-first styling

## 📧 Support

For support, email support@yourapp.com or create an issue on GitHub.

---
