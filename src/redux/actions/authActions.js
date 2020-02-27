import Calls  from '../../config/services/calls';

export const getDemoData = () => ({
  type: 'GET_DEMO_DATA',
  data: Calls.Demo()
});