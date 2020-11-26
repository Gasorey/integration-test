import { IIntegrationDataDTO, IAggregateDataDTO} from "../dtos/IIntegrationDataDTOS";
import IntegrationDataMongoClass from "../infra/typeorm/repositories/IntegrationDataMongoRepository";
import IntegrationData from "../infra/typeorm/schemas/IntegrationData";

export default interface IIntegrationDataMongoClass {
  create(data: IIntegrationDataDTO): Promise<any>
  aggregate(): Promise<any>
}
