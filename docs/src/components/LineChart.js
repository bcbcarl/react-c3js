import React, { PropTypes } from 'react';
import {
  compose,
  setDisplayName,
  setPropTypes,
  onlyUpdateForKeys
} from 'recompose';

import C3Chart from './C3Chart';

const enhance = compose(
  setDisplayName('LineChart'),
  setPropTypes({
    data: PropTypes.object.isRequired
  }),
  onlyUpdateForKeys(['data'])
);

const LineChart = enhance(({ data }) =>
  <C3Chart data={{ json: data }} />
);

export { LineChart };
export default LineChart;
