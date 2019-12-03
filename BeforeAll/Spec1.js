
describe('My first spec file',function()
		{
	beforeAll(function()
			{

		browser.get("https://posse.com/")
	
		
		// browser.get("https://angularjs.org/");

			});

	it('Clicking on Joine Pose',function()
			{
		console.log("Clicking Join Posse");
		element(by.css("a[class='btn btn-primary btn-lg bigRedButton joinPosseButton makeInstrumented']")).click().then(function(){
			browser.sleep(4000);
		});

			});


	/*it('clicking on the New ANGULAR link',function()
			  {

			 element(by.css('a[class="button button-large button-primary has-shield has-shadow"]')).click();

			  });



	it('swtich to child window',function()
			{

		var handles =browser.getAllWindowHandles().then(function(handles)
				{
			browser.switchTo().window(handles[1]);

				});

			});


		it('clicking on the GetStart after swtiching to new windows',function()
				{

			element(by.css('a[class="button hero-cta"]')).click();

				});

		it('clicking on resources tab',function()
				{

			element(by.css('a[class="button hero-cta"]')).click();

				});
	 */

	/*afterAll(function()
			   {

			  browser.quit();
			  

			   });*/

		}); 
