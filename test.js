var svgToImage = require('./')
var test = require('tape')

test('should convert SVG to image', function (t) {
  t.plan(2)

  var width = 200
  var height = 200

  var data = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="' + width + 'px" height="' + height + 'px">',
    '<circle stroke-width="12" r="43" cx="50" cy="50" fill="none" stroke="#3A5"/>',
    '<circle r="6" cx="59" cy="23" fill="#000"/>',
    '<g stroke-linejoin="round" stroke-linecap="round" stroke-width="1" stroke="#000" fill="none">',
    '<path d="M36,36c5,0,3,2,8-1c1,2,1,3,3,2c3,0-6,7-3,8c-4-2-9,2-14-2c4-3,4-4,5-7c5,0,8,2,12,1"/>',
    '<path fill="#000" d="M34,29h31c2,5,7,10,7,16l-8,1l8,1l-3,31l-5,-18l-11,18l5-34l-3-8z"/>',
    '<path stroke-width="2" d="M27,48h23M28,49h21l-3,28h-14l-4,-28h5l3,28h3v-28h5l-2,28m3-4h-13m-1-5h16m0-5h-16m-1-5h18m0-5h-19"/>',
    '</g>',
    '<path stroke="#F00" stroke-width="1"/>',
    '</svg>'
  ].join('\n')

  svgToImage(data, { crossOrigin: 'Anonymous' }, function (err, image) {
    if (err) return t.fail(err)
    document.body.appendChild(image) // for visualizing it...
    t.equal(image.width, width, 'matches width')
    t.equal(image.height, height, 'matches height')


  })
})
