import { BREEDING_ANIMAL, BREEDING_ANIMAL_REGEX, BREEDING_CONDITION } from '@/constants';
import PlanetScoreBreedingAnimal from './PlanetScoreBreedingAnimal/PlanetScoreBreedingAnimal';
import PlanetScoreBreedingIcon from './PlanetScoreBreedingIcon/PlanetScoreBreedingIcon';
import PlanetScoreBreedingInfo from './PlanetScoreBreedingInfo/PlanetScoreBreedingInfo';

const PlanetScoreBreeding = ({ value }: { value: string }) => {
  const [animal] = (value.toLowerCase().match(BREEDING_ANIMAL_REGEX) as BREEDING_ANIMAL[]) || [];
  if (!animal) {
    return null;
  }

  const [, score] = value.toLowerCase().split(animal) as BREEDING_CONDITION[];

  return (
    <>
      <PlanetScoreBreedingInfo />
      <PlanetScoreBreedingAnimal animal={animal} score={score} />
      <PlanetScoreBreedingIcon score={score} />
    </>
  );
};

export default PlanetScoreBreeding;
