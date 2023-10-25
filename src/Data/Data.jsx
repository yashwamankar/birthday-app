import React, {useState} from "react";
import "./index.css";

export default function Data() {
const [data, setData] = useState([
    {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT5WyrCpsOq6azaREFJ6JkWM2bKK1Tte1rN3EUPGu&s",
      name: "M S Dhoni",
      age: 42,
    },
    {
      img: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/08/18155447/CJ_RS-OKLEY-0320_1115-1-1-scaled.jpg",
      name: "Rohit Sharma",
      age: 36,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_bA4I-cpZJLl6vrxaF8rZCH3fi0cdi0ltHw&usqp=CAU",
      name: "Virat Kohli",
      age: 34,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnweOG3vu0GPoIwC5W2D8XqSriksDAxwhzPsTfDyI0ALRSv8gTTwBvAj_UxfbJJUJbPx8&usqp=CAU",
      name: "Ravindra Jadeja",
      age: 34,
    },
    {
      img: "https://c.ndtvimg.com/2023-09/6q8o1t68_kuldeep-yadav-afp_625x300_18_September_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      name: "Kuldeep Yadav",
      age: 28,
    },
    
  ]);

const handleClick = () => {
    setData([]);
  };

  return (
    <div className="Profile">
      <section className="Card">
        <h3>Today Birthday {data.length} </h3>
        {data.map((e, i) => {
          return (
            <div className="cont" key={i}>
              <img src={e.img}></img>
              <div className="sub-cont">
                <label>{e.name}</label>
                <p>{e.age}</p>
              </div>
            </div>
          );
        })}
        <button onClick={handleClick}>Clear All</button>
      </section>
    </div>
  );
}
