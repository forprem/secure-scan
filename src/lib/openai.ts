export async function scanCodeWithAI(code: string): Promise<string> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Bearer ${process.env.OPENAI_API_KEY},
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a security analyst.' },
        { role: 'user', content: Scan this code for security vulnerabilities:\n\n${code} },
      ],
    }),
  });
  const data = await response.json();
  return data.choices[0]?.message?.content || 'No vulnerabilities found.';
}