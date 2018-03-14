document.addEventListener('DOMContentLoaded', function(){

  function changeAttr(el, attr, attrProperty){
    var el = document.querySelector(el);
    el.setAttribute(attr, attrProperty)
  }// changeAttr('#draw', 'style', 'color:red;') EXAMPLE CODE USAGE

  var jqxhr = $.get( "http://stat.data.abs.gov.au/sdmx-json/data/AMLPS_PART_2017/PART_TOT+PART_EL+PART_PCT.AUS+STE+FED.0+1+2+3+4+5+6+7+8+CANB+FENN+BANK+BART+BENN+BERO+BLAX+BRFD+CALA+CHIF+COOK+COWP+CUNN+DOBE+EMON+FARR+FOWL+GILM+GRAY+GREE+HUGH+HUME+HUNT+KSMI+LIND+LYNE+MACA+MACK+MACQ+MCMA+MITC+NENG+NEWC+NSYD+PAGE+PARK+PARR+PATE+REID+RICH+RIVE+ROBE+SHOR+SYDN+WARR+WATS+WENT+WERR+WHIT+LING+SOLO+BLAI+BONN+BOWM+BRIS+CAPR+DAWS+DICK+FADD+FAIR+FISH+FLYN+FORD+GRIF+GROO+HERB+HINK+KENN+LEIC+LILL+LONG+MARA+MCPH+MONC+MORE+OXLE+PETR+RANK+RYAN+WBAY+WRIG+ADEL+BARK+BOOT+GREY+HIND+KING+MAKI+MAYO+PADE+STUR+WAKE+BASS+BRAD+DENI+FRAN+LYON+ASTO+BALL+BATM+BEND+BRUC+CALW+CASE+CHIS+CORA+CORI+DEAK+DUNK+FLIN+GELL+GIPP+GOLD+GORT+HIGG+HOLT+HOTH+INDI+ISAA+JAGA+KOOY+LALO+LTRO+MALL+MARI+MCEW+MCMI+MELB+MENZ+MPOR+MURR+SCUL+WANN+WILL+BRAN+BURT+CANN+COWA+CURT+DURA+FORR+FREM+HASL+MOOR+OCON+PEAR+PERT+STIR+SWAN+TANG.1+3+2.A20+A25+A30+A35+A40+A45+A50+A55+A60+A65+A70+A75+A80+TOT+8599+AGE_NFD+1819/all?detail=DataOnly&dimensionAtObservation=AllDimensions&startPeriod=2017&endPeriod=2017", function(data) {
  })
  .done(function(data) {
    console.log(data);
    let jsonStr = JSON.stringify({data})
    document.body.innerHTML = jsonStr;

  })
  .fail(function() {
    console.log('connection fail');
  })
  .always(function() {
  });
}, false);
