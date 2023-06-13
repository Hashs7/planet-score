import { render } from '@testing-library/react';
import PlanetScoreInfo from './PlanetScoreInfo';
import { SvgWrapper } from '@tests/utils';

describe('<PlanetScoreInfo>', () => {
  it('renders the PlanetScoreInfo', () => {
    const { container } = render(<PlanetScoreInfo />, { wrapper: SvgWrapper });

    expect(container).toMatchSnapshot();
  });
});
