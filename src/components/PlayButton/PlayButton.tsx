interface IProps {
	isPlaying: boolean;
}

const PlayButton: React.FC<IProps> = ({ isPlaying }) => {
	return <button>{isPlaying ? 'Pause' : 'Play'}</button>;
};

export default PlayButton;
