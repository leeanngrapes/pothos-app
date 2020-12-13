import client from "./client";

const endpoint = "/plants";

const getPlants = () => client.get("/plants");

export default {
  getPlants,
};
