import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const DetailUser = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/users/${id}`);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(data);

  if (error) {
    return <p>nimadur xato</p>;
  }

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="m-auto w-[700px] p-[80px] text-center">
      <h2 className="text-center font-bold text-[34px] capitalize">
        {data?.name.firstname} {data?.name.lastname}
      </h2>
      <p className="text-[30px]">Username : {data?.username}</p>
      <p className="text-[30px]">Email :{data?.email}</p>
      <p className="text-[30px]">Phone :{data?.phone}</p>
      <p className="text-[30px]">Password :{data?.password}</p>
    </div>
  );
};

export default DetailUser;
