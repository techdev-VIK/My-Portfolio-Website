import RevealOnScroll from "../RevealOnScroll";

const Blogs = () => {

    return (
        <section id="blogs" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent text-center">
                    Blogs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Understanding JavaScript Runtime Environments</h3>
                        <p className="text-gray-400 mb-4">JavaScript is a versatile language that can run in different environments, making it a favorite for web development. Let’s explore three key runtime environments: Node.js, Browsers, and Deno, and understand how they affect the way our JavaScript code runs.</p>
                        <div className="flex flex-wrap gap-2">
                            {["JavaScript", "Runtime", "Node.js", "Browsers"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-around space-x-4 items-center mt-8 mb-2">

                        <a href="https://medium.com/@vikartansood/understanding-javascript-runtime-environments-6641bfadf9d7" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Read Blog →
                        </a>

                        </div>

                    </div>



                    <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">“This” keyword in JavaScript</h3>
                        <p className="text-gray-400 mb-4">One of the most confusing and tricky aspects of JavaScript is the `this` keyword , which refers to the current execution context of a function. The value of `this` depends on how the function is called, and can change during the execution of the function. In this , we will explore some common scenarios where `this` behaves differently, and how to use it correctly.</p>
                        <div className="flex flex-wrap gap-2">
                            {["JavaScript", "This keyword", "Scope", "Objects"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-around space-x-4 items-center mt-8 mb-2">

                        <a href="https://medium.com/@vikartansood/this-operator-in-javascript-3e11d48efb76" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Read Blog →
                        </a>

                        </div>

                    </div>


                    <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Understanding the reduce method in JavaScript</h3>
                        <p className="text-gray-400 mb-4">Reduce method in JavaScript is a powerful array method that allows you to accumulate values across an array, ultimately resulting in a single output value. It applies a function to each element of the array (from left to right) while carrying along an accumulator, which holds the accumulated result.</p>
                        <div className="flex flex-wrap gap-2">
                            {["JavaScript", "Methods", "Reduce", "Arrays"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-around space-x-4 items-center mt-8 mb-2">

                        <a href="https://medium.com/@vikartansood/understanding-the-reduce-method-and-logical-or-operator-in-javascript-3d9014929ab2" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Read Blog →
                        </a>

                        </div>

                    </div>


                    <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Closures and lexical scope in JavaScript with examples</h3>
                        <p className="text-gray-400 mb-4">A lexical scope can be simply described as a case when a variable which is declared outside the function is accessible inside the function but if we declare a variable inside the function and try to access it outside the function it won’t work and throw an error. This is known as lexical scope.</p>
                        <div className="flex flex-wrap gap-2">
                            {["JavaScript", "Closures", "Lexical scope", "Functions"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-around space-x-4 items-center mt-8 mb-2">

                        <a href="https://medium.com/@vikartansood/closures-and-lexical-scope-in-javascript-with-examples-b7ef8f7c7584" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Read Blog →
                        </a>

                        </div>

                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}

export default Blogs;