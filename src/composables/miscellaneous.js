import { ref } from "vue";
import axios from "axios";

export default function useMiscellaneous() {
  const roles = ref([]);

  const getRoles = async () => {
    try {
      // let response = await axios.get("https://crudcrud.com/api/57a6eed1d3bc4ef587f50d2e7411950a/roles", {
      console.log("Fetching roles...");
      let response = await axios.get(
        "https://us-east4.gcp.data.mongodb-api.com/app/api-endpoints-ewdzk/endpoint/roles"
      );
      roles.value = response.data.items;
    } catch (error) {
      console.log(error);
    }
  };

  const capitalize = (name) => {
    const mySentence = name;
    const words = mySentence.split(" ");

    return words
      .map((word) => {
        return word[0].toUpperCase();
      })
      .join("");
  };

  return {
    roles,
    getRoles,
    capitalize,
  };
}
