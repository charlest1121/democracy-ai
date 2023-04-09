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
    const apiKey = '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';
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type':
  