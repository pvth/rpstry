// Date
var hCheckD = new Date();
// Month
var hCheckMonth = hCheckD.getMonth() + 1;
// Day
var hCheckDay = hCheckD.getDate();

if(
	// Agree
	hCheckMonth == 1 &&
	hCheckDay   == 1
)
{
	// Client window size
	var hClientWidth  = 0;
	var hClientHeight = 0;
	
	// Client window size
	// Firefox, Safari, Chrome
	hClientWidth  = window.innerWidth + window.scrollX;
	hClientHeight = window.innerHeight + window.scrollY;
	
	// When hX is NaN, return true.
	var hIsNanW = mReallyNaN(
		hClientWidth
	);
	var hIsNanH = mReallyNaN(
		hClientHeight
	);
	
	if(
		hIsNanW == true ||
		hIsNanH == true
	)
	{
		// Client window size
		// IE
		hClientWidth  = window.innerWidth + document.documentElement.scrollLeft;
		hClientHeight = window.innerHeight + document.documentElement.scrollTop;
	}
	
	// Number of icon
	var hNumOfIcon = Math.floor(
		hClientWidth / 10
	);
	
	if(
		hNumOfIcon > 0
	)
	{
		// Display image
		for( var i = 0 ; i < hNumOfIcon ; i++ )
		{
			// Img name
			var hImgName = 'IMG_' + i;
			
			var hTag = '<img src="./snow.png" name="' + hImgName + '" style="position:absolute;top:0px;left:0px;" />';
			
			document.write(
				hTag
			);
		}
	}
}

// When hX is NaN, return true.
function mReallyNaN( hX )
{
	// When NaN === NaN, return false
	// When hX is NaN, return true.
	// When hX is not NaN, return false.
	return hX !== hX;
}
