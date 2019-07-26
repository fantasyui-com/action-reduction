import kebabCase from 'lodash/kebabCase.js';
import camelCase from 'lodash/camelCase.js';

export default function main({state, reducers, actions}){
  //TODO: add library validation
  return actions.reduce((state, {type, ...data}) => reducers[camelCase(type)](state, data), state);
}
