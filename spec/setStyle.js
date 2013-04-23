
var el = new Element('div.test');
var expect = window.expect;

describe('Element.setStyle(property, value)', function() {

  it ('should add prefix to some css3 properties', function() {
    el.setStyle('animation-name', 'test');
    expect(el.getStyle('-webkit-animation-name')).to.eql('test')
  });

  it ('should not add prefix to css2 properties', function() {
    el.setStyle('height', 100);
    expect(el.getStyle('-webkit-height')).not.to.be.a(Number);
  })

});

