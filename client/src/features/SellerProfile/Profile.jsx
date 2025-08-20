import { useEffect, useState } from "react";
import SellerProducts from "./SellerProducts";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Pencil } from "lucide-react";
import ProfilePhotoModal from "./ProfilePhotoModal";

const categories = ["Electronics", "Clothing", "Home", "Toys", "Books"];

const Profile = () => {
  const [sellerData, setSellerData] = useState(null);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const sellerToken = localStorage.getItem("sellerToken");

  useEffect(() => {
    if (sellerToken) {
      try {
        const decoded = jwtDecode(sellerToken);
        console.log(decoded);

        fetch(`http://localhost:3002/api/v1/seller/${decoded.id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("data: ", data?.data?.seller);
            setSellerData(data?.data?.seller);
          })
          .catch((error) => {
            console.log("Failed to fetch seller Data", error);
          });
      } catch (error) {
        console.log("Invalid Token", error);
      }
    }
  }, []);

  console.log(sellerToken);

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const res = await fetch(
        "http://localhost:3002/api/v1/product/addproduct",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${sellerToken}`, // Make sure sellerToken is a valid string token
            // DO NOT set Content-Type when sending FormData — the browser sets it automatically with boundary
          },
          body: formData, //
        }
      );

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData?.message || "Failed to add product.");
      }
      return res.json();
    },

    onSuccess: () => {
      alert("Product added succesfully");
      reset();
      navigate(-1);
    },
    onError: (error) => {
      alert(error.response?.data?.message || error.message);
    },
  });

  const onSubmit = (data) => {
    const file = data.image[0]; // Get the first file

    const formData = new FormData();
    formData.append("image", file);
    formData.append(
      "location",
      JSON.stringify({
        type: "Point",
        coordinates: [91.7362, 26.1445], // longitude, latitude
        address: data.location,
        description: "Seller shop location",
      })
    );
    formData.append("itemName", data.itemName);
    formData.append("price", data.price);
    formData.append("description", data.description);
    mutation.mutate(formData); // <-- your API call
  };
  const [isOpen, setIsOpen] = useState(false);

  const sellerId = sellerData?._id;
  const sellername = sellerData?.sellerName || "Seller";
  const sellerAbout = sellerData?.sellerAbout || "No description available";
  const sellerProfile = sellerData?.SellerProfilePic || "default.jpg";

  return (
    <>
      <header className="top-bar2">
        <Link className="logo2" to={"/"}>
          ShopZone
        </Link>
      </header>

      <div style={styles.container}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          {!sellerData ? (
            <p>Loading...</p>
          ) : (
            <div style={styles.profileSection}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={sellerProfile}
                  alt="Profile"
                  style={{
                    height: "70px",
                    width: "70px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #ccc",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <Pencil
                  size={20}
                  style={styles.pencil}
                  onClick={() => setIsOpen(true)}
                />
                <ProfilePhotoModal
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  sellername={sellername}
                  sellerAbout={sellerAbout}
                  sellerProfile={sellerProfile}
                  onClose={() => setIsOpen(false)}
                />
              </div>
              <p>{sellername}</p>
              <p>About: {sellerAbout}</p>
              <p>My ratings: ⭐ {sellerData?.rating || "4.5"}</p>
            </div>
          )}

          <div style={styles.sidebarButtons}>
            {/* <button onClick={() => setShowEditor(true)}>Edit Profile</button> */}
            <button
              onClick={() => {
                setShowAddProductForm(true);
              }}
            >
              Add Product
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          <div style={styles.navbar}>
            {categories.map((cat, index) => (
              <div key={index} style={styles.navItem}>
                {cat}
              </div>
            ))}
            <div
              style={{
                marginLeft: "auto",
                cursor: "pointer",
                display: "flex",
                gap: "2rem",
              }}
            >
              <div>Orders</div>
              <div>☰</div>
            </div>
          </div>

          <div style={styles.scrollableContent}>
            <SellerProducts sellerId={sellerId} />
          </div>
        </div>
      </div>

      {showAddProductForm && (
        <div style={design.modalOverlay}>
          <div style={design.modalCard}>
            <button
              onClick={() => setShowAddProductForm(false)}
              style={design.closeButton}
            >
              ✕
            </button>

            {/* Upload Section */}
            <div style={design.uploadSection}>
              {!previewImage ? (
                <label style={{ ...design.uploadButton, zIndex: 1 }}>
                  Select from your computer
                  <input
                    type="file"
                    multiple={false}
                    accept="image/*"
                    style={{ display: "none" }}
                    {...register("image", {
                      required: true,
                      onChange: (e) => {
                        if (e.target.files[0]) {
                          setPreviewImage(
                            URL.createObjectURL(e.target.files[0])
                          );
                        }
                      },
                    })}
                  />
                </label>
              ) : (
                <label style={design.imageWrapper}>
                  <img
                    src={previewImage}
                    alt="Preview"
                    style={design.fullImage}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    {...register("image", {
                      required: true,
                      onChange: (e) => {
                        if (e.target.files[0]) {
                          setPreviewImage(
                            URL.createObjectURL(e.target.files[0])
                          );
                        }
                      },
                    })}
                  />
                </label>
              )}
            </div>

            {/* Form Section */}
            <div style={design.formSection}>
              <form style={design.form} onSubmit={handleSubmit(onSubmit)}>
                <label style={design.label}>
                  Add item location:
                  <input
                    {...register("location", { required: true })}
                    placeholder="Location..."
                  />
                </label>

                <label style={design.label}>
                  Add Item Name:
                  <input {...register("itemName", { required: true })} />
                </label>

                <label style={design.label}>
                  Add Price:
                  <input
                    type="number"
                    {...register("price", { required: true })}
                  />
                </label>

                <label style={design.label}>
                  Add Item Description:
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                      minLength: {
                        value: 10,
                        message: "Must be at least 10 characters",
                      },
                      maxLength: {
                        value: 500,
                        message: "Must be less than 500 characters",
                      },
                    })}
                  />
                </label>

                <button type="submit" disabled={mutation?.isLoading}>
                  {mutation?.isLoading ? "Uploading..." : "Add Product"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  pencil: {
    width: `20px`,
    height: "20px",
    borderRadius: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ebe4e4",
    border: "1px solid rgba(0,0,0,0.1)",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    cursor: "pointer",
    transition: "transform 0.15s ease, box-shadow 0.2s ease",
  },
  sidebar: {
    width: "70vh",
    borderRight: "1px solid #ccc",
    padding: "20px",
    boxSizing: "border-box",
  },
  profileSection: {
    textAlign: "center",
    marginBottom: "20px",
  },
  sidebarButtons: {
    display: "flex",
    gap: "5px",
    justifyContent: "center",
  },
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  },
  navbar: {
    display: "flex",
    borderBottom: "1px solid #ccc",
    padding: "10px 20px",
    alignItems: "center",
    gap: "15px",
    backgroundColor: "rgb(231 222 222)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  scrollableContent: {
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden",
  },
  navItem: {
    padding: "6px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

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
    padding: "10px", // Prevent overflow on very small screens
  },

  imageWrapper: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    cursor: "pointer",
  },

  fullImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
  },

  modalCard: {
    display: "flex",
    flexDirection: "row",
    width: "90vw", // responsive width
    height: "90vh", // responsive height
    maxWidth: "1200px", // cap for large screens
    maxHeight: "800px", // cap for large screens
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    flexWrap: "wrap", // allow stacking in smaller devices
  },

  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#936e6e",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    cursor: "pointer",
    zIndex: 2,
  },

  backButton: {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#936e6e",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    cursor: "pointer",
    zIndex: 2,
  },

  uploadSection: {
    flex: 1,
    minWidth: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "rgb(35 33 33)",
    height: "100%",
    width: "100%",
  },

  uploadButton: {
    padding: "10px 20px",
    backgroundColor: "#444",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },

  formSection: {
    flex: 0.55,
    minWidth: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(29 31 37)",
    color: "white",
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

  // Media query simulation in JS (for inline styles)
  "@media (max-width: 768px)": {
    modalCard: {
      flexDirection: "column",
      height: "auto",
    },
    uploadSection: {
      height: "200px",
    },
    formSection: {
      padding: "20px 0",
    },
  },
};

export default Profile;
