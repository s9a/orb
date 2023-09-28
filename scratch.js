!function(sith) {
  
  var pow = Math.pow
  var slice = [].slice
  
  var ice = [].slice
  var shy = [].slice  
  var sly = [].slice
  var cut = [].slice   
  
  function orb(...degrees) {
    var o = this instanceof orb ? this : new orb
    o._orb = degrees.length ? num(...degrees) : 1/0
    return o
  }
  
  /* 
   * @return number
   */
  function decimal(d/*º*/, m/*'*/, s/*"*/) {
    d = +d || 0
    m = +m || 0
    s = +s || 0
    return d + m/60 + s/3600
  }
  
  function dms() {
    var sum = 0
    var all = arguments 
    var l = all.length
    var i = 0
    for (var v; i < l; i++) {
      v = all[i]
      v = +v || 0
      sum += v / pow(60, i)
    }
    return sum
  }
  
  function sex(sum, v, i) {
    v = +v || 0
    return sum + v/pow(60, i)
  }
  
  function dot(/* º, ', " */) {
    return slice.call(arguments).reduce(sex)
  }
  
  function arc(from, to) {
    
  }
  
  function aries(eee, iue) {

  }
  
  function sign(number) {
    return function() {
    
    }
  }
  
  function sign(degree, minutes) {
  }

  orb.dot = dot  
  orb.dms = dms
  orb.decimal = decimal  
  sith.orb = orb

}(this)
