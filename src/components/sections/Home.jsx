import { motion } from 'framer-motion'
import { RevealOnScroll } from '../../components/RevealOnScroll'
import { Github, Linkedin, Mail, ArrowRight, Code2, Cpu, Database, Server, FileText } from 'lucide-react'

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden"
        >
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#7c3aed,#ec4899)] opacity-10"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: 2,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: 4,
                    }}
                    className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300 border border-white/10">
                            Welcome to my portfolio
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Hi, I'm{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                Ramdeni Akshith
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
                    >
                        A passionate Full Stack Developer crafting beautiful and functional web experiences
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                    >
                        {[
                            { icon: <Code2 className="w-6 h-6 text-indigo-400" />, label: 'Frontend', href: '#about' },
                            { icon: <Cpu className="w-6 h-6 text-purple-400" />, label: 'Backend', href: '#about' },
                            { icon: <Database className="w-6 h-6 text-pink-400" />, label: 'Database', href: '#about' },
                            { icon: <Server className="w-6 h-6 text-rose-400" />, label: 'DevOps', href: '#about' },
                        ].map((tech, index) => (
                            <motion.a
                                key={tech.label}
                                href={tech.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {tech.icon}
                                </div>
                                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                                    {tech.label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {[
                            {
                                icon: <Github className="w-5 h-5" />,
                                label: 'GitHub',
                                href: 'https://github.com/ramdeniakki',
                            },
                            {
                                icon: <Linkedin className="w-5 h-5" />,
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/in/ramdeni-akshith-b96b01203',
                            },
                            {
                                icon: <Mail className="w-5 h-5" />,
                                label: 'Contact',
                                href: 'mailto:ramdeniakshith@gmail.com',
                            },
                        ].map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target={social.label !== 'Contact' ? '_blank' : undefined}
                                rel={social.label !== 'Contact' ? 'noopener noreferrer' : undefined}
                                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                            >
                                {social.icon}
                                <span>{social.label}</span>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="flex justify-center gap-4"
                    >
                        <motion.a
                            href="#about"
                            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Explore My Work</span>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href="https://drive.google.com/file/d/1twh3e81dcIMA-TJoMQO5U-vvSO8jX6gl/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white font-medium transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FileText className="w-5 h-5" />
                            <span>View Resume</span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                        className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
                    />
                </div>
            </motion.div>
        </section>
    )
}
