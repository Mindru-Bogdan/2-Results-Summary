import classes from './Result.module.css';

const Result = () => {
  return (
    <div className={classes.card}>
      <h3 className={classes.title}>Your Result</h3>
      <div className={classes.result}>
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <h2 className={classes.secondTitle}>Great</h2>
      <h4>You scored higher than 65% of the people who have taken these tests.</h4>
    </div>
  );
};

export default Result;
