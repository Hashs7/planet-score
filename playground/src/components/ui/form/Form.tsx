import { Key, useEffect, useState } from 'react';
import { BREEDING_ANIMAL, BREEDING_CONDITION, ScoreValues } from 'planet-score';
import RadioGroupInput from '@/components/ui/RadioGroupInput/RadioGroupInput';
import RadioInput from '@/components/ui/radio/RadioInput';
import styles from './Form.module.scss';

type scoreInputs = {
  label: string;
  name: string;
};

const scoreInputs: scoreInputs[] = [
  {
    label: 'Global',
    name: 'global-score'
  },
  {
    label: 'Pesticide score',
    name: 'pesticide-score'
  },
  {
    label: 'Biodiversity score',
    name: 'biodiversity-score'
  },
  {
    label: 'Climate score',
    name: 'climate-score'
  }
];

const Form = ({ onChange }: { onChange: (val: string) => void }) => {
  const [score, setScore] = useState<string>('AAAB');
  const [breedingAnimal, setBreedingAnimal] = useState<string>('poule');
  const [breedingCondition, setBreedingCondition] = useState<string>('v');

  const breedingValue = `-${breedingAnimal}${breedingCondition}`;
  const scoreValue = `${score}${breedingAnimal ? breedingValue : ''}`;

  useEffect(() => {
    onChange(scoreValue);
  }, [onChange, scoreValue]);

  const updateScore = (position: number, value: ScoreValues) => {
    console.log(position, value);
    const newScore = score.split('');
    newScore[position] = value;
    setScore(newScore.join(''));
  };

  const onBreedingAnimalChange = (animal: string) => setBreedingAnimal(animal);

  const onBreedingConditionChange = (condition: string) => setBreedingCondition(condition);

  const classes = {
    container: styles['form'],
    scores: styles['form__scores'],
    breeding: styles['form__breeding'],
    scoreContainer: styles['form__score-container']
  };

  const breedingAnimalInputs: [string, string][] = [
    ...(Object.entries(BREEDING_ANIMAL) as [string, string][]),
    ['none', 'none']
  ];

  const breedingConditionInputs = Object.entries(BREEDING_CONDITION) as [string, string][];

  return (
    <>
      <form className={classes.container}>
        <section className={classes.scores}>
          {scoreInputs.map(({ label, name }, index) => {
            const value = score.split('')[index] as ScoreValues;

            return (
              <RadioGroupInput
                label={label}
                key={name}
                className={classes.scoreContainer}
                horizontal
              >
                {(Object.values(ScoreValues) as string[]).map((score) => (
                  <RadioInput
                    key={score as Key}
                    name={name}
                    label={score}
                    value={score}
                    checked={value === score}
                    onChange={(val) => updateScore(index, val as ScoreValues)}
                  />
                ))}
              </RadioGroupInput>
            );
          })}
        </section>

        <section className={classes.breeding}>
          <RadioGroupInput label="Breeding animal">
            {breedingAnimalInputs.map(([label, animal]) => (
              <RadioInput
                key={animal as Key}
                name="breeding-animal"
                label={label}
                value={animal}
                onChange={onBreedingAnimalChange}
                checked={animal === breedingAnimal}
              />
            ))}
          </RadioGroupInput>

          <RadioGroupInput label="Breeding condition">
            {breedingConditionInputs.map(([label, value]) => (
              <RadioInput
                key={value as Key}
                name="breeding-condition"
                label={label}
                value={value}
                onChange={onBreedingConditionChange}
                checked={value === breedingCondition}
              />
            ))}
          </RadioGroupInput>
        </section>
      </form>
      <p>Score value: {scoreValue}</p>
    </>
  );
};

export default Form;
