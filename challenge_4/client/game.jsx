class Game {
  constructor({ frames, currFrame }) {
    this.frames = frames;
    this.currFrame = currFrame;
    this.priorFrame = this.frames[this.frames.length - 1];
  }

  handleRoll(pins) {
    let currFrame = this.currFrame
    // add pins to Frame
    currFrame.addRoll(pins);
    // score appropriate frames
    this.scoreFrames();
    // if currFrame had two rolls add to frames and create new frame as currFrame, reset priorFrame
    if (currFrame.rolls[0] !== null && currFrame.rolls[1] !== null) {
      this.addToFrames(currFrame);
      this.resetPriorFrame();
      this.resetCurrFrame(this.priorFrame);
    }
    console.log('frames: ', this.frames)
    
  }
  
  resetPriorFrame() {
    this.priorFrame = this.frames[this.frames.length - 1];
  }

  resetCurrFrame() {
    this.currFrame = new Frame(this.currFrame)
  }

  addToFrames(currFrame) {
    this.frames.push(currFrame);
  }

  scoreFrames() {
    let currFrame = this.currFrame; 
    let priorFrame = this.priorFrame;

    // if remainingPins > 0
    if (currFrame.remainingPins > 0) {
      // if second throw -> set score
      if (currFrame.rolls[1] !== null)
      currFrame.score = currFrame.rolls[0] + currFrame.rolls[1];
    }
    if (!priorFrame) return;
    // if priorFrame remainingPins is 0
    if (priorFrame.remainingPins === 0) {
        // if first throw -> wait for curr second throw to finish, set score to all 4 throws
        if (priorFrame.rolls[1] !== null) {
          priorFrame.score = 10 + currFrame.rolls[0] + currFrame.rolls[1];
        } else {
          // else set score to all three throws
          priorFrame.score = 10 + currFrame.rolls[0];
        }
    }
  }
}

class Frame {
  constructor(priorFrame) {
    this.priorFrame = priorFrame;
    this.remainingPins = 10;
    this.rolls = [null, null]
    this.score = null;
  }

  addRoll(pins) {
    // set remaining pins
    this.remainingPins -= pins;
    // set ThrowPins
    this.rolls[0] === null ? this.rolls[0] = pins : this.rolls[1] = pins;
    console.log('addRoll This Frame after:', this);
  }
}