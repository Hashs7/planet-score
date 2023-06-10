import { useState } from 'react';
import { PlanetScore } from 'planet-score';
import './App.css';
import Form from '@/components/ui/form/Form';

function App() {
  const [planetScore, setPlanetScore] = useState('');

  return (
    <>
      <h1>Planet score</h1>

      <Form onChange={(score) => setPlanetScore(score)} />

      <PlanetScore value={planetScore} />
    </>
  );
}

export default App;
