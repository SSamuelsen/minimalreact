import React from "react"
import GridLayout, { Responsive, WidthProvider } from "react-grid-layout";
import './board.css';

interface BoardProps {
    board: string;
    setBoard: any;
}

const Board = (props: BoardProps) => {

    const ResponsiveGridLayout = WidthProvider(Responsive);

    let defaultLayout = [
        { i: "todo", x: 0, y: 0, w: 1, h: 1, draggable: false, static: true },
        { i: "inProgress", x: 1, y: 0, w: 1, h: 1, draggable: false, static: true },
        { i: "done", x: 2, y: 0, w: 1, h: 1, draggable: false, static: true }
    ];

    const handleLayoutChange = (layout: any, layouts: any) => {
        const boardJson = JSON.stringify(layouts);
        props.setBoard(boardJson);
    };

    const handleAddNewIssue = () => {
        console.log("adding new issue");
    };

    const getLayouts = () => {
        const savedLayouts = props.board;
        return savedLayouts ? JSON.parse(savedLayouts) : { lg: defaultLayout };
    };

    return (
        <div>
            <ResponsiveGridLayout
                layouts={getLayouts()}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 3, md: 3, sm: 3, xs: 1, xxs: 1 }}
                rowHeight={30}
                width={1000}
                onLayoutChange={handleLayoutChange}
            >
                <div key="todo" className="grid__header--clickable">
                    <div onClick={handleAddNewIssue}>To Do +</div>
                </div>
                <div key="inProgress" className="grid__header--static">
                    <div>In Progress</div>
                </div>
                <div key="done" className="grid__header--static">
                    <div>Done</div>
                </div>
            </ResponsiveGridLayout>
        </div>
    )
}

export default Board;