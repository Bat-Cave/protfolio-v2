const SectionWrapper = ({ fullWidth, children }) => {
  return (
    <div className={fullWidth ? "mx-auto" : "max-w-7xl mx-auto"}>
      {children}
    </div>
  );
};

export default SectionWrapper;
