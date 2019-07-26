#!/usr/bin/env -S node --no-warnings --experimental-modules

import assert from 'assert';
import program from './index.mjs';

const state = {};
const library = {
  initializeUsers: function(state, action){
    return Object.assign({},state,{users:{}});
  },
  addUser: function(state, {id}){

    return Object.assign({},state,{ users:{ [id]:{} } });
  },
  updateUser: function(state, {id,...data}){
    return Object.assign({},state,{ users:{ [id]:{...state.users[id],...data} } });
  },
};
const actions = [
  {type: 'initialize-users'},
  {type: 'add-user', id:'alice'},
  {type: 'update-user', id:'alice', email:'alice@example.com'},
  {type: 'update-user', id:'alice', firstName:'Alice'},
  {type: 'update-user', id:'alice', lastName:'Smith'},
];

const actual = program({state, library, actions})
const expected = {
  users: {
    alice: {
      email: 'alice@example.com',
      firstName: 'Alice',
      lastName: 'Smith'
    }
  }
};


assert.deepEqual( actual , expected );
