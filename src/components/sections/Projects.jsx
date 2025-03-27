import { motion } from 'framer-motion'
import { RevealOnScroll } from '../RevealOnScroll'

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-6 md:px-10">
                    <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Project 1 - OMSSC */}
                        <motion.div
                            className="p-6 rounded-xl border border-gray-700/50 hover:shadow-2xl transition-all bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm relative group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute inset-0 rounded-xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>
                            <div className="relative">
                                <h3 className="text-xl font-bold mb-2 text-orange-400 flex items-center gap-2">
                                    <span className="text-2xl">🛍️</span> OMSSC
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    A full-stack e-commerce platform featuring dynamic product catalog, real-time cart
                                    management, and secure checkout. Features include an admin dashboard for
                                    product/order management, analytics, and 45% faster page loads through SSR/SSG
                                    implementation.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['Next.js', 'TypeScript', 'Tailwind', 'Prisma ORM', 'NextAuth'].map(
                                        (tech, key) => (
                                            <motion.span
                                                key={key}
                                                className="bg-orange-600/20 text-orange-400 py-1.5 px-3 rounded-full text-sm hover:bg-orange-500/30 hover:shadow-[0_0_15px_rgba(255,165,0,0.2)] transition-all"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        )
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <motion.a
                                        href="https://github.com/ramdeniakki/omssc"
                                        className="text-orange-400 hover:text-orange-300 transition-colors my-4 flex items-center gap-2 group"
                                        whileHover={{ scale: 1.05, color: '#ffa500' }}
                                    >
                                        View Project
                                        <span className="transform group-hover:translate-x-1 transition-transform">
                                            →
                                        </span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project 2 - TuneCraft */}
                        <motion.div
                            className="p-6 rounded-xl border border-gray-700/50 hover:shadow-2xl transition-all bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm relative group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute inset-0 rounded-xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>
                            <div className="relative">
                                <h3 className="text-xl font-bold mb-2 text-cyan-400 flex items-center gap-2">
                                    <span className="text-2xl">🎵</span> TuneCraft
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    TuneCraft is a SaaS-based platform for managing collaborative music queues, allowing
                                    users to create, organize, and curate song playlists together. It features seamless
                                    Google OAuth authentication for secure user login and access management.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['NextJs', 'TypeScript', 'OAuth', 'Prisma'].map((tech, key) => (
                                        <motion.span
                                            key={key}
                                            className="bg-cyan-600/20 text-cyan-400 py-1.5 px-3 rounded-full text-sm hover:bg-cyan-500/30 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <motion.a
                                        href="https://github.com/ramdeniakki/TuneCraft"
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors my-4 flex items-center gap-2 group"
                                        whileHover={{ scale: 1.05, color: '#00e5ff' }}
                                    >
                                        View Project
                                        <span className="transform group-hover:translate-x-1 transition-transform">
                                            →
                                        </span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project 3 - Chat Application */}
                        <motion.div
                            className="p-6 rounded-xl border border-gray-700/50 hover:shadow-2xl transition-all bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm relative group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute inset-0 rounded-xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/50 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>
                            <div className="relative">
                                <h3 className="text-xl font-bold mb-2 text-pink-400 flex items-center gap-2">
                                    <span className="text-2xl">💬</span> Chat Application
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Developed a real-time chat application using React, Firebase, and Tailwind CSS,
                                    providing users with seamless, interactive messaging in dedicated chat rooms.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['React', 'TypeScript', 'Firebase', 'Tailwind'].map((tech, key) => (
                                        <motion.span
                                            key={key}
                                            className="bg-pink-600/20 text-pink-400 py-1.5 px-3 rounded-full text-sm hover:bg-pink-500/30 hover:shadow-[0_0_15px_rgba(255,105,180,0.2)] transition-all"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <motion.a
                                        href="https://github.com/ramdeniakki/chat_app"
                                        className="text-pink-400 hover:text-pink-300 transition-colors my-4 flex items-center gap-2 group"
                                        whileHover={{ scale: 1.05, color: '#ff69b4' }}
                                    >
                                        View Project
                                        <span className="transform group-hover:translate-x-1 transition-transform">
                                            →
                                        </span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project 4 - Draw App */}
                        <motion.div
                            className="p-6 rounded-xl border border-gray-700/50 hover:shadow-2xl transition-all bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm relative group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute inset-0 rounded-xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>
                            <div className="relative">
                                <h3 className="text-xl font-bold mb-2 text-indigo-400 flex items-center gap-2">
                                    <span className="text-2xl">🎨</span> Draw App
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    Developed a real-time drawing application that allows users to join a shared canvas,
                                    collaborate, and communicate visually. Built using TurboRepo for a monorepo
                                    structure.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['Next.js', 'TypeScript', 'TailwindCss', 'Websockets', 'Express', 'Prisma'].map(
                                        (tech, key) => (
                                            <motion.span
                                                key={key}
                                                className="bg-indigo-600/20 text-indigo-400 py-1.5 px-3 rounded-full text-sm hover:bg-indigo-500/30 hover:shadow-[0_0_15px_rgba(75,0,130,0.2)] transition-all"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        )
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <motion.a
                                        href="https://github.com/ramdeniakki/draw-app"
                                        className="text-indigo-400 hover:text-indigo-300 transition-colors my-4 flex items-center gap-2 group"
                                        whileHover={{ scale: 1.05, color: '#4b0082' }}
                                    >
                                        View Project
                                        <span className="transform group-hover:translate-x-1 transition-transform">
                                            →
                                        </span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Upcoming Projects */}
                        <motion.div
                            className="p-6 rounded-xl border border-gray-700/50 hover:shadow-2xl transition-all bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm relative group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute inset-0 rounded-xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>
                            <div className="relative">
                                <h3 className="text-xl font-bold mb-2 text-green-400 flex items-center gap-2">
                                    <span className="text-2xl">🏗️</span> Building Inventory
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    A comprehensive inventory management system for construction projects. Track
                                    materials, equipment, and resources in real-time with advanced analytics and
                                    reporting features.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['React', 'Node.js', 'MongoDB', 'Express'].map((tech, key) => (
                                        <motion.span
                                            key={key}
                                            className="bg-green-600/20 text-green-400 py-1.5 px-3 rounded-full text-sm hover:bg-green-500/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-green-400/70 italic flex items-center gap-2">
                                        Coming Soon
                                        <span className="animate-pulse">✨</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
