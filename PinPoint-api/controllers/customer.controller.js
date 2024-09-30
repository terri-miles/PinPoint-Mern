import createError from "../utils/createError.js";
import Customer from "../models/customer.moder.js";

export const createCustomer = async (req, res, next) => {
  if (!req.userId)
    return next(createError(403, "Only User can create a customer!"));

  const newCustomer = new Customer({
    ...req.body,
    userId: req.userId,
  });
  try {
    const savedCustomer = await newCustomer.save();
    res.status(201).send(savedCustomer);
    
  } catch (error) {
    next(error);
  }
};

export const getCustomers = async (req, res, next) => {
  const { search } = req.query;
  const filter = {
    ...(search && { name: { $regex: search, $options: "i" } }),
  };
  try {
    const customers = await Customer.find(filter);
    res.status(200).send(customers);
  } catch (error) {
    next(error);
  }
};

export const getCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return next(createError(404, "Customer not found!"));
    res.status(200).send(customer);
  } catch (error) {
    next(error);
  }
};
