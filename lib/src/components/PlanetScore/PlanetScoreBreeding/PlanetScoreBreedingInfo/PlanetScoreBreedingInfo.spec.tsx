import { render } from '@testing-library/react';
import PlanetScoreBreedingInfo from './PlanetScoreBreedingInfo';
import { SvgWrapper } from '@tests/utils';

describe('<PlanetScoreBreedingInfo>', () => {
  it('renders the PlanetScoreBreedingInfo', () => {
    const { container } = render(<PlanetScoreBreedingInfo />, { wrapper: SvgWrapper });

    expect(container).toMatchSnapshot();
  });
});
