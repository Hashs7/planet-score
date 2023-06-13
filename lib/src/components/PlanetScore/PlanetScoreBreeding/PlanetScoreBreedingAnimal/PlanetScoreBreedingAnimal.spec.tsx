import { render } from '@testing-library/react';
import PlanetScoreBreedingAnimal from './PlanetScoreBreedingAnimal';
import { BREEDING_ANIMAL, BREEDING_CONDITION } from '@/constants';
import { SvgWrapper } from '@tests/utils';

describe('<PlanetScoreBreedingAnimal>', () => {
  Object.values(BREEDING_ANIMAL).forEach((animal) => {
    it(`(${animal}) renders ${animal} icon`, () => {
      const { container } = render(
        <PlanetScoreBreedingAnimal animal={animal} score={BREEDING_CONDITION.GOOD} />,
        { wrapper: SvgWrapper }
      );

      expect(container).toMatchSnapshot();
    });
  });

  Object.values(BREEDING_CONDITION).forEach((score) => {
    it(`(${score}) renders ${score} color`, () => {
      const { container } = render(
        <PlanetScoreBreedingAnimal animal={BREEDING_ANIMAL.COW} score={score} />,
        { wrapper: SvgWrapper }
      );

      expect(container).toMatchSnapshot();
    });
  });
});
