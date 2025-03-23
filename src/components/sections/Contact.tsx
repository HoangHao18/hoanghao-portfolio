import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com"
import { cotactDesc, myEmail, myGithub, myLinkedin } from "../../constants/constants"
import emailIcon from "../../assets/emailIcon.png"
import linkedinIcon from "../../assets/linkedinIcon.png"
import githubIcon from "../../assets/githubIcon.png"

export const Contact = ()=>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget;
        
        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,form,PUBLIC_KEY).then(()=>{
            alert("Message Sent!")
            setFormData({name: "",email: "", message: ""})
        }).catch(()=> alert("Oops! Something went wrong. Please try again."))
    }


    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 max-w-5xl mx-auto">
                    
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                            <p className="text-gray-400 mb-4 max-w-md">
                                {cotactDesc}
                            </p>
                            <div className="flex flex-row gap-2">
            

                            </div>
                            <ul className="flex flex-col gap-2">
                                <li className="flex gap-2 items-center">
                                    <img src={emailIcon} alt="email" className="w-6"/>
                                    <a href={`mailto:${myEmail}`} target="_blank" rel="noopener noreferrer">{myEmail}</a>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <img src={linkedinIcon} alt="linkedin" className="w-6"/>
                                    <a href={myLinkedin} target="_blank" rel="noopener noreferrer">linkedin.com/hoanghao99</a>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <img src={githubIcon} alt="github" className="w-6"/>
                                    <a href={myGithub} target="_blank" rel="noopener noreferrer">github.com/HoangHao18</a>
                                </li>
                            </ul>

                        </div>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input 
                                    type="text" id="name" name="name" required
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="Name..." 
                                    value={formData.name} 
                                    onChange={(e)=>setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="relative">
                                <input 
                                    type="email" id="email" name="email" required
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="example@gmail.com" 
                                    value={formData.email}  
                                    onChange={(e)=>setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <div className="relative">
                                <textarea 
                                    id="message" name="message" required rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="Your Message..."  
                                    value={formData.message} 
                                    onChange={(e)=>setFormData({...formData, message: e.target.value})}
                                />
                            </div>
                            <button type="submit" 
                                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium translation relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                            >Send Message</button>
                        </form>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
        
    )
}