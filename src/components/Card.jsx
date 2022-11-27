const Card = ({ bordered, children }) => {
  return (
    <div
      className={
        bordered
          ? "p-1 bg-gradient-to-br from-secondary-focus to-primary-focus rounded-2xl"
          : ""
      }
    >
      <div className="card w-full h-full lg:max-w-md bg-neutral shadow-xl text-left">
        <div className="card-body p-4 sm:p-8">{children}</div>
      </div>
    </div>
  );
};

export default Card;
