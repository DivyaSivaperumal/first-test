describe('My Second spec file',function()
		{
/*	beforeAll(function()
			{

		browser.get("https://posse.com/")

//		browser.get("https://angularjs.org/");

			});*/
	it('Inputing values',function()
			{
		browser.get("https://posse.com/")
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
		console.log("Clicking on Arrow Key down")
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		console.log("Clicking on Enter")
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
				{
			browser.sleep(2000);
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
			element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			element(by.css("a[ng-href*='London/River Island']")).click().then(function()
					{
				browser.sleep(2000);
					})
				})
			})

			afterAll(function()
					{

				browser.quit();


					});
		})
