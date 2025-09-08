"use client";
import { useState } from "react";

export default function AIGuidePage() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [voice, setVoice] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, content: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ message: userMsg.content }) });
    const data = await res.json();
    setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    if (voice && typeof window !== "undefined") {
      const utter = new SpeechSynthesisUtterance(data.reply);
      window.speechSynthesis.speak(utter);
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">AI Guide (Birsa)</h1>
      <div className="mt-4 flex items-center gap-2 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={voice} onChange={(e) => setVoice(e.target.checked)} /> Voice
        </label>
      </div>
      <div className="mt-6 h-[50vh] border border-emerald-800 rounded p-4 overflow-y-auto bg-emerald-950/40">
        {messages.map((m, i) => (
          <div key={i} className={`mb-3 ${m.role === "user" ? "text-right" : "text-left"}`}>
            <span className="inline-block px-3 py-2 rounded bg-emerald-900/60 border border-emerald-800">
              {m.content}
            </span>
          </div>
        ))}
        {messages.length === 0 && <div className="text-emerald-300 text-sm">Start chatting with Birsa…</div>}
      </div>
      <div className="mt-4 flex gap-2">
        <input className="flex-1 rounded border border-emerald-800 bg-transparent px-3 py-2" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask Birsa anything…" />
        <button onClick={send} className="px-4 py-2 rounded bg-emerald-600">Send</button>
      </div>
    </main>
  );
}


