import { FunctionComponent } from 'react';
import PlanetScoreBreeding from './PlanetScoreBreeding/PlanetScoreBreeding';
import PlanetScoreCursor from './PlanetScoreCursor/PlanetScoreCursor';
import PlanetScoreInfo from './PlanetScoreInfo/PlanetScoreInfo';
import PlanetScoreMainScore from './PlanetScoreMainScore/PlanetScoreMainScore';
import PlanetScoreSmall from './PlanetScoreSmall/PlanetScoreSmall';
import { ScoreValues } from '@/constants';

interface PlanetScoreProps {
  value: string;
  small?: boolean;
  className?: string;
}

const PlanetScore: FunctionComponent<PlanetScoreProps> = ({ value, small, className = '' }) => {
  if (!value) {
    return null;
  }

  const [rating, breeding] = value.split('-');
  const [score, pesticide, biodiversity, climate] = rating.toUpperCase().split('') as ScoreValues[];

  if (small) {
    return <PlanetScoreSmall score={score} />;
  }

  return (
    <svg viewBox="0 0 1418 622" className={className}>
      <PlanetScoreInfo />
      <PlanetScoreMainScore score={score} />
      <PlanetScoreCursor score={pesticide} />
      <PlanetScoreCursor score={biodiversity} translateY={85} />
      <PlanetScoreCursor score={climate} translateY={170} />
      {breeding ? <PlanetScoreBreeding value={breeding} /> : null}
    </svg>
  );
};

export default PlanetScore;
