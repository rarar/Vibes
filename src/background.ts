import Sentiment from 'sentiment';

const sentiment = new Sentiment();

chrome.tabs.onSelectionChanged.addListener(() => {
  function getInnerText() {
    return document.body.innerText;
  }

  const code = `(${getInnerText.toString()})();`;

  chrome.tabs.executeScript(
    {
      code
    },
    (results: Results) => {
      if (results !== undefined && results[0]) {
        const analyzedText = sentiment.analyze(results[0]);

        // tslint:disable-next-line: no-console
        console.log(analyzedText);
      }
    }
  );
});

type Results = string[] | undefined;
