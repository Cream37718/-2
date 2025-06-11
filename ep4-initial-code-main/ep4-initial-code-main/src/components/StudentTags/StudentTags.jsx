import "./StudentTags.css"

function StudentTags(props) {
  const age = props.age;
  let retired = age >= 60;
  let year = new Date().getFullYear() - age;

  const reminder = year % 4;

  switch (reminder) {
    case 1:
      return(
        <div className="AgeGroup">
          <div className = {retired ? "Tag Retired" : "Tag working"}>
            {retired ?  "Retired" : "Working"}
          </div>
          <div className="Tag Red">{year}</div>
        </div>
      )
      break;
    case 2:
      return(
        <div className="AgeGroup">
          <div className = {retired ? "Tag Retired" : "Tag working"}>
            {retired ?  "Retired" : "Working"}
          </div>
          <div className="Tag Green">{year}</div>
        </div>
      )
      break;
    case 3:
      return(
        <div className="AgeGroup">
          <div className = {retired ? "Tag Retired" : "Tag working"}>
            {retired ?  "Retired" : "Working"}
          </div>
          <div className="Tag LightBlue">{year}</div>
        </div>
      )
      break;
    default:
      return(
        <div className="AgeGroup">
          <div className = {retired ? "Tag Retired" : "Tag working"}>
            {retired ?  "Retired" : "Working"}
          </div>
          <div className="Tag Blue">{year}</div>
        </div>
      )
  }

}

export default StudentTags;