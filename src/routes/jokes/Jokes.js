/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Jokes.css';

class Jokes extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      joke: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>These are my jokes:</p>
          <ul>
            {this.props.data.map((item, index) => (
              <li key={index}>
                <span
                  dangerouslySetInnerHTML={{ __html: item.joke }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Jokes);
