const SectionWrapper = ({ fullWidth, children }) => {
  return (
    <section
      className={
        fullWidth ? "mx-auto" : "max-w-7xl mx-auto py-16 px-3 lg:px-12"
      }
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
