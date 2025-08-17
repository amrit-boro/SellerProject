import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";

function EditProfile({
  sellername,
  sellerAbout,
  sellerProfilePic,
  sellerGender,
}) {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: sellername || "",
      about: sellerAbout || "",
      gender: sellerGender || "Prefer not to say",
    },
  });
  const sellerToken = localStorage.getItem("sellerToken");

  const [previewImage, setPreviewImage] = useState(null);
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const res = await fetch(
        "http://localhost:3002/api/v1/seller/updateSeller",
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${sellerToken}`,
          },
          body: formData,
        }
      );
      if (!res.ok) {
        throw new Error("Failed to update profile");
      }
      return res.json();
    },
  });

  // if seller info updates dynamically, sync it
  useEffect(() => {
    if (sellername) setValue("name", sellername);
    if (sellerAbout) setValue("about", sellerAbout);
    if (sellerGender) setValue("gender", sellerGender);
  }, [sellername, sellerAbout, sellerGender, setValue]);

  const onSubmit = (data) => {
    const file = data.image?.[0]; // should now work

    console.log(data);

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", data.name);
    formData.append("about", data.about);
    mutation.mutate(formData);
  };

  return (
    <form style={styles.main_container} onSubmit={handleSubmit(onSubmit)}>
      <h2 style={styles.title}>Edit Profile</h2>

      {/* Profile Header */}
      <div style={styles.profile_header}>
        <img
          src={
            previewImage || sellerProfilePic || "https://via.placeholder.com/70"
          }
          alt="sellerPhoto"
          style={styles.profile_pic}
        />
        <div style={styles.profile_info}>
          <p style={styles.username}>batto_kenshin</p>
          <span style={styles.name}>{sellername}</span>
        </div>
        <label
          style={{
            backgroundColor: "#3535eb",
            padding: "10px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Change Photo
          <input
            type="file"
            style={styles.btn}
            accept="image/*"
            {...register("image", {
              onChange: (e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setPreviewImage(URL.createObjectURL(file));
                }
              },
            })}
          />
        </label>
      </div>

      {/* Edit name */}
      <div style={styles.form_group}>
        <label style={styles.label}>Edit Name</label>
        <input
          type="text"
          style={styles.input}
          {...register("name")}
          placeholder="Seller Name"
        />
      </div>

      {/* About */}
      <div style={styles.form_group}>
        <label style={styles.label}>About</label>
        <textarea
          style={styles.textarea}
          rows="2"
          maxLength="150"
          {...register("about")}
          placeholder="Tell us about yourself"
        />
        {/* Word count can be handled using watch if you want live updates */}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          backgroundColor: "#3535eb",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "8px",
          marginTop: "20px",
          color: "white",
          border: "none",
        }}
      >
        Save Changes
      </button>
    </form>
  );
}

const styles = {
  main_container: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    maxWidth: "650px",
    margin: "20px auto",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "12px",
  },
  title: { marginBottom: "20px", fontSize: "20px", fontWeight: "bold" },
  profile_header: {
    display: "flex",
    alignItems: "center",
    background: "#1e1e1e",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  profile_pic: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    marginRight: "15px",
    objectFit: "cover",
  },
  profile_info: { flex: 1 },
  username: { margin: 0, fontWeight: "bold", fontSize: "16px" },
  name: { fontSize: "14px", color: "#aaa" },
  btn: { display: "none" },
  form_group: { marginBottom: "20px" },
  label: { display: "flex", fontSize: "14px", marginBottom: "6px" },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    background: "#1e1e1e",
    color: "white",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    background: "#1e1e1e",
    color: "white",
    fontSize: "14px",
    boxSizing: "border-box",
  },
};

export default EditProfile;
