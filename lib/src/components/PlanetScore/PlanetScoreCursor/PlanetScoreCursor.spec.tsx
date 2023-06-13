import { render } from '@testing-library/react';
import PlanetScoreCursor from './PlanetScoreCursor';
import { SCORE_POSITIONS, ScoreValues } from '@/constants';
import { SvgWrapper } from '@tests/utils';

describe('<PlanetScoreCursor>', () => {
  it('should set translateY value', () => {
    const { container } = render(<PlanetScoreCursor score={ScoreValues.A} translateY={200} />, {
      wrapper: SvgWrapper
    });

    expect(container).toMatchSnapshot();
  });

  SCORE_POSITIONS.forEach((score) => {
    it(`(${score}) renders the PlanetScoreCursor`, () => {
      const { container } = render(<PlanetScoreCursor score={score} />, { wrapper: SvgWrapper });

      expect(container).toMatchSnapshot();
    });
  });
});
