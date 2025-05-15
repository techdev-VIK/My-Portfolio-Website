const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Radiance  E-commerce App</h3>
                        <p className="text-gray-400 mb-4">An e-commerce web application with product listings for beauty and skincare products. Includes cart, checkout flow, and user login system.</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Bootstrap", "Node.js", "Redux Toolkit", "JWT", "Vite", "Express.js", "MongoDB"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-around space-x-4 items-center mt-8 mb-2">

                        <a href="https://my-radiance-app.vercel.app/" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Live Demo →
                        </a>


                        <a href="https://github.com/techdev-VIK/My-Radiance-App" target="_blank" className="border border-blue-600/90 text-blue-500 py-2 px-4 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            View Code →
                        </a>
                        </div>

                    </div>


                    <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Tracker CRM App</h3>
                        <p className="text-gray-400 mb-4">
                        A lead management CRM system with features to manage leads across lifecycle stages. Supports
                        assigning sales agents, adding comments/updates, login authentication, and state management using Redux
                        Toolkit.</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Bootstrap", "Node.js", "Vite", "Express.js", "MongoDB", "Chart.js"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-around space-x-4 items-center mt-8 mb-2">

                        <a href="https://tracker-crm.vercel.app/" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Live Demo →
                        </a>


                        <a href="https://github.com/techdev-VIK/TrackerCRM" target="_blank" className="border border-blue-600/90 text-blue-500 py-2 px-4 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            View Code →
                        </a>
                        </div>

                    </div>



                    <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Recipe Organiser App</h3>
                        <p className="text-gray-400 mb-4">
                        A full-stack Recipe Organizer app built with React, Bootstrap, Node.js, Express, and MongoDB. It allows users to add new recipes, view detailed lists of ingredients and cooking instructions, and delete recipes as needed. The app offers a clean, responsive UI for easy recipe management and storage.</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Bootstrap", "Node.js", "Vite", "Express.js", "MongoDB"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-around space-x-4 items-center mt-8 mb-2">

                        <a href="https://recipe-organiser-mu.vercel.app/" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Live Demo →
                        </a>


                        <a href="https://github.com/techdev-VIK/Recipe-Organiser" target="_blank" className="border border-blue-600/90 text-blue-500 py-2 px-4 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            View Code →
                        </a>
                        </div>

                    </div>



                    <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Taskwhiz App</h3>
                        <p className="text-gray-400 mb-4">
                        TaskWhiz – Your Simple To-Do App. Stay organized and manage your tasks effortlessly with TaskWhiz. Whether it's work or personal to-dos, TaskWhiz helps you stay on top of everything.</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Bootstrap", "Vite"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-around space-x-4 items-center mt-8 mb-2">

                        <a href="https://taskwhizapp.netlify.app/" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Live Demo →
                        </a>


                        <a href="https://github.com/techdev-VIK/TaskWhiz" target="_blank" className="border border-blue-600/90 text-blue-500 py-2 px-4 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            View Code →
                        </a>
                        </div>

                    </div>



                    <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Meetup App</h3>
                        <p className="text-gray-400 mb-4">
                        A React-based Meetup app showcasing various online and offline events. Users can browse event listings and view detailed information for each meetup.</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Bootstrap", "Vite"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-around space-x-4 items-center mt-8 mb-2">

                        <a href="https://meetup-web-app-xi.vercel.app/" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Live Demo →
                        </a>


                        <a href="https://github.com/techdev-VIK/Meetup-App" target="_blank" className="border border-blue-600/90 text-blue-500 py-2 px-4 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            View Code →
                        </a>
                        </div>

                    </div>



                     <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Halo Clock App</h3>
                        <p className="text-gray-400 mb-4">
                        Halo Clock is a clever clock app which works like a normal watch and a stopwatch at the same time..</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "CSS", "Vite"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-around space-x-4 items-center mt-8 mb-2">

                        <a href="https://halo-clock.vercel.app/" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Live Demo →
                        </a>


                        <a href="https://github.com/techdev-VIK/Halo-Clock" target="_blank" className="border border-blue-600/90 text-blue-500 py-2 px-4 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            View Code →
                        </a>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Projects;