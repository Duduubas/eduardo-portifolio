"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo."),
  email: z.string().email("Digite um e-mail válido."),
  number: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Digite um número válido."),
  message: z.string().min(5, "A mensagem deve ter pelo menos 5 caracteres."),
});

// Tipo inferido do schema
type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });  

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const formatPhoneNumber = (value: string) => {
    value = value.replace(/\D/g, "");

    if (value.length >= 11) {
      return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    } else if (value.length >= 10) {
      return `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6, 10)}`;
    } else if (value.length >= 2) {
      return `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
      return value;
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-black">
      <h2 className="text-[1.5rem] md:text-3xl font-semibold font-heading text-white mb-6">
        Entre em contato
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-lg bg-cards p-6 rounded-xl shadow-lg">
        <label className="block mb-4">
          <span className="text-white">Nome</span>
          <input
            type="text"
            {...register("name")}
            placeholder="Eduardo Brito"
            className="w-full mt-1 p-2 bg-cards text-white border border-gray rounded-xl"
          />
          {errors.name && (
            <div className="mt-2 flex items-center gap-2 p-2 text-danger border border-danger rounded-xl text-sm">
              <AlertTriangle size={16} />
              {errors.name.message}
            </div>
          )}
        </label>

        <label className="block mb-4">
          <span className="text-white">E-mail</span>
          <input
            type="email"
            {...register("email")}
            placeholder="example@email.com"
            className="w-full mt-1 p-2 bg-cards text-white border border-gray rounded-xl"
          />
          {errors.email && (
            <div className="mt-2 flex items-center gap-2 p-2 text-danger border border-danger rounded-xl text-sm">
              <AlertTriangle size={16} />
              {errors.email.message}
            </div>
          )}
        </label>

        <label className="block mb-4">
          <span className="text-white">WhatsApp</span>
          <input
            type="text"
            {...register("number")}
            placeholder="(88) 99645-5127"
            className="w-full mt-1 p-2 bg-cards text-white border border-gray rounded-xl"
            onBlur={(e) => setValue("number", formatPhoneNumber(e.target.value))}
          />
          {errors.number && (
            <div className="mt-2 flex items-center gap-2 p-2 text-danger border border-danger rounded-xl text-sm">
              <AlertTriangle size={16} />
              {errors.number.message}
            </div>
          )}
        </label>

        <label className="block mb-4">
          <span className="text-white">Mensagem</span>
          <textarea
            {...register("message")}
            placeholder="Olá! Tudo bem? Gostaria de um orçamento..."
            className="w-full mt-1 p-2 bg-cards text-white border border-gray rounded-xl h-28"
          ></textarea>
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
          className="w-full py-2 bg-blue text-black font-bold rounded-xl hover:opacity-90 transition"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>

        {status === "success" && (
          <p className="text-success mt-4 text-center">Mensagem enviada com sucesso!</p>
        )}
        {status === "error" && (
          <p className="text-danger mt-4 text-center">Erro ao enviar. Tente novamente.</p>
        )}
      </form>
    </div>
  );
}