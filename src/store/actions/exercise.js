import {
  createExercise, getAllPrivateExercises, getPrivateExercise, checkSolution,
  updateExercise, removeExercise
} from '../services/exercise'

export const EXERCISE_GET_ALL = 'EXERCISE_GET_ALL'
export const EXERCISE_GET = 'EXERCISE_GET'
export const EXERCISE_CREATED = 'EXERCISE_CREATED'
export const EXERCISE_CHECK_SUCCESS = 'EXERCISE_CHECK_SUCCESS'
export const EXERCISE_CHECK_FAIL = 'EXERCISE_CHECK_FAIL'
export const EXERCISE_CHECK_ERROR = 'EXERCISE_CHECK_ERROR'
export const EXERCISE_UPDATED = 'EXERCISE_UPDATED'
export const EXERCISE_REMOVED = 'EXERCISE_REMOVED'


export function getAllExerciseAction() {
   return dispatch => getAllPrivateExercises()
     .then( payload => dispatch({ type: EXERCISE_GET_ALL, payload }))
}


export function getExerciseAction(key) {
  return dispatch => getPrivateExercise(key)
    .then( payload => dispatch({ type: EXERCISE_GET, payload }))
}

export function createExerciseAction(data) {
  return dispatch => createExercise(data)
    .then(() =>dispatch({ type: EXERCISE_CREATED }))
}

export function updateExerciseAction(key, data) {
  return dispatch => updateExercise(key, data)
    .then(() =>dispatch({ type: EXERCISE_UPDATED }))
}

export function removeExerciseAction(key) {
  return dispatch => removeExercise(key)
    .then(() =>dispatch({ type: EXERCISE_REMOVED }))
}

export function checkSolutionAction(key, solution) {
  return dispatch => checkSolution(key, solution)
      .then(({data}) =>
        dispatch({
          type: data.valid ? EXERCISE_CHECK_SUCCESS : EXERCISE_CHECK_FAIL
        })
      )
      .catch((error) => dispatch({type: EXERCISE_CHECK_ERROR, payload: error}))
}