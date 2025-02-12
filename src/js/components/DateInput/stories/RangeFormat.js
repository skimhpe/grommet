import React from 'react';

import { Grommet, Box, DateInput } from 'grommet';
import { grommet } from 'grommet/themes';

export const RangeFormat = () => {
  const [value, setValue] = React.useState([
    '2020-07-31T15:24:26.256Z',
    '2020-08-07T15:24:26.256Z',
  ]);
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Box width="medium">
          <DateInput
            value={value}
            format="mm/dd/yyyy-mm/dd/yyyy"
            onChange={onChange}
          />
        </Box>
      </Box>
    </Grommet>
  );
};

RangeFormat.storyName = 'Range format';

export default {
  title: 'Input/DateInput/Range format',
};
