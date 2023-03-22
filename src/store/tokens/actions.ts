export type Action = {type: "ADD_TOKEN" | "ADD_ID" | "ADD_FOTO", payload: string};

export const addToken = (token: string) => ({
  type: "ADD_TOKEN",
  payload: token
});

export const addId = (id: string): Action => ({
  type: "ADD_ID",
  payload: id
})

export const addFoto = (foto: string): Action => ({
  type: "ADD_FOTO",
  payload: foto
})