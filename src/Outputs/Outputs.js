import { OutputMatrix1D,OutputMatrix2D } from './OutputMatrix';
import { OutputScatterPlot,OutputGanttChart } from './OutputCharts';
import { OutputBox } from './OutputBox';

export const AllOutputs = [
    { component: "OutputMatrix1D", name: "Matrix1D", type: "int-1D", image: "bars" },
    { component: "OutputMatrix2D", name: "Matrix2D", type: "int-2D", image: "table" },
    { component: "OutputScatterPlot", name: "Scatter Plot", type: "int-2D", image: "dot-circle-o" },
    { component: "OutputGanttChart", name: "Gantt Chart", type: "int-2D", image: "signal" },
    { component: "OutputBox", name: "OutputBox", type: "int", image: "asterisk" },
    { component: "OutputBox", name: "OutputBox", type: "string", image: "font" }
];

export const OutputStringToComponent = {
    OutputBox: OutputBox,
    OutputMatrix1D: OutputMatrix1D,
    OutputMatrix2D: OutputMatrix2D,
    OutputScatterPlot: OutputScatterPlot,
    OutputGanttChart: OutputGanttChart,
}
