import React from 'react';
import ArticleList from '../ArticleList.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

configure({ adapter: new Adapter() });

describe('ArticleList', () => {

  const testProps = {
    articles:{
      a: {id: 'a'},
      b: {id: 'b'}
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList {...testProps} />
    );

    console.log(wrapper.getElement());
    expect(wrapper.getElement().props.children.length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
