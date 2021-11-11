// mandelbrot formula f(z) = z^2 + c
// begin at z=0
// given we cancel out 0^0  we are left with f(0) = c
// zsub2 = c^2 + c

// c is a complex number -> a+bi
// c^2 would be -> (a+bi)(a+bi)
// so the formula on line 6 -> (a+bi)(a+bi) + (a+bi) 

function setup() {
    createCanvas(1250, windowHeight);
    pixelDensity(1);
    loadPixels();
    for (var x = 0; x < width; x++) {
		for(var y = 0; y < height; y++) {

			var xRange = map(x, 0, width, -2, 2);
			var yRange = map(y, 0, height, -2, 2);

			var limit = 0;
			var complexXAxisNums = xRange;
			var complexYAxisNums = yRange;

			while (limit < 100) {
				var xx = xRange * xRange - yRange * yRange;
				var yy = 2 * xRange * yRange;

				xRange = xx + complexXAxisNums;
				yRange = yy + complexYAxisNums;

				if(abs(xRange + yRange) > 16) {
					break;
				}
				limit++;
			}

			var brightness = 0;

			if(limit === 100) {
				brightness = 255;
			}

			var pix = (x + y * width) * 4;
			pixels[pix + 0] = brightness;
			pixels[pix + 1] = brightness;
			pixels[pix + 2] = brightness;
			pixels[pix + 3] = 255;
		}
    } 
	updatePixels();
}

function draw() {
	//background(22,22,22)
}


