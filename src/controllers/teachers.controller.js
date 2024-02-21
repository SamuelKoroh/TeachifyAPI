export default class TeacherController {
  static getTeachers(req, res) {
    res.status(200).send([{ name: "teacher" }]);
  }

  static postTeacher(req, res) {
    res.status(200).send({ name: "teacher" });
  }
}
