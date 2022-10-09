import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "utils/map/router-machine";
import { IApplicationState } from "interfaces/application.interface";

const MapPanel: FC = () => {
  const { application } = useSelector((state: { application: IApplicationState }) => state.application);

  const [ applicationSelected, setApplicationSelected ] = useState(false);

  useEffect(() => {
    application?.id !== undefined && setApplicationSelected(true);
  }, [application]);

  return (
    <div className="w-full h-full overflow-hidden rounded-[44px]">
      { applicationSelected && application !== null && application?.from !== undefined && application?.to !== undefined &&
        <MapContainer className="w-full h-full" zoom={5} scrollWheelZoom={true}>
        <TileLayer errorTileUrl="Teest" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <RoutingMachine from={application.from} to={application.to} />
        </MapContainer>
      }
    </div>
  );
};

export default React.memo(MapPanel);