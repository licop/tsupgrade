"use strict";
function dataFlowAnalysisWithNever(dataFlow) {
    if (typeof dataFlow === "string") {
        console.log("字符串类型:", dataFlow.length);
    }
    else if (typeof dataFlow === "number") {
        console.log("数值类型:", dataFlow.toFixed(2));
    }
    else {
        // 此时dataFlow被赋予never类型
        let data = dataFlow;
    }
}
dataFlowAnalysisWithNever("免税店");
dataFlowAnalysisWithNever(3.199923);
