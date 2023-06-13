import { SCORE_POSITIONS, ScoreValues } from '@/constants';
import { FunctionComponent } from 'react';

interface PlanetScoreCursorProps {
  score: ScoreValues;
  translateY?: number;
}

const PlanetScoreCursor: FunctionComponent<PlanetScoreCursorProps> = ({
  score = '',
  translateY = 0
}) => {
  const index = SCORE_POSITIONS.indexOf(score.toUpperCase() as ScoreValues);
  const translateX = index * 108;

  if (index === -1) {
    return null;
  }

  return (
    <g className="cursor" transform={`translate(${translateX} ${translateY})`}>
      <path
        style={{ fill: '#FDFDFD' }}
        d="M572.2,346.6c-16,0-29,13-29,29s13,29,29,29c16,0,29-13,29-29S588.1,346.6,572.2,346.6z"
      />
      <path
        style={{ fill: '#273259' }}
        d="M572.2,336.6c-21.5,0-39,17.5-39,39s17.5,39,39,39c21.5,0,39-17.5,39-39S593.7,336.6,572.2,336.6z
		 M543.2,375.6c0-16,13-29,29-29c16,0,29,13,29,29s-13,29-29,29C556.2,404.6,543.2,391.6,543.2,375.6z"
      />
    </g>
  );
};

export default PlanetScoreCursor;
