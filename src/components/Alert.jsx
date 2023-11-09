const Alert = ({ error }) => {
  return (
    <>
      <div>
        <p className={error.color}>{error.message}</p>
      </div>
    </>
  );
};
export default Alert;
