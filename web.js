/* orb interpreter */
!function(sith) {
  var api = sith.orb
  var form = document.getElementById("lost")
  var deets = form.deets
  console.log(deets)
  var params = new URLSearchParams(location.search)
  var saved = params.get("sample")
  var docile = document.documentElement.dataset
  var keys = Object.keys
  
  console.dir(orb)
  
  function edit(l, p, v) {
    if (l[p] == v) return false
    l[p] = v
    return true
  }

  function value(e, v) {
    return edit(e, "value", v || 0)
  }
  
  function tuxt(e, v) {
    return edit(e, "textContent", v || 0)
  }
  
  // var points = "t0 t1 t2 q0 q1 q2 q3 q4 s0 s1 s2 s3 s4 s5 s6".split(" ")
  var points = orb.met
  
  function cupid(ev) {  
    console.log("💘")
    var eee = form.eee
    var up = 38 
    var dn = 40
    var ky = ev.code
    var tt = ev.target
    var va = tt.value
    console.log(ky, va)
    switch (ky) {
      case up: tt.max == va && eee.value++
      case dn: tt.min == va && eee.value-- 
    }
    console.log(eee.value)
  }
  
  function calc(e) {

    var i = points.length
    var d = form.eee.value
    var m = form.iue.value
        
    function output(name) {
      var e = form[name]
      var f = orb[name]
      if (!e || !f) return
      e.textContent = f(d, m)
    }
    //points.forEach(output)
    
    while (i--) {
      let name = points[i]
      let e = form[name]
      let f = orb[name]
      if (!f || !e) continue
      e.textContent = orb.text(f(d, m))
    }
     
    // deets.innerHTML = orb.septiles(d, m).map(orb.text).join("<br>")
    // orb().pisces(0).aquarius(21).fyi()
    
    // update(form.deets, orb().from().to())
  }

  calc()
  
  form.iue.onkeyup = cupid
  form.oninput = calc
  form.onchange = calc
  form.onsubmit = calc
}(this)
