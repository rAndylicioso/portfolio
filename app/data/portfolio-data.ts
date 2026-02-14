// Example reusable component structure for future enhancements

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

// Example data structure - move your data here for cleaner code
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "A brief description of the project",
    technologies: ["React", "Next.js", "TypeScript"],
    link: "https://project-demo.com",
    github: "https://github.com/username/project",
  },
  // Add more projects
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Developer",
    company: "Company Name",
    period: "2023 - Present",
    description: "Role description and achievements",
    current: true,
  },
  // Add more experiences
];

export const skills: Skill[] = [
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Git", category: "tools" },
  // Add your skills
];
