function Button({ handleBtn, children }) {
  return (
    <button className="button" onClick={handleBtn}>
      {children}
    </button>
  );
}

export default Button;
