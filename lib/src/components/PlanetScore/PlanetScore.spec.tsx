import { render } from '@testing-library/react';
import PlanetScore from './PlanetScore';
import PlanetScoreBreeding from './PlanetScoreBreeding/PlanetScoreBreeding';
import PlanetScoreCursor from './PlanetScoreCursor/PlanetScoreCursor';
import PlanetScoreInfo from './PlanetScoreInfo/PlanetScoreInfo';
import PlanetScoreMainScore from './PlanetScoreMainScore/PlanetScoreMainScore';
import PlanetScoreSmall from './PlanetScoreSmall/PlanetScoreSmall';

jest.mock(`./PlanetScoreBreeding/PlanetScoreBreeding`);
jest.mock(`./PlanetScoreCursor/PlanetScoreCursor`);
jest.mock(`./PlanetScoreInfo/PlanetScoreInfo`);
jest.mock(`./PlanetScoreMainScore/PlanetScoreMainScore`);
jest.mock(`./PlanetScoreSmall/PlanetScoreSmall`);

const context = {};

describe('<PlanetScore/>', () => {
  it('should render null with invalid value', () => {
    const { container } = render(<PlanetScore value="" />);

    expect(container).toMatchSnapshot();
  });

  it('call all sub-components with each associated props', () => {
    render(<PlanetScore value="ABCD-bovinV" />);

    expect(PlanetScoreSmall).not.toHaveBeenCalled();
    expect(PlanetScoreInfo).toHaveBeenCalled();
    expect(PlanetScoreMainScore).toHaveBeenCalledWith(
      {
        score: 'A'
      },
      context
    );
    expect(PlanetScoreCursor).toHaveBeenCalledWith(
      {
        score: 'B'
      },
      context
    );
    expect(PlanetScoreCursor).toHaveBeenCalledWith(
      {
        score: 'C',
        translateY: 85
      },
      context
    );
    expect(PlanetScoreCursor).toHaveBeenCalledWith(
      {
        score: 'D',
        translateY: 170
      },
      context
    );
    expect(PlanetScoreBreeding).toHaveBeenCalledWith(
      {
        value: 'bovinV'
      },
      context
    );
  });

  it("prevent call PlanetScoreBreeding when score value doesn't contain animal", () => {
    render(<PlanetScore value="ABCD" />);

    expect(PlanetScoreBreeding).not.toHaveBeenCalled();
  });

  it('(small) call only <PlanetScoreSmall/> with score prop', () => {
    render(<PlanetScore value="ABCD-pouleV" small />);

    expect(PlanetScoreSmall).toHaveBeenCalledWith(
      {
        score: 'A'
      },
      context
    );
    expect(PlanetScoreBreeding).not.toHaveBeenCalled();
    expect(PlanetScoreInfo).not.toHaveBeenCalled();
    expect(PlanetScoreMainScore).not.toHaveBeenCalled();
    expect(PlanetScoreCursor).not.toHaveBeenCalled();
  });
});
