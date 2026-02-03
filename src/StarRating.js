const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const containerStarStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "0",
  margin: 0,
};
export default function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={containerStarStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
