import { motion } from 'framer-motion'
import { RevealOnScroll } from '../RevealOnScroll'

export const About = () => {
    const frontendSkills = [
        'HTML',
        'CSS',
        'Sass',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Redux',
        'TailwindCSS',
    ]

    const backendSkills = ['Node.js', 'Express', 'Prisma', 'MongoDB']
    const databaseAndOrm = ['MongoDB', 'PostgreSQL', 'Prisma']
    const devopsAndTools = ['Git', 'Docker', 'Linux', 'Kubernetes', 'AWS', 'Vercel']

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
            <RevealOnScroll>
                <motion.div
                    className="max-w-5xl mx-auto px-6 md:px-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border border-gray-700/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Passionate developer with expertise in building scalable web applications and creating
                            innovative solutions. I specialize in crafting modern, performant, and user-friendly
                            applications that solve real-world problems.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                className="rounded-xl p-6 bg-gray-800/50 hover:bg-gray-700/50 transition-all backdrop-blur-sm border border-cyan-500/20"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                                    <span className="text-2xl">⚡</span> Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <motion.span
                                            key={key}
                                            className="bg-cyan-600/20 text-cyan-400 py-1.5 px-3 rounded-full text-sm hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="rounded-xl p-6 bg-gray-800/50 hover:bg-gray-700/50 transition-all backdrop-blur-sm border border-orange-500/20"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-xl font-bold mb-4 text-orange-400 flex items-center gap-2">
                                    <span className="text-2xl">⚙️</span> Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <motion.span
                                            key={key}
                                            className="bg-orange-600/20 text-orange-400 py-1.5 px-3 rounded-full text-sm hover:bg-orange-500/30 hover:shadow-[0_0_15px_rgba(255,165,0,0.2)] transition-all"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="rounded-xl p-6 bg-gray-800/50 hover:bg-gray-700/50 transition-all backdrop-blur-sm border border-yellow-500/20"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
                                    <span className="text-2xl">🗄️</span> Database & ORM
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {databaseAndOrm.map((tech, key) => (
                                        <motion.span
                                            key={key}
                                            className="bg-yellow-600/20 text-yellow-400 py-1.5 px-3 rounded-full text-sm hover:bg-yellow-500/30 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] transition-all"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="rounded-xl p-6 bg-gray-800/50 hover:bg-gray-700/50 transition-all backdrop-blur-sm border border-green-500/20"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
                                    <span className="text-2xl">🚀</span> DevOps & Tools
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {devopsAndTools.map((tech, key) => (
                                        <motion.span
                                            key={key}
                                            className="bg-green-600/20 text-green-400 py-1.5 px-3 rounded-full text-sm hover:bg-green-500/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {/* Education */}
                        <motion.div
                            className="p-6 rounded-xl border border-gray-700/50 hover:shadow-2xl transition-all bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-xl font-bold mb-4 text-purple-500 flex items-center gap-2">
                                <span className="text-2xl">🎓</span> Education
                            </h3>
                            <ul className="list-none text-gray-300 space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <div>
                                        <strong className="text-white">B.E. in Computer Science</strong>
                                        <p className="text-sm text-gray-400">
                                            Sathyabama Institute of Science and Technology
                                        </p>
                                        <p className="text-sm text-gray-400">2020-2024</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400">•</span>
                                    <div>
                                        <strong className="text-white">Relevant Coursework</strong>
                                        <p className="text-sm text-gray-400">
                                            Web Development, Cloud Computing, Databases, Operating System
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Work Experience */}
                        <motion.div
                            className="p-6 rounded-xl border border-gray-700/50 hover:shadow-2xl transition-all bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-xl font-bold mb-4 text-pink-500 flex items-center gap-2">
                                <span className="text-2xl">💼</span> Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold text-white">Programming Intern at Venkys io</h4>
                                    <p className="text-sm text-gray-400 mb-2">June - Oct 2024</p>
                                    <ul className="list-none space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-pink-400">•</span>
                                            <span>
                                                Contributed to multiple software development projects with a focus on
                                                high-quality delivery
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-pink-400">•</span>
                                            <span>
                                                Collaborated with senior engineers in designing and developing
                                                applications
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-pink-400">•</span>
                                            <span>
                                                Assisted in code reviews and documentation to enhance code quality
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Freelancing Experience */}
                        <motion.div
                            className="p-6 rounded-xl border border-gray-700/50 hover:shadow-2xl transition-all bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-xl font-bold mb-4 text-blue-500 flex items-center gap-2">
                                <span className="text-2xl">💻</span> Freelancing
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold text-white">Freelance Full-Stack Developer</h4>
                                    <p className="text-sm text-gray-400 mb-2">2023 - Present</p>
                                    <ul className="list-none space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400">•</span>
                                            <span>
                                                Successfully earned over $50K through various freelance projects
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400">•</span>
                                            <span>Developed both static and dynamic web pages for diverse clients</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400">•</span>
                                            <span>
                                                Built responsive interfaces using React, Next.js, and Tailwind CSS
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-400">•</span>
                                            <span>Implemented secure authentication and database solutions</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </RevealOnScroll>
        </section>
    )
}
