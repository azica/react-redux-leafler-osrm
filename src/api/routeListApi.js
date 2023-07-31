const fakeRoutes = [
  {
    key: 1,
    name: "Маршрут №1",
    routes: [
      { route1: [59.84660399, 30.29496392] },
      { route2: [59.82934196, 30.42423701] },
      { route3: [59.83567701, 30.38064206] },
    ],
  },
  {
    key: 2,
    name: "Маршрут №2",
    routes: [
      { route1: [59.82934196, 30.42423701] },
      { route2: [59.82761295, 30.41705607] },
      { route3: [59.84660399, 30.29496392] },
    ],
  },
  {
    key: 3,
    name: "Маршрут №3",
    routes: [
      { route1: [59.83567701, 30.38064206] },
      { route2: [59.84660399, 30.29496392] },
      { route3: [59.82761295, 30.41705607] },
    ],
  },
];

const routeListApi = {
  async getRouteList() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(fakeRoutes), 1000);
    });
    const data = await promise;
    return data;
  },
};

export default routeListApi;
