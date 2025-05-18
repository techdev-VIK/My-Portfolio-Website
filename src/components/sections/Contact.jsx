import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

const Contact = () => {

    const [isLoading, setLoading] = useState(false);

     const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validate = () => {
        const newErrors = {};

        if(formData.name.trim() === ""){
            newErrors.name = "Name is required"
        }
        if(formData.email.trim() === ""){
            newErrors.email = "Email is required"
        }else if(!emailRegex.test(formData.email)){
            newErrors.email = "Invalid email"
        }

        if(formData.message.trim() === ""){
            newErrors.message = "Message is required"
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        

        const validateErrors = validate();


        if(Object.keys(validateErrors).length > 0){
            setErrors(validateErrors);
        }else{
            setLoading(true);
            emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            toast.info("Message Sent Successfully!");
            setFormData({name: "", email:"", message: ""});
            setErrors({});
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            toast.error("Oops! Something went wrong, please try again!")})
        .finally(() => {
            setLoading(false)
        })
        }
        
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>

                <div className="px-4 w-full md:w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name"
                            value={formData.name}
                            className="w-full bg-white/5 border border-white/25 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/15"
                            placeholder="John Doe"
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                            {errors.name && (<div className="text-red-600 mt-1">{errors.name}</div>)}
                        </div>


                        <div className="relative">
                            <input type="text" id="email" name="email"  
                            value={formData.email}
                            className="w-full bg-white/5 border border-white/25 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/15"
                            placeholder="johndoe@gmail.com"
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                            {errors.email && (<div className="text-red-600 mt-1">{errors.email}</div>)}
                        </div>


                        <div className="relative">
                            <textarea 
                            id="message" name="message" 
                            value={formData.message}
                            rows={5}
                            className="w-full bg-white/5 border border-white/25 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/15"
                            placeholder="Your Message..."
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                            {errors.message && (<div className="text-red-600 mt-1">{errors.message}</div>)}
                        </div>

                        <button type="submit" 
                        className={`w-full text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(50, 130, 246, 0.4)] hover:cursor-pointer ${!isLoading ? "bg-blue-500" : "bg-blue-400/80"}`}
                        disabled={isLoading}
                        >
                        {isLoading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

            </RevealOnScroll>

        </section>
    )
}

export default Contact;