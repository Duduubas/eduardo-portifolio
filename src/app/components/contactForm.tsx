"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useCallback } from "react";
import { AlertTriangle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Digite seu nome completo."),
  email: z.string().trim().email("Digite um e-mail válido."),
  number: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Digite um número válido."),
  message: z.string().trim().min(5, "A mensagem deve ter pelo menos 5 caracteres."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset, 
    setValue 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });  

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  // Optimize phone number formatting with useCallback
  const formatPhoneNumber = useCallback((input: string) => {
    const digits = input.replace(/\D/g, "");

    if (digits.length >= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    if (digits.length >= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
    if (digits.length >= 2) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    
    return digits;
  }, []);

  // Optimize submit handler
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      setStatus(response.ok ? "success" : "error");
      if (response.ok) {
        reset();
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Memoize input configuration to prevent unnecessary re-renders
  const inputConfigs = [
    { 
      label: "Nome *", 
      name: "name", 
      type: "text", 
      placeholder: "Buzz Lightyear" 
    },
    { 
      label: "E-mail *", 
      name: "email", 
      type: "email", 
      placeholder: "example@domain.com" 
    },
    { 
      label: "WhatsApp *", 
      name: "number", 
      type: "tel", 
      placeholder: "(00) 00000-0000", 
      onBlur: (e: React.FocusEvent<HTMLInputElement>) => 
        setValue("number", formatPhoneNumber(e.target.value)) 
    }
  ];

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      noValidate 
      className="w-full max-w-lg bg-cards p-6 rounded-xl shadow-lg "
      autoComplete="off"
    >
      {inputConfigs.map(({ label, name, type, placeholder, onBlur }) => (
        <label key={name} className="block mb-4">
          <span className="text-white">{label}</span>
          <input
            type={type}
            {...register(name as keyof ContactFormData)}
            placeholder={placeholder}
            className="w-full mt-1 p-2 bg-cards text-white border border-gray rounded-xl"
            onBlur={onBlur}
          />
          {errors[name as keyof ContactFormData] && (
            <div className="mt-2 flex items-center gap-2 p-2 text-danger border border-danger rounded-xl text-sm">
              <AlertTriangle size={16} />
              {errors[name as keyof ContactFormData]?.message}
            </div>
          )}
        </label>
      ))}

      <label className="block mb-4">
        <span className="text-white">Mensagem *</span>
        <textarea
          {...register("message")}
          placeholder="Olá! Tudo bem? Gostaria de um orçamento..."
          className="w-full mt-1 p-2 bg-cards text-white border border-gray rounded-xl h-28"
        />
        {errors.message && (
          <div className="mt-2 flex items-center gap-2 p-2 text-danger border border-danger rounded-xl text-sm">
            <AlertTriangle size={16} />
            {errors.message.message}
          </div>
        )}
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 bg-blue text-white font-bold cursor-pointer rounded-xl hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-hover hover:text-black"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>

      {status && (
        <p className={`mt-4 text-center ${status === "success" ? "text-success" : "text-danger"}`}>
          {status === "success" 
            ? "Mensagem enviada com sucesso!" 
            : "Erro ao enviar. Tente novamente."}
        </p>
      )}
    </form>
  );
}