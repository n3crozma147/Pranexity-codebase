<div align="center">

# 🌟 Pranexity

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=2800&pause=2000&color=A277FF&center=true&vCenter=true&width=940&lines=Welcome+to+Pranexity!" align="center" alt="Welcome to Pranexity!" />

<p align="center">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

</div>

## 👥 Team Members

<div align="center">
    <table>
        <tr>
            <td align="center">
                <img src="https://avatars.githubusercontent.com/u/your-id?v=4" width="100px;" alt="Shivansh Sahu"/>
                <br />
                <b>Shivansh Sahu</b>
                <br />
                <sub>🚀 Full Stack Developer</sub>
            </td>
            <td align="center">
                <img src="https://avatars.githubusercontent.com/u/your-id?v=4" width="100px;" alt="Parth Sarthi Sharma"/>
                <br />
                <b>Parth Sarthi Sharma</b>
                <br />
                <sub>🎨 Frontend Developer</sub>
            </td>
        </tr>
    </table>
</div>

## 🛠️ Tech Stack

<details>
<summary>Click to expand</summary>

### Frontend
- ⚛️ React with TypeScript
- 🎨 TailwindCSS for styling
- 🔄 Framer Motion for animations
- 📱 Responsive design principles
- 📝 React Hook Form for form handling

### Backend
- 🚀 Node.js & Express
- 🔷 TypeScript
- 🗃️ Prisma ORM
- 🐘 PostgreSQL Database
- 📊 ExcelJS for export functionality

### Development Tools
- 📦 Vite for frontend bundling
- 🔍 ESLint & Prettier
- 🧪 Type safety with TypeScript
- 🔄 Git for version control

</details>

## 📁 Project Structure

\`\`\`
Pranexity/
├── src/                      # Frontend source files
│   ├── components/          # Reusable React components
│   ├── pages/              # Page components
│   ├── data/               # Static data files
│   └── assets/            # Images and static assets
│
├── backend/
│   └── contacts/          # Contact form backend service
│       ├── prisma/       # Database schema and migrations
│       ├── src/         # Backend source code
│       └── exports/     # Generated Excel exports
│
├── public/               # Static files
└── package.json         # Project dependencies
\`\`\`

## 🏗️ Architecture

<div align="center">

```mermaid
graph TD
    A[Frontend React App] -->|HTTP Request| B[Express Backend]
    B -->|Query| C[PostgreSQL Database]
    B -->|Generate| D[Excel Export]
    
    subgraph Frontend
        A -->|Route| E[Pages]
        E -->|Render| F[Components]
        F -->|Use| G[Hooks & Utils]
    end
    
    subgraph Backend
        B -->|Validate| H[Zod Schema]
        B -->|Handle| I[Controllers]
        I -->|Use| J[Prisma Client]
    end
```

</div>

## 🌊 Data Flow

1. **Contact Form Submission**
   - User fills out contact form
   - Client-side validation
   - Form data sent to backend API

2. **Backend Processing**
   - Validate incoming data with Zod
   - Save to PostgreSQL via Prisma
   - Generate Excel export
   - Return success response

3. **Frontend Response**
   - Show success message
   - Reset form
   - Update UI state

## ✨ Features

- 🎨 Modern, responsive design
- 🔐 Form validation
- 📊 Excel export functionality
- 🔄 Real-time form feedback
- 💾 Persistent data storage
- 🌐 Cross-browser compatibility

## 🚀 Getting Started

1. Clone the repository
\`\`\`bash
git clone https://github.com/n3crozma147/Pranexity.git
\`\`\`

2. Install dependencies
\`\`\`bash
# Frontend
npm install

# Backend
cd backend/contacts
npm install
\`\`\`

3. Set up environment variables
\`\`\`bash
# Create .env file in backend/contacts
cp .env.example .env
\`\`\`

4. Start development servers
\`\`\`bash
# Frontend
npm run dev

# Backend
cd backend/contacts
npm run dev
\`\`\`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=2000&pause=1000&color=A277FF&center=true&vCenter=true&repeat=false&width=435&lines=Thank+you+for+visiting!+%F0%9F%8C%9F" align="center" alt="Thank you for visiting!" />

</div>