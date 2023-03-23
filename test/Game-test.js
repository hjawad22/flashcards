const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Game = require('../src/Game')

describe('Game', function() {
    let game
    this.beforeEach(function() {
     game = new Game()
    
    })
   it('should be a function', function() {
        expect(Game).to.be.a('function')
    })

    it('should be an instance of Game', function() {
        expect(game).to.be.an.instanceOf(Game)
    })

    it('should start a new game', function() {
      game.start()
      expect(game.currentRound).to.be.an.instanceOf(Round)
      
    })
})



