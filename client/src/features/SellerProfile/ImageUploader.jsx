import React, { useState } from "react";
import Cropper from "react-easy-crop"; // npm install react-easy-crop

export default function AddProductModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [formData, setFormData] = useState({
    location: "",
    name: "",
    description: "",
  });

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
      setStep(2); // Go to crop step
    }
  };

  const handleCropComplete = (_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Saving product:", formData, croppedAreaPixels);
    setStep(4); // Go to save step
  };

  return (
    <div style={design.modalOverlay}>
      <div style={design.modalCard}>
        {/* Back Button */}
        {step > 1 && (
          <button style={design.backButton} onClick={() => setStep(step - 1)}>
            ←
          </button>
        )}
        {/* Close Button */}
        <button style={design.closeButton} onClick={onClose}>
          ✕
        </button>

        {/* Step 1: Upload */}
        {step === 1 && (
          <div style={design.uploadSection}>
            <label style={design.uploadButton}>
              Select from your computer
              <input type="file" onChange={onFileChange} hidden />
            </label>
          </div>
        )}

        {/* Step 2: Crop */}
        {step === 2 && (
          <div style={{ flex: 1, position: "relative", background: "#000" }}>
            <Cropper
              image={imageSrc}
              crop={{ x: 0, y: 0 }}
              zoom={1}
              aspect={4 / 3}
              onCropChange={() => {}}
              onCropComplete={handleCropComplete}
              onZoomChange={() => {}}
            />
            <button style={design.submitButton} onClick={() => setStep(3)}>
              Next →
            </button>
          </div>
        )}

        {/* Step 3: Form */}
        {step === 3 && (
          <div style={design.formSection}>
            <form style={design.form} onSubmit={handleFormSubmit}>
              <label style={design.label}>
                Add item location:
                <input
                  type="text"
                  name="location"
                  style={design.input}
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </label>

              <label style={design.label}>
                Add Item Name:
                <input
                  type="text"
                  name="name"
                  style={design.input}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </label>

              <label style={design.label}>
                Add Item Description:
                <textarea
                  name="description"
                  style={design.textarea}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </label>

              <button type="submit" style={design.submitButton}>
                Save Product
              </button>
            </form>
          </div>
        )}

        {/* Step 4: Save Confirmation */}
        {step === 4 && (
          <div style={design.uploadSection}>
            <h2>✅ Product Saved!</h2>
            <button style={design.submitButton} onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Keep your existing design object but ensure modalCard is flexible
const design = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(3px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "10px",
  },
  modalCard: {
    display: "flex",
    flexDirection: "column",
    width: "90vw",
    height: "90vh",
    maxWidth: "1000px",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#fff",
    color: "#000",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#936e6e",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },
  backButton: {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#444",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },
  uploadSection: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#232121",
    color: "#fff",
    flexDirection: "column",
    gap: "10px",
  },
  uploadButton: {
    padding: "12px 20px",
    backgroundColor: "#444",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  formSection: {
    flex: 1,
    backgroundColor: "rgb(29 31 37)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "80%",
  },
  label: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "8px",
    marginTop: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "8px",
    marginTop: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    resize: "vertical",
    height: "80px",
  },
  submitButton: {
    padding: "10px",
    backgroundColor: "#444",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};
