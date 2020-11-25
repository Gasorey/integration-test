import IIntegrationDataDTO from "../dtos/IIntegrationDataDTO";
import IntegrationData from "../infra/typeorm/schemas/IntegrationData";

export default interface IIntegrationDataRepository {
  create(data: IIntegrationDataDTO): Promise<IntegrationData>
}
