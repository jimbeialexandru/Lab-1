import Person from "./firstInterface"

interface Student extends Person {
    univerity: string
    speciality: string
}

export default Student;