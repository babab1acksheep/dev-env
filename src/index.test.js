import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

const {JSDOM} = jsdom;

describe('Our first test',()=>{
	it('should pass',()=>{
		expect(true).to.equal(true);
	});
});

describe('index.html',()=>{
	it('should say hello',()=>{
		const {window} = new JSDOM(fs.readFileSync('./src/index.html','utf-8'));
		const index = fs.readFileSync('./src/index.html','utf-8');
		//We can pass array of JS files as second param - fetch should use isomorphic fetch
		const h1 = window.document.getElementsByTagName('h1')[0];
		expect(h1.innerHTML).to.equal('Hello World??');
	});
});
