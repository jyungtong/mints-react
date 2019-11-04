import * as React from 'react';

import './Hello.scss';

export interface HelloProps { compiler: string; framework: string }

export const Hello = ({ compiler, framework }: HelloProps): React.ReactElement => (
  <h1>Hello from {compiler} and {framework}!</h1>
);
