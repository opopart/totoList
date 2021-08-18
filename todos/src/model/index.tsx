export enum taskStatus {
  Doing = 1,
  Success = 2,
}

export interface IPersonalInfo {
  id: number;
  text: string;
  status: taskStatus;
}
