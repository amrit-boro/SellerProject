Sure, Amrit! Here are **common MongoDB operations** you can perform directly in the **MongoDB shell** (or using a terminal like `mongosh`):

---

### 🟢 **1. Show Databases**

```bash
show dbs
```

### 🟢 **2. Use/Create Database**

```bash
use myDatabase
```

> If `myDatabase` doesn't exist, it will be created when you insert data.

---

### 🟢 **3. Show Collections in DB**

```bash
show collections
```

---

### 🟢 **4. Create/Insert Document**

```bash
db.users.insertOne({ name: "Amrit", age: 23 })
```

```bash
db.users.insertMany([
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
])
```

---

### 🟢 **5. Find Data**

```bash
db.users.find()                        // All documents
db.users.find({ age: 25 })            // Filter
db.users.findOne({ name: "Amrit" })   // First match only
```

---

### 🟢 **6. Update Document**

```bash
db.users.updateOne(
  { name: "Amrit" },
  { $set: { age: 24 } }
)

db.users.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: "young" } }
)
```

---

### 🟢 **7. Delete Document**

```bash
db.users.deleteOne({ name: "John" })

db.users.deleteMany({ age: { $gt: 30 } })
```

---

### 🟢 **8. Count Documents**

```bash
db.users.countDocuments()
db.users.countDocuments({ age: 25 })
```

---

### 🟢 **9. Sorting**

```bash
db.users.find().sort({ age: 1 })   // Ascending
db.users.find().sort({ age: -1 })  // Descending
```

---

### 🟢 **10. Limit / Skip**

```bash
db.users.find().limit(5)
db.users.find().skip(5)
```

---

### 🟢 **11. Drop Collection or DB**

```bash
db.users.drop()   // Drop collection
db.dropDatabase() // Drop entire DB
```

---

Let me know if you want **aggregation**, **indexing**, or **advanced queries** too.
