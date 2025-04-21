export default function ScanResults({ result }: { result: string }) {
  return (
    <div className="mt-4 p-4 border rounded bg-gray-50">
      <h2 className="text-xl font-semibold mb-2">Scan Results</h2>
      <pre className="whitespace-pre-wrap text-sm text-gray-800">{result}</pre>
    </div>
  );
}