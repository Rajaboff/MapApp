/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { ICoordinate } from "interfaces/application.interface";

const createRoutineMachineLayer =
  (from: ICoordinate, to: ICoordinate) => () => {
    const instance = L.Routing.control({
      waypoints:
        from && to
          ? [
              L.latLng(
                from.coordinateX ? Number.parseFloat(from.coordinateX) : 0,
                from.coordinateY ?  Number.parseFloat(from.coordinateY) : 0
              ),
              L.latLng(
                to.coordinateX ? Number.parseFloat(to.coordinateX) : 0,
                to.coordinateY ? Number.parseFloat(to.coordinateY) : 0
              ),
            ]
          : [],
      lineOptions: {
        styles: [{ color: "#12a9e0", weight: 4 }],
        extendToWaypoints: true,
        missingRouteTolerance: 0,
      },
      show: false,
      addWaypoints: false,
      routeWhileDragging: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      waypointMode: "connect",
    });

    return instance;
  };

const RoutingMachine = ({
  from,
  to,
}: {
  from: ICoordinate;
  to: ICoordinate;
}): any => {
  const Router = createControlComponent(createRoutineMachineLayer(from, to));
  return <Router />;
};

export default RoutingMachine;
