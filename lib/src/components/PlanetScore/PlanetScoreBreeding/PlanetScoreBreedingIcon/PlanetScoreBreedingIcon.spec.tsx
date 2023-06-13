import { render } from '@testing-library/react';
import PlanetScoreBreedingIcon from './PlanetScoreBreedingIcon';
import { BREEDING_CONDITION } from '@/constants';
import { SvgWrapper } from '@tests/utils';

describe('<PlanetScoreBreedingIcon>', () => {
  it('(default) renders null', () => {
    const { container } = render(<PlanetScoreBreedingIcon score="" />);

    expect(container).toMatchSnapshot();
  });

  it('(GOOD) renders green tick icon', () => {
    const { container } = render(<PlanetScoreBreedingIcon score={BREEDING_CONDITION.GOOD} />, {
      wrapper: SvgWrapper
    });

    expect(container).toMatchSnapshot();
  });

  it('(MEDIUM) renders orange tilde icon', () => {
    const { container } = render(<PlanetScoreBreedingIcon score={BREEDING_CONDITION.MEDIUM} />, {
      wrapper: SvgWrapper
    });

    expect(container).toMatchSnapshot();
  });

  it('(BAD) renders red cross icon', () => {
    const { container } = render(<PlanetScoreBreedingIcon score={BREEDING_CONDITION.BAD} />, {
      wrapper: SvgWrapper
    });

    expect(container).toMatchSnapshot();
  });
});
