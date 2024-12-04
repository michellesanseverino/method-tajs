import { it } from '@jest/globals';

function sum(a, b) {    
    return a + b;
}  

it('sums two values', () => {  
    expect(sum(4, 2)).toBe(6);  
});