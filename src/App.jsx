
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./User/Home/Home";
import UserLayout from "./User/UserLayout";
import About from "./User/AboutUs/About";
import Blog from "./User/Blog/blog";
import SingleBlog from './User/Blog/SingleBlog';
import AdminLayout from './Admin/AdminLayout';
import AdminHome from './Admin/Home/AdminHome';
import EditBlog from './Admin/Blog/EditBlog';
import AddBlog from './Admin/Blog/AddBlog';
import Login from "./Auth/Login";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/blog" element={<Blog />} />

            <Route path="/blog/:id" element={<SingleBlog />} />

          </Route>

          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="home" element={<AdminHome />} />
            <Route path="add" element={<AddBlog/>} />
            <Route path="edit/:id" element={<EditBlog />} />


          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
