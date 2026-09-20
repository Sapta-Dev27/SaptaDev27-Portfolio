import { useState, useRef, useEffect } from "react";
import { Terminal, Send, Trash2, CheckCircle2, CornerDownLeft } from "lucide-react";
import { terminalCommands } from "../data/portfolioData";

export default function DevTerminal() {
  const [history, setHistory] = useState([
    { type: "system", text: "SP Terminal v2.4.0 (x86_64-saptarshi-os)" },
    { type: "system", text: "Type 'help' or click commands below to inspect candidate data." },
    { type: "command", cmd: "whoami" },
    { type: "response", text: terminalCommands.whoami },
  ]);
  const [input, setInput] = useState("");
  const terminalBottomRef = useRef(null);

  const commandList = ["whoami", "role", "skills", "projects", "stats", "experience", "education", "achievements", "contact", "sudo", "clear"];

  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear" || cmd === "cls") {
      setHistory([{ type: "system", text: "Terminal screen cleared. Ready for input." }]);
      setInput("");
      return;
    }

    if (cmd === "help") {
      setHistory((prev) => [
        ...prev,
        { type: "command", cmd: rawCmd },
        {
          type: "response",
          text: `Available commands: ${commandList.filter((c) => c !== "clear").join(", ")} | clear`,
        },
      ]);
      setInput("");
      return;
    }

    const response = terminalCommands[cmd] || `command not found: '${cmd}'. Type 'help' to see valid commands.`;

    setHistory((prev) => [
      ...prev,
      { type: "command", cmd: rawCmd },
      { type: "response", text: response },
    ]);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#080d1a]/95 backdrop-blur-xl shadow-2xl font-mono text-xs text-slate-300">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-[#0d1424] border-b border-white/8 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-400 font-semibold tracking-wide text-[11px] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            guest@saptarshi-dev: ~
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleCommand("clear")}
            title="Clear terminal"
            className="p-1 hover:text-cyan-400 text-slate-400 transition-colors"
            aria-label="Clear terminal"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 max-h-64 overflow-y-auto space-y-2.5 scrollbar-thin">
        {history.map((item, index) => (
          <div key={index} className="leading-relaxed">
            {item.type === "system" && (
              <p className="text-slate-500 text-[11px] italic">{item.text}</p>
            )}
            {item.type === "command" && (
              <div className="flex items-center gap-2 text-cyan-300 font-medium">
                <span className="text-emerald-400">➜</span>
                <span className="text-cyan-400">~</span>
                <span>$ {item.cmd}</span>
              </div>
            )}
            {item.type === "response" && (
              <div className="pl-4 text-slate-200 bg-white/[0.02] py-1 px-2 rounded border-l-2 border-cyan-400/40">
                {item.text}
              </div>
            )}
          </div>
        ))}
        <div ref={terminalBottomRef} />
      </div>

      {/* Suggested Command Chips */}
      <div className="px-4 py-2 bg-[#0a1020] border-t border-white/5 flex flex-wrap items-center gap-1.5 overflow-x-auto">
        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mr-1">Quick:</span>
        {["whoami", "role", "stack", "stats", "projects", "contact", "sudo"].map((c) => (
          <button
            key={c}
            onClick={() => handleCommand(c === "stack" ? "skills" : c)}
            className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-400 text-[10px] border border-white/5 hover:border-cyan-400/30 transition-all font-mono"
          >
            ${c}
          </button>
        ))}
      </div>

      {/* Command Input Form */}
      <form onSubmit={handleSubmit} className="p-2.5 bg-[#070b14] border-t border-white/8 flex items-center gap-2">
        <span className="text-emerald-400 font-bold pl-2">➜</span>
        <span className="text-cyan-400 font-semibold">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type command (e.g. stats, projects, contact, sudo)..."
          className="flex-1 bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none text-xs font-mono"
          aria-label="Terminal command input"
        />
        <button
          type="submit"
          className="p-1.5 rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 transition-colors"
          aria-label="Send command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
