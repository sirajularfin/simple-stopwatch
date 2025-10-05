import classes from './style.module.scss';

interface IProps {
  timeCounter: React.ReactNode;
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ timeCounter, children }) => {
  return (
    <div className={classes.mainLayout}>
      <section>{timeCounter}</section>
      <section className={classes.childContainer}>{children}</section>
    </div>
  );
};

export default MainLayout;
