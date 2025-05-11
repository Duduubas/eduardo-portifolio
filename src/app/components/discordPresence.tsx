"use client";

import { useState, useEffect } from "react";

// Tipos possíveis de status da minha conta do Discord
type DiscordStatus = "online" | "idle" | "dnd" | "offline";

// Texto visível no site baseado no status do Discord
function getStatusText(status: DiscordStatus): string {
    switch (status) {
        case "online":
            return "online";
        case "idle":
            return "dormindo";
        case "dnd":
            return "online"; // DND será tratado como online (para não ficar estranho para o usuário)
        case "offline":
            return "offline";
        default:
            return "offline";
    }
}

// Cor da bolinha com base no texto exibido
function getStatusColor(text: string): string {
    switch (text) {
        case "online":
            return "bg-green-500";
        case "dormindo":
            return "bg-yellow-500";
        case "offline":
            return "bg-gray-500";
        default:
            return "bg-gray-500";
    }
}

export default function DiscordStatus({ className }: { className?: string }) {
    const [status, setStatus] = useState<DiscordStatus>("offline");
    const [isLoading, setIsLoading] = useState(true);
    const userId = "522531030834610211";

    useEffect(() => {
        // Função para buscar status atual
        const fetchStatus = async () => {
            try {
                const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
                if (!response.ok) throw new Error("Failed to fetch status");

                const data = await response.json();
                if (data.success) {
                    setStatus(data.data.discord_status);
                } else {
                    console.error("Erro ao buscar status:", data.error);
                }
            } catch (error) {
                console.error("Erro na requisição:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStatus();

        // Conexão com WebSocket da Lanyard
        const ws = new WebSocket("wss://api.lanyard.rest/socket");

        ws.onopen = () => {
            ws.send(JSON.stringify({ op: 2, d: { subscribe_to_id: userId } }));
        };

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);

            // Responder ao heartbeat
            if (message.op === 1) {
                ws.send(JSON.stringify({ op: 3 }));
            }

            // Atualização de presença
            if (message.op === 0 && message.t === "PRESENCE_UPDATE" && message.d.user_id === userId) {
                setStatus(message.d.discord_status);
            }
        };

        // Heartbeat manual a cada 30s
        const heartbeatInterval = setInterval(() => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({ op: 3 }));
            }
        }, 30000);

        // Cleanup
        return () => {
            clearInterval(heartbeatInterval);
            if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
                ws.close();
            }
        };
    }, [userId]);

    const statusText = getStatusText(status);
    const statusColor = getStatusColor(statusText);

    // Renderiza enquanto carrega
    if (isLoading) {
        return (
            <div className={`font-sans inline-flex place-items-center gap-3 rounded-full bg-neutral-200 px-4 py-2 dark:bg-neutral-800 ${className}`}>
                <span className="font-sans inline-block h-4 w-4 rounded-full bg-gray-400" />
                carregando...
            </div>
        );
    }

    // Renderização final: status + bolinha
    return (
        <div className={`font-sans inline-flex place-items-center gap-3 rounded-full text-white bg-neutral-200 px-3 py-2 dark:bg-neutral-800 ${className}`}>
            <span className={` font-sans inline-block h-4 w-4 rounded-full ${statusColor}`} />
            {statusText}
        </div>
    );
}
