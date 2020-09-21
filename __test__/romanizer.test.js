import {transform} from "../src/romanizer";

describe('romanizer', () => {
    fit('should return 10 when X', () => {
        const result = transform(10);

        expect(result).toEqual('X');
    });
});