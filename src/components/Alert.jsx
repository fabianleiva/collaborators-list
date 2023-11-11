const Alert = ({ error }) => {
  return (
    <>
      <div className="errorMessage">
        <p className={error.color}>{error.message}</p>
      </div>
    </>
  );
};
export default Alert;
