import React from 'react';
import ArticleList from '../ArticleList.jsx';
import renderer from 'react-test-renderer';

describe('ArticleList', () => {

    const testProps = {
        articles:{
            a: {id: 'a'},
            b: {id: 'b'}
        },
        articleActions:{
            lookupAuthor: jest.fn(()=> ({}))
        }
    };

  it('renders correctly', () => {
    const tree = renderer.create(
        <ArticleList {...testProps} />
    ).toJSON();

   // console.log(tree.children[0].children);
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});
