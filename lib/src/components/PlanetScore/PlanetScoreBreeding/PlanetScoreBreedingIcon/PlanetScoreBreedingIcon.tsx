import { FunctionComponent } from 'react';
import { BREEDING_CONDITION } from '@/constants';

interface PlanetScoreBreedingIconProps {
  score: string;
}

/**
 * Show icon under breeding animal
 *
 * @param value
 * @returns {JSX.Element|null}
 * @constructor
 */
const PlanetScoreBreedingIcon: FunctionComponent<PlanetScoreBreedingIconProps> = ({
  score = ''
}) => {
  switch (score.toLowerCase()) {
    case BREEDING_CONDITION.GOOD:
      return (
        <path
          style={{ fill: '#007C3B' }}
          d="M1191.8,524l14-9.2c4.9-3.2,11.6-1.5,14.3,3.7l16.1,30.6c0,0,8.3-18.9,33.1-50
		c14.2-17.8,25.9-28.5,33.3-34.5c4.9-3.9,11.7-4.3,17-0.9l16.5,10.6c0,0-36.7,23.2-57.6,55.6c-20.8,32.4-29.4,49.3-31.1,54.6
		c-8.3-2.3-24.5-7.9-24.5-7.9C1217.4,562.4,1191.8,524,1191.8,524z"
        />
      );

    case BREEDING_CONDITION.MEDIUM:
      return (
        <path
          style={{ fill: '#F07E02' }}
          d="M1324.9,546.3c-9.4,6.2-16.9,10.3-22.3,12.1c-8.4,2.7-16.7,2.5-24.9-0.6c-7.8-3-17-10.3-27.7-22.1
			c-10.6-11.8-20.5-19.4-29.6-22.9c-10.3-3.9-21.4,0.1-33.3,11.9l-5.2-19c15.3-13.8,31-17.7,47.2-11.5c8.2,3.1,18.3,10.8,30.4,23.2
			c12.1,12.4,20.6,19.5,25.6,21.4c8.4,3.2,19.9-0.7,34.6-11.6L1324.9,546.3z"
        />
      );

    case BREEDING_CONDITION.BAD:
      return (
        <path
          style={{ fill: '#E33116' }}
          d="M1196,569.4c0,0,39.6-41,41.9-45c-22.4-27.2-29-36.1-29-36.1c4.6-10.7,15.2-15.9,27.5-19.5
		c0,0,12.6,15.5,22.4,28.7c16.6-20.1,31.5-38.5,31.5-38.5s7.5,1.4,15.8,25.2c-19.5,22.9-32.1,36.7-32.1,36.7l22.9,45l-18.6,14.6
		l-24.5-36.4c0,0-31.4,35.9-43.7,42.7C1204.9,583.5,1196,578.6,1196,569.4z"
        />
      );

    default:
      return null;
  }
};

export default PlanetScoreBreedingIcon;
