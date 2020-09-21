import romanizer from 'romanize';

const transform = (numbers) => {
    return romanizer(numbers);
};

export {
    transform
};