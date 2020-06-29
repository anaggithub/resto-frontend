const types = {
  SET_PET: "SET_PET",
};

export const setPet = (pet) => {
  return {
    type: types.SET_PET,
    payload: pet,
  };
};
