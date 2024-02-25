import { PracticeLogState } from "../practice-log/state/practice-log.reducers";
import { AuthState } from "../auth/state/auth.reducers";

export interface AppState {
    practiceLogState: PracticeLogState,
    authState: AuthState
}