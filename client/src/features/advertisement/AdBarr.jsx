function AdBarr({ itemName, discount }) {
  let message =
    " 🎉 Get 10 % OFF on all  item ! Limited Time Offer! 🎉 Borrow Now from ShopeZone! 🔥";

  if ((itemName, discount)) {
    message = `🎉 Get ${discount} % OFF on all  ${itemName} ! Limited Time Offer! 🎉 Borrow Now from ShopeZone! 🔥`;
  }
  return (
    <div
      style={{
        backgroundColor: "#fffae6",
        padding: "10px 0",
        overflow: "hidden",
        position: "relative",
        whiteSpace: "nowrap",
        borderTop: "1px solid #ccc",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div
        style={{
          display: "inline-block",
          paddingLeft: "100%",
          animation: "ghuraghuri 15s ease-out infinite",
          fontWeight: "bold",
          fontSize: "16px",
          color: "#333",
        }}
      >
        {message}
      </div>

      <style>
        {`
          @keyframes ghuraghuri {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
}

export default AdBarr;
