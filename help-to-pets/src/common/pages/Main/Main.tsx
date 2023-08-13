import React from 'react';
import classes from './Main.module.scss';
import CommunityDescription from './CommunityDescription/ComunityDescription';
import { PetInterface } from '../../utils/Interfaces';
import CommunityInfo from './CommunityInfo/CommunityInfo';
import CommunityInvite from './CommunityInvite/CommunityInvite';
import StartScreen from './StartScreen/StartScreen';
import Pets from './Pets/Pets';
import HelpForm from './HelpForm/HelpForm';

function Main({ pets }: PetInterface): React.ReactElement {
  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <StartScreen />
      </div>
      <Pets pets={pets} />
      <CommunityDescription />
      <CommunityInfo />
      <CommunityInvite />
      <HelpForm />
    </main>
  );
}

export default Main;
