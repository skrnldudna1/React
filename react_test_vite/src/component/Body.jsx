import "./Body.css";
const Body = (props) => {
  console.log(props);

  return (
   <div className="body">
   {props.name}은 {props.location}에 거주합니다.
   </div>
  );
}

export default Body;

