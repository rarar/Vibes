import Sentiment from 'sentiment';
import { getInnerText } from './getInnerText';

const sentiment = new Sentiment();

chrome.tabs.onSelectionChanged.addListener(() => {
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
