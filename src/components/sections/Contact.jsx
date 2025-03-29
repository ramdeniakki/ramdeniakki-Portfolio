import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react'

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const [emailCount, setEmailCount] = useState(0)
    const maxEmails = 5

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            setShowSuccess(true)
            e.target.reset()
            setEmailCount(0)
            setTimeout(() => setShowSuccess(false), 3000)
        } catch (error) {
            console.error('Error sending email:', error)
            setShowError(true)
            setTimeout(() => setShowError(false), 3000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6"
        >
            <div className="max-w-3xl w-full bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700 relative">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400"
                >
                    Let's Connect
                </motion.h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            required
                            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        />
                        <input
                            type="email"
                            name="reply_to"
                            placeholder="Your Email"
                            required
                            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message..."
                            required
                            rows="5"
                            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between text-gray-400 text-sm">
                        <span className="flex items-center gap-2">
                            <Mail className="w-4 h-4" /> Emails sent: {emailCount}/{maxEmails}
                        </span>
                        <motion.button
                            type="submit"
                            disabled={isSubmitting || emailCount >= maxEmails}
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        </motion.button>
                    </div>
                </form>

                <AnimatePresence>
                    {showSuccess && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="fixed bottom-8 right-8 bg-green-500/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg"
                        >
                            <CheckCircle2 className="w-5 h-5" />
                            <span>Message sent successfully!</span>
                        </motion.div>
                    )}
                    {showError && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="fixed bottom-8 right-8 bg-red-500/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg"
                        >
                            <XCircle className="w-5 h-5" />
                            <span>Failed to send message. Try again.</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
