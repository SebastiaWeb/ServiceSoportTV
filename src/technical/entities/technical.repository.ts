import { TechnicalEntity } from './technical.entity';

export class TechnicalRepository {
  private technical: TechnicalEntity[];

  constructor() {
    this.technical = [];
  }

  async save(technical: TechnicalEntity): Promise<TechnicalEntity> {
    const generatedId = Date.now();

    technical.id = generatedId;

    this.technical.push(technical);

    return technical;
  }

}