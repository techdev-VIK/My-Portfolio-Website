
const About = () => {

    const frontendSkills = ["React", "JavaScript", "HTML", "CSS", "TailwindCSS", "Bootstrap", "TypeScript", "Redux-tookit"];

    const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "SQL"];

    const otherSkills = ["VS Code" ,"Git", "Github", "ServiceNOW", "Jira"];


    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent text-center">About Me</h2>


                <div className="p-6 rounded-xl border border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto mt-6">Passionate developer with experience in building scalable web applications and creating innvoative solutions.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>


                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Other Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {otherSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl border border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                <h3 className="text-xl font-bold mb-5"> 🏫 Education</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>Bachelor of Technology (Hons.) in Computer Science </strong>
                                        - Lovely Professional University, Punjab (2016 - 2020)
                                      
                                    </li>
                                    <li>
                                        <strong>Relevant Coursework:</strong> Data Structures, Web Development, Data Science
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                <h3 className="text-xl font-bold mb-5"> 💼 Work Experience</h3>

                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold">Implementation Conversion Analyst II at FIS (2024 - Present)</h4>

                                        <p>Developed and maintained lockboxes for financial institutions across USA.</p>
                                       <p>Implemented lockbox solutions for enterprise clients by coordinating with cross-functional teams.</p>
                                       <p>Analyzed customer data and performed custom data mapping using SQL, Excel, and internal tools.</p>
                                    </div>


                                    <div>
                                        <h4 className="font-semibold">Implementation Conversion Analyst I at FIS (2022 - 2024)</h4>

                                       <p>Handled escalations, provided technical support, and created clear documentation for issue tracking.</p>

                                       <p>Collaborated with engineering teams for onboarding, issue resolution, and product enhancement feedback.</p>

                                        <p>Participated in internal innovation competitions and worked on rapid development of ideas.</p>

                                    </div>


                                    <div>
                                        <h4 className="font-semibold">IT Trainee at FIS (2021 - 2022)</h4>

                                        <p>Developed and maintained lockboxes for US financial institutions.</p>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
        </section>
    )
}

export default About;