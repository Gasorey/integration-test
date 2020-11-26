import { IIntegrationDTO, IAggregateDTO} from "@modules/integration/dtos/IIntegrationDTOS";

export default interface IIntegrationRepository {
  create(data: IIntegrationDTO): Promise<any>
  aggregate(): Promise<any>
}
