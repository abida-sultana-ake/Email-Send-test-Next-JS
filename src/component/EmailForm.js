import { useState } from "react";

export default function EmailForm() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, subject, text }),
    });

    const data = await res.json();
    setStatus(res.ok ? "Email sent!" : ` ${data.error}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Send Email
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
