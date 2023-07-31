const routeApi = {
  getRoute(routes) {
    const coordinates = routes
      .map((route) => {
        for (const [key, val] of Object.entries(route)) {
          return [...val].reverse().join(",");
        }
      })
      .join(";");

    return fetch(
      `https://router.project-osrm.org/route/v1/driving/${coordinates}?steps=true&geometries=geojson`
    ).then((r) => r.json());
  },
};

export default routeApi;
