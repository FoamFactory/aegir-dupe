import React from 'react';

import { SectionTitleDescription } from '../01-Atoms/SectionTitleDescription';
import { StringUtil } from '../../util/StringUtil';

import './SettingsSection.scss';

export class SettingsSection extends React.PureComponent {
  render() {
    let sectionId = 'settings-section-' + StringUtil.convertToSnakeCase(this.props.title);
    let childTitle;
    if (this.props.title) {
      childTitle = (<SectionTitleDescription
        title={this.props.title}
        description={this.props.description} />);
    }


    // According to:
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/492#issuecomment-430816896
    // > Everything with an ID is an anchor in HTML5, so I think that extension
    // > probably just isn't really useful in the modern web.
    //
    // We can use just the ID of the element instead, I believe.
    // let anchorName = `#${sectionId}`;
    // <a name={anchorName} />
    //
    return (
      <section
        id={sectionId}
        className={this.props.className}
        style={this.props.style}
      >
        {childTitle}
        <div className="section-indented">
          {this.props.children}
        </div>
      </section>
    );
  }
}
