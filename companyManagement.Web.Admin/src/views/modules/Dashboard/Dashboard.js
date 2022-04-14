import React, { useState, useEffect } from "react";
import DashboardService from "../../../services/dashboard/dashboard.service";
const Home = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    DashboardService.getAllPublicPosts().then(
      (response) => {
          setUsers(response.data.items);
          
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      
      <h3>
        {users.map((item,index)=>
          <div key={index}>{item.result.email}</div>  
        )}
      </h3>
    </div>
  );
};

export default Home;