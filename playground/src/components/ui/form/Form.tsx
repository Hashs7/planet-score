import React, { useEffect, useState } from 'react';
import { BREEDING_ANIMAL, BREEDING_CONDITION, ScoreValues } from 'planet-score';
import RadioGroupInput from '@/components/ui/RadioGroupInput/RadioGroupInput';
import RadioInput from '@/components/ui/radio/RadioInput';
import styles from './Form.module.scss';

const scoreInputs = [
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

const Form = ({ onChange }) => {
  const [score, setScore] = useState('AAAB');
  const [breedingAnimal, setBreedingAnimal] = useState('poule');
  const [breedingCondition, setBreedingCondition] = useState('v');

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

  const onBreedingAnimalChange = (animal) => setBreedingAnimal(animal);

  const onBreedingConditionChange = (condition) => setBreedingCondition(condition);

  const classes = {
    container: styles['form'],
    scores: styles['form__scores'],
    breeding: styles['form__breeding'],
    scoreContainer: styles['form__score-container']
  };

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
                {Object.values(ScoreValues).map((score) => (
                  <RadioInput
                    key={score}
                    name={name}
                    label={score}
                    value={score}
                    checked={value === score}
                    onChange={(val) => updateScore(index, val)}
                  />
                ))}
              </RadioGroupInput>
            );
          })}
        </section>

        <section className={classes.breeding}>
          <RadioGroupInput label="Breeding animal">
            {[...Object.entries(BREEDING_ANIMAL), ['none', undefined]].map(([label, animal]) => (
              <RadioInput
                key={animal}
                name="breeding-animal"
                label={label}
                value={animal}
                onChange={onBreedingAnimalChange}
                checked={animal === breedingAnimal}
              />
            ))}
          </RadioGroupInput>

          <RadioGroupInput label="Breeding condition">
            {Object.entries(BREEDING_CONDITION).map(([label, value]) => (
              <RadioInput
                key={value}
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
