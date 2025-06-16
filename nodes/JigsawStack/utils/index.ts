import {
    IExecuteSingleFunctions,
    INodeExecutionData,
    IN8nHttpFullResponse,
} from 'n8n-workflow';

export async function returnResponse<PostReceiveAction>(this: IExecuteSingleFunctions, items: INodeExecutionData[], responseData: IN8nHttpFullResponse): Promise<INodeExecutionData[]> {
    return items.map(() => ({ json: responseData.body }));
  }
  
  