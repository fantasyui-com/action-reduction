import kebabCase from 'lodash/kebabCase.js';
import camelCase from 'lodash/camelCase.js';

export default function main({state, library, actions}){
  //TODO: add library validation
  return actions.reduce((state, {type, ...data}) => library[camelCase(type)](state, data), state);
}
