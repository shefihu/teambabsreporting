import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Educaton from "./pages/Educaton";
import SinglePost from "./pages/SinglePost";
import Quiz from "./pages/Quiz";
import QuizQuestion from "./pages/QuizQuestion";
import AdminSignin from "./pages/auth/AdminSignin";
import Dashboard from "./layout/admin/Dashboard";
import DashboardHome from "./pages/admin/DashboardHome";
import DashboardTeam from "./pages/admin/DashboardTeam";
import DashboardCategory from "./pages/admin/DashboardCategory";
import DashboardQuiz from "./pages/admin/DashboardQuiz";
import DashboardSettings from "./pages/admin/DashboardSettings";
// import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
        <Route path="education" element={<Educaton />} />
        <Route path="post" element={<SinglePost />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="quizquestions" element={<QuizQuestion />} />
        {/* admin */}
        <Route path="adminauth" element={<AdminSignin />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="team" element={<DashboardTeam />} />
          <Route path="categories" element={<DashboardCategory />} />
          <Route path="quiz" element={<DashboardQuiz />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
