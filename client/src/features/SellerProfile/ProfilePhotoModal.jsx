import EditProfile from "./EditProfile";

function ProfilePhotoModal({ isOpen, onClose, sellername, sellerAbout }) {
  if (!isOpen) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <EditProfile sellername={sellername} sellerAbout={sellerAbout} />
      </div>
    </div>
  );
}
const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(2px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    padding: "10px",
  },
  modalContent: {
    position: "relative",
    backgroundColor: "#000",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)",
    width: "100%", // full width on small screens
    maxWidth: "700px", // ⬅️ increased width (was 420px)
    maxHeight: "90vh",
    overflowY: "auto",
    color: "white",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#222",
    border: "none",
    fontSize: "20px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
    lineHeight: "32px",
    textAlign: "center",
  },
};

export default ProfilePhotoModal;
