// import ImageDataHandler from './image-data-handler';

function rotate(angle, x, y, ctx, func) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const dx = x - cos * x - sin * -y;
  const dy = y - sin * x - cos * y;
  func.call(ctx, cos, sin, -sin, cos, dx, dy);
}

/**
* a helper for canvas manipulation, to store a reference to the element as well as it's context.
also adds some helpful method defaults. also has some drawing utilities.
* @param {HTMLCanvasElement} [element = document.createElement('canvas')] - put HTMLCanvasElement if this is your
* final render canvas
* @param {Integer} [width = element.offsetWidth] - width of area
* @param {Integer} [height = element.offsetHeight] - height of area
* @param {Float} [devicePixelRatio = window.devicePixelRatio] - actual pixels to css pixel
*/
export default class Canvas {
  /* *******************
  * initializing methods
  *********************/

  constructor(element = document.createElement('canvas'), width = element.offsetWidth, height = element.offsetHeight, devicePixelRatio = window.devicePixelRatio) { // eslint-disable-line max-len
    this._element = element;
    this._context = this._element.getContext('2d');
    this.resize(width, height, devicePixelRatio);
  }

  /**
    * sets width/height properties as well as scaling
    * @param {Integer} [width = this.width] - width of area of canvas
    * @param {Integer} [height = this.height] - height of area of canvas
    * @param {Float} [devicePixelRatio = window.devicePixelRatio] - actual pixels to css pixel
    * @returns {void}
  */
  // eslint-disable complexity
  resize = (width, height, devicePixelRatio = window.devicePixelRatio) => {
    // allow for case to call with no params when devicePixelRatio is changed
    // allow for case to call with no params when dom element is resized
    // otherwise width and height are defined
    // this method will erase the canvas and reset any clipping, fillStyle, lineWidth, strokeStyle, etc...
    if (!width || !height) {
      const isMounted = !!this._element.parentNode;
      width = isMounted ? this._element.offsetWidth : this._width;
      height = isMounted ? this._element.offsetHeight : this._height;
    }
    this._devicePixelRatio = devicePixelRatio;
    this._width = width;
    this._height = height;
    this._element.width = width * this._devicePixelRatio;
    this._element.height = height * this._devicePixelRatio;
    this._imageDataHandler = null;
    this._context.scale(this._devicePixelRatio, this._devicePixelRatio);
  }
  // eslint-enable complexity

  /* ******
  * getters
  ********/

  /**
    * get the instance's HTMLCanvasElement
    * @readonly
    * @type {HTMLCanvasElement}
  */
  get element() {
    return this._element;
  }

  /**
    * get the instance's height
    * @readonly
    * @type {Integer}
  */
  get height() {
    return this._height;
  }

  /**
    * get the instance's ImageDataHandler reflecting the current state
    * @readonly
    * @type {ImageDataHandler}
  */
  get imageDataHandler() {
    // if (!this._imageDataHandler) {
      // const width = this._width * this._devicePixelRatio;
      // const height = this._height * this._devicePixelRatio;
      // this._imageDataHandler = new ImageDataHandler(this._context, 0, 0, width, height);
    // }
    return this._imageDataHandler;
  }

  /**
    * get the instance's width
    * @readonly
    * @type {Integer}
  */
  get width() {
    return this._width;
  }

  /* ******
  * setters
  ********/

  /**
    * set the fill color of the context.
    * @param {String} str - new value for fillStyle
    * @type {String}
  */
  set fillStyle(str) {
    this._context.fillStyle = str;
  }

  /**
    * set the globalCompositeOperation of the context.
    * @param {String} str - new value for globalCompositeOperation
    * @type {String}
  */
  set globalCompositeOperation(str) {
    this._context.globalCompositeOperation = str;
  }

  /**
    * set the alpha the context.
    * @param {Float} num - new value for globalAlpha
    * @type {Float}
  */
  set globalAlpha(num) {
    this._context.globalAlpha = num;
  }

  /**
    * set the stroke width of the context.
    * @param {Float} num - new value for lineWidth
    * @type {Float}
  */
  set lineWidth(num) {
    this._context.lineWidth = num;
  }

  /**
    * sets the stroke color of the context.
    * @param {String} str - new value for strokeStyle
    * @type {String}
  */
  set strokeStyle(str) {
    this._context.strokeStyle = str;
  }

  /* **************
  * drawing methods
  ****************/

  /**
    * draws an arc on the context
    * @param {Float} x - center point's x position
    * @param {Float} y - center point's y position
    * @param {Float} radius - arc's radius
    * @param {Float} [startAngle = 0] - angle to begin arc
    * @param {Float} [endAngle = Math.PI * 2] - angle to end arc
    * @param {Boolean} [anticlockwise = false] - draws anticlockwise if true
    * @returns {void}
  */
  arc = (x, y, radius, startAngle = 0, endAngle = Math.PI * 2, anticlockwise = false) => {
    this._context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  }

  /**
    * begins a drawing path on the context
    * @returns {void}
  */
  beginPath = () => {
    this._context.beginPath();
  }

  /**
    * draws an bezier curve on the context
    * @returns {void}
  */
  bezierCurveTo = (...args) => {
    this._context.bezierCurveTo(...args);
  }

  /**
    * clears a rectangle on the context. also nulls the _imageDataHandler value if one exists.
    * @param {Float} [x = 0] - rectangle's x position
    * @param {Float} [y = 0] - rectangle's y position
    * @param {Float} [width = this.width] - rectangle's width
    * @param {Float} [height = this.height] - rectangle's height
    * @returns {void}
  */
  clearRect = (x = 0, y = 0, width = this.width, height = this.height) => {
    this._context.clearRect(x, y, width, height);
    this._imageDataHandler = null;
  }

  /**
    * creates a clipping path on the context for future drawing calls.
    * @returns {void}
  */
  clip = (...args) => {
    this._context.clip(...args);
  }

  /**
    * closes a path on the context
    * @returns {void}
  */
  closePath = () => {
    this._context.closePath();
  }

  // eslint-disable valid-jsdoc
  /**
    * draws an Image or canvas element into the context. also nulls the _imageDataHandler value if one exists.
    * method overloading to reflect CanvasRenderingContext2D.drawImage.
    * @param {Canvas|Image|HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} source - where to take pixels from
    * @param {Float} [dx = 0] - x coordinate of source's destination
    * @param {Float} [dy = 0] - y coordinate of source's destination
    * @param {Float} [dWidth = image.width] - width of destination
    * @param {Float} [dHeight = image.height] - height of destination
    * @returns {void}
  */
  /**
    * draws an Image or canvas element into the context. also nulls the _imageDataHandler value if one exists.
    * method overloading to reflect CanvasRenderingContext2D.drawImage.
    * @param {Canvas|Image|HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} source - where to take pixels from
    * @param {Float} sx - x coordinate of where to pull from source
    * @param {Float} sy - y coordinate of where to pull from source
    * @param {Float} sWidth - width of area to pull from source
    * @param {Float} sHeight - height of area to pull from source
    * @param {Float} dx - x coordinate of source's destination
    * @param {Float} dy - y coordinate of source's destination
    * @param {Float} dWidth - width of destination
    * @param {Float} dHeight - height of destination
    * @returns {void}
  */
  drawImage = (source, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) => { // eslint-disable-line max-params
    // sx, sy, sWidth, sHeight on images do not get scaled against devicePixelRatio
    const hasSource = typeof dx === 'number';
    const isCanvas = source instanceof Canvas;
    if (hasSource) {
      if (isCanvas) {
        sx *= this._devicePixelRatio;
        sy *= this._devicePixelRatio;
        sWidth *= this._devicePixelRatio;
        sHeight *= this._devicePixelRatio;
        this._context.drawImage(source.element, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      } else {
        this._context.drawImage(source, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      }
    } else if (isCanvas) {
      sWidth = sWidth || source.width;
      sHeight = sHeight || source.height;
      this._drawImageDest(source.element, sx, sy, sWidth, sHeight);
    } else {
      this._drawImageDest(source, sx, sy, sWidth, sHeight);
    }
    this._imageDataHandler = null;
  }
  // eslint-enable valid-jsdoc

  _drawImageDest = (source, dx = 0, dy = 0, dWidth = source.width, dHeight = source.height) => {
    this._context.drawImage(source, dx, dy, dWidth, dHeight);
  }

  /**
    * fills a path on the context. also nulls the _imageDataHandler value if one exists.
    * @returns {void}
  */
  fill = (...args) => {
    this._context.fill(...args);
    this._imageDataHandler = null;
  }

  /**
    * draws a filled rectangle on the context. also nulls the _imageDataHandler value if one exists.
    * @param {Float} [x = 0] - rectangle's x position
    * @param {Float} [y = 0] - rectangle's y position
    * @param {Float} [width = this.width] - rectangle's width
    * @param {Float} [height = this.height] - rectangle's height
    * @returns {void}
  */
  fillRect = (x = 0, y = 0, width = this.width, height = this.height) => {
    this._context.fillRect(x, y, width, height);
    this._imageDataHandler = null;
  }

  /**
    * draws a line to a point on the context.
    * @returns {void}
  */
  lineTo = (...args) => {
    this._context.lineTo(...args);
  }

  /**
    * moves to a point on the context.
    * @returns {void}
  */
  moveTo = (...args) => {
    this._context.moveTo(...args);
  }

  /**
    * draws a quadratic curve to a point on the context.
    * @returns {void}
  */
  quadraticCurveTo = (...args) => {
    this._context.quadraticCurveTo(...args);
  }

  /**
    * draws a rectangle on the context.
    * @param {Float} [x = 0] - rectangle's x position
    * @param {Float} [y = 0] - rectangle's y position
    * @param {Float} [width = this.width] - rectangle's width
    * @param {Float} [height = this.height] - rectangle's height
    * @returns {void}
  */
  rect = (x = 0, y = 0, width = this.width, height = this.height) => {
    this._context.rect(x, y, width, height);
  }

  // scale: no scale method! use resize instead!

  /**
    * strokes the context's current path.
    * @returns {void}
  */
  stroke = (...args) => {
    this._context.stroke(...args);
    this._imageDataHandler = null;
  }

  /* *********************
  * transformation methods
  ***********************/

  /**
    * resets all transforms on the context to zero.
    * @returns {void}
  */
  resetTransform = () => {
    this._context.resetTransform();
    // if canvas was scaled it would otherwise be undone
    this._context.scale(this._devicePixelRatio, this._devicePixelRatio);
  }

  /**
    * restores context to a saved state of popped off of a stack.
    * @returns {void}
  */
  restore = () => {
    this._context.restore();
  }

  /**
    * cumulatively rotates the context around x/y coordinates.
    * @param {Float} angle - amount to rotate
    * @param {Float} [x = this.width / 2] - center x position
    * @param {Float} [y = this.height / 2] - center y position
    * @returns {void}
  */
  rotate = (angle, x = 0.5 * this.width, y = 0.5 * this.height) => {
    if (!angle) {
      return;
    }
    rotate(angle, x, y, this._context, this._context.transform);
  }

  /**
    * pushes a saved state of the curent context onto a stack.
    * @returns {void}
  */
  save = () => {
    this._context.save();
  }

  /**
    * resets the context's rotation to a new amount around x/y coordinates.
    * @param {Float} angle - amount to rotate
    * @param {Float} [x = this.width / 2] - center x position
    * @param {Float} [y = this.height / 2] - center y position
    * @returns {void}
  */
  setRotate = (angle, x = 0.5 * this.width, y = 0.5 * this.height) => {
    rotate(angle, x, y, this._context, this.setTransform);
  }

  /**
    * resets the context's transform to new values.
    * @param {Float} xScale - horizontal scale
    * @param {Float} xSkew - horizontal skew
    * @param {Float} ySkew - verical skew
    * @param {Float} yScale - vertical movement
    * @param {Float} dx - horizontal movement
    * @param {Float} dy - vertical movement
    * @returns {void}
  */
  setTransform = (xScale, xSkew, ySkew, yScale, dx, dy) => {
    xScale *= this._devicePixelRatio;
    xSkew *= this._devicePixelRatio;
    ySkew *= this._devicePixelRatio;
    yScale *= this._devicePixelRatio;
    dx *= this._devicePixelRatio;
    dy *= this._devicePixelRatio;
    this._context.setTransform(xScale, xSkew, ySkew, yScale, dx, dy);
  }

  /**
    * sets the context's grid to coordinates.
    * @param {Float} dx - horizontal movement
    * @param {Float} dy - vertical movement
    * @returns {void}
  */
  setTranslate = (dx, dy) => {
    this.setTransform(1, 0, 0, 1, dx, dy);
  }

  /**
    * cumulatively moves the context's grid by coordinates.
    * @param {Float} dx - horizontal movement
    * @param {Float} dy - vertical movement
    * @returns {void}
  */
  translate = (dx, dy) => {
    this._context.translate(dx, dy);
  }

  /* ***********
  * misc methods
  *************/

  // eslint-disable valid-jsdoc
  /**
    * creates a blank ImageData based on provided width/height.
    * method overloading to reflect CanvasRenderingContext2D.createImageData.
    * @param {Number} width - a width amount
    * @param {Number} height - a height amount
    * @returns {void}
  */
  /**
    * creates a blank ImageData based on a provided ImageData's dimensions.
    * method overloading to reflect CanvasRenderingContext2D.createImageData.
    * @param {ImageData} imageData - an existing ImageData instance
    * @returns {void}
  */
  // eslint-enable valid-jsdoc
  createImageData = (imageDataOrWidth, height) => {
    return this._context.createImageData(imageDataOrWidth, height);
  }

  /* *************
  * static methods
  ***************/

  /**
    * returns Path2D of a path approximately through an array of points.
    * @param {Array} points - array of points
    * @param {Path2D} [path = new Path2D()] - Path2D instance to add instructions to
    * @returns {void}
  */
  static quadraticThrough(points, path = new Path2D()) {
    const { length } = points;
    let lastPoint;
    let nextPoint;
    for (let i = 0; i < length - 1; i++) {
      lastPoint = nextPoint || points[0];
      nextPoint = points[i + 1];
      if (i === 0) {
        path.moveTo(lastPoint.x, lastPoint.y);
      } else if (i < length - 2) {
        const avgX = (lastPoint.x + nextPoint.x) / 2;
        const avgY = (lastPoint.y + nextPoint.y) / 2;
        path.quadraticCurveTo(lastPoint.x, lastPoint.y, avgX, avgY);
      } else {
        path.quadraticCurveTo(lastPoint.x, lastPoint.y, nextPoint.x, nextPoint.y);
      }
    }
    return path;
  }
}
