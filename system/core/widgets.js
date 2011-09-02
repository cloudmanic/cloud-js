//
// This library will handle setting widgets.
// A widget is a block of text that is added 
// to the dom. Whenever you set a widget
// this library will search the dom for all
// elements that have the class js-widget. 
// then it matches up the js-data attribute to 
// the widget.data.{var name here}. This library 
// will replace the contents of that element. 
// with widget.data.{var name here}.
//
var widget = { 
	data: []
}

//
// Sync all widget entries. It will search the dom
// for the js-widget class. Then looks for the 
// js-data element to match up to the widget.data.
// If found replaces with content. If not replaces
// with blank.
//
widget.sync = function ()
{
	var obj = widget;
	$('.js-widget').each(function () {
		var data = $(this).attr('js-data');
		
		if(data)
		{
			var val = obj.get(data);
			$(this).html(val);
		}
	});
}

//
// Set a widget key / value. 
//
widget.set = function(key, value)
{
	this.data[key] = value;
	this.sync();
} 

//
// Remove a widget key / value. 
//
widget.remove = function(key)
{
	if(this.data[key])
	{
		var val = this.data[key];
		delete this.data[key];

		// Remove contents from the dom.
		$('.js-widget').each(function () {	
			if($(this).html() == val)
			{
				$(this).html('');
			}
		});
	}
} 

//
// Return a widget key / value. Returns 
// an empty string if variable is not set.
// If key is empty we return the entire widget 
// array.
//
widget.get = function(key)
{
	// Return everything
	if(key.length == 0)
	{
		return this.data;
	}

	// Return the key / value or empty string
	if(this.data[key])
	{
		return this.data[key];
	} else 
	{
		return '';
	}
}