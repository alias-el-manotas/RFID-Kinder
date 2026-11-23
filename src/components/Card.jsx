function Card({ titulo, children }) {
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        border: "1px solid #bdbdbd",
        borderRadius: "12px",
        padding: "15px",
        marginBottom: "20px",
      }}
    >
      <h2>{titulo}</h2>

      {children}
    </div>
  );
}

export default Card;