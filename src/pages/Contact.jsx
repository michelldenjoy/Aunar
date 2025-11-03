import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Building2, X, ArrowLeft } from "lucide-react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef();
  const recaptchaRef = useRef();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // obtiene token de reCAPTCHA v2
    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert("Por favor verifica que no eres un robot.");
      return;
    }

    // valida token en backend
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/verify-recaptcha`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        console.error("reCAPTCHA verification failed:", data);
        alert("Verificación de reCAPTCHA falló. Por favor inténtalo de nuevo.");
        recaptchaRef.current.reset();
        return;
      }
    } catch (error) {
      console.error("Error verificando reCAPTCHA:", error);
      alert("Error al verificar reCAPTCHA. Intenta más tarde.");
      return;
    }

    // si la verificación es OK, enviamos con EmailJS
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      recaptchaRef.current.reset();

      setTimeout(() => {
        setSent(false);
        setShowForm(false);
        setFormData({ name: "", email: "", message: "" });
      }, 2000);
    } catch (error) {
      console.error("❌ Error al enviar el correo:", error);
      alert("Hubo un problema al enviar el mensaje. Inténtalo más tarde.");
      recaptchaRef.current.reset();
    }
  };

  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="bg-texture text-slate-800 py-24 relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 bg-sand-200 hover:bg-white/20 text-caribbean-800 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm transition"
      >
        <ArrowLeft size={18} />
        <span>Inicio</span>
      </button>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">Contáctanos</motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2, duration: 0.8 }}
          className="text-neutral-800 max-w-2xl mx-auto mb-12">Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo para resolver tus dudas o coordinar una visita.</motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4, duration: 0.8 }} className="grid sm:grid-cols-3 gap-8 mt-10">
          <div className="bg-slate-50 p-6 rounded-3xl shadow-sm hover:shadow-md transition">
            <Building2 className="mx-auto text-teal-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold mb-2">AUNAR</h3>
            <p className="text-slate-600">Complejo Residencial y Comercial</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl shadow-sm hover:shadow-md transition">
            <Phone className="mx-auto text-teal-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
            <p className="text-slate-600">+34 600 123 456</p>
          </div>

          <div onClick={() => setShowForm(true)} className="cursor-pointer bg-slate-50 p-6 rounded-3xl shadow-sm hover:shadow-md hover:bg-teal-50 transition">
            <Mail className="mx-auto text-teal-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold mb-2">Correo</h3>
            <p className="text-teal-700 underline">contacto@aunar.com</p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
              <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition">
                <X size={20} />
              </button>

              {!sent ? (
                <>
                  <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Envíanos tu consulta</h2>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required
                      className="w-full border border-slate-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none" />

                    <input type="email" name="email" placeholder="Tu correo electrónico" value={formData.email} onChange={handleChange} required
                      className="w-full border border-slate-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none" />

                    <textarea name="message" rows="4" placeholder="Escribe tu mensaje..." value={formData.message} onChange={handleChange} required
                      className="w-full border border-slate-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none resize-none" />

                    {/* reCAPTCHA */}
                    <div className="pt-2">
                      <ReCAPTCHA ref={recaptchaRef} sitekey={import.meta.env.VITE_RECAPTCHA_V2_KEY} />
                    </div>

                    <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full py-3 transition">Enviar mensaje</button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-semibold text-teal-700 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-slate-600">Gracias por contactarnos. Te responderemos pronto.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
