#!/usr/bin/env node

/* eslint-disable no-underscore-dangle */

/*
 * Creates a new @see {@link ClassRoom}.
 * The maximum number of students in the class.
*/

export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
