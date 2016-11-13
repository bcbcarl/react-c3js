import React, { PropTypes } from 'react';
import {
  compose,
  setDisplayName,
  setPropTypes,
  onlyUpdateForKeys
} from 'recompose';

import C3Chart from './C3Chart';

const enhance = compose(
  setDisplayName('BarChart'),
  setPropTypes({
    data: PropTypes.object.isRequired
  }),
  onlyUpdateForKeys(['data']));

const BarChart = enhance(({ data }) =>
  <C3Chart data={{ json: data, type: 'bar' }} />
);

export { BarChart };
export default BarChart;
