exports.config = {
		framework: 'jasmine',
		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['Spec2.js'],
		capabilities: {
			  'browserName': 'chrome'
			}

	
}