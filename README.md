# 📝 Note Making App

A modern, responsive note-taking application built with React.js frontend and Node.js backend, featuring OTP-based authentication and real-time note management.

## ✨ Features

- **🔐 Secure Authentication**: OTP-based login/signup system
- **📱 Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **👤 User Management**: Store user information (name, email, DOB)
- **📝 Note Management**: Create, view, and delete notes
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations
- **⚡ Real-time Updates**: Instant note creation and deletion
- **🔒 JWT Authentication**: Secure token-based sessions

## 🛠️ Tech Stack

### Frontend

- **React.js** - User interface framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Nodemailer** - Email service for OTP delivery

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Note-Making
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

**Configure your `.env` file:**

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/note-making-app
JWT_SECRET=your-super-secret-jwt-key
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-password
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd ../Frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

**Configure your `.env` file:**

```env
VITE_API_URL=http://localhost:5000
```

### 4. Database Setup

Make sure MongoDB is running on your system or use MongoDB Atlas for cloud hosting.

## 🏃‍♂️ Running the Application

### Start Backend Server

```bash
cd backend
npm start
```

The backend will run on `http://localhost:5000`

### Start Frontend Development Server

```bash
cd Frontend
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
Note-Making/
├── backend/
│   ├── config/
│   │   ├── email.js
│   │   └── mongodb.js
│   ├── controllers/
│   │   └── otpController.js
│   ├── models/
│   │   ├── otpModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   └── otpRouter.js
│   ├── server.js
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Header.jsx
│   │   ├── context/
│   │   │   └── OtpContext.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   └── Login.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication

- `POST /api/user/send-otp` - Send OTP to email
- `POST /api/user/verify-otp` - Verify OTP and authenticate user

### Request/Response Examples

**Send OTP:**

```json
POST /api/user/send-otp
{
  "email": "user@example.com",
  "name": "John Doe",
  "dob": "1990-01-01"
}
```

**Verify OTP:**

```json
POST /api/user/verify-otp
{
  "email": "user@example.com",
  "otp": "123456",
  "name": "John Doe",
  "dob": "1990-01-01"
}
```

## 🎯 Features in Detail

### Authentication System

- **OTP Generation**: 6-digit random OTP sent via email
- **User Registration**: Stores name, email, and date of birth
- **User Login**: Existing users can sign in with OTP
- **JWT Tokens**: Secure session management
- **Auto-logout**: Token expiration handling

### Dashboard Features

- **User Profile**: Displays name, email, and DOB
- **Note Creation**: Add new notes with real-time updates
- **Note Management**: View and delete notes
- **Responsive Design**: Optimized for all screen sizes
- **Quick Stats**: Note count and account status

### UI/UX Features

- **Modern Design**: Clean, professional interface
- **Smooth Animations**: Hover effects and transitions
- **Mobile-First**: Responsive design for all devices
- **Accessibility**: Proper focus states and keyboard navigation
- **Loading States**: Visual feedback during operations

## 🔒 Security Features

- **Environment Variables**: Sensitive data stored in `.env` files
- **JWT Authentication**: Secure token-based sessions
- **OTP Expiration**: OTPs expire after 5 minutes
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Cross-origin request handling

## 🧪 Testing

### Backend Testing

```bash
cd backend
npm test
```

### Frontend Testing

```bash
cd Frontend
npm test
```

## 📦 Build for Production

### Backend

```bash
cd backend
npm run build
```

### Frontend

```bash
cd Frontend
npm run build
```

## 🚀 Deployment

### Backend Deployment (Heroku)

```bash
# Add Heroku remote
heroku git:remote -a your-app-name

# Deploy
git push heroku main
```

### Frontend Deployment (Vercel/Netlify)

```bash
# Build the project
npm run build

# Deploy to your preferred platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB team for the database solution
- Express.js team for the backend framework

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository or contact the author.

---

**Made with ❤️ using React.js and Node.js**
