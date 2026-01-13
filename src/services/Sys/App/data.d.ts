export type App = API.BaseModel & {
  name: string;
  code: string;
};

export type AppFilter = API.BaseFilter & {
  name?: string;
  code?: string;
};
