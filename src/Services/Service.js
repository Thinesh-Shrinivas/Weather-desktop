import axios from "axios";

class ServiceInstance {
  getmethod() {
    return axios.get("https://gorest.co.in/public/v1/users");
  }
}

export default ServiceInstance;
