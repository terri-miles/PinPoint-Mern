import apiRequest from "./apiRequest";

export const Customers = async () => {
  const res = await apiRequest("/customers");
  return res.data;
};

export const Customerss = async ({ request, params }) => {
  const res = await apiRequest("/customers/single/" + params.id);
  return res.data;
};
