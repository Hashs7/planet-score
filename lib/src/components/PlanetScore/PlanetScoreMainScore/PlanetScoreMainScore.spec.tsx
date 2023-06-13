import { render } from '@testing-library/react';
import PlanetScoreMainScore from './PlanetScoreMainScore';
import { SCORE_POSITIONS } from '@/constants';
import { SvgWrapper } from '@tests/utils';

describe('<PlanetScoreMainScore>', () => {
  it(`should not renders with invalid score`, () => {
    const { container } = render(<PlanetScoreMainScore score="" />);

    expect(container).toMatchSnapshot();
  });

  SCORE_POSITIONS.forEach((score) => {
    it(`(${score}) renders ${score} circle with associated color`, () => {
      const { container } = render(<PlanetScoreMainScore score={score} />, { wrapper: SvgWrapper });

      expect(container).toMatchSnapshot();
    });
  });
});
