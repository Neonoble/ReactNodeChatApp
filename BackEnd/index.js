const express = require("express");
const cors = require("cors");
const axios = require('axios') ;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
      const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {'private-Key':'6314ff7d-9ce5-4ac5-ae09-a629a80eb098'}}
      )
      return res.status(r.status).json(r.data)
  } catch (err) {
      return res.status(err.response.status).json(err.response.data)
  }
 
});

app.listen(3001);