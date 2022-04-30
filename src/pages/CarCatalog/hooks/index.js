import { useQuery, useMutation } from "react-query";

import api from "../../../api";
import { DEFAULT_FILTER_OPTION } from "../constants";

export const useCars = ({ filter }) => {
  const hasFilter = filter.key !== DEFAULT_FILTER_OPTION.key;

  return useQuery(
    "cars",
    async () => {
      const res = await api({
        method: "GET",
        url: "/cars",
        ...(hasFilter && {
          params: {
            make: filter.key,
          },
        }),
      });

      sessionStorage.setItem("token", res.headers["your-token"]);

      return res.data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
      select: (data) => {
        const filterOptions = data.allMakes.map((option) => ({
          key: option,
          label: option,
        }));
        return {
          ...data,
          allMakes: filterOptions || [],
        };
      },
    }
  );
};

export const useCarDetails = () => {
  const mutation = useMutation(
    (id) =>
      api({
        method: "GET",
        url: `/cars/${id}`,
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      }).then((res) => res.data),

    { retry: false }
  );

  return mutation;
};
