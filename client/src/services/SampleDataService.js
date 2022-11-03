import http from "./API";


class SampleDataService {
  getAll() {
    return http.get("api/sample");
  }

  get(id) {
    return http.get(`api/sample/${id}`);
  }

  create(data) {
    return http.post("api/sample", data);
  }

  update(id, data) {
    return http.put(`api/sample/${id}`, data);
  }

  delete(id) {
    return http.delete(`api/sample/${id}`);
  }

  deleteAll() {
    return http.delete(`api/sample`);
  }

  findByTitle(title) {
    return http.get(`api/sample?title=${title}`);
  }
}

export default new SampleDataService();