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
        console.log("Fetching all employees...")
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
    let response = await http.get(`/api/employees/${id}`);
    employee.value = response.data;
  };

  const storeemployee = async (data) => {
    errors.value = [];
    try {
      await http.post("/api/employees", data);
      await router.push({ name: "employees.index" });
    } catch (e) {
      if (e.response.status === 400) {
        //Bad request, for validation in .net core

        for (const key in e.response.data.errors) {
          errors.value.push(e.response.data.errors[key][0]);
        }
      }
    }
  };

  const updateemployee = async (id) => {
    errors.value = [];
    try {
      // http method must be put for match put method in .net core api
      await http.put(`/api/employees/${id}`, employee.value);
      await router.push({ name: "employees.index" });
    } catch (e) {
      if (e.response.status === 400) {
        //Bad request, for validation

        for (const key in e.response.data.errors) {
          errors.value.push(e.response.data.errors[key][0]);
        }
      }
    }
  };

  const destroyemployee = async (id) => {
    await http.delete(`/api/employees/${id}`);
  };

  return {
    employee,
    employees,
    getEmployee,
    getEmployees,
    storeemployee,
    updateemployee,
    destroyemployee,
    errors,
  };
}
