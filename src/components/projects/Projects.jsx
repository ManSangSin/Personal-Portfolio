const Projects = () => {
  const projectData = [
    {
      name: "Rhythm Code",
      type: "Group Project",
      date: {
        month: "Oct",
        year: 2023,
      },
      link: "https://starter-kit-al84.onrender.com/",
    },
    {
      name: "Radio Project",
      type: "Group Project",
      date: {
        month: "Jan",
        year: 2024,
      },
      link: "https://stay-tuned-radio-frontend.onrender.com/",
    },
    {
      name: "Project Name",
      type: "Individual",
      date: {
        month: "Apr",
        year: 2024,
      },
      link: "http://www.google.com",
    },
  ];

  const projectCards = projectData.map((project) => {
    return (
      <div>
        <a target="_blank" rel="noopener" href={project.link}>
          {project.date.month}.{project.date.year} / {project.type} /{" "}
          {project.name}
        </a>
      </div>
    );
  });
  return (
    <>
      <div>Projects (Design & Develop)</div>
      {projectCards}
    </>
  );
};

export default Projects;
