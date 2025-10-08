import classes from './style.module.scss';

const COMPONENT_SIZE = 50;
const THICKNESS = 4;

const Loading = () => {
  return (
    <svg
      width={COMPONENT_SIZE}
      height={COMPONENT_SIZE}
      viewBox="0 0 44 44"
      className={classes.loader}
    >
      <circle strokeWidth={THICKNESS}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 22 22"
          to="360 22 22"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default Loading;
