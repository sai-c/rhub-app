export enum LabPolicyTypes {
  LOAD_REQUEST = '@lab/policy/LOAD_REQUEST',
  LOAD_SUCCESS = '@lab/policy/LOAD_SUCCESS',
  LOAD_FAILURE = '@lab/policy/LOAD_FAILURE',
  CREATE_REQUEST = '@lab/policy/CREATE_REQUEST',
  CREATE_SUCCESS = '@lab/policy/CREATE_SUCCESS',
  CREATE_FAILURE = '@lab/policy/CREATE_FAILURE',
  UPDATE_REQUEST = '@lab/policy/UPDATE_REQUEST',
  UPDATE_SUCCESS = '@lab/policy/UPDATE_SUCCESS',
  UPDATE_FAILURE = '@lab/policy/UPDATE_FAILURE',
  DELETE_REQUEST = '@lab/policy/DELETE_REQUEST',
  DELETE_SUCCESS = '@lab/policy/DELETE_SUCCESS',
  DELETE_FAILURE = '@lab/policy/DELETE_FAILURE',
}

// Data Types - Returned by the API
// Todo: Implement LabPolicyData incase we need all users like in QLB
export interface LabPolicyData {
  id: number;
  name: string;
  department: string;
  constraint: {
    sched_avail: string;
    serv_avail: string;
    consumption: string;
    density: string;
    attribute: string;
    cost: string;
    location: string;
  };
}

export interface LabPolicyModel {
  id: number;
  name: string;
  department: string;
  constraint: {
    schedAvail: string;
    servAvail: string;
    consumption: string;
    density: string;
    attribute: string;
    cost: string;
    location: string;
  };
}

export interface Error {
  detail: string;
  status: number;
  title: string;
  type: string;
}

export interface LabPolicyState {
  readonly data: { [key: number]: LabPolicyModel };
  readonly loading: boolean;
  readonly errMsg: Error | {};
  readonly error: boolean;
}
