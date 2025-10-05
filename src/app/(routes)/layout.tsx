import '@/common/styles/globals.scss';

interface IProps {
  timeCounter: React.ReactNode;
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ timeCounter, children }) => {
  return (
    <div>
      <section>{timeCounter}</section>
      <section>{children}</section>
    </div>
  );
};

export default MainLayout;
