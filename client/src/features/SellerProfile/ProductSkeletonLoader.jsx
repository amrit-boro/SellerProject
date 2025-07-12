function ProductSkeletonLoader({ count }) {
  return (
    <>
      <style>{skeletonAnimation}</style>
      <div style={skeletonStyles.container}>
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <div key={i} style={skeletonStyles.card}>
              <div style={skeletonStyles.image}></div>
              <div style={skeletonStyles.textLine}></div>
              <div style={skeletonStyles.smallLine}></div>
              <div style={skeletonStyles.smallLine}></div>
            </div>
          ))}
      </div>
    </>
  );
}

const skeletonStyles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    padding: "20px",
    justifyContent: "center",
  },
  card: {
    width: "220px",
    height: "320px",
    backgroundColor: "#f2f2f2",
    borderRadius: "12px",
    padding: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    animation: "pulse 1.5s infinite ease-in-out",
  },
  image: {
    width: "100%",
    height: "200px",
    borderRadius: "10px",
    backgroundColor: "#e0e0e0",
  },
  textLine: {
    height: "16px",
    borderRadius: "6px",
    backgroundColor: "#e0e0e0",
  },
  smallLine: {
    width: "60%",
    height: "14px",
    borderRadius: "6px",
    backgroundColor: "#d4d4d4",
  },
};

// Optional CSS (in <style> or your global stylesheet)
const skeletonAnimation = `
@keyframes pulse {
  0% { background-color: #eeeeee; }
  50% { background-color: #dddddd; }
  100% { background-color: #eeeeee; }
}
`;

export default ProductSkeletonLoader;
