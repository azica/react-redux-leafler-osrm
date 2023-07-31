import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRouteList } from "../../reducers/routeList/routeListSlice";
import { routeActions } from "../../reducers/routes/routeSlice";
import useIsMobile from "../../hooks/useIsMobile";

function RouteList() {
  const dispatch = useDispatch();
  const { routeList } = useSelector((state) => state.routeList);
  const [newRoutes, setNewRoutes] = useState(null);
  const [activeRowKey, setActiveRowKey] = useState(null);
  const isTablet = useIsMobile(1080);
  const isMobile = useIsMobile(425);

  const desktop = !isMobile && !isTablet;
  let columnWidth = (desktop && 200) || (isMobile && 100) || (isTablet && 150);
  let isScroll = isTablet && { x: "150%" };
  const columns = [
    {
      title: "Маршрут",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      fixed: "left",
      width: columnWidth,
    },
    {
      title: "Точка 1",
      dataIndex: "route1",
    },
    {
      title: "Точка 2",
      dataIndex: "route2",
    },
    {
      title: "Точка 3",
      dataIndex: "route3",
    },
  ];

  let data = routeList.map((el) => {
    const obj = {};
    for (const [key, val] of Object.entries(Object.assign({}, ...el.routes))) {
      obj[key] = val.join(", ");
    }
    const newRoute = {
      key: el.key,
      name: el.name,
      ...obj,
    };
    return newRoute;
  });

  useEffect(() => {
    dispatch(fetchRouteList());
  }, []);

  useEffect(() => {
    dispatch(routeActions.fetchRoute(newRoutes));
  }, [newRoutes]);

  const rowClickHandler = (key) => {
    setActiveRowKey(key);
    const newArr = routeList.filter((el) => el.key === key)[0].routes;
    setNewRoutes(newArr);
  };

  return (
    <Table
      onRow={(row) => ({
        onClick: () => rowClickHandler(row.key),
      })}
      rowClassName={(record, index) =>
        record.key === activeRowKey ? "activeRow" : ""
      }
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={isScroll}
    />
  );
}

export default RouteList;
