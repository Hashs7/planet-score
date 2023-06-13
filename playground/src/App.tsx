import { PlanetScore } from 'planet-score';
import { useState } from 'react';
import Form from '@/components/ui/form/Form';
import './App.css';

function App() {
  const [planetScore, setPlanetScore] = useState<string>('');

  return (
    <>
      <h1>Planet score</h1>

      <Form onChange={(score) => setPlanetScore(score)} />

      <PlanetScore value={planetScore} />
    </>
  );
}

export default App;
