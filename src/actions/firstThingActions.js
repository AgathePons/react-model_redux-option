// == Actions
export const DO_SOMETHING_TO_FIRST_THING = 'DO_SOMETHING_TO_FIRST_THING';

/**
 * Action
 * @param {String} value Value in payload
 * @returns {Actions}
 */
export function actionDoSomethingToFirstThing(value) {
  return { type: DO_SOMETHING_TO_FIRST_THING, payload: value };
}
