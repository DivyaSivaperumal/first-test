beforeAll(function(){
		console.log("Before All Global");
	});

describe("Describe 1",function(){
	
	beforeAll(function(){
		console.log("Before All");
	});
	
	beforeEach(function(){
		console.log("Before Each 1");
		
	});
	
	it("Befoe Each 1",function(){
		console.log("It one");
		
	}),
	beforeEach(function(){
		console.log("Before Each 2");
		
	});
	
	it("Befoe Each 2",function(){
		console.log("It two");
		
	}),
	
	it("Befoe Each 3",function(){
		console.log("It three");
		
	}),
	
	describe("Describe 2",function(){
		
		
		beforeAll(function(){
			console.log("Before All for Nested describe");
		});
		
		beforeEach(function(){
			console.log("Before Each 1 for nested describe");
			
		});
		
		it("Befoe Each 1",function(){
			console.log("It one for nested describe");
			
		})
		
	})
	
	
})