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
      </Routes>
    </div>
  );
}

export default App;
