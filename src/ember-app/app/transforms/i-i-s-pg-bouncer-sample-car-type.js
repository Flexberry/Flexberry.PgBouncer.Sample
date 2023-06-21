import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import CarTypeEnum from '../enums/i-i-s-pg-bouncer-sample-car-type';

export default FlexberryEnum.extend({
  enum: CarTypeEnum,
  sourceType: 'IIS.PgBouncerSample.CarType'
});
