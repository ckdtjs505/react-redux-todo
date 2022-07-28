import { cleanup, render, screen } from "@testing-library/react"
import Detail from "./Detail"
import "@testing-library/jest-dom";

jest.mock('react-redux');

// https://velog.io/@yhe228/useSelector-%ED%95%A8%EC%88%98%EB%A5%BC-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
test('Detail page', () => {
    const useSelector = jest.fn();
    
    // 목업 데이터 완성
    const tasks = [
        { id: 1, text: 'Task-1' },
        { id: 2, text: 'Task-2' },
    ];

    const match = {
        params : { id : 1 }
    };

    useSelector.mockImplementation((selector) => selector({
        tasks,
    }));


    render(<Detail match={match}/>);

    expect(screen.getByTestId('list-text')).toHaveTextContent('');

})
