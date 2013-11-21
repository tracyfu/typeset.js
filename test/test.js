var assert = require('assert'),
    typeset = require('../typeset.js');

describe('ordinal(number)', function() {
  it('should return the correct +/- ordinal when given a valid integer', function() {
    assert.equal('-100th', typeset.ordinal(-100));
    assert.equal('-25th', typeset.ordinal(-25));
    assert.equal('-24th', typeset.ordinal(-24));
    assert.equal('-23rd', typeset.ordinal(-23));
    assert.equal('-22nd', typeset.ordinal(-22));
    assert.equal('-21st', typeset.ordinal(-21));
    assert.equal('-20th', typeset.ordinal(-20));
    assert.equal('-19th', typeset.ordinal(-19));
    assert.equal('-18th', typeset.ordinal(-18));
    assert.equal('-17th', typeset.ordinal(-17));
    assert.equal('-16th', typeset.ordinal(-16));
    assert.equal('-15th', typeset.ordinal(-15));
    assert.equal('-14th', typeset.ordinal(-14));
    assert.equal('-13th', typeset.ordinal(-13));
    assert.equal('-12th', typeset.ordinal(-12));
    assert.equal('-11th', typeset.ordinal(-11));
    assert.equal('-10th', typeset.ordinal(-10));
    assert.equal('-9th', typeset.ordinal(-9));
    assert.equal('-8th', typeset.ordinal(-8));
    assert.equal('-7th', typeset.ordinal(-7));
    assert.equal('-6th', typeset.ordinal(-6));
    assert.equal('-5th', typeset.ordinal(-5));
    assert.equal('-4th', typeset.ordinal(-4));
    assert.equal('-3rd', typeset.ordinal(-3));
    assert.equal('-2nd', typeset.ordinal(-2));
    assert.equal('-1st', typeset.ordinal(-1));
    assert.equal('0th', typeset.ordinal(0));
    assert.equal('1st', typeset.ordinal(1));
    assert.equal('2nd', typeset.ordinal(2));
    assert.equal('3rd', typeset.ordinal(3));
    assert.equal('4th', typeset.ordinal(4));
    assert.equal('5th', typeset.ordinal(5));
    assert.equal('6th', typeset.ordinal(6));
    assert.equal('7th', typeset.ordinal(7));
    assert.equal('8th', typeset.ordinal(8));
    assert.equal('9th', typeset.ordinal(9));
    assert.equal('10th', typeset.ordinal(10));
    assert.equal('11th', typeset.ordinal(11));
    assert.equal('12th', typeset.ordinal(12));
    assert.equal('13th', typeset.ordinal(13));
    assert.equal('14th', typeset.ordinal(14));
    assert.equal('15th', typeset.ordinal(15));
    assert.equal('16th', typeset.ordinal(16));
    assert.equal('17th', typeset.ordinal(17));
    assert.equal('18th', typeset.ordinal(18));
    assert.equal('19th', typeset.ordinal(19));
    assert.equal('20th', typeset.ordinal(20));
    assert.equal('21st', typeset.ordinal(21));
    assert.equal('22nd', typeset.ordinal(22));
    assert.equal('23rd', typeset.ordinal(23));
    assert.equal('24th', typeset.ordinal(24));
    assert.equal('25th', typeset.ordinal(25));
    assert.equal('100th', typeset.ordinal(100));
    assert.equal('101st', typeset.ordinal(101));
    assert.equal('102nd', typeset.ordinal(102));
    assert.equal('103rd', typeset.ordinal(103));
    assert.equal('104th', typeset.ordinal(104));
    assert.equal('105th', typeset.ordinal(105));
    assert.equal('106th', typeset.ordinal(106));
    assert.equal('107th', typeset.ordinal(107));
    assert.equal('108th', typeset.ordinal(108));
    assert.equal('109th', typeset.ordinal(109));
    assert.equal('110th', typeset.ordinal(110));
    assert.equal('111th', typeset.ordinal(111));
    assert.equal('112th', typeset.ordinal(112));
    assert.equal('113th', typeset.ordinal(113));
    assert.equal('114th', typeset.ordinal(114));
    assert.equal('115th', typeset.ordinal(115));
    assert.equal('116th', typeset.ordinal(116));
    assert.equal('117th', typeset.ordinal(117));
    assert.equal('118th', typeset.ordinal(118));
    assert.equal('119th', typeset.ordinal(119));
    assert.equal('120th', typeset.ordinal(120));
    assert.equal('121st', typeset.ordinal(121));
    assert.equal('122nd', typeset.ordinal(122));
    assert.equal('123rd', typeset.ordinal(123));
    assert.equal('124th', typeset.ordinal(124));
    assert.equal('125th', typeset.ordinal(125));
  });


  it('should throw an error when given an invalid integer', function() {
    assert.throws(function() { typeset.ordinal(.5); });
    assert.throws(function() { typeset.ordinal('.5'); });
    assert.throws(function() { typeset.ordinal('Typeset.js'); });
    assert.throws(function() { typeset.ordinal(''); });
    assert.throws(function() { typeset.ordinal(true); });
    assert.throws(function() { typeset.ordinal(false); });
    assert.throws(function() { typeset.ordinal(null); });
  });
});