const express = require("express");
const cors = require("cors");
const pokemonRoute = require("./routes/pokemon");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/pokemon", pokemonRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
