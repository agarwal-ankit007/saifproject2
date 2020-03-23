function initSearch()
	{
		if($('.tab').length)
		{
			$('.tab').on('click', function()
			{
				$('.tab').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.tab').index(this);

				var panels = $('.tab-pannel');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');
			});
		}
	}


function changedata()
{
    if($('.ll').length)
        {
            $('.ll').on('click',function()
                       {
                $('.ll').removeClass('active');
                $(this).addClass('active');
                var clickedindex = $('.ll').index(this);
                
                var panels = $('.cdata');
                panels.removeClass('active');
                $(panels[clickedindex]).addClass('active');
                
                
                var panels2 = $('.vid');
                panels2.removeClass('active');
                $(panels2[clickedindex]).addClass('active');
                
                
            })
        }
}



