import { renderHook, act } from '@testing-library/react';
import useIncrement from '../../src/hooks/useIncrement';

describe('useIncrement', () => {
  it("should return the correct initial count if no speciiefd", () => {
    const { result } = renderHook(() => useIncrement());

    expect(result.current.count).toBe(0);
  }
  );

  it("should return the correct initial count if specified", () => {
    const { result } = renderHook(() => useIncrement({ initialValue: 4 }));

    expect(result.current.count).toBe(4);
  }
  );
  it('should increment and decrement the count', () => {
    const { result } = renderHook(() => useIncrement({ initialValue: 4 }));

    expect(result.current.count).toBe(4);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(5);

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });

  it('should not decrement below zero', () => {
    const { result } = renderHook(() => useIncrement({ initialValue: 0 }));

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(0);
  });
});