const Card = ({ children }) => {
  return (
    <div className="card w-full lg:max-w-md bg-neutral shadow-xl mt-8 text-left">
      <div className="card-body p-4 sm:p-8">{children}</div>
    </div>
  );
};

export default Card;
