import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

const Contact = () => {

    const [isLaoding, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            toast.info("Message Sent Successfully!");
            setFormData({name: "", email:"", message: ""});
        })
        .catch(() => toast.error("Oops! Something went wrong. Please try again."))
        .finally(() => {
            setLoading(false)
        })
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>

                <div className="px-4 w-full md:w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name" required
                            value={formData.name}
                            className="w-full bg-white/5 border border-white/25 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/15"
                            placeholder="John Doe"
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>


                        <div className="relative">
                            <input type="email" id="email" name="email" required 
                            value={formData.email}
                            className="w-full bg-white/5 border border-white/25 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/15"
                            placeholder="johndoe@gmail.com"
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>


                        <div className="relative">
                            <textarea 
                            id="message" name="message" 
                            required 
                            value={formData.message}
                            rows={5}
                            className="w-full bg-white/5 border border-white/25 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/15"
                            placeholder="Your Message..."
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                        </div>

                        <button type="submit" 
                        className={`w-full text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50, 130, 246, 0.4)] hover:cursor-pointer ${!isLaoding ? "bg-blue-500" : "bg-blue-400/80"}`}
                        disabled={isLaoding}
                        >
                        {isLaoding ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

            </RevealOnScroll>

        </section>
    )
}

export default Contact;