import { describe, expect, test } from 'vitest';

import { calculerHeure } from '../modules/solution';

const data: [number, number, number, string][] = [
    [1, 1, 1, 'mortin'],
    [1, 1, 2, 'soirning'],
    [1, 2, 1, 'mortin'],
    [1, 2, 2, 'nuight'],
    [2, 1, 1, 'mortin'],
    [2, 1, 2, 'aprenoon'],
    [2, 2, 1, 'mortin'],
    [2, 2, 2, 'nuight'],
];

describe('TP-full-tests', () => {
    test.each(data)('calculerHeure(%i, %i, %i) should return %s', (lune, terre, soleil, expected) => {
        expect(calculerHeure(lune, terre, soleil)).toBe(expected);
    });
});

describe('calculerHeure', () => {
    describe('soleil not disabling terre', () => {
        const soleilNotDisablingTerre = 2;

        describe('terre 2 = activated => nuight', () => {
            const terrePuttingTotalTo6 = 2;
            test('lune 1', () => {
                expect(calculerHeure(1, terrePuttingTotalTo6, soleilNotDisablingTerre)).toBe('nuight');
            });
            test('lune 2', () => {
                expect(calculerHeure(2, terrePuttingTotalTo6, soleilNotDisablingTerre)).toBe('nuight');
            });
        });

        describe('with cadran terre activated not total to 6 = (?, 1, 2)', () => {
            const terreNotActivatingTotalTo6 = 1;
            test('lune 1', () => {
                expect(calculerHeure(1, terreNotActivatingTotalTo6, soleilNotDisablingTerre)).toBe('soirning');
            });
            test('lune 2', () => {
                expect(calculerHeure(2, terreNotActivatingTotalTo6, soleilNotDisablingTerre)).toBe('aprenoon');
            });
        });
    });

    describe('without cadran terre', () => {
        describe('same results for terre 1 or 2', () => {
            test('lune 1', () => {
                expect(calculerHeure(1, 1, 1)).toBe(calculerHeure(1, 2, 1));
            });
            test('lune 2', () => {
                expect(calculerHeure(2, 1, 1)).toBe(calculerHeure(2, 2, 1));
            });
        });

        test('lune 1 = mortin', () => {
            expect(calculerHeure(1, 1, 1)).toBe('mortin');
            expect(calculerHeure(1, 2, 1)).toBe('mortin');
        });
        test('lune 2 = aprenoon', () => {
            expect(calculerHeure(2, 1, 1)).toBe('mortin');
            expect(calculerHeure(2, 2, 1)).toBe('mortin');
        });
    });


});