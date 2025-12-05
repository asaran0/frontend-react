import logo from './logo.svg';
import './App.css';
import './styles/global.css';
import './styles/layout.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
//import Dashboard from "./pages/Dashboard";
import DashboardHome from"./pages/Dashboard/DashboardHome";
import DashboardLayout from"./pages/Dashboard/DashboardLayout";
import DashboardSettings from"./pages/Dashboard/DashboardSettings";
import PrivateRoute from"./pages/components/PrivateRoute";
import Questions from './pages/Questions';
import Category from './pages/Category';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
    <Header />
     <div className="container">
      
      <h1 className="text-4xl font-bold text-blue-600">Tailwind Works 🎉</h1>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Category />} />
    <Route path="/categories/:categoryId" element={<Category />} />
    <Route path="/categories/:categoryId/questions/:questionId" element={< Questions />} />}
    <Route path="/about" element={<About />} />
    <Route path="/user/:id" element={<User />} />
    <Route path="/dashboard" element= {<PrivateRoute> <DashboardLayout /> </PrivateRoute>} >
        <Route index element={<DashboardHome />} />
        <Route path="settings" element={<DashboardSettings />} />
    </Route>
    <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
