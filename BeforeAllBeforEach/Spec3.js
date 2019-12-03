describe("Assertions",function(){
	
	

	
	it("toBe",function(){
		console.log("To be");
		var a="Anu";
		expect(a).toBe("Anu");
		expect(a).not.toBe("reshma");
		
	}),
	
	
	it("toEqual",function(){
		console.log("To Equal");
		var a=20;
		expect(a).toEqual(20);
	
		
	}),
	
	it("toMatch",function(){
		console.log("To Match");
		var a="Anu is a good girl";
		expect(a).toMatch(/good/);
		expect(a).not.toMatch("reshma");
		
	}),
	
	it("toBeDefined",function(){
		console.log("To be defined");
		var a={
				b:"Anu"
		};
		
		expect(a.b).toBeDefined();
		expect(a.c).not.toBeDefined();
		
	}),
	
	it("toBeNull",function(){
		console.log("to be null");
		var a=null;
		var b="hkl";
		expect(a).toBeNull();
		expect(b).not.toBeNull();
		
	})
	
	it("toContain",function(){
		console.log("To Contain");
		var a=["Anu","resh","divi"];
		expect(a).toContain("Anu");
		expect(a).not.toContain("reshma");
		
	}),
	
	it("toBeLessThan",function(){
		console.log("To Be Less Than");
		var a=3.14;
		var k=20;
		expect(a).toBeLessThan(k);
		expect(k).not.toBeLessThan(a);
		
	}),
	
	it("toBeGreaterThan",function(){
		console.log("To Be Greater Than");
		var a=3.14;
		var k=20;
		console.log(expect(k).toBeGreaterThan(a));
		expect(a).not.toBeGreaterThan(k);
		
	}),
	
	it("toBeTruthy",function(){
		console.log("To Be Truthy");
		var a;
		var k="KDJASD";
		expect(k).toBeTruthy();
		expect(a).not.toBeTruthy();
		
	}),
	
	it("toBeCloseTo",function(){
		console.log("To Be Close To");
		var a=3.14;
		var k=2.78;
		console.log(expect(a).toBeCloseTo(k,0));
		expect(a).not.toBeCloseTo(k,2);
		
	}),
	
	it("toThrow",function(){
		console.log("To Throw");

		var foo=function(){
			return 1+1;
		};
		
		var bar=function()
		{
			return a+1;
		};
		expect(foo).not.toThrow();
		expect(bar).toThrow();
		
	}),
	
	it("toThrowError",function(){
		console.log("To Throw error");
		var foo=function(){
			throw new TypeError("foo");
		};
		
		expect(foo).toThrowError("foo");
		expect(foo).toThrowError(TypeError);
		
		
	})
	
	
})