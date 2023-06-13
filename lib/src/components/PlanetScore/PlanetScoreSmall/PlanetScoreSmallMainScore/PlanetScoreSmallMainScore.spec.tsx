import { render } from '@testing-library/react';
import PlanetScoreSmallMainScore from './PlanetScoreSmallMainScore';
import { SCORE_POSITIONS } from '@/constants';
import { SvgWrapper } from '@tests/utils';

describe('<PlanetScoreSmallMainScore>', () => {
  SCORE_POSITIONS.forEach((score) => {
    it(`(${score}) renders the PlanetScoreSmallMainScore`, () => {
      const { container } = render(<PlanetScoreSmallMainScore score={score} />, {
        wrapper: SvgWrapper
      });

      expect(container).toMatchSnapshot();
    });
  });
});
