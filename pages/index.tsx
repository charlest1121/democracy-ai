import React from 'react';
import '../democracy-ai-poc/style.css'; // Update this line


const Home = () => {
  return (
    <div>
      <header>
        <h1>Democracy.ai Proof of Concept</h1>
      </header>
      <main>
        <aside>
          <nav>
            <ul>
              <li><a href="#" data-category="healthcare">Healthcare</a></li>
              <li><a href="#" data-category="environment">Environment</a></li>
              <li><a href="#" data-category="taxes">Taxes</a></li>
            </ul>
          </nav>
        </aside>
        <h2>Sample Legislation:</h2>
        <textarea id="legislation" rows={10} cols={80}>
          Insert a sample legislation text here.
        </textarea>
        <button id="summarize">Summarize Legislation</button>
        <h2>Summary:</h2>
        <div id="summary"></div>
      </main>
    </div>
  );
};

export default Home;
