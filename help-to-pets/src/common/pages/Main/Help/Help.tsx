import React from 'react';
import classes from './Help.module.scss';
import HelpInfo from './HelpInfo/HelpInfo';
import HelpForm from './HelpForm/HelpForm';

function Help(): React.ReactElement {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <HelpInfo />
        <HelpForm />
      </div>
    </div>
  );
}

export default Help;
