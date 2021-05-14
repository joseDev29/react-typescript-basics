import { useState, useEffect, useRef } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResList, User } from "../interfaces/reqRes";

type PaginateState = "all" | "previous" | "next";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const pageRef = useRef<number>(1);

  const [paginate, setPaginate] = useState<PaginateState>("next");

  const loadUsers = async () => {
    const res = await reqResApi.get<ReqResList>(`/users`, {
      params: {
        page: pageRef.current,
      },
    });

    if (res.data.data.length) {
      setUsers(res.data.data);

      if (pageRef.current === 1) setPaginate("next");
      else if (res.data.page * res.data.per_page >= res.data.total)
        setPaginate("previous");
      else setPaginate("all");
    } else {
      setPaginate("previous");
      pageRef.current--;
    }
  };

  const nextPage = () => {
    pageRef.current++;
    loadUsers();
  };

  const previousPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      loadUsers();
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    nextPage,
    previousPage,
    page: pageRef.current,
    paginate,
  };
};
