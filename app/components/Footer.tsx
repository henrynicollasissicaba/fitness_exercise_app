const Footer = () => {
  const currentDate = new Date().getFullYear()

  return (
    <footer className="mt-10 bg-primary-700 p-2">
      <p className="text-center text-[10px] text-white">
        &copy; Desenvolvido por: Henry Nicollas Issicaba Neves - {currentDate}
      </p>
    </footer>
  );
};

export default Footer;
