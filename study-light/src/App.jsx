import logo from './logo.svg';
import './App.css';
import './styles/global.css';
import './styles/layout.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './components/views/Home';
import About from './components/views/About';
import User from './components/views/User';
import DashboardHome from "./components/dashboard/DashboardHome";
import DashboardLayout from"./components/dashboard/DashboardLayout";
import DashboardSettings from"./components/dashboard/DashboardSettings";
import PrivateRoute from "./route/PrivateRoute";
import Questions from './components/views/Questions';
import Category from './components/views/Category';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
    <Header />
     <div className="container">
    <h1>
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
