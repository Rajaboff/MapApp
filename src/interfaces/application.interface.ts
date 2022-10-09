export interface IApplication {
  id: string;
  title: string;
  from: ICoordinate;
  to: ICoordinate;
}

export interface ICoordinate {
  coordinateX: string;
  coordinateY: string;
}

export interface IApplicationState {
  application: IApplication | null;
  applications: IApplication[];
  loader: boolean;
}
