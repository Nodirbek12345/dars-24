import React from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Skeleton from "../../components/products/Skeleton";
const Users = () => {
  const { data, error, loading } = useFetch("/users", {
    limit: 10,
    skip: 4,
  });
  console.log(data);
  const navigate = useNavigate();
  if (error) {
    return (
      <div>
        <p>something went wrong</p>
      </div>
    );
  }
  {
    return (
      <div className="bg-[#e1e4e7] mt-[20px] pt-[20px]">
        <h1 className="text-center text-[26px] ">Users</h1>
        <div className="p-[70px] grid grid-cols-4 gap-10">
          {data?.map((user) => (
            <div
              key={user.id}
              onClick={() => {
                console.log(user.id);
                navigate(`/users/${user.id}`);
              }}
              className="p-[12px] bg-white shadow-xl  rounded-xl "
            >
              <h2 className="text-center font-bold text-[24px] capitalize">
                {user.name.firstname} {user.name.lastname}
              </h2>
              <h3>Uxsername : {user.username}</h3>
              <p>Email :{user.email}</p>
              <p>Phone :{user.phone}</p>
              <p>Password :{user.password}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
export default Users;
