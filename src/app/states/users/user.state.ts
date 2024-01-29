import { User } from "src/app/models/user";


export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialUserState: UserState = {
  users: [],
  loading: false,
  error: null
};
