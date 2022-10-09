const SectionWrapper = ({ fullWidth, children }) => {
  return (
    <section className={fullWidth ? "mx-auto" : "max-w-7xl mx-auto px-3"}>
      {children}
    </section>
  );
};

export default SectionWrapper;