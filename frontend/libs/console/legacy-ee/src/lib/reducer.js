import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  dataReducer,
  actionsReducer,
  typesReducer,
  eventsReducer,
  remoteSchemaReducer,
  apiExplorerReducer,
  metadataReducer,
  telemetryReducer,
  invokeEventTriggerReducer,
  modalReducer,
  notificationsReducer,
} from '@hasura/console-oss/lib/hoc';

import { progressBarReducer } from '@hasura/console-oss/lib/app';

import mainReducer from './components/Main/Actions';
// import progressBarReducer from 'components/App/Actions';
import metricsReducer from './components/Services/Metrics/Actions';

const reducer = combineReducers({
  ...dataReducer,
  remoteSchemas: remoteSchemaReducer,
  actions: actionsReducer,
  progressBar: progressBarReducer,
  apiexplorer: apiExplorerReducer,
  main: mainReducer,
  routing: routerReducer,
  telemetry: telemetryReducer,
  notifications: notificationsReducer,
  metadata: metadataReducer,
  types: typesReducer,
  events: eventsReducer,
  invokeEventTrigger: invokeEventTriggerReducer,
  metrics: metricsReducer,
  modal: modalReducer,
});

export default reducer;
