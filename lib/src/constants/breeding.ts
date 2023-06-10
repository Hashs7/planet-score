/**
 *
 * @type {{MEDIUM: string, BAD: string, GOOD: string}}
 */
export enum BREEDING_CONDITION {
  GOOD = 'v',
  MEDIUM = 'o',
  BAD = 'r'
}

/**
 * Color state for breeding score
 *
 * @type {{[p: string]: string}}
 */
export const BREEDING_CONDITION_COLOR: { [index: string]: string } = {
  [BREEDING_CONDITION.GOOD]: '#007C3B',
  [BREEDING_CONDITION.MEDIUM]: '#F07E02',
  [BREEDING_CONDITION.BAD]: '#E33116'
};

/**
 * List of available animals
 *
 * @type {{OTHER: string, BEE: string, FARMING_FISH: string, FISHING_FISH: string, CHICKEN: string, SHEEP: string, DUCK: string, COW: string, GOAT: string, RABBIT: string, PIG: string}}
 */
export enum BREEDING_ANIMAL {
  COW = 'bovin',
  CHICKEN = 'poule',
  SHEEP = 'brebis',
  GOAT = 'chevre',
  PIG = 'porc'

  // Icon not integrated
  // BEE = 'abeille',
  // DUCK = 'canard',
  // RABBIT = 'lapin',
  // FARMING_FISH = 'poisson_aquaculture',
  // FISHING_FISH = 'poisson_peche',
  // OTHER = 'autre'
}

/**
 * Regex to extract only breeding animal word
 *
 * @type {RegExp}
 */
export const BREEDING_ANIMAL_REGEX = new RegExp(`(${Object.values(BREEDING_ANIMAL).join('|')})`);
