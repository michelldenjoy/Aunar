import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(express.json());


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://aunar.vercel.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
}));

// Ruta test
app.get("/test", (req, res) => {
  res.json({ ok: true, message: "CORS OK" });
});

// Ruta recaptcha
app.post("/api/verify-recaptcha", async (req, res) => {
  const { token } = req.body;
  console.log("Token:", token);

  if (!token) return res.status(400).json({ success: false });

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token,
        },
      }
    );

    if (response.data.success) {
      return res.json({ success: true });
    } else {
      return res.status(400).json({
        success: false,
        errorCodes: response.data["error-codes"],
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
