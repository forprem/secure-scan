import { useState } from 'react'; 

export default function UploadForm({ onScanComplete }: { onScanComplete: (r: string) => void }) {
  const [code, setCode] = useState('');
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    const data = await res.json();
    onScanComplete(data.result);
  }
  return (
    <form onSubmit={handleSubmit} className="my-4">
      <textarea
        className="w-full p-2 border rounded"
        rows={10}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded mt-2">Scan Code</button>
    </form>
  );
}