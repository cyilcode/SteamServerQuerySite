export const TEST_ACTION = 'TEST_ACTION';

export const testAction = () => dispatch => {
 dispatch({
  type: TEST_ACTION,
  payload: 'test_success'
 });
}