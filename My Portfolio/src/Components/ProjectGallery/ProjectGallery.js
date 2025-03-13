import React from "react";
import { Card, CardContent } from "../UI/card";
import img1 from "../ProjectGallery/image/img-1.png"
import img2 from "../ProjectGallery/image/img-2.png"

const projects = [
  {
    id: 1,
    title: "E-Commerce App",
    description: "A full-stack e-commerce application with cart and payment integration.",
    image: img1,
  },
  {
    id: 2,
    title: "Social Media Platform",
    description: "A social media app with posts, likes, comments, and friend requests.",
    image: img2,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    image: "https://source.unsplash.com/400x300/?portfolio",
  },
  {
    id: 4,
    title: "Blog Application",
    description: "A blog app where users can create, edit, and share articles.",
    image: "https://source.unsplash.com/400x300/?blogging",
  },
];

const ProjectGallery = () => {
  return (
    <div className="container mx-auto p-6" id='Projects'>
      <h2 className="text-3xl font-bold text-center mb-6">Project Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="shadow-lg rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
