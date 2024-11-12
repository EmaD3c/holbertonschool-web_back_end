/* eslint import/extensions: "off" */
import Building from './5-building'; // eslint-disable-line no-unused-vars

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Initialize sqft in the parent class
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
