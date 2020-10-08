import ui from '../contants/ui';
import * as description from './description';
import * as input from './input';
import * as range from './range';

export const widgets = {
  [description.config.schema[ui.widget]]: description.Widget,
  [input.config.schema[ui.widget]]: input.Widget,
  [range.config.schema[ui.widget]]: range.Widget,
};

export const widgetSettingMap = {
  [description.config.schema[ui.widget]]: description.Setting,
  [input.config.schema[ui.widget]]: input.Setting,
  [range.config.schema[ui.widget]]: range.Setting,
};
