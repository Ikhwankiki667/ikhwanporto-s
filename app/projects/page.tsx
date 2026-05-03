import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata = {
  title: "Projects - Muhammad Ikhwan Fitoriqillah",
  description: "Explore my data science and machine learning projects",
};

export default function ProjectsPage() {
  return (
    <section className="py-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-accent">Projects</span>
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Berikut adalah beberapa proyek data science dan machine learning yang pernah aku kerjakan
        </p>
        <ProjectsGrid />
      </div>
    </section>
  );
}
