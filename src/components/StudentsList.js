// function StudentsList(props){
function StudentsList({ listOfStudents, currentYear }) {
  // let {listOfStudents} = props;

  return (
    <>
      <h3>This is students list component</h3>
        {listOfStudents.map((student)=>{
            return(
                <>
                    <h4>Student Name : {student.name}</h4>
                    <p>Grade : {student.grade}</p>
                </>
            )
        })}
      <h4>Current Year is :{currentYear}</h4>
    </>
  );
}

export default StudentsList;
