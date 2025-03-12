!function(sith) {
  
  var abs = Math.abs 
  var pow = Math.pow
  var min = Math.min
  var max = Math.max
  var ceil = Math.ceil
  var floor = Math.floor
  var round = Math.round
  var ice = [].slice
  var shy = [].slice  
  var sly = [].slice
  var cut = [].slice
  var dot = orb.prototype

  const points = []
  
  const Q1 = 72
  const Q2 = 144 
  const S1 = 360/7
  const S2 = 720/7
  const S3 = 1080/7
  
  function api() {
    return this instanceof api ? this : new api
  }
  
  function orb() {
    return this instanceof orb ? this : new orb
  }
  
  function egg() {
  
  }
    
  function hoca(d, h) {
    var a = [d]
    var i = 360 / h
    var j = 0
    while (j++ < h) a.push(d * j + i)
    return a.join()
  }

  function trines(d, m, s) {
    var u = num(d, m, s)
    var h = 120
    return [u, u+h, u-h]
  }
  
  // includes trines:
  function noviles(d, m, s) {
    var u = num(d, m, s)
    var h = 40
    return [u, u+h, u-h]
  }

  function quintiles(d, m, s) {
    var u = num(d, m, s)
    var uno = 72
    var dos = 144
    return [u, u+uno, u+dos, u-dos, u-uno]
  }
    
  function septiles(d, m, s) {
    var u = num(d, m, s)
    var s = 360/7
    var e = 720/7
    var p = 1080/7
    return [u, u+s, u+e, u+p, u-p, u-e, u-s]
  }
  
  function pof(h, i) {
    var _ = i * 360 / h
    return _ ? function(d, m, s) {
      return (_ + $(d, m, s)) % 360
    } : $
  }

  function septile(i) {
    var _ = i * 360 / h
    return _ ? function(d, m, s) {
      return _ + num(d, m, s)
    } : num
  }

  var cusp = [
    0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330
  ]
  
  var _zod = {
    1: "aries",
    2: "taurus",
    3: "gemini",
    4: "cancer",
    5: "leo",
    6: "virgo",
    7: "libra",
    8: "scorpio",
    9: "sagittarius",
    10: "capricorn",
    11: "aquarius",
    12: "pisces"
  }
  
  var zod = {
    1: "♈",
    2: "♉",
    3: "♊",
    4: "♋",
    5: "♌",
    6: "♍",
    7: "♎",
    8: "♏",
    9: "♐",
    10: "♑",
    11: "♒",
    12: "♓"
  }
  
  function text(d) {
    return zod[sign(d)] + " " + talk(doz(d))
    return doz(d) + "º " + zod[sign(d)]
  }

  function sign(d) {
    d = d % 360
    var i = 12
    while (i--) {
      if (d >= i * 30) return i + 1
      if (-d > i * 30) return 12 - i
    }
    return 0
  }

  function dms(d/*º*/, m/*'*/, s/*"*/) {
    d = +d || 0
    m = +m || 0
    s = +s || 0
    return d + m/60 + s/3600
  }
  
  function sex(sum, v, i) {
    v = +v || 0
    return sum + v/pow(60, i)
  }
  
  function num(/* º, ', " */) {
    return ice.call(arguments).reduce(sex, 0)
  }
  
  function $(/* º, ', " */) {
    return ice.call(arguments).reduce(sex, 0)
  }  
  
  function doz(d) {
    d = d % 30
    return 0 > d ? 30 + d : d
  }
  
  function talk(d) {
    return String(floor(d)).padStart(2, 0) + "º" +
      String(round(60*(d%1))).padStart(2, 0) + "'"
  }
  
  function arc(a, de) {
    var dao = num(de) - num(a)
    var emo = abs(dao % 360)
    emo > 180 && (emo+=-360)
    return emo /*0...180*/
  }
  
  function cue(z) {
    z = z || 1
    return z * 30 - 30
  }
  
  function euc() {
    return 0
  }
  
  function animal(z) {
    var lip = cue(z)
    return function() {
      return lip + num(...arguments)
    }
  }
  
  function point(name) {
    points.push(name)
  }

  orb.aries = animal(1)
  orb.taurus = animal(2)
  orb.gemini = animal(3)
  orb.cancer = animal(4)
  orb.leo = animal(5)
  orb.virgo = animal(6)
  orb.libra = animal(7)
  orb.scorpio = animal(8)
  orb.sage = animal(9)
  orb.corn = animal(10)
  orb.aqua = animal(11)
  orb.pisces = animal(12)
  orb.sign = sign
  orb.hoca = hoca
  orb.arc = arc
  orb.cue = cue
  orb.dot = dot
  orb.num = num
  orb.dms = dms
  orb.doz = doz
  orb.pof = pof

  
  //         0123456789
  var bet = "zuotrqxshn".split("")
  var met = []
  
  bet.forEach(function(letter, h) {
    var fan = []
    var i = 0
    while (i < h) {
      var j = i || h
      var name = letter + j
      var funk = pof(h, j)
      orb[name] = funk
      fan[i++] = name
    }
    met.push.apply(met, fan)
  })

//   orb.t0 = pof(3, 0)
//   orb.t1 = pof(3, 1)
//   orb.t2 = pof(3, -1)
  
//   orb.q0 = pof(5, 0)
//   orb.q1 = pof(5, 1)
//   orb.q2 = pof(5, 2)
//   orb.q3 = pof(5, -2)
//   orb.q4 = pof(5, -1)
//   
//   orb.s0 = pof(7, 0)
//   orb.s1 = pof(7, 1)
//   orb.s2 = pof(7, 2)
//   orb.s3 = pof(7, 3)
//   orb.s4 = pof(7, 4)
//   orb.s5 = pof(7, 5)
//   orb.s6 = pof(7, 6)
//   
//   orb.x0 = pof(7, 0)
//   orb.x1 = pof(7, 1)
//   orb.x2 = pof(7, 2)
//   orb.x3 = pof(7, 3)
//   orb.x4 = pof(7, 4)
//   orb.s5 = pof(7, 5)
//   orb.s6 = pof(7, 6)


  function score(h, i) {
    while (i--) {
      let $ = ["$"]
    }
  }

  $.$ = pof(1, 1)
  $.$_ = pof(2, 1)
  $._$ = pof(2, 2)
  $.$__ = pof(3, 1)
  $._$_ = pof(3, 2)
  $.__$ = pof(3, 3)
  $.$___ = pof(4, 1)
  $._$__ = pof(4, 2)
  $.__$_ = pof(4, 3)
  $.___$ = pof(4, 4)
  $.$____ = pof(5, 1)  
  $._$___ = pof(5, 2)
  $.__$__ = pof(5, 3)
  $.___$_ = pof(5, 4)
  $.____$ = pof(5, 5)
  $.$_____ = pof(6, 1)  
  $._$____ = pof(6, 2)
  $.__$___ = pof(6, 3)
  $.___$__ = pof(6, 4)
  $.____$_ = pof(6, 5)
  $._____$ = pof(6, 6)
  $.$______ = pof(7, 1)  
  $._$_____ = pof(7, 2)
  $.__$____ = pof(7, 3)
  $.___$___ = pof(7, 4)
  $.____$__ = pof(7, 5)
  $._____$_ = pof(7, 6)
  $.______$ = pof(7, 7)
  $.$_______ = pof(8, 1)  
  $._$______ = pof(8, 2)
  $.__$_____ = pof(8, 3)
  $.___$____ = pof(8, 4)
  $.____$___ = pof(8, 5)
  $._____$__ = pof(8, 6)
  $.______$_ = pof(8, 7)
  $._______$ = pof(8, 8)
  
  
  orb.net = Object.keys($)
  
  orb.net.forEach(function(n) {
    typeof $[n] == "function" ? orb[n] = $[n] : 0
  })
    
  orb.met = met
  orb.text = text
  orb.talk = talk
  orb.trines = trines
  orb.quintiles = quintiles
  orb.septiles = septiles
  
  sith.orb = orb
}(this)
