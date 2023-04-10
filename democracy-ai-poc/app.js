document.getElementById('summarize').addEventListener('click', async () => {
  const legislation = document.getElementById('legislation').value;
  const summaryElement = document.getElementById('summary');

  summaryElement.textContent = 'Summarizing...';

  try {
    const summary = await generateSummary(legislation);
    summaryElement.textContent = summary;
  } catch (error) {
    summaryElement.textContent = 'Error: Unable to generate summary.';
    console.error(error);
  }
});

async function generateSummary(legislation) {
  const apiKey = 'Input API Key Here Found by going to beta.openai.com and signing up';
  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: `Summarize the following legislation: ${legislation}`,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate summary');
  }

  const data = await response.json();
  return data.choices[0].text.trim();
}
