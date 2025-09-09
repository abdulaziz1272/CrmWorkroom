import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProjects from './AddProjects';
import ProjectsMainPage from './ProjectsMainPage';

function ProjectsMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddProjects/>}/>
        <Route path='main-page' element={<ProjectsMainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default ProjectsMain;