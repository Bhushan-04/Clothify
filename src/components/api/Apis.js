import axiosClient from "./ApiInstance.js";
import { resolve } from "./Resolve.js";

// Banner
export async function getBannerApi() {
  return await resolve(
    axiosClient.get("/master/banner", {}).then((res) => res.data)
  );
}

// export async function Register(
//   name,
//   email,
//   mobile_number,
//   password,
//   c_password
// ) {
//   return await resolve(
//     axiosClient
//       .post("/register", {
//         name: name,
//         email: email,
//         mobile_number: mobile_number,
//         password: password,
//         c_password: c_password,
//       })
//       .then((res) => res.data)
//     //   console.log()
//   );
// }

// export async function login(username, password) {
//   return await resolve(
//     axiosClient
//       .post("/login", {
//         username: username,
//         password: password,
//       })
//       .then((res) => res.data)
//     //   console.log()
//   );
// }

// export async function forgotpass(mobile_number, otp) {
//   return await resolve(
//     axiosClient
//       .post("/forget-password", {
//         mobile_number: mobile_number,
//         otp: otp,
//       })
//       .then((res) => res.data)
//     //   console.log()
//   );
// }

// export async function newpassword(mobile_number, new_password, c_password) {
//   return await resolve(
//     axiosClient
//       .post("/new-password", {
//         mobile_number: mobile_number,
//         new_password: new_password,
//         c_password: c_password,
//       })
//       .then((res) => res.data)
//     //   console.log()
//   );
// }

// export async function getProfilePic(profile_pic) {
//   return await resolve(
//     axiosClient
//       .post("/profile-pic", { profile_pic: profile_pic })
//       .then((res) => res.data)
//   );
// }

// export async function getGender(gender) {
//   return await resolve(
//     axiosClient.post("/user-input", { gender: gender }).then((res) => res.data)
//   );
// }

// export async function getHeightApi(height_id) {
//   return await resolve(
//     axiosClient
//       .post("/user-height", { height_id: height_id })
//       .then((res) => res.data)
//   );
// }

// export async function getWeightApi(weight_id) {
//   return await resolve(
//     axiosClient
//       .post("/user-weight", { weight_id: weight_id })
//       .then((res) => res.data)
//   );
// }

// export async function getAgeApi(age_id) {
//   return await resolve(
//     axiosClient.post("/user-age", { age_id: age_id }).then((res) => res.data)
//   );
// }

// export async function getFoodApi(food_perfrence_id) {
//   return await resolve(
//     axiosClient
//       .post("/user-foodpref", { food_perfrence_id: food_perfrence_id })
//       .then((res) => res.data)
//   );
// }

// export async function getActivityApi(activity_level_id) {
//   return await resolve(
//     axiosClient
//       .post("/user-actlvl", { activity_level_id: activity_level_id })
//       .then((res) => res.data)
//   );
// }
// //
// export async function getMedCondApi(user_input_id, medical_condition_id) {
//   return await resolve(
//     axiosClient
//       .post("/user-medcond", {
//         user_input_id: Number(user_input_id),
//         medical_condition_id: medical_condition_id,
//       })

//       .then((res) => res.data)
//   );
// }

// export async function getMedCondition(activity_level_id) {
//   return await resolve(
//     axiosClient
//       .post("/user-actlvl", { activity_level_id: activity_level_id })
//       .then((res) => res.data)
//   );
// }

// export async function getWorkoutPrefExp(
//   workout_prefrence_id,
//   workout_experience_id
// ) {
//   return await resolve(
//     axiosClient
//       .post("/user-workpref", {
//         workout_prefrence_id: workout_prefrence_id,
//         workout_experience_id: workout_experience_id,
//       })
//       .then((res) => res.data)
//   );
// }

// export async function getHabitsApi(user_input_id, habit_id) {
//   return await resolve(
//     axiosClient
//       .post("/user-habits", {
//         user_input_id: user_input_id,
//         habit_id: habit_id,
//       })
//       .then((res) => res.data)
//   );
// }

// export async function getBodyFat(b_f_percantage) {
//   console.log(b_f_percantage);
//   return await resolve(
//     axiosClient
//       .post("/user-bfper", {
//         b_f_percantage: b_f_percantage,
//       })
//       .then((res) => res.data)
//   );
// }

// export async function getMedApi(user_input_id,medical_condition_id
//   ) {
//   return await resolve(
//     axiosClient
//       .post("/user-medcond", { user_input_id: user_input_id, medical_condition_id:medical_condition_id})
//       .then((res) => res.data)
//   );
// }

// export async function getInputApi() {
//   return await resolve(
//     axiosClient.get("/user-input", {}).then((res) => res.data)
//   );
// }

// export async function getBannerApi() {
//   return await resolve(axiosClient.get("/banner", {}).then((res) => res.data));
// }

// export async function getInfoApi() {
//   return await resolve(axiosClient.get("/info", {}).then((res) => res.data));
// }

// export async function getRecipeApi() {
//   return await resolve(
//     axiosClient.get(`/get-recipes`, {}).then((res) => res.data)
//   );
// }

// export async function getSingleRecipeApi(id) {
//   return await resolve(
//     axiosClient.get(`/get-recipes/${id}`, {}).then((res) => res.data)
//   );
// }
