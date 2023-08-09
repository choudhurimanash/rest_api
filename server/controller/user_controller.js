import { request, response } from "express";
import user from "../schema/user_schema.js";

export const addUser = async (request, response) => {
  const User = request.body;
  const newUser = new user(User);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getUser = async (request, response) => {
  try {
    const users = await user.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editUser = async (request, response) => {
  try {
    // const foundUser = await user.find({_id: request.params.id});
    const foundUser = await user.findById(request.params.id);
    response.status(200).json(foundUser);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const updateUser = async (request, response) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    response.status(201).json(updatedUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteUser = async (request, response) =>{
  try {
    await user.deleteOne({_id: request.params.id});
    response.status(200).json({message: 'User deleted successfully'});
  } catch (error) {
    response.status(407).json({message: error.message});
  }
}
