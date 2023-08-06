import { BREEDING_ANIMAL, BREEDING_CONDITION, ScoreValues } from 'planet-score';
import { Key, useEffect, useState } from 'react';
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
    name: 'global'
  },
  {
    label: 'Pesticide',
    name: 'pesticide'
  },
  {
    label: 'Biodiversity',
    name: 'biodiversity'
  },
  {
    label: 'Climate',
    name: 'climate'
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
    ['none', '']
  ];

  const breedingConditionInputs = Object.entries(BREEDING_CONDITION) as [string, string][];
  const breedingPercentage =
    (Object.values(BREEDING_CONDITION).indexOf(breedingCondition as BREEDING_CONDITION) /
      breedingConditionInputs.length) *
    100;

  return (
    <form className={classes.container}>
      <section>
        <h2>Scores</h2>

        <div className={classes.scores}>
          {scoreInputs.map(({ label, name }, index) => {
            const value = score.split('')[index] as ScoreValues;
            const percentage =
              (Object.values(ScoreValues).indexOf(value) / Object.values(ScoreValues).length) * 100;

            return (
              <RadioGroupInput
                label={label}
                key={name}
                className={classes.scoreContainer}
                percentage={percentage}
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
                    gradient
                  />
                ))}
              </RadioGroupInput>
            );
          })}
        </div>
      </section>

      <section>
        <h2>Breeding</h2>

        <div className={classes.breeding}>
          <RadioGroupInput label="Animal">
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

          <RadioGroupInput label="Condition" percentage={breedingPercentage}>
            {breedingConditionInputs.map(([label, value]) => (
              <RadioInput
                key={value as Key}
                name="breeding-condition"
                label={label}
                value={value}
                onChange={onBreedingConditionChange}
                checked={value === breedingCondition}
                gradient
              />
            ))}
          </RadioGroupInput>
        </div>
      </section>
    </form>
  );
};

export default Form;
