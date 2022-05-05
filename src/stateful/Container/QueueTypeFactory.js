import D_D_1_K_FIFO from "../D_D_1_K_FIFO/D_D_1_K_FIFO";
import M_M_1_INF_FIFO from "../M_M_1_INF_FIFO/M_M_1_INF_FIFO";
import M_M_C_INF_FIFO from "../M_M_C_INF_FIFO/M_M_C_INF_FIFO";
import M_M_1_K_FIFO from "../M_M_1_K_FIFO/M_M_1_K_FIFO";
import M_M_C_K_FIFO from "../M_M_C_K_FIFO/M_M_C_K_FIFO"

class QueueTypeFactory{
    static createQueueTypes(chartVisualization, updateInput){
        return [
            new D_D_1_K_FIFO(chartVisualization, updateInput),
            new M_M_1_INF_FIFO(chartVisualization, updateInput),
            new M_M_1_K_FIFO(chartVisualization, updateInput),
            new M_M_C_INF_FIFO(chartVisualization, updateInput),
            new M_M_C_K_FIFO(chartVisualization, updateInput)
        ];
    }
}

export default QueueTypeFactory;