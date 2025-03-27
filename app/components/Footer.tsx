const Footer = () => {
  const currentDate = new Date().getFullYear()

  return (
    <footer className="mt-10 bg-primary-700 p-2">
      <p className="text-center text-xs text-white font-bold">
        &copy; Henry Nicollas Issicaba Neves - All Rights Reserved - {currentDate}
      </p>
    </footer>
  );
};

export default Footer;
