function initSearch()
	{
        
		if($('.bt').length)
		{
			$('.bt').on('click', function()
			{
				$('.bt').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.bt').index(this);

				var panels = $('.tab-pannel');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');
                
                var pan = $('.tab-out');
                pan.removeClass('active');
                $(pan[clickedIndex]).addClass('active');
                
			});
		}
	}



function portfolio()
{
    if($('.tab').length)
        {
            $('.tab').on('click',function()
            {
                $('.tab').removeClass('active');
                $(this).addClass('active');
                var clickedIndex = $('.tab').index(this);
                
                var panels = $('.tb');
                
                if(panels.hasClass('active'))
                    {
                        panels.removeClass('active');
                    }
                
                //panels.removeClass('active');
                $(panels[clickedIndex]).addClass('active');
            });
        }
}

