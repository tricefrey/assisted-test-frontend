import http from "./http-common";

class QuestionServices {
  q_insert(data, token) {
    return http.post("/question/insert", data, { headers: { Authorization: token }});
  }
  q_find(param) {
    return http.get("/question", param);
  }
  q_findById(id) {
    return http.get(`/question/${id}`);
  }
  //update param only c_id & content
  q_update(id, data, token) {
    return http.put(`/question/${id}`, data, { headers: { Authorization: token }});
  }
  
  q_delete(id, token) {
    return http.delete(`/question/${id}`, { headers: { Authorization: token }});
  }
  a_insert(data, token) {
    return http.post("/answer/insert", data, { headers: { Authorization: token }});
  }
  a_find(param) {
    return http.get("/answer", param);
  }
  a_findById(id) {
    return http.get(`/answer/${id}`);
  }
  a_update(id, data, token) {
    return http.put(`/answer/${id}`, data, { headers: { Authorization: token }});
  }
  a_delete(id, data, token) {
    return http.delete(`/answer/${id}`, data, { headers: { Authorization: token }});
  }
}
export default new QuestionServices();
