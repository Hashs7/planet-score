import { PlanetScore } from 'planet-score';
import { useState } from 'react';
import Form from '@/components/ui/form/Form';

function App() {
  const [planetScore, setPlanetScore] = useState<string>('');

  return (
    <>
      <h1>Planet score</h1>

      <Form onChange={(score) => setPlanetScore(score)} />

      <pre className="code">
        <code>{`import { PlanetScore } from "planet-score";`}</code>
        <code></code>
        <code>{`<PlanetScore value="${planetScore}" />`}</code>
      </pre>

      <PlanetScore value={planetScore} />
    </>
  );
}

export default App;
