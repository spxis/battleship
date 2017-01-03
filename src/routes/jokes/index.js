/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Jokes from './Jokes';
import fetch from '../../core/fetch';

const title = 'Jokes';
const url = 'http://api.icndb.com/jokes/random/25';

export default {

  path: '/jokes',

  async action() {
    const resp = await fetch(url);
    const { value } = await resp.json();

    // if (!data) throw new Error('Failed to load the data feed.');
    return {
      title,
      component: <Layout><Jokes title={title} data={value} /></Layout>,
    };
  },


};
