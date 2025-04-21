import { useState } from 'react';
import UploadForm from '@/components/UploadForm';
import ScanResults from '@/components/ScanResults';

export default function Home() {
  const [result, setResult] = useState('');
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">SecureScan Dashboard</h1>
      <UploadForm onScanComplete={setResult} />
      <ScanResults result={result} />
    </div>
  );
}