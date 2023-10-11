import { PlanetScore } from 'planet-score';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Form from '@/components/ui/form/Form';

function App() {
  const [planetScore, setPlanetScore] = useState<string>('');

  const code = `import { PlanetScore } from "planet-score";

<PlanetScore value="${planetScore}" />`;

  return (
    <>
      <h1>Planet score</h1>

      <Form onChange={(score) => setPlanetScore(score)} />

      <div className="code-block">
        <SyntaxHighlighter language="jsx" style={dracula} showLineNumbers codeBlock>
          {code}
        </SyntaxHighlighter>
      </div>

      <PlanetScore value={planetScore} />
    </>
  );
}

export default App;
