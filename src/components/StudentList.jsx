// 2
const students = ["Marc", "Lucy", "Anna"];

function StudentList() {
  return (
    <div className="list">
      <h2>StudentList</h2>
      {students.map((name, index) => (
        <p key={index + name}> {name}</p>
      ))}
    </div>
  );
}

export default StudentList;
