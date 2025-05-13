"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  User,
  MessageSquare,
  ChevronRight,
  ExternalLink,
  Copy,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [formFocus, setFormFocus] = useState<string | null>(null);

  const welcomeText = "Elige cómo quieres conectarte conmigo ✨";
  const emailAddress = "yameli082003@gmail.com";

  useEffect(() => {
    if (currentCharIndex < welcomeText.length) {
      const timeout = setTimeout(() => {
        setTypedText(welcomeText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, welcomeText]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Formulario Enviado", formState);
    alert(
      "Correo enviado, gracias por contactarte, responderé lo antes posible✨"
    );
    setFormState({ name: "", email: "", message: "" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header with game-style dialog */}
      <div className="flex items-center justify-center">
        <div className="text-center">
          {/* Título con animación de escritura */}
          <h1 className="text-purple-100 font-semibold text-4xl inline-block">
            {typedText}
          </h1>

          {/* Cursor (barrita) al final del título */}
          {currentCharIndex < welcomeText.length && (
            <span className="inline-block w-3 h-6 bg-purple-300 ml-1 animate-blink"></span>
          )}
        </div>
      </div>

      {/* Main contact container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left sidebar with contact info */}
        <div className="lg:col-span-1">
          <div className="bg-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden h-full">
            <div className="bg-purple-700/30 p-4 border-b border-purple-500/30">
              <h3 className="font-bold text-purple-100 flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-400" /> Información de
                contacto
              </h3>
            </div>

            <div className="p-5 space-y-13">
              {/* Email section */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-1">
                  <ChevronRight className="w-4 h-4 text-purple-400" /> Correo electrónico
                </h4>
                <div className="bg-purple-900/30 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-100">{emailAddress}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-purple-700/50"
                    onClick={copyEmail}
                  >
                    {copied ? (
                      <Badge className="bg-green-600 text-white border-none px-2 py-0.5 text-xs">
                        Copied!
                      </Badge>
                    ) : (
                      <Copy className="h-4 w-4 text-purple-400" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-1">
                  <ChevronRight className="w-4 h-4 text-purple-400" /> Redes
                  Sociales
                </h4>
                <div className="space-y-3">
                  <motion.a
                    href="https://www.linkedin.com/in/nikolle-acu%C3%B1a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0077B5]/20 hover:bg-[#0077B5]/30 rounded-lg p-3 flex items-center justify-between border border-purple-500/30 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0077B5]/30 flex items-center justify-center">
                        <Linkedin className="w-4 h-4 text-[#0077B5]" />
                      </div>
                      <span className="text-purple-100">LinkedIn</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-purple-400" />
                  </motion.a>

                  <motion.a
                    href="https://github.com/NIKOLLE8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/20 hover:bg-gray-800/30 rounded-lg p-3 flex items-center justify-between border border-purple-500/30 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-800/30 flex items-center justify-center">
                        <Github className="w-4 h-4 text-gray-200" />
                      </div>
                      <span className="text-purple-100">GitHub</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-purple-400" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with message form */}
        <div className="lg:col-span-2">
          <div className="bg-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden h-full">
            <div className="bg-purple-700/30 p-4 border-b border-purple-500/30">
              <h3 className="font-bold text-purple-100 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" /> Enviar correo
              </h3>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-purple-200 flex items-center gap-1"
                    >
                      <User className="w-4 h-4 text-purple-400" /> Nombre
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFormFocus("name")}
                        onBlur={() => setFormFocus(null)}
                        placeholder="Ingresa tu nombre"
                        required
                        className={`bg-purple-900/50 border-purple-500/30 text-purple-100 placeholder:text-purple-100/50 focus:border-purple-400 focus:ring-purple-400/30 transition-all duration-300 ${
                          formFocus === "name"
                            ? "shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                            : ""
                        }`}
                      />
                      <AnimatePresence>
                        {formFocus === "name" && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-purple-200 flex items-center gap-1"
                    >
                      <Mail className="w-4 h-4 text-purple-400" /> Correo electrónico
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFormFocus("email")}
                        onBlur={() => setFormFocus(null)}
                        placeholder="Ingresa tu correo electrónico"
                        required
                        className={`bg-purple-900/50 border-purple-500/30 text-purple-100 placeholder:text-purple-100/50 focus:border-purple-400 focus:ring-purple-400/30 transition-all duration-300 ${
                          formFocus === "email"
                            ? "shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                            : ""
                        }`}
                      />
                      <AnimatePresence>
                        {formFocus === "email" && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-purple-200 flex items-center gap-1"
                  >
                    <MessageSquare className="w-4 h-4 text-purple-400" /> Mensaje
                  </label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={(e) => {
                        handleChange(e);
                        setIsTyping(true);
                        clearTimeout(window.setTimeout(() => {}, 0));
                        setTimeout(() => setIsTyping(false), 1000);
                      }}
                      onFocus={() => setFormFocus("message")}
                      onBlur={() => setFormFocus(null)}
                      placeholder="Describe tu mensaje aquí..."
                      required
                      className={`bg-purple-900/50 border-purple-500/30 text-purple-100 placeholder:text-purple-100/50 min-h-[120px] focus:border-purple-400 focus:ring-purple-400/30 transition-all duration-300 ${
                        formFocus === "message"
                          ? "shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                          : ""
                      }`}
                    />
                    {isTyping && (
                      <div className="absolute right-3 bottom-3 text-xs text-purple-300 flex items-center gap-1">
                        <span>Typing</span>
                        <span className="flex space-x-1">
                          <motion.span
                            className="inline-block w-1 h-1 bg-purple-300 rounded-full"
                            animate={{ y: [0, -3, 0] }}
                            transition={{
                              duration: 0.5,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: 0,
                            }}
                          />
                          <motion.span
                            className="inline-block w-1 h-1 bg-purple-300 rounded-full"
                            animate={{ y: [0, -3, 0] }}
                            transition={{
                              duration: 0.5,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: 0.1,
                            }}
                          />
                          <motion.span
                            className="inline-block w-1 h-1 bg-purple-300 rounded-full"
                            animate={{ y: [0, -3, 0] }}
                            transition={{
                              duration: 0.5,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: 0.2,
                            }}
                          />
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white group relative overflow-hidden h-12"
                >
                  <span className="flex items-center justify-center gap-2 group-hover:translate-x-1 transition-transform">
                    <Send className="w-4 h-4" /> Enviar
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
