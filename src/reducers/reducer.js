import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/actions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

const reducer = (state, action) => {
  let features, additionalFeatures;
  switch (action.type) {
    case ADD_FEATURE:
      features = [...state.car.features];
      features.push(
        state.additionalFeatures.find(
          (feature) => feature.id === action.payload
        )
      );
      additionalFeatures = state.additionalFeatures.filter(
        (feature) => feature.id !== action.payload
      );
      return { ...state, additionalFeatures, car: { ...state.car, features } };
    case REMOVE_FEATURE:
      additionalFeatures = [...state.additionalFeatures];
      additionalFeatures.push(
        state.car.features.find((feature) => feature.id === action.payload)
      );
      features = state.car.features.filter(
        (feature) => feature.id !== action.payload
      );
      return { ...state, additionalFeatures, car: { ...state.car, features } };
    default:
      return state;
  }
};

export default reducer;
