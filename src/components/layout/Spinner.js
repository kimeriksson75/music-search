import React, { Fragment } from 'react';
import { SyncOutlined } from '@ant-design/icons';
export const Spinner = () => (
  <Fragment>
    <SyncOutlined spin style={{ margin: 'auto', display: 'block' }} />
  </Fragment>
);
export default Spinner;
