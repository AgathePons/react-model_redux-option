// == Actions
export const DO_SOMETHING_TO_SECOND_THING = 'DO_SOMETHING_TO_SECOND_THING';

/**
 * Action
 * @param {String} value Value in payload
 * @returns {Actions}
 */
export function actionDoSomethingToSecondThing(value) {
  return { type: DO_SOMETHING_TO_SECOND_THING, payload: value };
}
