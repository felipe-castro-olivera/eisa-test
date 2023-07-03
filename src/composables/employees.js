import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useEmployees() {
  const employee = ref([]);
  const employees = ref([]);

  const errors = ref([]);
  const router = useRouter();

  const getEmployees = async () => {
    try {
      // let response = await axios.get("https://crudcrud.com/api/57a6eed1d3bc4ef587f50d2e7411950a/employees", {
      console.log("Fetching all employees...");
      let response = await axios.get(
        "https://us-east4.gcp.data.mongodb-api.com/app/api-endpoints-ewdzk/endpoint/employees"
      );
      employees.value = response.data.items;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getEmployee = async (id) => {
    let response = await axios.get(`/api/employees/${id}`);
    employee.value = response.data;
  };

  const storeEmployee = async (data) => {
    errors.value = [];
    try {
      await axios.post("/api/employees", data);
      await router.push({ name: "employees.index" });
    } catch (e) {
      if (e.response.status === 400) {
        for (const key in e.response.data.errors) {
          errors.value.push(e.response.data.errors[key][0]);
        }
      }
    }
  };

  const updateEmployee = async (id) => {
    errors.value = [];
    try {
      await axios.put(`/api/employees/${id}`, employee.value);
      await router.push({ name: "employees.index" });
    } catch (e) {
      if (e.response.status === 400) {
        for (const key in e.response.data.errors) {
          errors.value.push(e.response.data.errors[key][0]);
        }
      }
    }
  };

  const deleteEmployee = async (_id) => {
    console.log(_id);
    const response = await axios.delete(
      `https://us-east4.gcp.data.mongodb-api.com/app/api-endpoints-ewdzk/endpoint/employee?id=${_id}`
    );

    console.log("DELETE-EMPLOYEE>", response);
    return response;
  };

  return {
    employee,
    employees,
    getEmployee,
    getEmployees,
    storeEmployee,
    updateEmployee,
    deleteEmployee,
    errors,
  };
}
