import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const mongodb_url = process.env.MONGO_URL;
mongoose.connect(mongodb_url)
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, match: /^[0-9]{10}$/ },
    rollNumber: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    yearOfStudy: { type: Number, required: true, enum: [1, 2, 3, 4] },
    dateOfBirth: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }, // Automatically sets the date when the admin is created
})
const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: ['superadmin', 'admin'], default: 'admin' },
    phoneNumber: { type: String, match: /^[0-9]{10}$/ },  // Optional: Admin phone number (if needed)
    permissions: { 
      type: [String], 
      enum: ['manageUsers', 'viewReports', 'editContent'],  // Example permissions, you can add more
      default: ['manageUsers'] 
    },
    dateOfBirth: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }, // Automatically sets the date when the admin is created
  });

  const User = mongoose.model('User', userSchema);
  const Account = mongoose.model('Account', accountSchema);
  
  export { User, Account };