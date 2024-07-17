import { config } from "./src/config/config.js";
import connectToDB from "./src/config/db.js";
import { server } from "./src/socket/socket.js";

const startServer = async () => {
  try {
    connectToDB();

    server.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
