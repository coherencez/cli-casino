'use strict'

module.exports = function Player () {
	this.money = 1000,
	this.lose = function (bet) {
		console.log("MONEY", this.money - bet);
		return this.money - bet
	},
	this.win = function (bet) {
		return this.money + bet
	},
	this.getMoney = function () {
		return this.money
	},
	this.speak = function () {
		;(this.money < 500)
			? console.log(`Damn partner, we gotta tighten up. I've only got $${this.money} left!`)
			: console.log(`Yeeeehawww I've got $${this.money}, pedal to the metal boys let's boogy`);
	}
}