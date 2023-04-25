import ReactionLogo from '../../src/icon-reaction.svg';
import MemoryLogo from '../../src/icon-memory.svg';
import VerbalLogo from '../../src/icon-verbal.svg';
import VisualLogo from '../../src/icon-visual.svg';

import classes from './Summary.module.css';

const Summary = () => {
  return (
    <div className={classes.card}>
      <h3 className={classes.title}>Summary</h3>
      <ul>
        <li className={classes.reaction}>
          <img src={ReactionLogo}></img> Reaction
          <ol className={classes.total}>/ 100</ol>
          <ol className={classes.result}>80</ol>
        </li>
        <li className={classes.memory}>
          <img src={MemoryLogo}></img> Memory
          <ol className={classes.total}>/ 100</ol>
          <ol className={classes.result}>92</ol>
        </li>
        <li className={classes.verbal}>
          <img src={VerbalLogo}></img> Verbal
          <ol className={classes.total}>/ 100</ol>
          <ol className={classes.result}>61</ol>
        </li>
        <li className={classes.visual}>
          <img src={VisualLogo}></img> Visual
          <ol className={classes.total}>/ 100</ol>
          <ol className={classes.result}>72</ol>
        </li>
      </ul>
      <p className={classes.button}>Continue</p>
    </div>
  );
};

export default Summary;
