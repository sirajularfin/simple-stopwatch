interface IProps {
	count?: number;
}

const TimeTicks: React.FC<IProps> = ({ count }) => {
	return <div>Ticks Component: {count}</div>;
};

export default TimeTicks;
