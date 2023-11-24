import axios from "axios";

import { environments } from "../../src/constants/environments";

const { TECH_IN_AFRICA } = environments;

// Get the articles.
export default async function getArticles() {
  try {
    return await axios
      .get(TECH_IN_AFRICA)
      .then(response => {
        return response.data;
      })
  } catch (error) {
    console.log("Error in fetching the articles",error)
  }
}