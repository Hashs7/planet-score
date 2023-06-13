import { render } from '@testing-library/react';
import PlanetScoreBreeding from './PlanetScoreBreeding';
import PlanetScoreBreedingAnimal from './PlanetScoreBreedingAnimal/PlanetScoreBreedingAnimal';
import PlanetScoreBreedingIcon from './PlanetScoreBreedingIcon/PlanetScoreBreedingIcon';
import { SvgWrapper } from '@tests/utils';

jest.mock(`./PlanetScoreBreedingAnimal/PlanetScoreBreedingAnimal`);
jest.mock(`./PlanetScoreBreedingIcon/PlanetScoreBreedingIcon`);

const context = {};

describe('<PlanetScoreBreeding/>', () => {
  it('If value is valid, PlanetScoreBreedingAnimal and PlanetScoreBreedingIcon are called with prop animal and score', () => {
    render(<PlanetScoreBreeding value="AAAA-bovinV" />, { wrapper: SvgWrapper });

    expect(PlanetScoreBreedingAnimal).toHaveBeenCalledWith(
      {
        animal: 'bovin',
        score: 'v'
      },
      context
    );
    expect(PlanetScoreBreedingIcon).toHaveBeenCalledWith(
      {
        score: 'v'
      },
      {}
    );
  });

  it('If value is not valid, PlanetScoreBreedingAnimal and PlanetScoreBreedingIcon are called with prop animal and score', () => {
    render(<PlanetScoreBreeding value="AAAA-poireauV" />, { wrapper: SvgWrapper });

    expect(PlanetScoreBreedingAnimal).not.toHaveBeenCalled();
    expect(PlanetScoreBreedingIcon).not.toHaveBeenCalled();
  });
});
