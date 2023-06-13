import { render } from '@testing-library/react';
import PlanetScoreSmall from './PlanetScoreSmall';
import PlanetScoreSmallMainScore from './PlanetScoreSmallMainScore/PlanetScoreSmallMainScore';
import { ScoreValues } from '@/constants';

jest.mock(`./PlanetScoreSmallMainScore/PlanetScoreSmallMainScore`);

const context = {};

describe('<PlanetScoreSmall/>', () => {
  it('If value is valid, PlanetScoreBreedingAnimal and PlanetScoreBreedingIcon are called with prop animal and score', () => {
    render(<PlanetScoreSmall score={ScoreValues.A} />);

    expect(PlanetScoreSmallMainScore).toHaveBeenCalledWith(
      {
        score: 'A'
      },
      context
    );
  });

  it('If value is not valid, PlanetScoreBreedingAnimal and PlanetScoreBreedingIcon are called with prop animal and score', () => {
    render(<PlanetScoreSmall score={ScoreValues.B} />);

    expect(PlanetScoreSmallMainScore).toHaveBeenCalledWith(
      {
        score: 'B'
      },
      context
    );
  });
});
