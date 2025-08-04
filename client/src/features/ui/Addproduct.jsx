// import { useState } from "react";

// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     location: "",
//     name: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     console.log("Selected file:", file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//   };

//   return (
//     <div style={styles.main}>
//       {/* Centered Card */}
//       <div style={styles.card}>
//         {/* LEFT: Upload Section */}
//         <div style={styles.upload}>
//           <p style={{ color: "#333" }}>Drag photos and videos here</p>
//           <label style={styles.box}>
//             select from your computer
//             <input type="file" onChange={handleFileUpload} hidden />
//           </label>
//         </div>

//         {/* RIGHT: Form Section */}
//         <div style={styles.form}>
//           <form
//             onSubmit={handleSubmit}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "1rem",
//               width: "80%",
//             }}
//           >
//             <label style={{ display: "flex", flexDirection: "column" }}>
//               Add item location:
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 style={styles.addItem}
//               />
//             </label>

//             <label style={{ display: "flex", flexDirection: "column" }}>
//               Add Item Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 style={styles.itemName}
//               />
//             </label>

//             <label style={{ display: "flex", flexDirection: "column" }}>
//               Add Item Description:
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 style={styles.itemDescription}
//               />
//             </label>

//             <button type="submit" style={styles.submit}>
//               Submit Product
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;
