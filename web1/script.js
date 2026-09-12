const defaultQuoteText = 'press the lyric button..';

function initPage() {
  const yearElement = document.getElementById('year');
  const quoteButton = document.getElementById('show-quote');
  const quoteOutput = document.getElementById('quote-output');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const quotes = [
    "No I'm not thinkin bout no exes, know they miss me",
    'Why are you evaluatin me on your day off?',
    'Ima keep it Z, Zen, I aint whatcha think about me',
    'Everybodys cool but when I do it Im the problem',
  ];

  if (quoteOutput) {
    quoteOutput.textContent = defaultQuoteText;
  }

  if (quoteButton) {
    quoteButton.type = 'button';

    quoteButton.addEventListener('click', () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

      if (quoteOutput) {
        quoteOutput.textContent = randomQuote;
      }

      clearTimeout(quoteButton.quoteResetTimer);
      quoteButton.quoteResetTimer = setTimeout(() => {
        if (quoteOutput) {
          quoteOutput.textContent = defaultQuoteText;
        }
      }, 1800);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
