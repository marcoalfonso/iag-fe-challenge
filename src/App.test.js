import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Screen from 'components/Screen/Screen'

configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('should render Screen without any issues ', () => {
    const screen = shallow(<Screen />);
    const app = screen.find('#screen');
    expect(app).toHaveLength(1);
  });
});
