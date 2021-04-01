import React from 'react';

import { AuthorsBlock, LineageBlock, StyleBlock, TypeBlock } from '../../';

import './BlockBar.scss';

export class BlockBar extends React.PureComponent {
  render() {
    let ancestorTree = {
        name: "Mark V",
        ancestors: {
          name: "Mark IV",
          ancestors: {
            name: "Mark III"
          }
        }
    };

    return (
      <div className="block-bar-container">
        <div className="block-bar">
          <AuthorsBlock authors={[
            {
              "imageUrl": "https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/helmet.png"
            },
            {
              "imageUrl": "https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/helmet.png"
            },
            {
              "imageUrl": "https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/helmet.png"
            }
          ]} />
          <StyleBlock styleName="British Brown Ale" styleReference="BJCP-13B" />
          <TypeBlock type="all-grain" />
          <LineageBlock ancestorTree={ ancestorTree } />
        </div>
      </div>
    );
  }
}
